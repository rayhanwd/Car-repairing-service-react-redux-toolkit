import { faFacebook, faInstagram, faLinkedin, faSnapchat, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer class="black-bg pb-35">
        <div class="footer-top-wrap pt-85 pb-35">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-4">
                        <div class="footer-widget mb-50">
                            <div class="fw-title mb-25">
                                <h4 class="title">Our Network </h4>
                            </div>
                            <div class="textwidget">
                                <div class="fw-link">
                                    <ul>
                                        <li>
                                            <a href="https://shtheme.org/demosd/hosbit/?page_id=43">About Us</a>
                                        </li>
                                        <li>
                                            <Link to="/">Careers Customers</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Community</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Our Team</Link>
                                        </li>
                                        <li>
                                            <a href="https://shtheme.org/demosd/hosbit/?page_id=45">Support</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-4">
                        <div class="footer-widget mb-50">
                            <div class="fw-title mb-25">
                                <h4 class="title">Quick Links </h4>
                            </div>
                            <div class="textwidget">
                                <div class="fw-link">
                                    <ul>
                                        <li>
                                            <a href="https://shtheme.org/demosd/hosbit/?page_id=49">Web Hosting</a>
                                        </li>
                                        <li>
                                            <a href="https://shtheme.org/demosd/hosbit/?page_id=47">Reseller Hosting</a>
                                        </li>
                                        <li>
                                            <a href="https://shtheme.org/demosd/hosbit/?page_id=51">VPS Server</a>
                                        </li>
                                        <li>
                                            <a href="https://shtheme.org/demosd/hosbit/?page_id=49">Dedicated Server</a>
                                        </li>
                                        <li>
                                            <a href="https://shtheme.org/demosd/hosbit/?page_id=47">WHMCS Bridge</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-4">
                        <div class="footer-widget mb-50">
                            <div class="fw-title mb-25">
                                <h4 class="title">Resources </h4>
                            </div>
                            <div class="textwidget">
                                <div class="fw-link">
                                    <ul>
                                        <li>
                                            <Link to="/">Help</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Events</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Live sessions</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Open source</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Documentation</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-4">
                        <div class="footer-widget mb-50">
                            <div class="fw-title mb-25">
                                <h4 class="title">Support </h4>
                            </div>
                            <div class="textwidget">
                                <div class="fw-link">
                                    <ul>
                                        <li>
                                            <Link to="/">FAQ</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Sells</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Contact Support</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Network Status</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Product Services</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-overlay-icon">
                </div>
            </div>
            <div class="copyright-wrap">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-6 col-lg-5">
                            <div class="copyright-left-wrap">
                                <div class="logo">
                                    
                                    </div>
                                    <div class="copyright-social">
                                        <ul>
                                            <li>
                                                <Link to="/">
                                                <FontAwesomeIcon icon={faFacebook} />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                <FontAwesomeIcon icon={faYoutube} />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                <FontAwesomeIcon icon={faLinkedin} />    
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                <FontAwesomeIcon icon={faTwitter} /> 
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                <FontAwesomeIcon icon={faInstagram} />     
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                <FontAwesomeIcon icon={faSnapchat} /> 
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12">
                                <div class="copyright-text">
                                    <p>© 2021 HourseVpn. All rights reserved •</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;