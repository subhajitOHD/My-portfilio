import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section id="services" className="services section-padding">
            <div className="container">
                {/* Partners Band */}
                <div className="partners-band">
                    <div className="partner-logo">
                      
                    </div>
                    
                </div>

                {/* Section Header */}
               

                {/* Technical Services */}
                <h3 className="category-title">Technical <span className="text-primary">Services</span></h3>
                <div className="services-grid">
                    <div className="service-card dark">
                        <div className="icon-wrap">
                            <i className="fa-solid fa-code"></i>
                        </div>
                        <h3>Web Development</h3>
                        <p>Building modern, high-performance websites and web applications with the latest technologies.</p>
                    </div>

                    <div className="service-card dark highlight">
                        <div className="icon-wrap">
                            <i className="fa-solid fa-mobile-screen-button"></i>
                        </div>
                        <h3>App Development</h3>
                        <p>Creating intuitive and powerful mobile applications for both iOS and Android platforms.</p>
                    </div>

                    <div className="service-card dark">
                        <div className="icon-wrap">
                            <i className="fa-solid fa-pen-nib"></i>
                        </div>
                        <h3>UI/UX Design</h3>
                        <p>Designing user-centric interfaces and meaningful experiences that engage and delight users.</p>
                    </div>

                </div>
                {/* Non-Technical Services */}
                <h3 className="category-title mt-60">Non-Technical <span className="text-primary">Services</span></h3>
                <div className="services-grid second-grid">
                    <div className="service-card dark">
                        <div className="icon-wrap">
                            <i className="fa-solid fa-keyboard"></i>
                        </div>
                        <h3>Data Entry</h3>
                        <p>Precise and efficient data management and entry services to streamline your operations.</p>
                    </div>

                    <div className="service-card dark">
                        <div className="icon-wrap">
                            <i className="fa-solid fa-calculator"></i>
                        </div>
                        <h3>Accounting (Tally)</h3>
                        <p>Professional bookkeeping and financial management services using Tally ERP/Prime.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
