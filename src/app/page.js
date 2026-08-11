import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Stats from "@/components/Stats";
import TechStack from "@/components/TechStack";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Introduction />
      <Stats />
      <TechStack />
      <FeaturedProjects />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
