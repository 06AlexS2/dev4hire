import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
    title: "About - Dev4Hire",
  };
export default function About() {
    return (
        <main className="flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-gray-800">
            <AboutContent />
        </main>
    )
}