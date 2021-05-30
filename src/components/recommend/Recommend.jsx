import React from 'react';
import "../recommend/Recommend.scss";
import Button from "@material-ui/core/Button";

const Recommend = () => {
    return (
        <div className="recommend">
        
            <div className="inside__recommend">
            
                <h5>See personalized recommendations</h5>
                   <Button variant="contained">
                       Sign in
                   </Button>
                   <h6>New customer?<span>Start here.</span></h6>
                
            </div>
            
        </div>
    )
}

export default Recommend;
