import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import DashboardSidebar from '../Shared/DashboardSidebar/DashboardSidebar';
import DashboardTopBar from './../Shared/DashboardTopBar/DashboardTopBar';
import PayCard from './PayCard';
// import SubmittedCard from './SubmittedCard/SubmittedCard';
import SubmittedCard from '../Dashboard/SubmitedData/SubmittedCard';
const SubmitOrder = () => {
    const { id } = useParams();
    const [SelectedService, setSelectedService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5200/services/${id}`)
            .then(res => res.json())
            .then(data => setSelectedService(data))
    }, [id])

    const handleSubmitted = (paymentInfo) => {
        const eventData = {
            id: SelectedService.id,
            planningType: SelectedService.planningType,
            price: SelectedService.price,
            monthOrYear: SelectedService.monthOrYear,
            savingAmount: SelectedService.savingAmount,
            email:paymentInfo
        }
      console.log(paymentInfo);
    const url = 'http://localhost:5200/TakeNewOrder';

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
                <div class="row">
                    <DashboardSidebar></DashboardSidebar>
                    <div class="col-md-4">
                        <div class="card-body">
                            <h5 class="card-title">Selected Services</h5>
                            {
                                <SubmittedCard key={SelectedService.id} getOrderedData={SelectedService}></SubmittedCard>
                            }
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="card-body">
                            <h5 class="card-title">CheckOut</h5>
                            
                                <PayCard handlePayment={handleSubmitted}></PayCard>
                            
                            <></>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmitOrder;