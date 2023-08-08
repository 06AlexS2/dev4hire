import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your dashboard - Dev4Hire",
};

export default function Dashboard() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-gray-800">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white">this is the dashboard page</h1>
      </div>
    </main>
  );
}
