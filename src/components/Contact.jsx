import React from 'react'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <motion.h2 
        whileInView={{opacity:1, y:0 }}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}} className="my-20 text-center text-4xl">
            Git in touch 
        </motion.h2>
        <div className="text-center tracking-tinghter">
            <motion.p 
            whileInView={{opacity:1, y:0 }}
            initial={{opacity:0, y:-100}}
            transition={{duration:2.5}}
            className='my-4'>
                Lot massira 2 rabat,Maroc 
            </motion.p>
            <motion.p 
            whileInView={{opacity:1, y:0 }}
            initial={{opacity:0, y:-100}}
            transition={{duration:3.5}}
            className='my-4'>
                https://github/info_b_darija
            </motion.p>
            <motion.p
            whileInView={{opacity:1, y:0 }}
            initial={{opacity:0, y:-100}}
            transition={{duration:4.5}}
             className='my-4'>
                info_bdarija@gmail.com 
            </motion.p>
        </div>
    </div>
  )
}

export default Contact
