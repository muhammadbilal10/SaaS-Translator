import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";

interface CardProps {
  description: string;
  title: string;
  price: string;
  features: string[];
  redirect: boolean;
}

const PricingCard = ({
  description,
  title,
  price,
  features,
  redirect,
}: CardProps) => {
  return (
    <Card className={cn("w-[370px]")}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className={cn("pt-4")}>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-semibold">{price}</span>
          {price !== "Free" && <span className="text-gray-400">/ month</span>}
        </div>

        {redirect ? (
          <Link href={price !== "Free" ? "/register" : "/chat"}>
            <Button className="w-full mt-6">Get Started Today</Button>
          </Link>
        ) : (
          price !== "Free" && <CheckoutButton />
        )}

        <ul role="list" className="mt-8 text-gray-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 mt-3">
              <Check className="w-4 h-4 text-primary" /> {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default PricingCard;
