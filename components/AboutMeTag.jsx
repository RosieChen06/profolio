'use client'

import React from 'react'

const AboutMeTag = ({title, setTagSelect}) => {
  return (
    <p 
    className=''
    onClick={()=>setTagSelect(title)}
    >
    {title}
    </p>
  )
}

export default AboutMeTag
