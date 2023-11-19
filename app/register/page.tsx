import { authOptions } from "@/auth";
import PricingCards from "@/components/PricingCards";
import { getServerSession } from "next-auth";

const Register = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <div className="mx-auto max-w-xl text-center font-bold py-16 max-md:max-w-sm">
        <p className="text-4xl max-sm:text-xl">
          Let's handle your membership {session?.user?.name?.split(" ")?.[0]}!
        </p>
      </div>
      <PricingCards redirect={false} />
    </div>
  );
};

export default Register;
