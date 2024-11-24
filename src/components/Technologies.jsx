import React from 'react'
import { FaGithub, FaJava, FaLaravel } from 'react-icons/fa'
import {RiReactjsLine} from 'react-icons/ri'
import {TbBrandNextjs} from 'react-icons/tb'
import {motion} from 'framer-motion'


const Technologies = () => {

    const iconVariants = (duration) => ({
        initial:{y:-100},
        animate:{y:[10,-10],
            transition:{ duration:duration, ease:'linear', repeat:Infinity, repeatType:'reverse', }
        }
    })

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <motion.h2 
        whileInView={{opacity:1, y:0 }}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}} className="my-20 text-center text-4xl">
            Technologies 
        </motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
            <motion.div
             variants={iconVariants(1)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </motion.div        >
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaLaravel className='text-7xl text-red-600' />
            </motion.div>
            <motion.div
             variants={iconVariants(5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className='text-7xl text-neutral-300' />
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className='text-7xl text-blue-700' />
            </motion.div>
            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className='text-7xl text-yellow-500' />
            </motion.div>
            
        </div>
    </div>
  )
}

export default Technologies
