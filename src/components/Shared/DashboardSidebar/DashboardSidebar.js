import React from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingBasketLine } from "react-icons/ri";
import { RiLuggageCartFill } from "react-icons/ri";
import { RiFileEditFill } from "react-icons/ri";
const DashboardSidebar = () => {
    return (
        <div class="col-md-3 vh-100 bg-custom">
            <Link to="/SubmitOrder" class="Admin-link"><RiShoppingBasketLine class="mr-2"/>Your cart</Link>
            <Link to="/YourOrderedList" class="Admin-link"><RiLuggageCartFill class="mr-2"/>YourOrderedList</Link>
            <Link to="/WriteReview" class="Admin-link"><RiFileEditFill class="mr-2"/>Write review</Link>
        </div>
    );
};

export default DashboardSidebar;