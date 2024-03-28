import React, { useRef, useState } from 'react'
import Navbar from '../header';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
    const [position, setPosition] = useState({ top: 0, left: 0 })

    const handleMouseMove = (e) => {
        setPosition({ top: `${e.clientY}px`, left: `${e.clientX}px` })
    }

    return (
        <>
            <section onMouseMove={(e) => handleMouseMove(e)} className='overflow-hidden relative h-screen flex flex-col justify-center  from-gray-900 to-gray-600 bg-gradient-to-r'>
                <Navbar />
                <div className="animation z-0" style={{ left: position.left, top: position.top }} id="hover"></div>
                {/* <div className='w-[90vw] mx-auto wow bounceInLeft'> */}
                <div className='w-[90vw] mx-auto'>
                    <div className='text-white text-3xl'>
                        Hello 👋 My Name is
                    </div>
                    <div className='text-7xl py-3 text-white font-bold'>
                        Bhaumik Panchal
                    </div>
                    <h2 className="changeText my-name">
                        <span className="text-4xl font-semibold add-text text-white">
                            I'm
                            <Typewriter
                                loop={true}
                                cursor={true}
                                words={[" React Developer"," Software Engineer"," UI / UX designer", " Front-End Developer"]} />
                        </span>
                    </h2>
                </div>
            </section>
        </>
    )
}

export default HeroSection;