import { Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
    title: "Login - Dev4Hire",
  };
export default function LoginPage() {
    return (
        <main className="bg-[url('../public/background-img/login-register.svg')] bg-no-repeat bg-cover flex items-center justify-center w-[100vw] h-screen bg-gray-800">
            <LoginForm />
        </main>
    )
}