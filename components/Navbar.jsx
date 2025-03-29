'use client'

import React, { useState } from 'react'
import NavLink from './NavLink'
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='sticky top-0 py-3 bg-black w-full'>
      <div className='flex justify-end'>
        <div className='block z-50 md:hidden text-lg border-[1px] border-white text-white rounded-md p-2 cursor-pointer'>
            {isMenuOpen?<IoCloseOutline onClick={()=>setIsMenuOpen(false)}/>:<CiMenuBurger onClick={()=>setIsMenuOpen(true)}/>}
        </div>
        <div className='menu hidden md:block'>
            <ul className='text-white flex flex-row gap-4'>
                <li><NavLink href='#About' title='About' setIsMenuOpen={setIsMenuOpen}></NavLink></li>
                <li><NavLink href='#Experience' title='Experience' setIsMenuOpen={setIsMenuOpen}></NavLink></li>
                <li><NavLink href='#Project' title='Project' setIsMenuOpen={setIsMenuOpen}></NavLink></li>
            </ul>
        </div>
      </div> 
      <div className={`absolute md:hidden top-0 left-1/2 -translate-x-1/2 w-full max-w-md text-center bg-black py-8 block transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}> 
        <ul className='text-white flex flex-col gap-8 mt-16'>
            <li><NavLink href={'#About'} title='About' setIsMenuOpen={setIsMenuOpen}></NavLink></li>
            <li><NavLink href={'#Experience'} title='Experience' setIsMenuOpen={setIsMenuOpen}></NavLink></li>
            <li><NavLink href={'#Project'} title='Project' setIsMenuOpen={setIsMenuOpen}></NavLink></li>
        </ul>    
      </div>
    </nav>
  )
}

export default Navbar

