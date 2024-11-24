import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center ' >
            <p className='text-2xl text-neutral-200 font-semibold'>
                HS
            </p>
        </div>
        <div className='flex items-center justify-between gap-4'>

          <FaLinkedin />
          <FaInstagram />
          <FaFacebook />
          <FaGithub />
            
        </div>

    </nav>
  )
}

export default Navbar
