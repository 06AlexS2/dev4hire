import { Metadata } from "next";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing - Dev4Hire",
};
export default function Pricing() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between bg-gray-800">
      <PricingContent />
    </main>
  );
}
