import React, { useContext, useEffect, useState } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import { RiLuggageCartFill } from "react-icons/ri";
import { RiFileEditFill } from "react-icons/ri";
import { FaLuggageCart } from 'react-icons/fa';
import { RiFunctionLine } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";
import { UserContext } from './../../../App';
const SideBar = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const [CheckAdmin, setAdmin] = useState(false);

    useEffect(() => {
        fetch('https://whispering-falls-52253.herokuapp.com/findAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedUser.email })
        })
            .then((res) => res.json())
            .then((data) => setAdmin(data))
    }, [])
    return (
        <div class="col-md-2 vh-100 bg-custom">

            <Link to="/checkOutOrder" class="Admin-link"><RiLuggageCartFill class="mr-2" />Your cart</Link>
            <Link to="/CustomerOrderList" class="Admin-link"><RiLuggageCartFill class="mr-2" />YourOrderedList</Link>
            <Link to="/addCustomerReview" class="Admin-link"><RiFileEditFill class="mr-2" />Write review</Link>
            {CheckAdmin && <Link to="/manageOrder" class="Admin-link"><FaLuggageCart class="mr-2" />OrderList</Link>}
            {CheckAdmin && <Link to="/addService" class="Admin-link"><RiEditBoxLine class="mr-2" />AddService</Link>}
            {CheckAdmin && <Link to="/makeAdmin" class="Admin-link"><RiContactsLine class="mr-2" />MakeAdmin</Link>}
            {CheckAdmin && <Link to="/manageServices" class="Admin-link"><RiFunctionLine class="mr-2" />ManageServices</Link>}
        </div>
    );
};

export default SideBar;