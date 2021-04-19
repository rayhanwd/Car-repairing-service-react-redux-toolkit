import React from 'react';
import TopBar from './TopBar/TopBar';
import SideBar from './SideBar/SideBar';
const Dashboard = () => {
  return (
    <>
      <TopBar></TopBar>
      <div className="container-fluid">
        <div className="row">
        <SideBar></SideBar>
        <div class="col-md-9">
        <h4 className="text-center mt-5">Welcome Dashboard</h4>
        </div>
        </div>
      </div>

    </>
  );
};

export default Dashboard;