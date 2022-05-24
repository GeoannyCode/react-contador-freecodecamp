import React from "react";

function Button({ text, buttonClick, click }){
    return(
      <button className={buttonClick ? "btn-clic" : "btn-rest"}
        onClick={click}
      >
          {text}
      </button>  
    );
}

export default Button;