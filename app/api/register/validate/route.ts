import { NextRequest, NextResponse } from "next/server";
import { conn } from "@/utils/database";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email = "", username = "" } = body;
    const repeatedEmailQuery: string = "SELECT * FROM users WHERE email = $1";
    const repeatedUsernameQuery: string =
      "SELECT * FROM users WHERE username = $1";

    if (email) {
      const emailVerifQuery = await conn.query(repeatedEmailQuery, [email]);
      if (emailVerifQuery.rows.length > 0) {
        return NextResponse.json(
          { error: `User with email ${email} already exists.` },
          { status: 400 }
        );
      }
    }
    if (username) {
      const usernameVerifQuery = await conn.query(repeatedUsernameQuery, [
        username,
      ]);
      if (usernameVerifQuery.rows.length > 0) {
        return NextResponse.json(
          { error: `User with username ${username} already exists.` },
          { status: 400 }
        );
      } else {
        return NextResponse.json(
          {
            message: `There is no user with username ${username} or email ${email}`,
          },
          { status: 200 }
        );
      }
    }
  } catch (error) {
    return NextResponse.json({ error: "Error on the server while validating data." }, {status: 500});
  }
}
