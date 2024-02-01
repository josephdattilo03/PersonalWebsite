import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/home/Home'
import AppsUI from '../components/home/AppsUI'
import Skills from '../components/skills/Skills'
import Music from '../components/music/Music'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/experience'></Route>
        <Route path='/skills' Component={Skills}></Route>
        <Route path='/music' Component={Music}></Route>
        <Route path='/about'></Route>
        <Route path='/apps-test' Component={AppsUI}></Route>
      </Routes>
    </BrowserRouter>
  )
}
