import React from 'react';
import './style.css'

const MainTitle = ({ title }) => {
    return(
        <div className="title__container">
           <h1>{title}</h1> 
        </div>
    )

}

export default MainTitle