"use client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import logo from "@/images/logos/next.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center justify-center w-72 h-14">
        {/* <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            priority
            src={logo}
            alt="logo"
            className="dark:filter dark:invert"
          />
        </AspectRatio> */}
        <h2 className=" text-2xl font-bold text-gray-800 dark:text-gray-100">
          Chat with anyone
        </h2>
      </div>
    </Link>
  );
};

export default Logo;
