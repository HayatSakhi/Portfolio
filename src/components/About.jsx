import React from 'react'
import about from '../assets/about.jpg'
import {ABOUT_TEXT} from '../constants'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <motion.h2 
        whileInView={{opacity:1, y:0 }}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}

        className="my-20 text-center text-4xl">
            About <span className='text-neutral-500' >Me</span>
        </motion.h2>
        <div className="flex flex-wrap">
            <motion.div
            whileInView={{opacity:1, x:0 }}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}

             className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img src={about} className='rounded-2xl' alt="" />
                </div>
                
            </motion.div>
            <motion.div
            whileInView={{opacity:1, x:0 }}
            initial={{opacity:0, x:100}}
            transition={{duration:1.5}}
             className='w-full lg:w-1/2 justify-center lg:justify-start pt-28'>
                <p className='my-2 max-w-xl py-8'>
                    {ABOUT_TEXT}
                </p>
            </motion.div>
 
            
        </div>
    </div>
  )
}

export default About