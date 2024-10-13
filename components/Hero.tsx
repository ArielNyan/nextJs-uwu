import React from 'react'

const Hero = () => {
  return (
    <div className={`py-10 sm:py-14 md:py-20 flex flex-col gap-5`}>
        <h1 className={`text-center text-5xl sm:text-6xl md:text font-semibold color: rgb(30,16,60);
  color: linear-gradient(90deg, rgba(30,16,60,1) 6%, rgba(90,58,148,1) 45%, rgba(166,32,246,1) 83%);-7xl`}>
        <span className='textGradient'>Moodl</span> helps you track your <span className='textGradient'>daily</span> mood!</h1>
      
      <p className='text-lg sm:text-xl md:text-2xl max-w-full w-[600px] mx-auto text-center'>
        Create your mood record and see how you feel 
        <span className='font-semibold'> every day of every year!</span>
      </p>
    </div>
  )
}

export default Hero
