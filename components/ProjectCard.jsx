'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const ProjectCard = () => {
    const [isHovered, setIsHovered] = useState(false);
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
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 hover:opacity-90 transition-opacity duration-300 flex justify-center items-center">
                    <p className="text-white font-bold">fsfsfsfsfsfsfsssfsfsfsfsf</p>
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
