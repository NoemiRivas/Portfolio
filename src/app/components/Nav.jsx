import React from 'react'

function Nav() {
  return (
    <nav className='py-10' >
    <ul className='flex justify-end gap-12 items-center capitalize text-xl font-bold font-mono '>
      <li className='hover:text-gray-500 transition-all duration-300 cursor-pointer'>Inicio</li>
      <li className='hover:text-gray-500 transition-all duration-300 cursor-pointer'>Proyectos</li>
      <li className='hover:text-gray-500 transition-all duration-300 cursor-pointer'>Experiencia</li>
      <li className='hover:text-gray-500 cursor-pointer'>Contacto</li>
    </ul>
  </nav>
  )
}

export default Nav
