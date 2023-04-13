import React from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/dashboard.css'


function Dashboard() {

    let ctxL = document.getElementById("lineChart").getContext('2d');

let myLineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "Femenino",
      
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(105, 0, 132, .2)',
      ],
      borderColor: [
        'rgba(200, 99, 132, .7)',
      ],
      borderWidth: 2,
      fontFamily: 'Poppins',
    },
    {
      label: "Masculino",
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: [
        'rgba(0, 137, 132, .2)',
      ],
      borderColor: [
        'rgba(0, 10, 130, .7)',
      ],
      borderWidth: 2
    }
    ]
  },
  options: {
    responsive: true,
    fill: true,
    
  }
});
    return (
        <div>
            <Navbar />
            <div className='px-3 contenedordashboard'>
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