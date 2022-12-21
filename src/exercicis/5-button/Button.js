import "./Button.css"
import { useState } from "react";

function Button () {
    const [color, setColor] = useState (0);
    const setClassName = () => {setColor (color < 2 ? (previousColor) => previousColor + 1 : (previousColor) => previousColor = 1)}
    return(
        <div className="buttonContainer">
            <button 
            className={color === 0 ? "greenButton" : color === 1? "blueButton" : "uncoloredButton"} 
            onClick={setClassName}
            >Sóc un botó</button>
        </div>
    )
}

export default Button;