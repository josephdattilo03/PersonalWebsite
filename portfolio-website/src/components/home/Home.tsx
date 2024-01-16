import React, { useEffect, useState } from 'react';
import IPod from './IPod';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import SplashScreen from '../common/SplashScreen';
import APIService from '../../services/api.service';
import IPodUI from './IPodUI';



import './Home.css'


export default function Home() {
    const menuText = 'Hi there! Welcome to my portfolio. To have a look around, press the center button below.'
    const [darkMode, setDarkMode] = useState(false);
    const [currSong, setCurrSong] = useState<string | null>(null);
    const [currWork, setCurrWork] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [IPodText, setIPodText] = useState('Hi there! Welcome to my portfolio. To have a look around, press the center button below.')
    const [showUI, setShowUI] = useState(false)

    

    async function fetchData() {
        
        try {
            const mostRecentSong = await APIService.getRecentSong();
            const mostRecentWork = await APIService.getRecentWork();
            setCurrSong(mostRecentSong);
            setCurrWork(mostRecentWork)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 6000);
        fetchData();
        return () => {
            clearTimeout(timeoutId)
        }
    }, []);





    return loading ? (
        <SplashScreen />
    ) : (
        <div>
            <div
                style={{
                    backgroundColor: darkMode ? '#343d52' : 'white',
                    width: '100vw',
                    height: '100vh',
                    margin: 0,
                }}
                className='row justify-content-center align-items-center'
            >
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                        ease: 'easeInOut',
                    }}
                    className='row'
                >
                    <div className='col-6'>
                        <IPod showUI={showUI} setShowUI={setShowUI} darkMode={darkMode}>
                            <IPodUI text={IPodText}></IPodUI>
                        </IPod>
                    </div>
                    <div className='col-6 d-flex justify-content-center align-items-center'>
                        <div>
                            <h1 style={{ fontSize: '8vw', lineHeight: '9vw', color: darkMode ? '#ffffe4' : '#343d52' }}>Hi! <span className="wave">👋</span>, I'm Joseph Dattilo</h1>
                            <div className='media-container' style={{ backgroundColor: darkMode ? '#ffffe4' : '#343d52' }}>
                                <svg onClick={() => window.location.href = "https://github.com/josephdattilo03"} onMouseLeave={() => setIPodText(menuText)} onMouseEnter={() => setIPodText(`Currently working on: ${currWork}`)} className='icon' viewBox="-2 -2 24.00 24.00" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.08"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill={darkMode ? "#242d42" : "#a9bcbc"}> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                                <svg onClick={() => window.location.href = "https://www.linkedin.com/in/joe-dattilo/"} onMouseLeave={() => setIPodText(menuText)} onMouseEnter={() => setIPodText("Linkedin cannot be accessed as their API is enterprise only.")} className='icon' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill={darkMode ? "#242d42" : "#a9bcbc"}></path> <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill={darkMode ? "#242d42" : "#a9bcbc"}></path> <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill={darkMode ? "#242d42" : "#a9bcbc"}></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill={darkMode ? "#242d42" : "#a9bcbc"}></path> </g></svg>
                                <svg onClick={() => window.location.href = "https://open.spotify.com/user/flameon39999?si=40eda0a004424365"} onMouseLeave={() => setIPodText(menuText)} onMouseEnter={() => setIPodText(`Most recent listen: ${currSong}`)} className='icon' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill={darkMode ? "#242d42" : "#a9bcbc"}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.7 11.5c-.1.2-.5.3-.7.2-2.1-1.2-4.7-1.5-7-.8-.3 0-.5-.1-.6-.4 0-.2.1-.5.4-.6 2.6-.8 5.4-.4 7.8.9.1.2.2.5.1.7zm1-2.1c-.1 0-.1 0 0 0-.2.3-.6.4-.9.2-2.4-1.4-5.3-1.7-8-.9-.3.1-.7-.1-.8-.4-.1-.4.1-.7.4-.9 3-.9 6.3-.5 9 1.1.3.2.4.6.3.9zm0-2.3c-2.6-1.5-6.8-1.7-9.3-.9-.4.1-.8-.1-.9-.5-.1-.4.1-.8.5-1 2.8-.8 7.5-.7 10.5 1.1.4.2.5.7.3 1-.3.4-.7.5-1.1.3z"></path> </g> </g></svg>
                            </div>
                            <div className='slider-container' >
                                <span style={{ color: '#343d52' }}>Light</span>
                                <label className="switch m-2">
                                    <input type="checkbox" onClick={() => { setDarkMode(!darkMode) }} />
                                    <span className="slider round"></span>
                                </label>
                                <span style={{ color: darkMode ? '#ffffe4' : 'white' }}>Dark</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}


