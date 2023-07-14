"use client";

import { features } from "process";
import { FaCaretRight } from "react-icons/fa";

interface Card {
  _id: number;
  name: string;
  features: string[];
  price: string;
  buttonText: string;
}

const PlanCards: React.FC = () => {
  const plans: Card[] = [
    {
      _id: 1,
      name: "Alpha",
      features: [
        "One month deadline.",
        "Three months of support.",
        "Database and server support included.",
        "Responsive Frontend Design.",
        "One complex feature."
      ],
      price: "$1999 USD",
      buttonText: "Start with Alpha",
    },
    {
      _id: 2,
      name: "Beta",
      features: [
        "Two month deadline.",
        "Six months of support.",
        "Database and server support included.",
        "Up to three complex features*.",
      ],
      price: "$2499 USD",
      buttonText: "Get the Beta",
    },
    {
      _id: 3,
      name: "Omega",
      features: [
        "Up to six month deadline.",
        "One year of support.",
        "Premium SEO improvement.",
        "Up to five complex features.",
      ],
      price: "Starting from $3499 USD",
      buttonText: "Get the Omega",
    },
    {
      _id: 4,
      name: "Custom",
      features: [
        "Contact us for pricing and features.",
        "Continuous support.",
        "All of the benefits of Omega plan."
      ],
      price: "Starting from $4999 USD",
      buttonText: "Contact us",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className="h-[440px] bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg bg-clip-padding rounded-lg shadow-lg flex flex-col"
          >
            <div className="p-4 flex-4">
              <h1 className="text-xl font-bold text-blue-500">{plan.name}</h1>
              <ul className="mt-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex justify-center items-center"
                  >
                    <h3 className="text-gray-200 text-center text-lg my-2">
                      {feature}
                    </h3>
                  </li>
                ))}
                <h2 className="text-3xl text-center mt-2 font-black text-blue-500">
                  {plan.price}
                </h2>
              </ul>
              <button className="absolute flex flex-col mx-auto mt-10 items-center justify-center bg-blue-500 rounded-lg p-3">
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanCards;
