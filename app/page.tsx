import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
  <main className="flex justify-start container w-min min-h-screen mx-auto flex-col">
    <Navbar/>
    <HeroSection/>
    </main>
  );
}
