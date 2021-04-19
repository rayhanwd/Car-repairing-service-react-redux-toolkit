import React,{ useState, useContext } from 'react';
import { UserContext } from '../../../App';
import TopBar from './../TopBar/TopBar';
import SideBar from './../SideBar/SideBar';
const AddCustomerReview = () => {
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

        const url = 'https://whispering-falls-52253.herokuapp.com/AddCustomerReview';

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
        <>
            <TopBar></TopBar>
            <div className="container-fluid">
                <div className="row">
                    <SideBar></SideBar>
                    <div class="col-md-9 mx-auto">
                        <div class="card-body shadow-sm mt-5">
                            <h5 class="card-title">Write a Customer review</h5>
                            <form className="m-5 p-5" onSubmit={handleSubmitted}>
                                <div class="mb-3 row">
                                    <label for="service id" class="col-sm-4 col-form-label">Your name</label>
                                    <div class="col-sm-10 col-md-7">
                                        <input onBlur={handleBlur} name="name" class="form-control" placeholder="john due" />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="Vpn year planning" class="col-sm-4 col-form-label">Company's name Designation</label>
                                    <div class="col-sm-10 col-md-7">
                                        <input onBlur={handleBlur} name="companyRef" class="form-control" placeholder="abc studio" />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="Vpn price" class="col-sm-4 col-form-label">Write a feedback</label>
                                    <div class="col-sm-10 col-md-7">
                                        <input onBlur={handleBlur} name="feedback" class="form-control" placeholder="write a review" />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <div style={{ marginLeft: '295px' }} class="col-sm-10 col-md-7 mt-3">
                                        <button class="custom-btn" type="submit" >Add to Customer review</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddCustomerReview;