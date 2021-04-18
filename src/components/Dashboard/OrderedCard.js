import React from 'react';
const cardStyle = {
    
        background:'lavender',
        textAlign: 'center',
        padding: '20px',
        width: '400px',
        borderRadius: '10px',
   
}
const OrderedCard = (props) => {
    const {planningType, price, monthOrYear, savingAmount } = props.OrderInfo;
   
    return (
        <div style={cardStyle} className="card-content">
            <h5 class="card-title mt-4">{planningType}</h5>
            <h1 class="mt-4"><span>$</span>{price}</h1>
            <h6 class="mt-4">{monthOrYear}</h6>
            <span class="mt-4">Save {savingAmount}%</span>
            
        </div>
    );
};

export default OrderedCard;