"use client";
import React, { useState } from "react";
import { IconsNetwork } from "@/app/utils/icons";
import { motion, AnimatePresence } from "framer-motion";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cvOptions = {
    es: {
      label: "Español",
      formats: [
        { name: "Diseño Clásico", url: "./cv - espanol.pdf" },
      ],
    },
    it: {
      label: "Italiano",
      formats: [
        { name: "en progreso...", url: "./cv - italiano.pdf" },
      ],
    },
  };

  return (
    <>
      <div id="inicio" className="flex flex-col items-start gap-10 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-bold text-stone-200"
        >
          Hola, soy <span className="text-stone-500">Noemi Bonilla 👩🏻‍💻​</span>
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
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-between cursor-pointer py-10 md:flex-row flex-col items-center gap-10"
      >
        <IconsNetwork />
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-stone-700 text-white text-xl font-bold p-4 rounded-md hover:bg-stone-800 transition-colors duration-300"
        >
          Descargar cv
        </button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-stone-800 rounded-xl p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-stone-200">Selecciona el formato de CV</h2>
                
                {/* Español */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-stone-300">{cvOptions.es.label}</h3>
                  <div className="space-y-2">
                    {cvOptions.es.formats.map((format) => (
                      <motion.button
                        key={format.url}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          // Aquí iría la lógica de descarga
                          console.log(`Descargando: ${format.url}`);
                          setIsModalOpen(false);
                        }}
                        className="w-full p-3 bg-stone-700 rounded-lg hover:bg-stone-600 transition-colors text-left"
                      >
                        {format.name}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Italiano */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-stone-300">{cvOptions.it.label}</h3>
                  <div className="space-y-2">
                    {cvOptions.it.formats.map((format) => (
                      <motion.button
                        key={format.url}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          // Aquí iría la lógica de descarga
                          console.log(`Descargando: ${format.url}`);
                          setIsModalOpen(false);
                        }}
                        className="w-full p-3 bg-stone-700 rounded-lg hover:bg-stone-600 transition-colors text-left"
                      >
                        {format.name}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Botón cerrar */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(false)}
                  className="w-full p-3 bg-stone-600 rounded-lg hover:bg-stone-500 transition-colors mt-4"
                >
                  Cerrar
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Hero;
