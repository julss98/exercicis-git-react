import { useState } from "react";

function Estructura () {
    const [acordio, setAcordio] = useState(false) 
    return(
    <div>
            <div className="acordio">
                <button onClick={() => setAcordio((valorActual) => !valorActual)}>{Title}</button>
                <p>{acordio ? "Contingut A" : ""}</p>  
            </div>  
    </div>
    )
}

export default Estructura;
