import { useState } from 'react'
import { Boton } from './Boton'
import './App.css'

const iconos=[
  {icon:"(", tipo:"mat"},
  {icon:")", tipo:"mat"},
  {icon:"%", tipo:"mat"},
  {icon:"CE", tipo:"limpiar"},
  {icon:"7", tipo:"num"},
  {icon:"8", tipo:"num"},
  {icon:"9", tipo:"num"},
  {icon:"÷", tipo:"mat"},
  {icon:"4", tipo:"num"},
  {icon:"5", tipo:"num"},
  {icon:"6", tipo:"num"},
  {icon:"×", tipo:"mat"},
  {icon:"1", tipo:"num"},
  {icon:"2", tipo:"num"},
  {icon:"3", tipo:"num"},
  {icon:"-", tipo:"mat"},
  {icon:"0", tipo:"num"},
  {icon:".", tipo:"num"},
  {icon:"=", tipo:"igual"},
  {icon:"+", tipo:"mat"},

]

function App() {

  const [cuentaAnterior,setCuentaAnterior]=useState("");
  const [cuentaEnPantalla,setCuentaEnPantalla]=useState("");
  const [cuentaRealizar,setCuentaRealizar]=useState("");

  const actualizarCuenta =(valor,tipo)=>{
    let cuentaMostar = cuentaEnPantalla;
    let cuentaArealizar=cuentaRealizar;
    let cuentaEcha;

    //LA ACA CREAMOS LA CUENTA QUE SE VA A EJECUTAR
    if((tipo=="mat"&&valor!=="×"&&valor!=="÷")||tipo=="num"){
      cuentaArealizar+=`${valor}`;
    }
    else if(valor==="×"){
      cuentaArealizar+="*";
    }
    else if(valor==="÷"){
      cuentaArealizar+="/";
    }

    //ACA LIMPIAMOS Y HACEMOS LA CUENTA QUE SE VA A VER
    if(tipo==="limpiar"){
      cuentaMostar = "";
      cuentaArealizar="";
      cuentaEcha = "";
      setCuentaAnterior(cuentaEcha);
    }
    else{
      cuentaMostar+=`${valor}`;
    }

    ///MOSTRAMOS RESULTADO Y GUARDAMOS LA CUENTA QUE SE HIZO
    if(tipo==="igual"){
        cuentaMostar = eval(cuentaRealizar);
        cuentaEcha = cuentaEnPantalla;
        setCuentaAnterior(cuentaEcha);
      
    }

    setCuentaEnPantalla(cuentaMostar);
    setCuentaRealizar(cuentaArealizar);
  }

  return (
    <main className='content-Calc'>
      <div className='content-calc-width'>
        <h1>HOLA MUNDO</h1>
        <div className='Content-Calculo'>
          <p className='cuentaAnterior'>{cuentaAnterior}</p>
          <p className='numElegido'>{cuentaEnPantalla}</p>
        </div>
        <div className='Content-icons'>
          {iconos.map(icons => <Boton key={icons.icon} icon={icons.icon} tipo={icons.tipo} actualizarCuenta={actualizarCuenta}></Boton>)}
        </div>
      </div>
    </main>
  )
}

export default App
