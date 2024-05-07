
import resume from '../../assets/Joseph Dattilo 2024 (9).pdf'
import { useNavigate } from 'react-router-dom'

export default function Resume() {
    const navigate = useNavigate()
  return (
    <div>
        <p>Download my resume <a style={{ textDecoration: 'none' }} href={resume} download>here</a></p>
        <button className='btn btn-primary mx-2' onClick={() => navigate('/')}>Back</button>
    </div>
  )
}


