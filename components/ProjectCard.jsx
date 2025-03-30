'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { IoCodeSlashOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";

const ProjectCard = () => {
  return (
    <section>
        <div>
            <div className="relative">
                <Image
                    src="/heroImage.webp"
                    className="rounded-t-lg cursor-pointer"
                    width={500}
                    height={500}
                    alt=""
                    layout="responsive"
                    objectFit="cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 hover:opacity-90 focus:opacity-90 gap-2 transition-opacity duration-300 flex justify-center items-center">
                    <div className='border-[1px] cursor-pointer border-white rounded-full p-2 hover:bg-black/40'><IoCodeSlashOutline /></div>
                    <div className='border-[1px] cursor-pointer border-white rounded-full p-2 hover:bg-black/40'><MdOutlineRemoveRedEye /></div>
                    <div className='border-[1px] cursor-pointer border-white rounded-full p-2 hover:bg-black/40'><GoLinkExternal /></div>
                </div>
            </div>
            <div className="mt-3 text-left">
                <h1 className="font-semibold text-xl">app name</h1>
                <p className="text-sm text-gray-400 mt-2">description the function</p>
            </div>
        </div>
    </section>
  )
}

export default ProjectCard
