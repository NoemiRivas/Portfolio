import React from 'react'

function Footer() {
  return (
   <footer className='pb-10'>
    <p className='text-center text-stone-400'>
        &copy; 2025 - {new Date().getFullYear()} Todos los derechos reservados.
    </p>
   </footer>
  )
}

export default Footer
