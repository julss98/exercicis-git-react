import "./Button.css"
import { useState } from "react";

function Button () {
    const [color, setColor] = useState (0);
    const setClassName = () => {setColor (color < 2 ? (previousColor) => previousColor + 1 : (previousColor) => previousColor = 1)}
    
    const [premut, setPremut] = useState (false)
    const setPremutState = () => {setPremut ((previousState) => !previousState)}

    return(
        <div className="buttonContainer">
            <button 
            className={color === 0 ? "greenButton" : color === 1? "blueButton" : "uncoloredButton"} 
            onClick={setClassName}
            onMouseDown={setPremutState}
            onMouseUp={setPremutState}
            >Sóc un botó</button>
            <div className="premutText">
            {premut ? <p>Premut</p> : null}
            </div>
        </div>
    )
}


export default Button;