import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import UserButton from "./UserButton";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import CreateChatButton from "./CreateChatButton";

const Header = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex max-sm:flex-col items-center justify-center max-sm:gap-y-3 p-5">
        <Logo />
        <div className="flex-1 flex items-center justify-end space-x-4">
          {session ? (
            <>
              <Link href={"/chat"} prefetch={false}>
                <MessageSquare />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <>
              <Link href={"/pricing"} prefetch={false}>
                Pricing
              </Link>
            </>
          )}
          <DarkModeToggle />
          <UserButton session={session} />
        </div>
      </nav>
      <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 w-full rounded-none bg-gradient-to-r from-[#7775D6] to-[#E935C1] text-center text-white px-5 py-2 hover:from-[#7775D6] hover:to-[#E935C1] hover:shadow-md hover:opacity-75 transition-all">
        Upgrade to Pro to unlock all features!
      </button>
    </header>
  );
};

export default Header;
