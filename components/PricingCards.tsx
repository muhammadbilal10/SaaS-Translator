import React from "react";
import PricingCard from "./PricingCard";

const cardDetails = [
  {
    description: "Get chatting right away with anyone, anywhere!",
    title: "Starter",
    price: "Free",
    features: [
      "20 Message Chat Limit in Chats",
      "2 Participant limit in Chat",
      "3 Chat Rooms limit",
      "Supports 2 languages",
      "48-hour support response time",
    ],
  },
  {
    description: "Unlock the Full Potential with Pro!",
    title: "Pro",
    price: "$10",
    features: [
      "Unlimited Messages in Chats",
      "Unlimited Participants in Chats",
      "Unlimited Chat Rooms",
      "Supports up to 10 languages",
      "Multimedia support in chats (coming soon)",
      "1-hour, dedicated support response time",
      "Early access to New Features",
    ],
  },
];

const PricingCards = ({ redirect }: { redirect: boolean }) => {
  return (
    <div className="mx-auto max-w-md grid gap-8 grid-cols-1 mt-10  lg:max-w-3xl lg:grid-cols-2">
      {cardDetails.map((cardDetail, index) => (
        <PricingCard
          key={index}
          description={cardDetail.description}
          title={cardDetail.title}
          price={cardDetail.price}
          features={cardDetail.features}
          redirect={redirect}
        />
      ))}
    </div>
  );
};

export default PricingCards;
