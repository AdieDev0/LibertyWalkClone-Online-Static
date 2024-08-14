import React from 'react'

const About = () => {
  return (
    <div className='relative'>
        <ul className='absolute flex flex-col font-Oswald border-2 border-black w-[160px] text-xl mx-auto right-56'>
            <li className='border-b border-black cursor-pointer hover:bg-black hover:text-white p-2'>About Us</li>
            <li className='border-b border-black cursor-pointer hover:bg-black hover:text-white p-2'>Videos</li>
            <li className='cursor-pointer hover:bg-black hover:text-white p-2'>LB★WORKS
                LB★PERFORMANCE
                LB★NATION
            </li>
        </ul>
    </div>
  )
}

export default About