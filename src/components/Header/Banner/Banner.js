import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div class="container">
	<div class="page-welcome">
		<div class="row align-items-center">
			<div class="col-lg-6 col-12">
				<div class="page-welcome-content domain-hero-content">
					<h3 class="text-white">build your dream</h3>
					<h1  class="text-white">website secure with 
						<strong>Hourse
							<span>Vpn</span>
						</strong>
						<br/>Best server
						</h1>
						<p class="text-white">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical latin making it over.</p>
						<button class="custom-btn"><Link to='/services'>Get Started</Link></button>
					</div>
				</div>
				<div class="col-md-6">
					<div class="fadeInUp">
						<img src="https://s1.nordcdn.com/nordvpn/media/1.955.0/images/campaigns/final-sale-2021/final-sale-2021-hero.webp" alt="" srcset=""/>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Banner;