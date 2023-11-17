import React, { useEffect, useState } from 'react';
import IPod from './IPod';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import SplashScreen from '../common/SplashScreen';
import ApiService from '../../services/api.service';
import './Home.css'

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [currSong, setCurrSong] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const mostRecentSong = await ApiService.getRecentSong();
                setCurrSong(mostRecentSong);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
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
                        <IPod darkMode={darkMode}>
                            <div style={{ color: 'white' }}>{currSong}</div>
                        </IPod>
                    </div>
                    <div className='col-6 d-flex justify-content-center mt-5'>
                        <div>
                            <h1 style={{ fontSize: '8vw', lineHeight: '9vw', color: darkMode ? '#ffffe4' : '#343d52' }}>Hi! <span className="wave">👋</span>, I'm Joseph Dattilo</h1>
                            <div style={{lineHeight: .8, fontSize: '3vw', display:'flex', alignItems:'center', position:'absolute',top:'1vh', right: '1vw'}} >
                                <span style={{color:'#343d52'}}>Dark</span>
                                <label className="switch m-2">
                                    <input type="checkbox" onClick={() => {setDarkMode(!darkMode)}}/>
                                    <span className="slider round"></span>
                                </label>
                                <span style={{color:'white'}}>Light</span>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}


