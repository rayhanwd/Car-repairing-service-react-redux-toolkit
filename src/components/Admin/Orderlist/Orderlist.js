import React, { useState, useEffect } from 'react';
import AdminBar from '../../Shared/AdminBar/AdminBar';
import SideBarAdmin from '../../Shared/SideBarAdmin/SideBarAdmin';
import Table from './Table';
//ShowOrderList
const OrderList = () => {

  const [OrderList, SetOrders] = useState([]);
 
  useEffect(() => {

    fetch('https://whispering-falls-52253.herokuapp.com/ShowOrderList')
      .then(res => res.json())
      .then(OrderData => SetOrders(OrderData))
  }, [])
 
  return (
    <div className="container-fluid vh-100 overflow-hidden p-0">
      <AdminBar></AdminBar>
      <div class="card mb-3">
        <div class="row g-0">
          <SideBarAdmin></SideBarAdmin>
          <div class="col-md-9">
            <div class="card-body">
              <h5 class="card-title">OrderList</h5>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Plan name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Service time</th>
                    <th scope="col">PayWith</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                {
                  OrderList.map(order =><Table TableData={order}></Table>)
                    
                }
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;