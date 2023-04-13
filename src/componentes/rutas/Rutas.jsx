import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../Dashboard'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Estudiantes from '../Estudiantes'
import '../../assets/styles/sidebar.css'

export const Rutas = () => {
    const [toggle, setToggle] = useState(true)
    const Toggle = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <div className='container-fluid min-vh-100 bodyDashboard'>        
                <div className='row '>            
                    {toggle && <div className='col-4 col-md-2 vh-100 position-fixed' style={{backgroundColor: "#572AB0"}}>
                    <Sidebar />
                    </div>}
                    {toggle &&  <div className='col-4 col-md-2'></div>}   
                    <div className='col'>     
                    <BrowserRouter>
                    <Routes>
                        <Route Toggle={Toggle} path='/' element={<Dashboard />}></Route>
                        <Route Toggle={Toggle} path='/Estudiantes' element={<Estudiantes/>}></Route>
                    </Routes>
                </BrowserRouter>
                </div>
                </div>
            </div> 
        </>
  )
}
