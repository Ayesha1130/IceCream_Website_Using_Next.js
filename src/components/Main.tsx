"use client"
import Link from 'next/link'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


const Main = () => {
  return (
    <main className='flex flex-col p-4   bg-cover bg-center h-screen' style={{ backgroundImage: 'url(/images/ice5.jpg)' }} >
        <div className='mt-10  md:mt-36'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold italic'>Welcome to LusciousLicks
            <br />
            <Typewriter
                words={['Discover our delectable ice creams', 'Indulge in our mouth-watering creations']}
                loop={true}
                cursor
                cursorStyle=' '
             />
            </h1>
        <p className='w-60 md:w-80 lg:w-96 text-justify first-line:text-xl mb-10 mt-7'>"Swing by our shop and indulge in our mouthwatering creations. Don’t forget to check out our seasonal specials and new flavors that are sure to tantalize your taste buds!"</p>
        
        <Link href={'/contact'} className='bg-pink-300 font-semibold p-4 rounded-md hover:bg-pink-400 mt-10'>Contact Us</Link>

        </div>
      
    </main>
  )
}

export default Main
