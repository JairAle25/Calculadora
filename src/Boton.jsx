import './Boton.css'

export const Boton = ({icon,tipo,actualizarCuenta}) => {

    let className = "btnIcon ";

    if(tipo=="num"){
        className+="btnNum";
    }
    if(tipo=="mat"){
        className+="btnMat";
    }
    if(tipo=="igual"){
        className+="btnIgual";
    }
    if(tipo=="limpiar"){
        className+="btnMat";
    }
    return (  
        <>
            <button className={className} onClick={()=>actualizarCuenta(icon,tipo)}>{icon}</button>
        </>
    );
}