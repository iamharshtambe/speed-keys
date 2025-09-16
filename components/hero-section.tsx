import Link from "next/link";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div>
      <h1 className="text-7xl font-extrabold md:text-9xl">
        <p>
          Your{" "}
          <span className="animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Editing
          </span>
          <br />
          Playgorund
        </p>
      </h1>

      <p className="mx-auto max-w-3xl pt-10 text-xl text-neutral-400">
        With Editopia, editing is no longer a task — it’s creativity unleashed.
        From quick fixes to advanced tweaks, bring every idea to life
        effortlessly.
      </p>

      <div className="pt-10">
        <Link href="/dashboard">
          <Button variant="primary" size="xl" className="font-semibold">
            Try Editopia Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
