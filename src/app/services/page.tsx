"use client"
import React from 'react'
import Card from '@/components/Card'
import 'aos/dist/aos.css'; // Import AOS styles

import AOS from 'aos'; // Import AOS library
import { useEffect } from 'react';

interface CardData{
    image: string;
    title: string;
    description: string;
}

const cardData: CardData[] = [
    {
        image: '/images/Classic Vanilla.webp',
        title: 'Classic Vanilla',
        description: 'Rich and creamy vanilla ice cream made from the finest ingredients.',
    },
    {
        image: '/images/Chocolate Delight.avif',
        title: 'Chocolate Delight',
        description: 'Decadent chocolate ice cream that melts in your mouth.',
    },
    {
        image: '/images/Strawberry Bliss.avif',
        title: 'Strawberry Bliss',
        description: 'Refreshing strawberry ice cream made with real strawberries for a burst of flavor.',
    },
    {
        image: '/images/Mint Chocolate Chip.jpg',
        title: 'Mint Chocolate Chip',
        description: 'Cool mint ice cream with delicious chocolate chips throughout for a refreshing treat.',
    },
    {
        image: '/images/Pistachio Paradise.jpg',
        title: 'Pistachio Paradise',
        description: ' Nutty pistachio ice cream that’s both unique and delightful, perfect for those seeking something different.',

    },
    {
        image: '/images/Cookies and Cream.webp',
        title: 'Cookies and Cream',
        description: 'Creamy ice cream loaded with chunks of chocolate cookies, creating a delightful contrast in every bite.',
    }

]

const Services = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    
  return (
    <div className='text-center mt-16'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold italic animate-bounce mb-8'>Our Services</h1>
        <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 '>
            {cardData.map((card,index) => (
                <Card key={card.title} image={card.image} title={card.title} description={card.description} 
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"

                />
            ))}
        </div>
      
    </div>
  )
}

export default Services
