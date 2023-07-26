import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: '500', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev4Hire",
  description: "PaaS for the devs and the clients",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={raleway.className}>
      <body >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
