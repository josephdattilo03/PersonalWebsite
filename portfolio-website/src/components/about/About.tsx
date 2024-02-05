import React from 'react'
import introphoto from '../../assets/introphoto.jpeg'

export default function About() {
    return (
        <div>
            <div className='bg-dark d-flex flex-row align-items-center justify-content-center' style={{ gap: '10%' }}>
                <div className='text-light'>
                    <h1>About Me</h1>
                    <h2>Born: Nashville, TN</h2>
                    <h3>Interests: music, mixology, food, fantasy, comedy</h3>
                </div>
                <img className='w-25 h-25 my-5 rounded' src={introphoto}></img>
            </div>
            <div>
                <h1>Education</h1>
            </div>
        </div>
    )
}
