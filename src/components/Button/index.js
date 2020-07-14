import React from 'react';
import './style.css'

const Button = ({className, onClick, icon}) => {
  return(
      <div className="btn__container">
        <button 
         className={className} 
         onClick={onClick}>
          <img src={icon} alt="icon da pesquisa" />
        </button>
      </div>
  )
}

export default Button