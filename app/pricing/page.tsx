"use client";
import PricingCards from "@/components/PricingCards";
import { useState } from "react";

const PricingPage = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="my-24">
      <div className="mx-auto text-center">
        <h1 className="font-semibold">Pricing</h1>
        <p className="text-4xl font-semibold mt-2">
          The right price for you, whoever you are
        </p>
        <p className="mt-6 text-gray-600 text-xl">
          Were 99% sure we have a plan to match 100% of your needs
        </p>
      </div>

      <div className="flex items-center justify-center mt-16">
        <div className="flex items-center justify-cente p-1 border-gray-200 border-2 rounded-full gap-1">
          <span
            className={`text-sm font-medium text-gray-600 p-1 rounded-full px-2 cursor-pointer ${
              active ? "bg-black text-white" : ""
            }`}
            onClick={() => setActive(!active)}
          >
            Monthly
          </span>
          <span
            className={`text-sm font-medium text-gray-600 p-1 rounded-full px-2 cursor-pointer ${
              !active ? "bg-black text-white" : ""
            }`}
            onClick={() => setActive(!active)}
          >
            Anually
          </span>
        </div>
      </div>
      <PricingCards redirect={true} />
    </div>
  );
};

export default PricingPage;
