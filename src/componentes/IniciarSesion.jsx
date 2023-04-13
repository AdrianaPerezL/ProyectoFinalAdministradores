import React from "react";
import "../assets/styles/IniciarSesionAdmi.css"
import Fondo from "../assets/img/Fondo.png"
import { useState } from "react";

function IniciarSesionAdmi (){
       //estado inicial de formulario
 const datosFormularios = {

    Carné: "",
    Contraseña: "",
 }

  //Estado inicial para la alerta
  const initialStateInput = {
  valorInput:'',
  mensaje: '',
  estado:false
 };

 //Estado para manejar los valores del formulario
 const [formulario, setFormulario] = useState(datosFormularios);

 //Estado para manejar las alertas de validación
 const [alerta, setAlerta] = useState([initialStateInput]);

  //Función para obtener los datos de los inputs 
  const ManejarEventoDeInputs = (e) =>{

     //la propiedad target del event nos permitirá obtener los valores
       const name = e.target.name;
       const value = e.target.value;

     //actualizamos los valores capturados a nuestro estado de formulario
     setFormulario({...formulario, [name]: value});

    
 }


   console.log(formulario);

    //función para validar los campos
    const handleLoginSession = (e) =>{
    e.preventDefault();
    


    //Enviar los datos a la función de validación y se reciben
    const datosValidados = ValidarInputs() 

    console.log(datosValidados);

    //Enviamos las validaciones al estado que se va a encargar de mostrarlas en el formulario
  setAlerta(datosValidados);

  //obtenemos el total de validaciones
  const totalValidaciones = datosValidados.filter(input => input.estado === false).map
  ((estado) => {return false});

  console.log("Total de validaciones:", totalValidaciones.length);

  //Validación para enviar los datos al servidor
  if(totalValidaciones.length >=1){
    console.log("Enviar al servidor");
  }
 };

 const ValidarInputs = (data) =>{
  console.log(data);

//Declaramos un arreglo el cual se va a encargar de guardar las validaciones 
let errors = [];

//Recibimos los datos a validar
const datosDelFormulario = data;


//map es como un for
//Proceso de validación
datosDelFormulario.map((valorInput) =>{

  switch(valorInput.nombre){
    case 'Carné': {

      if (valorInput.value === '' || valorInput.value === null){

        errors.push({
          valorInput:valorInput.nombre,
          mensaje: '*Campo requerido',
          estado:true
        });
      }else{
        errors.push({
          valorInput:valorInput.nombre,
          mensaje:'',
          estado:false
        })
      }

      break;
    }

    case 'Contraseña': {
      if (valorInput.value === '' || valorInput.value === null){

        errors.push({
          valorInput:valorInput.nombre,
          mensaje: '*Campo requerido',
          estado:true
        });
      }else{
        errors.push({
          valorInput:valorInput.nombre,
          mensaje: '', 
          estado:false
        })
      }
      break;
    }
  }

})

//Retornamos el total de validaciones
return errors;
};




    return (
        <section class="section-padding">
        <div class="container"></div>
            <div class="title">Iniciar Sesión Administrador </div>
            <div class="content">
              <form action="#"></form>
                <div class="user-details">
                  <div class="input-box">
                  <div class="input-box">
                    <span class="details">Carné</span>
                    <input type="text" placeholder="Ingresa tu Carné" required></input>
                  </div>
                  <div class="input-box">
                    <span class="details">Contraseña</span>
                    <input type="text" placeholder="Ingresa tu Contraseña" required></input>
                  </div>
                </div>
                 <div>
                 
                
                <div class="button">
                  <input type="submit" value="Registrarse"></input>
                </div>
              </div>
            </div>
          </div>
    </section>
    )
     
 
}
export default IniciarSesionAdmi 