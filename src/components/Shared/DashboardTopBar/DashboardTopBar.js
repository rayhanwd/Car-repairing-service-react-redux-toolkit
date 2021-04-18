import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './../../../App';

const DashboardTopBar = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    return (
        <nav class="navbar navbar-light bg-light">
            <div>
               
                <img style={{width:'40px'}} class="avatar rounded-circle" src={loggedUser.photo} alt="" srcset=""/>
</div>
                <Link to="/dashboard" class="navbar-brand">User Dashboard</Link>
           
        </nav>
    );
};

export default DashboardTopBar;