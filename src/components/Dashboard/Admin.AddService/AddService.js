import React, { useState } from 'react';
import TopBar from './../TopBar/TopBar';
import SideBar from './../SideBar/SideBar';
const AdminAddService = () => {
    const[inputData,setData] = useState({});
    const handleBlur =(e)=>{
        const newData = {...inputData};
        newData[e.target.name] = e.target.value;
        setData(newData);
    }
    const handleSubmitted = () => {
        const FormData = {
            id: inputData.serviceId,
            planningType: inputData.planningType,
            price: inputData.vpnPrice,
            monthOrYear: inputData.monthOrYearSetting,
            savingAmount: inputData.savingAmount,
        }
      
    const url = 'https://whispering-falls-52253.herokuapp.com/AddService';

    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(FormData)
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
                        <div class="card-body m-5 shadow-sm">
                            <h5 class="card-title">Add Services</h5>
                            <form onSubmit={handleSubmitted}>
                                <div class="mb-3 row">
                                    <label for="service id" class="col-sm-2 col-form-label">Service id</label>
                                    <div class="col-sm-10 col-md-7">
                                        <input onBlur={handleBlur} name="serviceId" class="form-control" placeholder="D0FWU76F"/>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="Vpn year planning" class="col-sm-2 col-form-label">Vpn year planning</label>
                                    <div class="col-sm-10 col-md-7">
                                        <input onBlur={handleBlur} name="planningType" class="form-control" placeholder="2-year plan"/>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="Vpn price" class="col-sm-2 col-form-label">Vpn price</label>
                                    <div class="col-sm-10 col-md-7">
                                        <input onBlur={handleBlur} name="vpnPrice" class="form-control" placeholder="13"/>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="Set month" class="col-sm-2 col-form-label">Set month</label>
                                    <div class="col-sm-10 col-md-7">
                                        <input onBlur={handleBlur} name="monthOrYearSetting" class="form-control" placeholder="per month / two month/six month"/>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="Saving amount" class="col-sm-2 col-form-label">Saving amount</label>
                                    <div class="col-sm-10 col-md-7">
                                        <input onBlur={handleBlur} name="savingAmount" class="form-control" placeholder="57/34/65"/>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <div style={{ marginLeft: '188px' }} class="col-sm-10 col-md-7 mt-3">
                                        <button class="custom-btn" type="submit" >Add service</button>
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

export default AdminAddService;