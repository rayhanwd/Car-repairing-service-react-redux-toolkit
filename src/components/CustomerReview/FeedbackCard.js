import React from 'react';

const FeedbackCard = (props) => {
    const { username, companyRef, feedback,photo } = props.GetFeedbackData;
    return (
        <div class="col-md-4 my-2">
            <div class="card border-0 shadow rounded-lg">
                <div class="card-body">
                    <div class="d-flex">
                    <img style={{width:'40px'}} class="avatar rounded-circle" src={photo} alt="" srcset=""/>
                    <h5 class="card-name ml-3 my-2">{username}</h5>
                    </div>
                    <h6 class="card-title my-2">{companyRef}</h6>
                    <p class="card-text">{feedback}</p>
                </div>
            </div>
           </div>


    );
};

export default FeedbackCard;