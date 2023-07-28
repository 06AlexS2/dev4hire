import { NextRequest, NextResponse } from "next/server";
import { conn } from "@/utils/database";
import { compare, hash } from "bcrypt-ts";

export async function POST(request: Request) {
  try {
    //this is the new way to obtain the data from your request
    //1. obtain the req body as a json
    const body = await request.json();
    //2. obtain each element of the object from the req body
    const { name, last_name, username, email, password, role } = body;
    //2.1 hash the password for better security level with 10 rounds of salt
    const saltRounds: number = 10;
    const hashedPassword: string = await hash(password, saltRounds);
    //2.2 create a values array from the elements of the req body
    const values = [name, last_name, hashedPassword, role, username, email];
    //2.3 validate if any of the values in values array is false, return an error
    for (const value of values) {
      if (value === null || value === undefined || value === "") {
        return NextResponse.json(
          { message: "All fields are required." },
          { status: 400 }
        );
      }
    }
    //3. create a query with conn
    const query =
      "INSERT INTO users (name, last_name, password, role, username, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
    const response = await conn.query(query, values);
    console.log(response);
    //4. compare the entered password with the hashed password, if they match, return a response
    const isPasswordCorrect: boolean =
      await comparePasswordWithDatabasePassword(password, hashedPassword);
    if (isPasswordCorrect) {
      return NextResponse.json(
        { message: `user ${username} created successfully.` },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "incorrect password. Please try again." },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

// Función para comparar la contraseña ingresada con la contraseña encriptada almacenada en la base de datos
async function comparePasswordWithDatabasePassword(
  enteredPassword: string,
  hashedPassword: string
) {
  try {
    return await compare(enteredPassword, hashedPassword);
  } catch (error) {
    throw new Error("Error comparing passwords");
  }
}
