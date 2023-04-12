import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUsers, faBook, faPager, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/img/logo1.png'
import '../assets/styles/sidebar.css'

function Sidebar() {

  return (
    
            <div className=' p-0 '>
    <div className='sidebar min-vh-100'>
        <div>
            <i className='me-3 fs-4'><img src={logo} width='50px' /></i>
            <span className='brand-name fs-4'>Hola</span>
        </div>
        <div className='list-group list-group-flush' style={{backgroundColor: "#572AB0"}}>
            <a className='list-group-item list-group-item-action py-2 my-1' style={{backgroundColor: "#572AB0"}}>
                <FontAwesomeIcon className='fs-5 me-3' icon={faHouse} />
                <span className='fs-5'>Dashboard</span>
            </a>
            <a className='list-group-item list-group-item-action py-2 my-1' style={{backgroundColor: "#572AB0"}}>
                <FontAwesomeIcon className='fs-5 me-3' icon={faUsers} />
                <span className='fs-5'>Estudiantes</span>
            </a>
            <a className='list-group-item list-group-item-action py-2 my-1' style={{backgroundColor: "#572AB0"}}>
            <FontAwesomeIcon className='fs-5 me-3' icon={faBook} />
                <span className='fs-5'>Materias</span>
            </a>
            <a className='list-group-item list-group-item-action py-2 my-1' style={{backgroundColor: "#572AB0"}}>
            <FontAwesomeIcon className='fs-5 me-3' icon={faPager} />
                <span className='fs-5'>Cuestionarios</span>
            </a>
            <a className='list-group-item list-group-item-action py-2 my-1' style={{backgroundColor: "#572AB0"}}>
            <FontAwesomeIcon className='fs-5 me-3' icon={faRightFromBracket} />
                <span className='fs-5'>Logout</span>
            </a>
        </div>
    </div>
    </div>
    
  )
}

export default Sidebar