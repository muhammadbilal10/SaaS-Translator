import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-20">
      <div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Chat with Anyone, Anywhere in the World!
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-8">
            You speak your language, they speak their language.
          </p>
          <span className="text-indigo-600 dark:text-indigo-500">
            Let AI handle the translation.
          </span>
          <div className="flex items-center justify-center gap-x-6 mt-10">
            <Link href="/chat">
              <Button>Get Started</Button>
            </Link>

            <Link href="/pricing">
              <Button variant="secondary">
                View Pricing
                <ArrowRight className="inline-block ml-2" size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
