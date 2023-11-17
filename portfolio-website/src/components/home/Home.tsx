import React, { useState } from 'react';
import IPod from './IPod';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

export default function Home() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div
        className='container'
            style={{
                backgroundColor: darkMode ? '#343d52' : 'white', width: '300vw', height: '100vh'
            }}
        >
            <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: 'easeInOut',
                }}
            >
                <IPod darkMode={darkMode}></IPod>
            </motion.div>
        </div>
    );
}

