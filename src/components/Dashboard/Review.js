import React,{ useState, useContext } from 'react';
import DashboardSidebar from '../Shared/DashboardSidebar/DashboardSidebar';
import DashboardTopBar from './../Shared/DashboardTopBar/DashboardTopBar';
import { UserContext } from '../../App';
const Review = () => {
    const [loggedUser, setLoggedUser] =useContext(UserContext);
    console.log(loggedUser.photo);
    const [inputData, setData] = useState({});
    const handleBlur = (e) => {
        const newData = { ...inputData };
        newData[e.target.name] = e.target.value;
        setData(newData);
    }
    const handleSubmitted = () => {
        const eventData = {
            username: inputData.name,
            photo:loggedUser.photo,
            companyRef: inputData.companyRef,
            feedback: inputData.feedback,
        }

        const url = 'https://whispering-falls-52253.herokuapp.com/AddReview';

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {

                }
            })
    }
    return (
        <div className="container-fluid vh-100 overflow-hidden p-0">
            <DashboardTopBar></DashboardTopBar>
            <div class="card mb-3">
                <div class="row g-0">
                    <DashboardSidebar></DashboardSidebar>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title">Write a review</h5>
                            <form onSubmit={handleSubmitted}>
                                <div class="mb-3 row">
                                    <label for="service id" class="col-sm-2 col-form-label">Your name</label>
                                    <div class="col-sm-10 col-md-7">
                                        <input onBlur={handleBlur} name="name" class="form-control" placeholder="john due" />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="Vpn year planning" class="col-sm-2 col-form-label">Company's name Designation</label>
                                    <div class="col-sm-10 col-md-7">
                                        <input onBlur={handleBlur} name="companyRef" class="form-control" placeholder="abc studio" />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="Vpn price" class="col-sm-2 col-form-label">Write a feedback</label>
                                    <div class="col-sm-10 col-md-7">
                                        <input onBlur={handleBlur} name="feedback" class="form-control" placeholder="write a review" />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <div style={{ marginLeft: '188px' }} class="col-sm-10 col-md-7 mt-3">
                                        <button class="custom-btn" type="submit" >Add to review</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;