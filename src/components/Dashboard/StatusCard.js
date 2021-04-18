import React from 'react';

const StatusCard = (props) => {
    const {status} = props.Get;
    return (
        <>
           <span>{status}</span> 
        </>
    );
};

export default StatusCard;