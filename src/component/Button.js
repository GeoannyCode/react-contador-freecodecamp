import React from "react";
import '../css/Button.css'

function Button({ text, buttonClick, click }){
    return(
      <button className={buttonClick ? "btn-clic" : "btn-reset"}
        onClick={click}
      >
          {text}
      </button>  
    );
}

export default Button;