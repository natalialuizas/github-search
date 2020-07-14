import React from 'react';
import './style.css'

import startIcon from '../../assets/images/icons/star-icon.svg'

const Card = ({name, description, star}) => {
    return(
        <article className="card__container">
            <h2 className="card__title">{name}</h2>
            <p className="card__description">{description}</p>
            <div className="icon__box">
            <img src={startIcon} alt="icon star"></img>
            <span>{star}</span>
            </div>
        </article>
    )

}

export default Card