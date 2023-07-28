import { NextResponse } from "next/server";
import { conn } from "@/utils/database";

export async function GET(request: Request) {
  try {
    const query: String = "SELECT name, last_name, username, email, member_since, role FROM users";
    const response = await conn.query(query);
    console.log(response);
    return NextResponse.json(response.rows, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


