"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { My_Soul } from "next/font/google";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { useStoreUser } from "@/hooks/useStoreUser";
import { BarLoader } from "react-spinners";
import { Authenticated, Unauthenticated } from "convex/react";
import { LayoutDashboard } from "lucide-react";

const mysoul = My_Soul({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const path = usePathname();
  const { isLoading } = useStoreUser();

  if (path.includes("/editor")) return null;

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 transform text-nowrap">
      <div className="flex min-w-[800px] items-center justify-between gap-8 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md">
        <Link
          href="/"
          className={`mr-10 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-center text-3xl text-transparent md:mr-20 ${mysoul.className}`}
        >
          Editopia
        </Link>

        <div className="ml-10 flex items-center justify-center gap-3 md:ml-20">
          <Unauthenticated>
            <SignInButton>
              <Button variant="glass">Sign In</Button>
            </SignInButton>
            <SignUpButton>
              <Button variant="primary">Get Started</Button>
            </SignUpButton>
          </Unauthenticated>
          <Authenticated>
            <Link href="/dashboard">
              <Button variant="glass">
                <LayoutDashboard />
                <span className="hidden md:flex">Dashboard</span>
              </Button>
            </Link>
            <UserButton />
          </Authenticated>
        </div>

        {isLoading && (
          <div className="fixed bottom-0 left-0 z-40 flex w-full justify-center backdrop-blur-md">
            <BarLoader width="95%" color="#06b6d4" />
          </div>
        )}
      </div>
    </nav>
  );
}
