import { useState } from 'react'
import arrow from '../../assets/up_black.svg'
import skills from '../../assets/skills.svg'
import work from '../../assets/work.svg'
import drums from '../../assets/drums.svg'
import about from '../../assets/about.svg'
import { useNavigate } from 'react-router-dom'
export default function SafariAppsUI() {
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
        <div className='d-flex h-100 text-light justify-content-center align-items-center'>
            <div className='d-flex h-100 w-100 justify-content-center align-items-center'>
                <img onClick={() => {handleDownArrow()}} style={{transform: 'rotate(-90deg)', width: '6vw', height: '6vw'}} src={arrow}></img>
                    <div onClick={() => {navigate(appArray[currElem].route)}} style={{backgroundColor: appArray[currElem].color, width: '30vw', height: '30vw', borderRadius: 30}}>
                        <img src={appArray[currElem].logo}></img>
                        <h1 style={{fontSize: '5vw'}} className='text-center text-dark'>{appArray[currElem].name}</h1>
                    </div>
                <img onClick={() => {handleUpArrow()}} style={{transform: 'rotate(90deg)', width: '6vw', height: '6vw'}} src={arrow}></img>
            </div>
        </div>
    )
}
