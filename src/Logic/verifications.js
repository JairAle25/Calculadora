export const verificarCuenta=(cuenta)=>{
    let cuentaArray = cuenta.split('');
    if(cuentaArray[cuentaArray.length-1]==="×"||cuentaArray[cuentaArray.length-1]==="÷"){
        return false;
    }
    return true;
}

export const verificarRepetidos =(cuenta , valor,tipo)=>{
    let cuentaArray = cuenta.split('');
    if(cuentaArray[cuentaArray.length-1]===valor&&tipo==="mat"){
        return false;
    }
    return true;
}