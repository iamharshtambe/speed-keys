import Features from "@/components/features";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl pt-45 text-center">
      <HeroSection />
      <Features />
    </div>
  );
}
