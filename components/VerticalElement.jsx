import React from 'react'
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const VerticalElement = ({role, company, description, timeline, photo}) => {
  return (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#fff', color: 'black' }}
        contentArrowStyle={{ borderRight: `7px solid #fff` }}
        date={timeline}
        iconStyle={{ background: "white", boxShadow: "0px 0px 12px #fff" }}
        icon={
            <div className='flex justify-center items-center w-full h-full'>
            <img 
                src={photo} 
                alt=""
                style={{ width: "70%", height: "70%", objectFit: "contain" }} 
            />
            </div>
        }
        >
        <h3 className="vertical-timeline-element-title font-semibold text-[18px]">{role}</h3>
        <h4 className="vertical-timeline-element-subtitle text-xs text-gray-500 font-semibold">{company}</h4>
        <ul className="pl-5 list-disc space-y-2 mt-3">
            {
                description.map((item, index) => (
                <li key={index} className="text-xs text-gray-600">{item}</li>
                ))
            }
        </ul>
    </VerticalTimelineElement>
  )
}

export default VerticalElement
