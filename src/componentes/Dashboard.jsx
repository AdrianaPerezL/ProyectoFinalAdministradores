import React from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/dashboard.css'


function Dashboard() {
    return (
        <div>
            <div className='px-3 '>
                <div className='container-fluid '>
                    <div className='row g-3 my-2'>
                        <div className='col-md-3 p-1 '>
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <h3 className='fs-2'>230</h3>
                                    <p className='fs-5'>Alumnos</p>
                                </div>
                                <FontAwesomeIcon className="p-3 fs-1" icon={faBars}  />
                            </div>
                        </div>
                        <div className='col-md-3 p-1'>
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <h3 className='fs-2'>100</h3>
                                    <p className='fs-5'>Escuelas</p>
                                </div>
                                <FontAwesomeIcon className="p-3 fs-1" icon={faBars}  />
                            </div>
                        </div>
                        <div className='col-md-3 p-1'>
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <h3 className='fs-2'>10</h3>
                                    <p className='fs-5'>Maestros</p>
                                </div>
                                <FontAwesomeIcon className="p-3 fs-1" icon={faBars}  />
                            </div>
                        </div>
                        <div className='col-md-3 p-1'>
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <h3 className='fs-2'>1</h3>
                                    <p className='fs-5'>Administrador</p>
                                </div>
                                <FontAwesomeIcon className="p-3 fs-1" icon={faBars}  />
                            </div>
                        </div>
                    </div>
                </div>    
         </div>
        </div>
    )
}

export default Dashboard