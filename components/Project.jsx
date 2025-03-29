'use client'

import React, { useState } from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
    const type = ['All', 'Website', 'Mobile']
    const [selected, setSelected] = useState('All')
    const allProject = [
        {
            project_name: '',
            project_description:'',
            project_type: ''
        }
    ]
  return (
    <div id="Project" className='text-white flex flex-col md:gap-4 w-full justify-center md:justify-between items-center text-center md:text-left'>
      <div className='w-full mt-28'>
        <h1 className='text-2xl md:text-4xl font-bold'>Projects</h1>
        <div className='flex flex-row gap-2 justify-center items-center mt-4 md:justify-start'>
            {
                type.map((item)=>(
                    <p key={item} className={`rounded-full cursor-pointer text-sm px-4 py-1 border-[1px] border-white ${selected===item?'bg-white text-black':'hover:bg-gray-600'}`} onClick={()=>setSelected(item)}>{item}</p>
                ))
            }
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 md:gap-x-6 gap-y-12'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
      </div>
    </div>
  )
}

export default Project
