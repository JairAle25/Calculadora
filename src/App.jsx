import { useState } from 'react'
import { Boton } from './Boton'
import { iconos } from './Constants/Icons';
import { verificarCuenta,verificarRepetidos } from './Logic/verifications';
import './App.css'

function App() {

  const [cuentaAnterior,setCuentaAnterior]=useState("");
  const [cuentaEnPantalla,setCuentaEnPantalla]=useState("");
  const [cuentaRealizar,setCuentaRealizar]=useState("");

  const borrarCuenta=(cuenta)=>{
    let cuentaArray = cuenta.split('');
    cuentaArray.pop();
    return cuentaArray.join('');
  }

  const actualizarCuenta =(valor,tipo)=>{
    let cuentaMostar = cuentaEnPantalla;
    let cuentaArealizar=cuentaRealizar;
    let cuentaEcha;

    if(verificarRepetidos(cuentaMostar,valor,tipo)===false){
      return;
    }

    //LA ACA CREAMOS LA CUENTA QUE SE VA A EJECUTAR
    if((tipo=="mat"&&valor!=="×"&&valor!=="÷")||tipo=="num"){
      cuentaArealizar+=`${valor}`;
    }
    else if(valor==="×"){
      if(verificarCuenta(cuentaMostar)===true){
        cuentaArealizar+="*";
      }
    }
    else if(valor==="÷"){
      if(verificarCuenta(cuentaMostar)===true){
        cuentaArealizar+="/";
      }
    }

    //ACA LIMPIAMOS Y HACEMOS LA CUENTA QUE SE VA A VER
    if(tipo==="limpiar"){
      cuentaMostar = "";
      cuentaArealizar="";
      cuentaEcha = "";
      setCuentaAnterior(cuentaEcha);
    }
    else if(tipo==="borrar"){
      cuentaMostar=borrarCuenta(cuentaMostar);
      cuentaArealizar=borrarCuenta(cuentaArealizar);
    }
    else{
      if(valor==="×"||valor==="÷"){
        if(verificarCuenta(cuentaMostar)===true){
          cuentaMostar+=`${valor}`;
        }
      }else{
        cuentaMostar+=`${valor}`;
      }
      
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
