import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='flex flex-col md:flex-row justify-between items-center w-full'>
        <div className='flex flex-col gap-2 text-center md:text-start'>
            <h1 className='text-3xl lg:text-6xl font-bold text-white'>Hello, I'm Rosie</h1>
            <p className='text-gray-400 text-xs lg:text-normal'>Jlljsf jld fd fsi sfns fskfs ffns, dfsss hjsjs sfh jsf s jffsbs, sfkshfkshf sfhfhsjs.</p>
            <div className='flex gap-4 mt-5 justify-center md:justify-start'>
                <button className='bg-white text-sm rounded-full px-4 py-2'>Hire Me</button>
                <button className='border-2 text-sm border-white rounded-full px-4 py-2 text-white'>Download CV</button>
            </div>
        </div>
        <div className='mt-10 md:mt-0 md:ml-8 flex justify-center w-[250px] h-[250px] md:w-[200px] md:h-[200px]'>
            <Image src='/heroImage.webp' className='rounded-full' width={250} height={250} alt=''/>
        </div>
    </section>
  )
}

export default HeroSection
