import React from 'react';
import "../uniquecard/UniqueCard.scss";
import Button from '@material-ui/core/Button';


const UniqueCard = ({heading,sign,img}) => {
    return (
        <div className="uniquecard">
         <div className="first__uniquecard">
             <h3>{heading}</h3>
             <Button variant="contained">
        {sign}
      </Button>
         </div>
         <div className="second__uniquecard">
             <img src={img} alt="img" />
         </div>
            
        </div>
    )
}

export default UniqueCard;
