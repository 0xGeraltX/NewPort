import Navbar from "../components/PictoNavbar";
import Hero from "../components/PictoHero";
import Services from "../components/PictoServices";
import Projects from "../components/Projects";
import Contact from "../components/PictoContact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}
