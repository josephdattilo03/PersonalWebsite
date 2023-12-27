import React from 'react'
import {motion} from 'framer-motion'



export default function IPodUI() {
    const text = 'Hi there! Welcome to my portfolio. To have a look around, press the center button below.'
    return (
        <div>{text.split('').map((letter, index) => {
            return (
                <motion.span style={{color: 'white'}} 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: .05*(index + 1), duration: 0}}>{letter}</motion.span>
            )
        })}</div>
    )
}
