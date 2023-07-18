"use client";

import { FaCaretRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

interface Card {
  _id: number;
  name: string;
  features: string[];
  price: string;
  buttonText: string;
}

const PlanCards: React.FC = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [isPressed, setIsPressed] = useState<number | null>(null); // Almacenar el _id del botón presionado

  const handlePress = (_id: number): void => {
    setIsPressed(_id); // Actualizar el estado con el _id del botón presionado
  };

  const handleRelease = (): void => {
    setIsPressed(null); // Restablecer el estado a null cuando se suelta el botón
  };

  const plans: Card[] = [
    {
      _id: 1,
      name: "Alpha",
      features: [
        "One month deadline.",
        "Three months of support.",
        "Database and server included.*",
        "One complex feature.",
      ],
      price: "$1999 USD",
      buttonText: "Start with Alpha",
    },
    {
      _id: 2,
      name: "Beta",
      features: [
        "Alpha plan benefits included.",
        "Two month deadline.",
        "Six months of support.",
        "Up to three complex features**.",
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
        "Up to five complex features**.",
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
        "On-Site Support.",
        "All of the benefits of Omega plan.",
      ],
      price: "Starting from $4999 USD",
      buttonText: "Contact us",
    },
  ];
  return (
    <div className="mt-[20px] max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div
            key={plan._id}
            id="card-individual"
            className="h-[490px] bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg bg-clip-padding rounded-lg shadow-lg flex flex-col relative"
            data-aos="flip-right"
            data-aos-duration="1500"
          >
            <div className="p-4 flex-4">
              <h1 className="text-2xl font-extrabold text-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-600">{plan.name}</h1>
              <ul className="mt-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex justify-center items-center"
                  >
                    <h3 className="text-gray-200 text-center text-md my-2">
                      {feature}
                    </h3>
                  </li>
                ))}
              </ul>
              <h2
                id="price-tag"
                className="text-3xl font-extrabold text-center mt-20 text-white"
              >
                {plan.price}
              </h2>
              <button
                id="hire"
                className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col mx-auto items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold border-b-4 border-blue-700 hover:border-blue-900 transition-all rounded-lg w-[150px] h-[40px] ${
                  isPressed === plan._id ? "scale-95 shadow-md border-b-[1px]" : "" // Aplicar el efecto solo al botón con el _id coincidente
                }`}
                onMouseDown={() => handlePress(plan._id)} // Pasar el _id del botón presionado
                onMouseUp={handleRelease}
                onMouseLeave={handleRelease}
              >
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
