import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import Resume from './pages/Resume'




function App() {
 

  return (
    
<>

      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<Homepage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume/>} />
        </Routes>
      </BrowserRouter>
     
</>
  )
}

export default App
