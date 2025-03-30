import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Starfield from "@/components/Starfield";

export default function Home() {
  return (
    <div className="relative pb-4 px-8 overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[#121212]"></div>
      <div className="absolute inset-0 -z-10">
        <Starfield />
      </div>
      <div className="fixed top-0 left-0 w-full z-20 bg-black">
        <Navbar />
      </div>
      <div className="mt-0 pt-32 px-2 md:px-12">
        <HeroSection />
        <AboutMe />
        <div className="relative mt-8">
          <Experience />
        </div>
        <Project />
      </div>
    </div>
  );
}
