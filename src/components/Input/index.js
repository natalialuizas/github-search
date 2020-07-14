import React from 'react';
import './style.css'

const input = ({type,placeholder, value, onChange, className}) => {
    return(
        <div className="input__container">
           <input 
           type={type} 
           placeholder={placeholder} 
           value={value} 
           onChange={onChange} 
           className={className} />
        </div>
    )
}

export default input