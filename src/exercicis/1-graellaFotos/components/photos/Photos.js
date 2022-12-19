import "./Photos.css";
import { useState } from "react";

function Photos({image, id}){
    
 return(   
    <>
    <img className="photo" src={image} alt={id}/>
    </>
    
 )
}

export default Photos;

/*
function Photos({image, id}){
    //let nameOfClass = "photo"
    const [nameOfClass, setName] = "photo";
 return(   
    <>
    <img className={nameOfClass} src={image} alt={id} onClick={() => setName("bigPhoto")}/>
    </>
    
 )
}
*/