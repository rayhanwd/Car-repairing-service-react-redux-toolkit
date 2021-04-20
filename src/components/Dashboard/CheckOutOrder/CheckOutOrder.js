import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CheckOutCard from './CheckOutCard';
import PayCard from './PayCard/PayCard';
import TopBar from './../TopBar/TopBar';
import SideBar from './../SideBar/SideBar';
const CheckOutOrder = () => {
    const { id } = useParams();
    const [SelectedService, setSelectedService] = useState({});

    useEffect(() => {
        fetch(`https://whispering-falls-52253.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setSelectedService(data))
    }, [id])

    const handleSubmitted = (paymentInfo , e) => {
        e.preventDefault()
        const eventData = {
            id: SelectedService.id,
            planningType: SelectedService.planningType,
            price: SelectedService.price,
            monthOrYear: SelectedService.monthOrYear,
            savingAmount: SelectedService.savingAmount,
            status:'null',
            email: paymentInfo
        }

        const url = 'https://whispering-falls-52253.herokuapp.com/TakeNewOrder';

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
            {
                SelectedService.id === undefined ?
                    <div>
                        <TopBar></TopBar>
                        <div className="container-fluid">
                            <div className="row">
                                <SideBar></SideBar>
                               
                                    <div class="col-md-9">
                                        <div class="card mt-5 m-4">
                                            <div class="card-body">
                                                <h5 class="text-center card-title">You have no selected services</h5>
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>
                        </div>
                        </div> :
                    <div>
                            <TopBar></TopBar>
                            <div className="container-fluid">
                                <div className="row">
                                    <SideBar></SideBar>
                                    <div className="d-flex">
                                        <div class="col-md-7">
                                            <div class="card mt-5 m-4">
                                                <div class="card-body">
                                                    <h5 class="card-title">Selected Services</h5>
                                                    {
                                                        <CheckOutCard key={SelectedService.id} CheckOutData={SelectedService}></CheckOutCard>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="card mt-5 m-3">
                                                <div class="card-body">
                                                    <h5 class="card-title">CheckOut</h5>
                                                    <PayCard handlePayment={handleSubmitted}></PayCard>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
            }
        </>
    );
};

export default CheckOutOrder;