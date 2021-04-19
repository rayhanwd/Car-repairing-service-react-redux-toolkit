import React from 'react';
const cardStyle = {
    
        background:'lavender',
        textAlign: 'center',
        padding: '20px',
        width: '400px',
        borderRadius: '10px',
   
}
const CustomerOrderedListCard = (props) => {
    const {planningType, price, monthOrYear, savingAmount,status } = props.OrderInfo;
   
    return (
        <div style={{display:'inline-block',margin:'20px'}}>
            <div style={cardStyle} className="card-content">
            <h5 class="card-title mt-4">{planningType}</h5>
            <h1 class="mt-4"><span>$</span>{price}</h1>
            <h6 class="mt-4">{monthOrYear}</h6>
            <span class="mt-4">Save {savingAmount}%</span>
            {status==="null"?<h6>pending</h6>:
            <h6>{status}</h6>
            }
        </div>
        </div>
    );
};

export default CustomerOrderedListCard;