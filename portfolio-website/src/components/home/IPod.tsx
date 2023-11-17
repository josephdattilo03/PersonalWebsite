import React from 'react'

interface IPodProps {
    darkMode : boolean
}

export default function IPod({darkMode}: IPodProps) {
    
    return (
        <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 58.006 58.006"
            xmlSpace="preserve"
            width="800px"
            height="800px"
            fill="#000000"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
                <path style={{ fill: darkMode ? '#ffffe4':'#a9bcbc'}} d="M44.997,58.006H13.01c-1.66,0-3.006-1.346-3.006-3.006V3.006C10.003,1.346,11.349,0,13.01,0h31.987 c1.66,0,3.006,1.346,3.006,3.006V55C48.003,56.66,46.657,58.006,44.997,58.006z" />
                <circle style={{ fill: darkMode ? '#242d42':'#FFFFFF'}} cx="29.003" cy="41.006" r="13" />
                <circle style={{ fill: darkMode ? '#ffffe4' : '#B1B3B4' }} cx="29.003" cy="41.006" r="4" />
                <g>
                    <path style={{ fill: darkMode ? '#858b97' : '#2b2b2b' }} d="M30.003,32.006h-2c-0.553,0-1,0.448-1,1s0.447,1,1,1h2c0.553,0,1-0.448,1-1 S30.556,32.006,30.003,32.006z" />
                    <path style={{ fill: darkMode ? '#858b97' : '#2b2b2b'  }} d="M30.003,48.006h-2c-0.553,0-1,0.448-1,1s0.447,1,1,1h2c0.553,0,1-0.448,1-1 S30.556,48.006,30.003,48.006z" />
                    <path style={{ fill: darkMode ? '#858b97' : '#2b2b2b'  }} d="M38.003,40.006h-1c-0.553,0-1,0.448-1,1s0.447,1,1,1h1c0.553,0,1-0.448,1-1 S38.556,40.006,38.003,40.006z" />
                    <path style={{ fill: darkMode ? '#858b97' : '#2b2b2b'  }} d="M21.003,40.006h-1c-0.553,0-1,0.448-1,1s0.447,1,1,1h1c0.553,0,1-0.448,1-1 S21.556,40.006,21.003,40.006z" />
                </g>
                <rect x="15.003" y="5.006" style={{ fill: darkMode ? '#343d52' : '#ffffff' }} width="28" height="19" />

            </g>
        </svg>
    )
}
