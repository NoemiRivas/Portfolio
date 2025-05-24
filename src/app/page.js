import Habilities from "./components/Habilities";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="font-mono">
      <Nav />
      <Hero />
      <Projects />
      <Habilities />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
