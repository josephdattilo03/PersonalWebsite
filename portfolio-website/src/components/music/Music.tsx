import React from 'react'
import frontPhoto from '../../assets/Elmo Kickoff (1).jpeg'
import './Music.css'
import { motion } from 'framer-motion'
import { IconButton } from '@mui/material'

import wigPhoto from '../../assets/MG 7296.jpeg'
import cellophonyPhoto from '../../assets/IMG_3163.jpg'
import pennLogo from '../../assets/images.png'
import home from '../../assets/home_varient.svg'
import { useNavigate } from 'react-router-dom'

export default function Music() {

    const greeting = ['Drumming since', '2013']
    const navigate = useNavigate()
    const musicExperience = [{
        imageUrl: wigPhoto,
        title: "Mask and Wig Band",
        description: "As the house drummer for the Mask and Wig Band, I play for the fall show (1 week), and annual production (3 months). Outside of the troupe, the band plays gigs throughout Penn's campus and Philadelphia.",
        button: "Website",
        href: "https://www.maskandwig.com/"
    },
    {
        imageUrl: pennLogo,
        title: "Penn Jazz Combos",
        description: "I rehearse with the Penn jazz combos to produce a bi-yearly show. The shows are professionally recorded and can be found below.",
        button: "Recordings",
        href: ""
    },
    {
        imageUrl: cellophonyPhoto,
        title: "Cellophony",
        description: "My final year of highschool I ran a student orchestrated concert benefiting the W.O. Smith School of Music. I played as the house drummer alongside my organizer role.",
        button: "Recording",
        href: "https://www.youtube.com/watch?v=8lnm5vKPsM0"
    }
    ]


    return (
        <div className='d-flex justify-content-center' style={{ backgroundColor: '#D7D9B1' }}>
            
            <div className=' d-flex justify-content-center align-items-center flex-column m-3'>
                <h1 style={{ color: '#2F4858', textAlign: 'center', fontWeight: 'bold' }} className='terminal-text'>
                    {greeting[0].split('').map((l, idx) => (
                        <motion.span
                            key={idx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 + 0.05 * (idx + 1), duration: 0 }}
                        >
                            {l}
                        </motion.span>
                    ))}
                </h1>
                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.4,
                        ease: 'easeInOut',
                    }}
                    className='p-5' style={{ backgroundColor: '#2F4858' }} >
                        <IconButton onClick={() => { navigate('/') }} color='primary' style={{position: 'absolute', top: 15, left: 10}}>
                        <img style={{ width: '4vw', height: '4vw' }} src={home}></img>
            </IconButton>
                    <motion.div
                        className='p-5' style={{ backgroundColor: '#6A3937' }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.6,
                                ease: 'easeInOut',
                            }}
                            className='p-5' style={{ backgroundColor: '#D7D9B1' }}>
                            <motion.img
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: .7,
                                    ease: 'easeInOut',
                                }}
                                className='front-photo' src={frontPhoto}></motion.img>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <h1 style={{ marginTop: '1vw', color: '#2F4858', textAlign: 'center', fontWeight: 'bold' }} className='terminal-text'>
                    {greeting[1].split('').map((l, idx) => (
                        <motion.span
                            key={idx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 + 0.05 * (idx + 1), duration: 0 }}
                        >
                            {l}
                        </motion.span>
                    ))}
                </h1>
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.7,
                        ease: 'easeInOut',
                    }}
                    className='d-flex flex-row flex-wrap justify-content-center'>
                    {musicExperience.map((element, index) => (
                        <div key={index} className="card m-3" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={element.imageUrl} alt={`Card image ${index}`} />
                            <div className="card-body">
                                <h5 className="card-title">{element.title}</h5>
                                <p className="card-text">{element.description}</p>
                                <a href={element.href} className="btn btn-primary">{element.button}</a>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div>

            </div>
        </div>
    )
}
