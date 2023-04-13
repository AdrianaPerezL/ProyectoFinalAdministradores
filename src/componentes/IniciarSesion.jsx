import React from "react";
import "../assets/styles/IniciarSesionAdmi.css"
import Fondo from "../assets/img/Fondo.png";
import { useState } from "react";

function IniciarSesion (){
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

  switch(valorInput.Carné){
    case 'Carné': {

      if (valorInput.value === '' || valorInput.value === null){

        errors.push({
          valorInput:valorInput.Carné,
          mensaje: '*Campo requerido',
          estado:true
        });
      }else{
        errors.push({
          valorInput:valorInput.Carné,
          mensaje:'',
          estado:false
        })
      }

      break;
    }

    case 'Contraseña': {
      if (valorInput.value === '' || valorInput.value === null){

        errors.push({
          valorInput:valorInput.Contraseña,
          mensaje: '*Campo requerido',
          estado:true
        });
      }else{
        errors.push({
          valorInput:valorInput.Contraseña,
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
  <>
    <div className="vh-100" style={{ backgroundImage: `url(${Fondo})`,  backgroundPosition:"center",
        backgroundSize:"cover" }}>
      <section className="bodyLogin">
        <div className="card col-8 col-sm-4 col-md-4 ">
          <div className="card-body">
            <h5 className="card-title text-center w-100">Iniciar Sesión Administrador</h5>
            <form id="" className="w-100" onSubmit={handleLoginSession}>
              <div className="form-group w-100">
                <label className="mt-4">Carné</label>
                <br />
                <input
                  className="w-100 mt-2 mb-2 form-control"
                  type="Carné"
                  placeholder="Escribe tu Carné"
                  id="inputEmail"
                  aria-describedby="inputGroup-sizing-default"
                  name="Carné"
                  value={formulario.Carné}
                  onChange={ManejarEventoDeInputs}
                />
                {
                  alerta.filter(input => input.valorInput == "email" && input.estado === true).map(message => (
                    <div>
                      <span className='text-danger'>{message.mensaje}</span>
                    </div>
                  ))
                }
                <label className="mt-4">Contraseña</label>
                <input
                  className="w-100 mt-2 mb-2 form-control"
                  type="password"
                  placeholder="Escribe tu Contraseña"
                  id="inputEmail"
                  aria-describedby="inputGroup-sizing-default"
                  name= 'Contraseña'
                  value={formulario.Contraseña}
                  onChange={ManejarEventoDeInputs}
                />
                {
                  alerta.filter(input => input.valorInput == "contraseña" && input.estado === true).map(message => (
                    <div>
                      <span className='text-danger'>{message.mensaje}</span>
                    </div>
                  ))
                }
              </div>
              <div className="botondiv w-100">
                <button className="mt-2 btn-login w-100" type="submit">
                  <a href="" style={{textDecoration: "none" }}>Entrar</a>
                </button>
              </div>
              <div role="alert" id="alerta"></div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </>
);
}
 

export default IniciarSesion 