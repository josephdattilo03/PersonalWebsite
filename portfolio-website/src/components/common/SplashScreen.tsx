import  { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import './SplashScreen.css'

export default function SplashScreen() {
    const numberOfDivs = 40;
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const fadeOutTimeout = setTimeout(() => {
            setOpacity(0);
        }, 7000);

        return () => clearTimeout(fadeOutTimeout);
    }, []);

    const divs = Array.from({ length: numberOfDivs }, (_, index) => (
        <motion.div
            key={index}
            className="m-1 loadbar"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
                opacity: [1, 1, 1, 1, 1],
                scale: [1, 1, 1, 1, 1],
                height: ['1vh', '10vh', '1vh', '1vh', '1vh'],
                y: ['-10vh', '-10vh', '-10vh', '-10vh']
            }}
            transition={{
                duration: 2,
                delay: 0.1 * index,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 0.1
            }}
        ></motion.div>
    ));

    return (
        <div style={{ opacity }} className='center-frame'>
            {divs}
        </div>
    );
}


