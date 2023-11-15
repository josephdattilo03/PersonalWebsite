import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/home/Home'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/work'></Route>
        <Route path='/skills'></Route>
        <Route path='/music'></Route>
        <Route path='/about-me'></Route>
      </Routes>
    </BrowserRouter>
  )
}
