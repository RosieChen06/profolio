import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="pb-4 px-8 bg-[#121212]">
      <div className="fixed top-0 left-0 w-full z-10 px-8 bg-[#121212]">
        <Navbar />
      </div>
      <div className="mt-0 pt-32 px-2 md:px-12">
        <HeroSection />
        <AboutMe />
        <div className="relative mt-8">
          <Experience />
        </div>
      </div>
    </div>
  );
}
