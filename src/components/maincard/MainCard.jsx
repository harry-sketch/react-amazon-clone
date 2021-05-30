import React from 'react';
import {Link} from "react-router-dom";
import "../maincard/MainCard.scss";

const MainCard = ({heading,img1,img2,img3,img4,brandhead1,brandhead2,brandhead3,brandhead4,cardlink,cardicon}) => {
    return (
        <div className="maincard">
             <div className="maincard__first">
                 <h3>{heading}</h3>
                 <div className="inside__main">
                     <div className="image__card">
                         <img src={img1} alt="main" />
                         <h5>{brandhead1}</h5>
                     </div>
                     <div className="image__card">
                         <img src={img2} alt="main" />
                         <h5>{brandhead2}</h5>
                     </div>
                     <div className="image__card">
                         <img src={img3} alt="main" />
                         <h5>{brandhead3}</h5>
                     </div>
                     <div className="image__card">
                         <img src={img4} alt="main" />
                         <h5>{brandhead4}</h5>
                     </div>
                 </div>
             </div>
             
             <div className="maincard__second">
                 <Link to="" className="maincard__link">
                     {cardlink}
                 </Link>
                 {cardicon}
                 </div>
             
        </div>
    )
}

export default MainCard;
