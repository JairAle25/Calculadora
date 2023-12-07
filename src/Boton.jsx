import './Boton.css'

export const Boton = ({icon,tipo,actualizarCuenta}) => {

    let className = "btnIcon ";

    if(tipo=="num"){
        className+="btnNum";
    }
    if(tipo=="mat"||tipo=="limpiar"||tipo=="borrar"){
        className+="btnMat";
    }
    if(tipo=="igual"){
        className+="btnIgual";
    }
    return (  
        <>
            <button className={className} onClick={()=>actualizarCuenta(icon,tipo)}>{icon}</button>
        </>
    );
}