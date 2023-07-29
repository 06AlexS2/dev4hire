import { conn } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";
import { compare } from "bcrypt-ts";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username = "", password = "" } = body;

    const findquery =
      "SELECT email, password FROM users WHERE email = $1 OR username = $1";

    const user = await conn.query(findquery, [username]);
    console.log(user);
    if (user.rows.length == 0) {
      return NextResponse.json({ error: "User not found." }, { status: 400 });
    }
    const passwordVerif = await compare(password, user.rows[0].password);
    if (!passwordVerif) {
      return NextResponse.json({ error: "Invalid Password." });
    } else {
      return NextResponse.json({ user: user.rows[0] }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
