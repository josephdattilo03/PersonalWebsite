import React, { useState } from 'react'
import introphoto from '../../assets/introphoto.jpeg'
import resume from '../../assets/Joseph Dattilo 2024 (3).pdf'
import { motion } from 'framer-motion'
import gmail from '../../assets/Gmail logo icon.svg'
import './Contact.css'
import home from '../../assets/homewhite.svg'
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Contact() {

    const [downloadMessage, setDownloadMessage] = useState('')

    function sendEmail() {
        window.location.assign("mailto:jadattilobusiness@gmail.com")
    }
    const navigate = useNavigate()



    return (
        <div className='bg-dark text-light' style={{ maxHeight: 'auto', overflowY: 'hidden' }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.5,
                    ease: 'easeInOut',
                }}
            >
                <div className='d-flex align-items-center justify-content-center flex-column'>
                    <IconButton className='mt-4' onClick={() => { navigate('/') }} color='primary'>
                        <img style={{ width: '4vw', height: '4vw' }} src={home}></img>
                    </IconButton>
                    <div className='d-flex flex-row align-items-center justify-content-center' style={{ padding: '5%' }}>
                        <h1 style={{ fontSize: '8vw' }} className='mx-3'>I'd Love to Work With You!</h1>
                        <img className='w-25 h-25 mx-3 rounded' src={introphoto} alt="Intro"></img>
                    </div>
                    <h3 style={{ fontSize: '4vw' }}>Download my resume <a onClick={() => { setDownloadMessage("Downloaded") }} style={{ textDecoration: 'none' }} href={resume} download>here</a> or contact me below</h3>
                    <p className='mb-5'>{downloadMessage}</p>
                </div>
                <img className='mb-0' onClick={() => { sendEmail() }} style={{ width: "100vw", cursor: 'pointer' }} src={gmail} alt="Gmail"></img>
            </motion.div>
        </div>
    )
}
