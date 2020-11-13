import React from "react";
import "./Sporticon.css";


const Sporticon=(props)=>{

    return (
    <div className="Sportitem">
      <img src={props.imagesrc}/>
    </div>
    )
}

export default Sporticon;