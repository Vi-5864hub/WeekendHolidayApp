
import React from 'react'

const  Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src="services.jpg "
         alt='/'
        className='w-full h-full object-cover'        
        />
    <div className='max-w-[1140px] m-auto' > 
        <div className='absolute top-[40%] w-full md:[50%] flex flex-col text-white p-4'>
            <h1 className='font-bold text-4xl'>Find Your Trip</h1>
            <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eius 
                fugiat, ut quidem velit, veniam alias, facere nobis labore quia repellat amet
                 repudiandae itaque modi corrupti id vitae minima?</p>
        </div>
  </div>
    </div>
  )
}

export default Hero