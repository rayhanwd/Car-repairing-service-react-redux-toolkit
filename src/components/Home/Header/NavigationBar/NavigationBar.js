import React from 'react';
import {faAlignRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom'; 
const NavigationBar = () => {

    return (
<nav class="navbar navbar-expand-lg">
<Link to="/" class="navbar-brand"><h3 style={{fontFamily:'cursive'}}>Hourse Vpn</h3></Link>
  <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <FontAwesomeIcon icon={faAlignRight} />
   
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link class="nav-link mr-5" to="/home">Home</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link mr-5" to="/services">Services</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link mr-5" to="/shop">Shop</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link mr-5" to="/dashboard">Admin</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link mr-5" to="/blog">Blog</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link mr-5" to="/contact">Contact</Link>
      </li>
    </ul>
    <Link to="/login"><button type="button" class="custom-btn">LogIn</button></Link>
  </div>
</nav>
    );
};

export default NavigationBar;