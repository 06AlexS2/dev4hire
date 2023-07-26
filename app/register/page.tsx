import { RegisterForm } from "./RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register - Dev4Hire",
  };
export default function RegisterPage() {
    return (
        <main className="flex items-center justify-center w-[100vw] h-screen bg-gray-800">
            <RegisterForm />
        </main>
    )
}