import { NextRequest, NextResponse } from "next/server";
import { conn } from "@/utils/database";

/** this is for a single row in a table, very efficient by the way */

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  const username = params.username;
  try {
    console.log(username);
    const query: String = "SELECT name, last_name, username, email, member_since, role FROM users WHERE username = $1";
    const response = await conn.query(query, [username]);
    console.log(response);
    if (response.rows.length === 0) {
      return NextResponse.json(
        { error: `user ${username} not found.` },
        { status: 404 }
      );
    }
    return NextResponse.json(response.rows[0], { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { username: string } }
) {
  const username = params.username;
  try {
    console.log(username);
    const query: String = "DELETE FROM users WHERE username = $1";
    const response = await conn.query(query, [username]);
    console.log(response);
    return NextResponse.json(
      { message: `user ${username} deleted successfully.` },
      { status: 200 }
    );
    if (response.rows.length === 0) {
      return NextResponse.json(
        { error: `user ${username} not found.` },
        { status: 404 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
