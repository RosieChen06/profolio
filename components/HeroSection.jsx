'use client'

import Image from 'next/image'
import React from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillMediumSquare } from "react-icons/ai";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className='flex flex-col md:flex-row justify-between items-center w-full'>
        <motion.div className='flex flex-col gap-2 text-center md:text-start' 
                    initial={{ opacity : 0, y : 50}}
                    animate={{ opacity : 1, y : 0 }}
                    transition={{ duration : 0.8, ease: 'easeOut' }}
        >
            <motion.h1 className='text-3xl lg:text-6xl font-bold text-white'
                       initial={{ opacity: 0, y: 30 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.8, delay: 0.2 }}
            >Hello, I'm Rosie</motion.h1>
            <motion.p className='text-gray-400 text-xs lg:text-normal'
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
            >Jlljsf jld fd fsi sfns fskfs ffns, dfsss hjsjs sfh jsf s jffsbs, sfkshfkshf sfhfhsjs.</motion.p>
            <motion.div className='flex gap-2 mt-5 justify-center text-white md:justify-start'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
            >
                <div className='border-[1px] border-white rounded-full p-2'>
                    <a href='https://www.linkedin.com/in/rosie-chen-574b63242/'><IoLogoLinkedin /></a>
                </div>
                <div className='border-[1px] border-white rounded-full p-2'>
                    <a href='https://medium.com/@rosiechen_2000'><AiFillMediumSquare /></a>
                </div>
            </motion.div>
            <motion.div className='flex gap-4 mt-5 justify-center md:justify-start'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
            >
                <button className='bg-white text-sm rounded-full px-4 py-2'>Hire Me</button>
                <button className='border-2 text-sm border-white rounded-full px-4 py-2 text-white'>Download CV</button>
            </motion.div>
        </motion.div>
        <motion.div className='mt-10 md:mt-0 md:ml-8 flex justify-center w-[250px] h-[250px] md:w-[200px] md:h-[200px]'
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.8, delay: 1 }}
        >
            <Image src='/heroImage.webp' className='rounded-full' width={250} height={250} alt=''/>
        </motion.div>
    </section>
  )
}

export default HeroSection
