
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/home/Home'
import Skills from '../components/skills/Skills'
import Music from '../components/music/Music'
import Experience from '../components/experience/Experience'
import About from '../components/contact/Contact'


export default function Router() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/experience' Component={Experience}></Route>
        <Route path='/skills' Component={Skills}></Route>
        <Route path='/music' Component={Music}></Route>
        <Route path='/contact' Component={About}></Route>
      </Routes>
    </BrowserRouter>
  )
}
