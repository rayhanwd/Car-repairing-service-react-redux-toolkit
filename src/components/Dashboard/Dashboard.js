import React from 'react';
import DashboardSidebar from '../Shared/DashboardSidebar/DashboardSidebar';
import DashboardTopBar from './../Shared/DashboardTopBar/DashboardTopBar';

const Dashboard = () => {
    return (
        <div className="container-fluid vh-100 overflow-hidden p-0">
            <DashboardTopBar></DashboardTopBar>
            <div class="card mb-3">
                <div class="row g-0">
                  <DashboardSidebar></DashboardSidebar>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title">Dashboard</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;