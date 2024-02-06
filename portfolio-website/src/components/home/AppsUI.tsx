import React, { useEffect, useState } from 'react'
import drums from '../../assets/drums.svg'
import skills from '../../assets/skills.svg'
import work from '../../assets/work.svg'
import about from '../../assets/about.svg'
import up from '../../assets/up.svg'
import './Apps.css'
import { useNavigate } from 'react-router-dom'

interface AppsUIInterface {
    setCurrLink: (value: string) => void
}

export default function AppsUI({setCurrLink} : AppsUIInterface) {
    const [currElem, setCurrElem] = useState(0)
    const navigate = useNavigate()
    const appArray = [
        {
            name: 'Skills',
            route: '/skills',
            color: 'yellow',
            logo: skills
        },
        {
            name: 'Experience',
            route: '/experience',
            color: 'orange',
            logo: work
        },
        {
            name: 'Music',
            route: '/music',
            color: 'red',
            logo: drums
        },
        {
            name: 'Contact',
            route: '/contact',
            color: 'green',
            logo: about
        }
    ]

    useEffect(() => {
        setCurrLink(appArray[currElem].route)
    }, [currElem]) 

    function handleUpArrow() {
        setCurrElem((currElem + 1) % appArray.length)
    }
    function handleDownArrow() {
        setCurrElem(currElem - 1)
        if (currElem == 0) {
            setCurrElem(appArray.length - 1)
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'center'}}>
            <img onClick={handleUpArrow} style={{ width: "20%", height: "20%", transform: 'rotate(-90deg)' }} src={up}></img>
            <div className='apps-container'>
                <div onClick={() => {navigate(appArray[currElem].route)}} className='app' style={{ backgroundColor: appArray[currElem].color }}>
                    <img src={appArray[currElem].logo}></img>
                </div>
            
                <p style={{ fontSize: 3,color: 'white' }} className='terminal-text'>{appArray[currElem].name}</p>
            </div>
            <img onClick={handleDownArrow} style={{ width: "20%", height: "20%", transform: 'rotate(90deg)' }} src={up}></img>
        </div>
    )
}
