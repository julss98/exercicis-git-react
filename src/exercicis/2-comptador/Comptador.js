import "./Comptador.css";
import { useState } from "react";

function Comptador() {
     
    const [counterNumber, setSuma1] = useState(0) 
        
    return (
      <div className="display">
        <p className="numberBox">{counterNumber}</p>
        <div>
            <button className="numberButton" onClick={() => setSuma1( (counterNumber>9) ? counterNumber : (valorActual) => valorActual+1)}>+1</button>
            <button className="numberButton" onClick={() => setSuma1( (counterNumber<1) ? counterNumber : (valorActual) => valorActual-1)}>-1</button>
        </div>
             <button className="numberButton2" onClick={() => setSuma1( (counterNumber>5) ? counterNumber : (valorActual) => valorActual+5)}>+5</button>
      </div>
    );
  }
  
  export default Comptador;