import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About - Dev4Hire",
  };
export default function About() {
    return (
        <main className="flex h-[100vh] w-[100vw] flex-col items-center justify-between bg-gray-800">
            <h1>This is gonna be the about section.</h1>
        </main>
    )
}