import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react'
import AppsUI from './AppsUI'
import { useNavigate } from 'react-router-dom'

interface IPodProps {
    darkMode: boolean
    children: ReactNode
    showUI: boolean,
    setShowUI: Dispatch<SetStateAction<boolean>>
}

export default function IPod({ darkMode, children, showUI, setShowUI }: IPodProps) {
    const [currLink, setCurrLink] = useState('')
    const navigate = useNavigate()

    return (
        <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 58.006 58.006"
            xmlSpace="preserve"
            width="54vw"
            height="90vh"
            fill="#000000"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
                <path style={{ fill: darkMode ? '#ffffe4' : '#a9bcbc' }} d="M44.997,58.006H13.01c-1.66,0-3.006-1.346-3.006-3.006V3.006C10.003,1.346,11.349,0,13.01,0h31.987 c1.66,0,3.006,1.346,3.006,3.006V55C48.003,56.66,46.657,58.006,44.997,58.006z" />
                <circle style={{ fill: darkMode ? '#242d42' : '#FFFFFF' }} cx="29.003" cy="41.006" r="13" />
                <circle onClick={() => { 
                    if (showUI == true) {
                        navigate(currLink)
                    } else {
                        setShowUI(true)
                        setCurrLink('/skills')
                    }
                     }} style={{ fill: darkMode ? '#ffffe4' : '#B1B3B4' }} cx="29.003" cy="41.006" r="4" /> //TODO add controls

                <rect x="15.003" y="5.006" style={{ fill: '#000000' }} width="28" height="19" />
                {showUI ? <foreignObject x="16.5" y="7" width="28" height="19">
                    <AppsUI currLink={currLink} setCurrLink={setCurrLink}></AppsUI>
                </foreignObject> : <foreignObject x="15.003" y="5.006" width="28" height="19">
                    <div style={{ fontSize: '2px', padding: 2 }}>
                        {children}
                    </div>
                </foreignObject>
                }


            </g>
        </svg>
    )
}
