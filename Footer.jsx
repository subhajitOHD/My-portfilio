import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-new">
            <div className="hexagon-bg"></div>

            {/* Main Footer Content */}
            <div className="footer-container">
                <div className="footer-grid">

                    {/* Column 1: Brand & Social */}
                    <div className="footer-col col-brand">
                        <div className="footer-logo-new">
                            <i className="fas fa-laptop-code"></i> Subhajit<span>Developer</span>
                        </div>
                        <p className="footer-bio">
                            I help businesses grow. I'm always learning new things. I enjoy using my skills to help others and making a significant difference.
                        </p>
                        <div className="footer-social-circles">
                            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="social-circle"><i className="fab fa-whatsapp"></i></a>
                            <a href="https://www.facebook.com/share/1LG3Yen6ax/" target="_blank" rel="noopener noreferrer" className="social-circle"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://github.com/subhajitOHD" target="_blank" rel="noopener noreferrer" className="social-circle"><i className="fab fa-github"></i></a>
                            <a href="https://www.instagram.com/subha_tec09?igsh=ODhlZ290Z2c4NWYz" target="_blank" rel="noopener noreferrer" className="social-circle"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-menu">
                            <li><Link to="/services"><i className="fas fa-chevron-right"></i> Web & App Development</Link></li>
                            <li><Link to="/services"><i className="fas fa-chevron-right"></i> UI/UX Designer</Link></li>
                            <li><a href="#contact"><i className="fas fa-chevron-right"></i> Contact Us</a></li>
                            <li><Link to="/privacy"><i className="fas fa-chevron-right"></i> Privacy Policy</Link></li>
                            <li><Link to="/terms"><i className="fas fa-chevron-right"></i> Terms & Service</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Contact Info</h4>
                        <div className="contact-list">
                            <div className="contact-item">
                                <div className="contact-icon"><i className="fas fa-phone-alt"></i></div>
                                <span><br />+91 9863614566</span>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                                <span>subhajitdas1040@gmail.com<br /></span>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                                <span>Agartala Tripura, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="footer-col col-newsletter">
                        <h4 className="footer-heading"><Link to="/newsletter">Newsletter</Link></h4>
                        <p>Sign up to Private's weekly newsletter to get the latest updates.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Enter Your Email" required />
                            <button type="submit"><i className="fas fa-paper-plane"></i></button>
                        </form>
                    </div>
                </div>

                {/* Marquee Section */}
                <div className="footer-marquee">
                    <div className="marquee-content">
                        <span>App Development <i className="fas fa-star"></i></span>
                        <span>Digital Marketing <i className="fas fa-star"></i></span>
                        <span>E-Commerce Solutions <i className="fas fa-star"></i></span>
                        <span>UI/UX Design <i className="fas fa-star"></i></span>
                        <span>App Development <i className="fas fa-star"></i></span>
                        <span>Digital Marketing <i className="fas fa-star"></i></span>
                        <span>E-Commerce Solutions <i className="fas fa-star"></i></span>
                        <span>UI/UX Design <i className="fas fa-star"></i></span>
                    </div>
                </div>

                <div className="footer-divider-line">
                    <i className="fas fa-asterisk"></i>
                </div>

                {/* Bottom Footer */}
                <div className="footer-bottom-new">
                    <p>Copyright © {new Date().getFullYear()} reserved by Subhajit Developer | Powered by Subhajit Das</p>
                </div>
            </div>

            {/* Back to Top */}
            <a href="#home" className="back-to-top">
                <i className="fas fa-arrow-up"></i>
            </a>
        </footer>
    );
};

export default Footer;
