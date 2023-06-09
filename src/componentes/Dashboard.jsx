import React from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUsers, faChalkboardUser, faSchool } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/dashboard.css'


function Dashboard() {



    return (
        <div>
            <Navbar />
            <div className='px-3 contenedordashboard2'>
                <div className='container-fluid '>
                    <div className='row g-3 d-flex p-0'>
                        <div className='col-sm-4 p-1 '>
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <h3 className='fs-2 number'>230</h3>
                                    <p className='fs-6 parrafos'>Alumnos matriculados</p>
                                </div>
                                <FontAwesomeIcon className="p-3 fs-1 iconos" icon={faUsers} />                            
                                </div>
                        </div>
                        <div className='col-sm-4 p-1'>
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <h3 className='fs-2 number'>100</h3>
                                    <p className='fs-6 parrafos'>Docentes matriculados</p>
                                </div>
                                <FontAwesomeIcon className="p-3 fs-1 iconos" icon={faChalkboardUser} />                            
                                </div>
                        </div>
                        <div className='col-sm-4 p-1'>
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <h3 className='fs-2 number'>10</h3>
                                    <p className='fs-6 parrafos'>Escuelas registradas</p>
                                </div>
                                <FontAwesomeIcon className="p-3 fs-1 iconos" icon={faSchool} />
                            </div>
                        </div>
                       
                    </div>

                        {/* Gráfico */}
                    <h4 class="headingChart">Perfiles registrados</h4>
                <div class="container">
                    <div class="row">
                        <canvas id="lineChart" class="chart"></canvas>
                    </div>
                </div>
                </div>   
                
                 
             </div>


             
        </div>
    )
}

export default Dashboard