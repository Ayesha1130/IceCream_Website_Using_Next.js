import React from 'react'

interface CardProps{
    image: string;
    title: string;
    description: string;
    [key: string]:string | undefined;
    'data-aos'?: string; // Specify AOS attribute
    'data-aos-easing'?: string; // Specify easing attribute
    'data-aos-duration'?: string;

}
const Card : React.FC<CardProps>=({image, title, description, ...props})=>{
    
    return(
        <div className='bg-white shadow-md rounded-lg overflow-hidden ' {...props} >
            <img src={image} alt={title} className='h-56 w-full object-cover' />
            <div className='p-4'>
            <h2 className='text-xl font-bold'>{title}</h2>
            <p className='text-sm'>{description}</p>
            </div>
        </div>
    )

}

export default Card
