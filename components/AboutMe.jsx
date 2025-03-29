'use client'

import React, { useState } from 'react'
import AboutMeTag from './AboutMeTag'

const AboutMe = () => {
    const tagList = [
        'Skills', 'Educations', 'Certifications' 
    ]
    const [tagSelect, setTagSelect] = useState('')
  return (
    <div id="About" className='text-white flex flex-col md:gap-4 w-full justify-center md:justify-between items-center text-center md:text-left'>
      <div className='w-full mt-28'>
        <h1 className='text-2xl md:4xl font-bold'>About Me</h1>
        <p className='text-gray-400 mt-2'>fhksfhsl sfskfslf fskfjsk sfskher cskkjdl sfnfkshjw fnskf fshejr fskfhkwf fskfksfs fsjjfkshfk fsfhkskfs ssssfdfier fdkdjfeo dfhkhfsknf fkshfkslfslnfs ffkshflfljls nfsfns sfhskhfksf sfskfsk</p>
      </div>
      <div className='w-full flex flex-col justify-center md:justify-start md:items-start items-center'>
        <div className='flex flex-row gap-4 justify-center md:justify-end mt-4'>
            {tagList.map((item)=>(
                <div key={item} className={`text-xs cursor-pointer ${tagSelect===item?'text-white border-b-2 rounded-xs border-pink-400':'text-gray-400'}`}>
                    <AboutMeTag title={item} setTagSelect={setTagSelect} />
                </div>
            ))}
        </div>
        <div className='w-[70%] md:w-full py-1 text-xs rounded-sm mt-2'>
            {tagSelect==='Skills'?<div>HTML&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Javascript<br />React.js&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Next.js&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Webpack<br />Node.js&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Express&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;MongoDB&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;SQL<br />Git</div>:
            tagSelect==='Educations'?<div>National Chiao Tung University <br />Management Science | Sep 2018 - Jun 2022<br /></div>:
            tagSelect==='Certifications'?<div>TOEIC  |  880  |  2023.04</div>:''}
        </div>
      </div>
    </div>
  )
}

export default AboutMe
