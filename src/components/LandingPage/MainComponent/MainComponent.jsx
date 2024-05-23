import Button from '../../Button/Button'
import React from 'react'
import mobile from '../../../assets/mobile.png'
import gradient from '../../../assets/gradient.png'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

function MainComponent() {
  return (
    <div className='flex flex-col md:flex-row justify-between py-2 px-4'>
      <div className='mt-8 w-full md:w-3/5 px-4 text-center md:text-left '>
        <motion.h1 
          className='text-5xl md:text-7xl lg:text-8xl xl:text-9xl m-0 text-white font-bold leading-snug crypto-text'
          initial={{ opacity: 0, y:50 }}v         animate={{ opacity: 1, y:0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1 
          className='text-5xl md:text-7xl lg:text-8xl xl:text-9xl m-0 text-blue font-bold leading-snug'
          initial={{ opacity: 0, y:50 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 0.5,delay:0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.p 
          className='text-grey text-base mt-4'
          initial={{ opacity: 0, y:50 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 0.5,delay:1 }}
        >
          Track crypto through a public API in real time. Visit the dashboard to do so!
        </motion.p>
        <motion.div 
          className='flex justify-center md:justify-start gap-6 mt-6 items-center'
          initial={{ opacity: 0, x:50 }}
          animate={{ opacity: 1, x:0 }}
          transition={{ duration: 0.5,delay:1.5 }}
        >
        
          <Link to='/dashboard'><Button text={"dashboard"} /></Link>
          <Link to="/share"><Button text={'share'} outline={true} /></Link>
        </motion.div>
      </div>
      <div className='w-screen  md:w-2/5 relative p-4 lg:mr-10 flex justify-center md:justify-end mt-7 md:mt-0'>
        <motion.img 
          className='absolute z-10 w-60  xl:w-80 lg:w-52 md:w-48 lg:right-0 md:left-auto left-1/4' 
          src={mobile} 
          alt="mobile" 
          initial={{y:-20}}
          animate={{y:10}}
          transition={
            {
              type:"smooth",
              repeatType:"mirror",
              duration:2,
              repeat:Infinity
            }
          }

        />
        <img 
          className='absolute w-56 xl:w-72 lg:w-48 md:w-44 top-24 lg:right-0 md:left-auto left-1/3' 
          src={gradient} 
          alt="gradient" 
        />
      </div>
    </div>
  )
}

export default MainComponent;
