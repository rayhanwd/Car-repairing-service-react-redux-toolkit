import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './../../../App';

const TopBar = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    return (
        <nav class="navbar navbar-light bg-light shadow-sm">
            <div>
               
                <img style={{width:'40px'}} class="avatar rounded-circle" src={loggedUser.photo} alt="" srcset=""/>
</div>
                <Link to="/admin" class="navbar-brand">Dashboard</Link>
           
        </nav>
    );
};

export default TopBar;