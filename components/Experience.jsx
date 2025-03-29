'use client'

import React from 'react'
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import VerticalElement from './VerticalElement';

const Experience = () => {
    const exp = [
        {
            company:'MAKALOT',
            role:'Project Management',
            timeline: '2023.01-2023.09',
            photo: '/makalot_logo.jpg',
            description:[
                'Make use of the historical data and collaborate with the system team to optimize the production  process and fulfill digitalization in production.', 
            ]
        },
        {
            company:'Shopee Taiwan',
            role:'Planner',
            timeline: '2023.11-2025.03',
            photo: '/shopeeLogo.png',
            description:[
                'Developed a Payroll Management System using React, enhancing data visibility for vendors and riders, streamlining reporting, and reducing rider turnover from 40% to 10%.', 
                'Implemented an intelligent scheduling system that optimized rider efficiency and attendance, reducing manpower usage and increasing supply capacity by 5-10%.', 
                'Leveraged LineBot to automate user notifications, minimizing human error and improving outsourcing efficiency.', 
                'Additionally, provided a package tracking system via AppSheet to ensure timely, high-quality delivery within 3 days.'
            ]
        }
    ]
  return (
    <div className='text-white pt-24 md:pt-16' id='Experience'>
        <h1 className='text-center md:text-left text-2xl md:text-4xl font-bold'>Experience</h1>
        <div className='mt-12'>
            <VerticalTimeline>
                {
                    exp.map((index)=>(
                        <VerticalElement key={index.timeline} role={index.role} company={index.company} description={index.description} timeline={index.timeline} photo={index.photo}/>
                    ))
                }
            </VerticalTimeline>
        </div>
    </div>
  )
}

export default Experience
