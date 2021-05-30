import React from 'react';
import {Link} from "react-router-dom";
import "../singlecard/SingleCard.scss";

const SingleCard = ({heading,img,cardlink,cardicon}) => {
    return (
        <div className="singlecard">
        <div className="singlecard__first">
                 <h3>{heading}</h3>
                 <div className="inside__single">
                     <div className="image__card">
                         <img src={img} alt="main" />
                     </div>
                 </div>
             </div>
             
             <div className="singlecard__second">
                 <Link to="" className="singlecard__link">
                     {cardlink}
                 </Link>
                 {cardicon}
                 </div>
            
        </div>
    )
}

export default SingleCard;
