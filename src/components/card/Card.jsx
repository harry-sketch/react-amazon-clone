import React from 'react';
import "../card/Card.scss";


const Card = ({img}) => {
    return (
        <div className="card">
            <img src={img} alt="res" />
        </div>
    )
}

export default Card;
