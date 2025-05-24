import React from 'react'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {
    const projects = [
        {
            id: 1,
            name: "MoneyUp – App de Finanzas Personales",
            description: "Aplicacion web basica desarrollada con react como libreria de javascript y tailwind como framework de css implmentacion de crud completo con autenticacion mas eficaz y completa con clerk, despliege en vercel y para el backend despliege en render",
            image: "./Captura de pantalla 2025-05-20 175944.png",
            link: "https://www.money-up-noemirivas-projects.vercel.app/",
            codigo: "https://github.com/NoemiRivas/moneyUp/tree/main",
            language: "Spanish"
            
        }, {
            id: 2,
            name: "MoneyUp – App de Finanzas Personales",
            description: "Aplicacion web basica desarrollada con react como libreria de javascript y tailwind como framework de css implmentacion de crud completo con autenticacion mas eficaz y completa con clerk, despliege en vercel y para el backend despliege en render",
            image: "./Captura de pantalla 2025-05-20 175944.png",
            link: "https://www.money-up-noemirivas-projects.vercel.app/",
            codigo: "https://github.com/NoemiRivas/moneyUp/tree/main",
            language: "Spanish"
            
        }
    ]
  return (
    <div className='py-10'>
      <h2 className='text-4xl font-bold text-center mb-10'>Proyectos 💻​</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {projects.map((project) => (
        <div key={project.id} className='bg-stone-800 p-4 rounded-lg hover:bg-stone-700 hover:scale-105 transition-all duration-300 cursor-pointer'>
            <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
            <p className='text-stone-300 mb-4'>{project.description}</p>
            <img src={project.image} alt={project.name}  className='w-full h-40  object-cover rounded-lg'/>
            <span className='flex items-center justify-between gap-2 py-2'>
            <a href={project.link} className='my-2 flex items-center gap-2 hover:text-stone-300 hover:scale-105 transition-all duration-300' >Ver proyecto <FaExternalLinkAlt /></a>
            <a href={project.codigo} className='my-2 flex items-center gap-2 hover:text-stone-300 hover:scale-105 transition-all duration-300'>Ver codigo <FaGithub /></a>
            </span>
            <p className='text-stone-300 mb-4 text-sm'>Idioma: {project.language}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Projects
