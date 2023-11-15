import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSprings, animated } from '@react-spring/web'

export default function SplashScreen() {
    const numberOfComponents = 15;

    const springs = useSprings(
        numberOfComponents,
        Array.from({ length: numberOfComponents }, (_, index) => ({
            width: '10px',
            from: { height: '10px', opacity: 0, backgroundColor: 'black' },
            to: { height: `${(index + 1)*10}px`, opacity: 1, backgroundColor: 'black' },
        }))
    );

    return (
        <div>
            {springs.map((props, index) => (
                <animated.span key={index - 5} style={props}>.</animated.span>
            ))}
        </div>
    );
}

