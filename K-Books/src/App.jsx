import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Books from './component/Books'
import Navbar from './component/Navbar'
import Register from './component/Register'
export default function App() {
  return (
    <div id='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Books/>} />
        <Route path='/register' element={<Register/>} />

      </Routes>
    </div>
  )
}
