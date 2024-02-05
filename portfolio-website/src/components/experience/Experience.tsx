import React from 'react'
import karpoolLogo from '../../assets/cdn.lugc-1.avif'
import pennappsLogo from '../../assets/pennapps.png'
import devDepot from '../../assets/graph image thingy.svg'
import assassinLogo from '../../assets/Syrian_Insignia-R2.webp'
import stockLogo from '../../assets/Stock Movement.svg'
import { IconButton } from '@mui/material'
import './Experience.css'
import { useNavigate } from 'react-router-dom'
import home from '../../assets/homegreen.svg'

export default function Experience() {
    const animatedTextExp = "Experience"
    const animatedTextProj = "Projects"
    const navigate = useNavigate()

    return (
        <div className='bg-light'>
            <div className="fade-in-text text-center p-5 h1 m-0 d-flex justify-content-center align-items-center" style={{backgroundColor: '#073605', color: '#199515'}}>
                <span>
                <IconButton onClick={() => { navigate('/') }} color='primary'>
                        <img style={{ width: '4vw', height: '4vw' }} src={home}></img>
                    </IconButton>
                </span>
                <div className='mx-2'>
                {animatedTextExp.split('').map((l, idx) => (
                    <span key={idx} style={{ animationDelay: `${.5 + idx * 0.1}s` }}>{l}</span>
                ))}
                <span id='blink'>_</span>
                </div>
            </div>
            <div>
                <div style={{ backgroundColor: "#76877D" }} className='exp-container'>
                    <div>
                        <h3 className='text-center'>Lead Developer</h3>
                        <img src={karpoolLogo}></img>
                    </div>
                    <div>
                        <p>Starting as an intern at Karpool, I implemented several features for their MVP including real time tracking, geocoding, database interaction, and UX/UI. Through excellent communication and teamwork, our team of 6 finished 50% of the MVP within a month. After my internship, I was contracted to continue work with Karpool. My main responsibilities have been an application refactor, as well as building the messaging functionality.</p>
                    </div>
                </div>
                <div style={{ backgroundColor: "#3A2E39" }} className='exp-container text-light'>
                    <div>
                        <p>As a backend developer for PennApps, my main responsibilities have encompassed developing the application portal backend and creating a slack bot to manage the hackathon's slack. This year, I have been appointed the backend team lead where I will be heading the innovation of new technology to benefit the hackers.</p>
                    </div>
                    <div>
                        <h3 className='text-center'>Team Lead</h3>
                        <img src={pennappsLogo}></img>

                    </div>
                </div>
            </div>
            <div>
            <div className="fade-in-text text-center p-5 h1 m-0" style={{backgroundColor: '#073605', color: '#199515'}}>
                {animatedTextProj.split('').map((l, idx) => (
                    <span key={idx} style={{ animationDelay: `${.5 + idx * 0.1}s` }}>{l}</span>
                ))}
                <span id='blink'>_</span>
            </div>
                <div style={{ backgroundColor: "#DBA8AC" }} className='exp-container'>
                    <div>
                        <img className='logo-img' src={devDepot}></img>
                    </div>
                    <div>
                        <p>DevDepo is a MERN stack web application that seeks to connect student developers to work on projects together. Features in development include, user creation/authentication, project creation/permissions/invitations, shared task management, progress and analytics, dynamic calender, live chat, UX/UI, and github compatibility.</p>
                    </div>
                </div>
                <div style={{ backgroundColor: "#ECFEE8" }} className='exp-container'>

                    <div>
                        <p>Assassin is a Flask web application that organizes games of <a href='https://en.wikipedia.org/wiki/Assassin_(game)'>assassin</a>. The idea for this project was inspired by my desire to automate a process that I watched my class officers take hours to complete. Features include user creation/authentication, game creation/permissions/invitations, UX/UI, and game management/tracking.</p>
                    </div>
                    <div>
                        <img className='logo-img' src={assassinLogo}></img>
                    </div>
                </div>
                <div style={{ backgroundColor: "#F6AE2D" }} className='exp-container'>
                    <div>
                        <img src={stockLogo} className='logo-img'></img>
                    </div>
                    <p>Going through the phases of big data analysis, myself and a team of 3 collected data to train an LSTM model that predicts forward movements in NASDAQ stock prices based on the closing cross auction. I was responsible for implementing over 15 engineered features including exponential moving averages, rolling standard deviation, volume weighted averages and more. Using XGBoost to identify the most important features, I proceeded to train and optimize the LSTM model ending with a 5.5 lowest mean absolute error.</p>
                </div>
            </div>
        </div>
    )
}
