import "./Carrusel.css";
import Imatges from "./components/Imatges";
import { useState } from "react";

const imatges = [
    {   src: "https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_960_720.jpg",
        alt: "Paisaje1",
        number: 1,
    },
    {   src: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
        alt: "Paisaje2",
        number: 2,
    },
    {   src: "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg",
        alt: "Paisaje3",
        number: 3,
    },
]

function Carrusel () {
    const [numeroImatge, setNumeroImatge] = useState (0);

    console.log ()
    return(
        <div className="carrusel">
            <button className="button" onClick={() => (numeroImatge < 1) ? setNumeroImatge (valorActual => valorActual = imatges.length - 1) : setNumeroImatge (valorActual => valorActual-1)}>anterior</button>

            <Imatges
            src = {imatges[numeroImatge].src}
            alt = {imatges[numeroImatge].alt}
            key = {imatges[numeroImatge].number}
            />

            <button className="button" onClick={() => (numeroImatge >= imatges.length - 1) ? setNumeroImatge (valorActual => valorActual = 0) : setNumeroImatge (valorActual => valorActual+1)}>posterior</button>
        </div>
    )
}

export default Carrusel