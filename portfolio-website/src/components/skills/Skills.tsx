import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Skills.css'
import skillData from '../../assets/Skills.json'
import SkillMeter from './SkillMeter'
import { IconButton } from '@mui/material'
import home from '../../assets/home.svg'
import { useNavigate } from 'react-router-dom'


export interface SkillType {
    name: string,
    experience: number
}

export default function Skills() {
    const [skill, setSkill] = useState<SkillType | null>(null)
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    return (
        <div>
            <motion.div

                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: 'easeInOut',
                }}
                style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
            >
                <div className='home'>
                    <IconButton onClick={() => { navigate('/') }} color='primary'>
                        <img style={{ width: '4vw', height: '4vw' }} src={home}></img>
                    </IconButton>
                </div>
                <input onChange={(e) => { setSearch(e.target.value) }} type='text' className='searchbar' placeholder='Search skills...'></input>
                <SkillMeter skill={skill} setSkill={setSkill} />
                <div style={{ marginRight: "10%", marginLeft: "10%", marginTop: '5%', textAlign: 'center' }}>
                    {skillData.data
                        .filter(e => e.name.toLowerCase().includes(search.toLowerCase()))
                        .map(e => (
                            <div onClick={() => { setSkill(e) }} className='skill'>
                                <p>{e.name}</p>
                            </div>
                        ))}
                </div>

            </motion.div>
        </div>
    )
}
