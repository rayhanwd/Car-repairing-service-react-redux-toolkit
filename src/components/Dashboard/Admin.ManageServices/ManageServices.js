import React, { useState, useEffect } from 'react';
import TopBar from './../TopBar/TopBar';
import SideBar from './../SideBar/SideBar';
import ManageOrderTable from './ManageOrderTable';
const AdminManageServices = () => {
  const [Services, setServices] = useState([]);
  
  useEffect(() => {

    fetch(`https://whispering-falls-52253.herokuapp.com/services`)
      .then(res => res.json())
      .then(GetManageData => setServices(GetManageData))
  }, [])

  return (
    <>
      <TopBar></TopBar>
      <div className="container-fluid">
        <div className="row">
          <SideBar></SideBar>
            <div class="col-md-9 m-5">
              <div class="card-body p-5 shadow-sm">
                <h5 class="card-title">ManageServices</h5>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Vpn year planning</th>
                      <th scope="col">Vpn price $
</th>
                      <th scope="col">Set month
</th>
                      <th scope="col">Saving amount %
</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Services.map(serviceData =><ManageOrderTable TableData={serviceData}></ManageOrderTable>
                        )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default AdminManageServices;