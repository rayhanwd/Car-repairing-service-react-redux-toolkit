import React, { useState, useEffect } from 'react';
import Table from './Table';
import TopBar from './../TopBar/TopBar';
import SideBar from './../SideBar/SideBar';
//ShowOrderList
const AdminOrderList = () => {

  const [OrderList, SetOrders] = useState([]);
 
  useEffect(() => {

    fetch('https://whispering-falls-52253.herokuapp.com/ShowOrderList')
      .then(res => res.json())
      .then(OrderData => SetOrders(OrderData))
  }, [])
 
  return (
    <>
    <TopBar></TopBar>
    <div className="container-fluid">
        <div className="row">
            <SideBar></SideBar>
            <div class="card-body shadow mt-5">
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
    </>
  );
};

export default AdminOrderList;