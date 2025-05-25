"use client";
import React from "react";
import { IconsNetwork } from "@/app/utils/icons";
import { motion } from "framer-motion";


function Hero() {
  return (
    <>
      <div id="inicio" className="flex flex-col items-start gap-10 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut"  }}
          className="text-6xl font-bold text-stone-200"
        >
         Hola, soy <span className="text-stone-500"> Noemi Bonilla 👩🏻‍💻​</span>
        </motion.h1>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          className="text-2xl"
        >
          Desarrolladora web full stack, con pasion por la librería de React y
          sus frameworks especialmente Next.js para webs mas complejas utilizo
          las tecnologias como Node.js, Express, MongoDB, entre otras. Poseo
          conocimientos solidos con el lenguaje de programación JavaScript.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut"  }}
        className="flex justify-between cursor-pointer py-10 md:flex-row flex-col items-center gap-10"
      >
        <IconsNetwork />
        <button className="bg-stone-700 text-white text-xl font-bold p-4 rounded-md hover:bg-stone-800 transition-colors duration-300">
          Descargar cv
        </button>
      </motion.div>
    </>
  );
}

export default Hero;
