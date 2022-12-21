import { useState } from "react";

function Estructura ({title, content}) {
    const [acordio, setAcordio] = useState (false);
    console.log (content)
    return(
        <>
            <div className="acordio">
              
                <button onClick={() => setAcordio((valorActual) => !valorActual)}>{title}</button>
                {acordio ? <p>{content}</p> : null}
            </div>  
        </>
        ) 
}

export default Estructura;

/*
const [acordio, setAcordio] = useState (false);

    return(
        <>
            <div className="acordio">
              
                <button onClick={() => setAcordio((valorActual) => !valorActual)}>{title}</button>
                <p>{acordio ? {content} : ""}</p> 
            </div>  
        </>
        )
*/