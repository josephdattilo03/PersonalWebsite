import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface IPodUIProps {
    text: string;
}

export default function IPodUI({ text }: IPodUIProps) {
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        setAnimationKey((prevKey) => prevKey + 1);
    }, [text]);

    return (
        <div key={animationKey}>
            {text.split('').map((letter, index) => (
                <motion.span
                    key={index}
                    style={{ color: 'white' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05 * (index + 1), duration: 0 }}
                >
                    {letter}
                </motion.span>
            ))}
        </div>
    );
}

