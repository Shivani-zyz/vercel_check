import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nyka from './component/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './component/Contact'
import Nav from './component/Nav'
import Libas from './component/Libas'



function App() {


  
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/' element={<Libas />}/>
    <Route path='/contact' element={<Contact/>}/>
    

    
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
