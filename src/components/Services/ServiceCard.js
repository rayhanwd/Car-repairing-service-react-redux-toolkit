import React from 'react';
import { useHistory } from "react-router-dom";
const ServiceCard = (props) => {
    const{id,planningType,price,monthOrYear,savingAmount} = props.getData;
    const history = useHistory();
    const orderPushed = (id) => { 
        history.push(`SubmitOrder/${id}`);
    }
    return (
        <div className="col-md-4">
        <div class="card border-0 mb-5 pb-4">
                <div class="card-body text-center">
                <h5 class="card-title mt-4">{planningType}</h5>
                  <h1 class="mt-4"><span>$</span>{price}</h1>
                  <h6 class="mt-4">{monthOrYear}</h6>
                  <span class="mt-4">Save {savingAmount}%</span>
                  <br/>
                  <button onClick={()=>orderPushed(id)} class="custom-btn my-4">{planningType}</button>
                </div>
            </div>
            </div>
    );
};

export default ServiceCard;