"use client";
import Habilities from "./components/Habilities";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const AnimatedSection = {
    up: { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    down: { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left: { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  };

  return (
    <main className="font-mono">
      <Nav />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={AnimatedSection.up}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={AnimatedSection.left}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Projects />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={AnimatedSection.right}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Habilities />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={AnimatedSection.left}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Experience />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={AnimatedSection.up}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Contact />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Footer />
      </motion.div>
    </main>
  );
} 