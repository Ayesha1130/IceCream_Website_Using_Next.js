import React from 'react'
import {FaIceCream, FaLeaf, FaUsers, FaStar, FaHandsHelping} from 'react-icons/fa'



const Whyus = () => {
   
  return (
    <div className='flex flex-col items-center px-5 md:px-10 lg:px-20 mt-20'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold italic text-center mb-20 animate-bounce '>Why Choose LosciousLicks</h1>
        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
            <div className='flex flex-col items-center text-center'>
        <FaIceCream className='text-4xl mb-2 '/>
        <h3 className='font-semibold'>Quality Ingredients</h3>

        </div>

        <div className='flex flex-col items-center text-center'>
        <FaLeaf className='text-4xl mb-2'/>
        <h3 className='font-semibold'>HandCrafted Flavors</h3>

        </div>

        <div className='flex flex-col items-center text-center'>
        <FaStar className='text-4xl mb-2'/>
        <h3 className='font-semibold'>Seasonal Specials</h3>

        </div>

        <div className='flex flex-col items-center text-center'>
        <FaUsers className='text-4xl mb-2'/>
        <h3 className='font-semibold'>Welcoming Atmosphere</h3>

        </div>

        <div className='flex flex-col items-center text-center'>
        <FaHandsHelping className='text-4xl mb-2'/>
        <h3 className='font-semibold'>Community Commitment</h3>

        </div>
      
    </div>
    </div>
  )
}

export default Whyus

