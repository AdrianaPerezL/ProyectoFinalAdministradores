import React from "react" 
import '../assets/styles/RegistroAdmi.css'
import Fondo from "../assets/img/Fondo.png"
import { useState } from "react";


function RegistroAdmi (){
    return
    <section className="section-padding">
    <div className="container">
        <div className="title">Registrarse</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Nombre</span>
                <input type="text" placeholder="Ingresa tu nombre" required> </input>
              </div>
              <div className="input-box">
                <span className="details">Apellido</span>
                <input type="text" placeholder="Ingresa tu apellido" required> </input>
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Ingresa tu email" required> </input>
              </div>
              <div className="input-box">
                <span className="details">Contraseña</span>
                <input type="text" placeholder="Ingresa tu Contraseña" required> </input>
              </div>
              <div className="input-box">
                <span className="details">Carné</span>
                <input type="text" placeholder="Ingresa tu carné" required> </input>
              </div>
            </div>
             <div>
                <span className="details">Foto</span>
                 <div className="input-group"></div>
                <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="foto" aria-label="Upload"> </input>
             </div>
            
            <div className="button">
              <input type="submit" value="Registrarse"> </input>
            </div>
          </form>
        </div>
      </div>
</section>
}

export default RegistroAdmi