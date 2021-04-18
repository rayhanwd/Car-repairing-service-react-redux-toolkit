import React from 'react';
import './SideBarAdmin.css';
import { Link } from 'react-router-dom';
import { FaLuggageCart } from 'react-icons/fa';
import { RiFunctionLine } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";

const SideBarAdmin = () => {
    return (

        <div class="col-md-3 vh-100 bg-custom">
            <Link to="/orderlist" class="Admin-link"><FaLuggageCart class="mr-2"/>OrderList</Link>
            <Link to="/addService" class="Admin-link"><RiEditBoxLine class="mr-2"/>AddService</Link>
            <Link to="/makeAdmin" class="Admin-link"><RiContactsLine class="mr-2"/>MakeAdmin</Link>
            <Link to="/manageServices" class="Admin-link"><RiFunctionLine class="mr-2"/>ManageServices</Link>
        </div>
    );
};

export default SideBarAdmin;