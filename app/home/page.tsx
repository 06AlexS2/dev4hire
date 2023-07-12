import { Metadata } from "next";
import HomeSections from "./HomeSections";

export const metadata: Metadata = {
  title: "Home - Dev4Hire",
};

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen min-w-screen flex-col items-center justify-between bg-gray-800">
        <HomeSections />
      </main>
    </>
  );
}
