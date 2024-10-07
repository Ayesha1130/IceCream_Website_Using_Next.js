"use client"
import Relinkct from 'react'
import { PiBatteryVerticalLowLight } from "react-icons/pi";
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';




const Nlinkvblinkr = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <header className='flex  justify-between items-center p-4 '>
        <button title='button' onClick={toggleMenu}>{!isOpen? <IoMdMenu size={20}/>: <RxCross2 size={20}/>}

</button>
        <h1 className='text-2xl md:text-3xl lg:text-4xl md:text-center lg:text-left font-bold italic '>LusciousLicks</h1>
      
        <nav className='hidden md:block lg:block' >
          <ul className='flex flex-row   font-semibold gap-8 ml-32 '>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About Us </Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          
            <li><Link href="/experience">User Experience</Link></li>
            <li><Link href="/contact">Visit Us</Link></li>
          </ul>
        </nav>

        {isOpen &&
        <nav className=' md:hidden lg:hidden'>
          <ul className='flex flex-col font-semibold gap-4 p-4 bg-pink-200 absolute top-16 left-2 w-48 rounded-lg shadow-lg'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About us </Link></li>
            <li><Link href="/whyus">Why Us</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/experience">User Experience</Link></li>
            <li><Link href="/contact">Visit Us</Link></li>
          </ul>
        </nav>
     
        }
      <Link href={'/contact'} className=' flex items-center bg-pink-100 rounded-md p-2 font-semibold ml-4 md:ml-16 '
      ><PiBatteryVerticalLowLight className='mr-2' />

      <span className='hidden md:inline'>Call Us</span></Link>
    </header>
  )
}

export default Nlinkvblinkr
