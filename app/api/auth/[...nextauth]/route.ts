import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { conn } from "@/utils/database";
import { compare } from "bcrypt-ts";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "jsmith" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const query =
          "SELECT email, name, role, password FROM users WHERE email = $1 OR username = $1";
        const data = await conn.query(query, [credentials?.username]);
        if (data.rows.length == 0)
          throw new Error(`User ${credentials?.username} not found.`);
        const passwordVerification = await compare(
          credentials?.password as string,
          data.rows[0].password
        );
        if (!passwordVerification) throw new Error("Incorrect Password.");
        const {password, ...user} = data.rows[0];
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    //token is what the cookies store, user is the user info
    async jwt({ account, token, user, profile, session }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      //this is for retrieving from the backend and returning the user data to the frontend
      session.user = token.user as any;
      console.log(token.user);
      return Promise.resolve(session);
    },
  },
  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST };
