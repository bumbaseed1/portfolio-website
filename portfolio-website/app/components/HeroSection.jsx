"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';




const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12 py-8'>
            <div className='col-span-7 place-self-center'>
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold"><span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-pink-600'>Hi, I'm{" "} </span>
                <br></br>
                <TypeAnimation
                    sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Jack!',
                    2000, // wait 2s before replacing "Mice" with "Hamsters"
                    'A Software Engineer.',
                    2000,
                    'A Student.',
                    2000,
                    'Enthusiastic.',
                    1000
                    ]}
                    wrapper="span"
                    speed={80}
                    style={{ fontSize: '1em', display: 'flex' }}
                    repeat={3}
                />
                </h1>
                <p className='text-[#ADB7BE] text-lg lg:text-xl mb-5'>
                    A Student aspiring to develop and maintain the required skills to be a valuable asset to any team. Primarily focused on developing projects within Java and problem solving via LeetCode.
                </p>
                <div>
                    <button className='px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-400 text-black font-bold'>Contact Me</button>
                    <button className='px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white'>Download CV</button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[350px] h-[350px] relative'>
                    <Image src="/images/girl.png"
                    alt='hero image'
                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                    width={200}
                    height={280}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection;
