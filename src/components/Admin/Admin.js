import React from 'react';
import AdminBar from '../Shared/AdminBar/AdminBar';
import SideBarAdmin from '../Shared/SideBarAdmin/SideBarAdmin';

const Admin = () => {
    return (
        <div className="container-fluid vh-100 overflow-hidden p-0">
            <AdminBar></AdminBar>
            <div class="card mb-3">
                <div class="row g-0">
                  <SideBarAdmin></SideBarAdmin>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title">Admin</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;