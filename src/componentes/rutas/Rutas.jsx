import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../Dashboard'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

export const Rutas = () => {
    const [toggle, setToggle] = useState(true)
    const Toggle = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <div className='container-fluid bg-secondary min-vh-100 '>        
                <div className='row '>            
                    {toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
                    <Sidebar />
                    </div>}
                    {toggle &&  <div className='col-4 col-md-2'></div>}   
                    <div className='col'>     
                    <BrowserRouter>
                    <Routes>
                        <Route Toggle={Toggle} path='/' element={<Dashboard />}></Route>
                    </Routes>
                </BrowserRouter>
                </div>
                </div>
            </div> 
        </>
  )
}
