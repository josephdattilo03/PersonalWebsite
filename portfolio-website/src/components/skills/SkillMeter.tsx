import { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './Skills.css';
import { SkillType } from './Skills';
import { Button, LinearProgress } from '@mui/material';

const meterTheme = createTheme({
    palette: {
        primary: {
            main: '#A288E3',
        },
    },
});



interface SkillMeterProps {
    skill: SkillType | null;
    setSkill: (param: SkillType | null) => void

}

export default function SkillMeter({ skill, setSkill }: SkillMeterProps) {
    const [experience, setExperience] = useState(0)
    const [experienceString, setExperienceString] = useState('')

    useEffect(() => {
        if (skill) {
            setExperience(33.33 * skill.experience)
            switch (skill.experience) {
                case (1):
                    setExperienceString('Proficient')
                    break
                case (2):
                    setExperienceString('Intermediate')
                    break
                case (3):
                    setExperienceString('Expert')
                    break
            }
        }
    }, [skill]);

    return (
        <div>
            {skill ? (
                <div style={{ color: 'rgb(52, 61, 82)', margin: '2vw' }}>
                    <Button onClick={() => {setSkill(null)}} variant='contained' color='error'>X</Button>
                    <div style={{ display: 'flex', flexDirection: 'column', }}>
                        <p style={{ fontSize: '3vw', margin: 0 }}>{skill.name}</p>
                        <p style={{ fontSize: '1vw' }}>{experienceString}</p>
                    </div>
                    <ThemeProvider theme={meterTheme}>
                        <LinearProgress value={experience} style={{ width: "40vw" }} variant='determinate'></LinearProgress>
                    </ThemeProvider>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

