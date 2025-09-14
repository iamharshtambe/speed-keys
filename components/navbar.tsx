"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { My_Soul } from "next/font/google";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

const mysoul = My_Soul({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 transform text-nowrap">
      <div className="flex items-center justify-between gap-8 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md">
        <Link
          href="/"
          className={`mr-10 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-center text-3xl text-transparent md:mr-20 ${mysoul.className}`}
        >
          Editopia
        </Link>

        {path === "/" && (
          <div className="hidden space-x-6 md:flex">
            <Link
              href="#features"
              className="cursor-pointer font-medium transition-all duration-300 hover:text-cyan-500"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="cursor-pointer font-medium transition-all duration-300 hover:text-cyan-500"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="cursor-pointer font-medium transition-all duration-300 hover:text-cyan-500"
            >
              Contact
            </Link>
          </div>
        )}

        <div className="ml-10 flex items-center gap-3 md:ml-20">
          <SignedOut>
            <SignInButton>
              <Button variant="glass" className="hidden lg:flex">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button variant="primary">Get Started</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
