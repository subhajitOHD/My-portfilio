import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            image: "/projects/ecommerce.png",
            category: "Full-Stack Frontend",
            title: "E-Commerce website ",
            link: "#"
        },
        {
            id: 2,
            image: "/projects/food-delivery.png",
            category: "Frontend",
            title: "Food Delivery App development ",
            link: "#"
        },
        {
            id: 3,
            image: "/projects/doctor-booking-v2.png",
            category: "Frontend",
            title: "doctor booking appoinment  ui ",
            link: "#"
        }
    ];

    return (
        <section id="portfolio" className="portfolio section-padding-sm bg-light">
            <div className="container">

                {/* Header */}
                <div className="portfolio-header">
                    <div className="title-area">
                        <div className="section-badge"></div>
                        <h2>Projects</h2>
                        <p className="section-desc mt-2">
                            My objective is to consistently satisfy you. I’m here to make sure you’re
happy with every encounter and result, each and every time. 
                        </p>
                    </div>

                    <div className="portfolio-nav">
                        <button className="nav-btn" aria-label="Previous"><i className="fas fa-chevron-left"></i></button>
                        <button className="nav-btn active" aria-label="Next"><i className="fas fa-chevron-right"></i></button>
                    </div>
                </div>

                {/* Grid */}
                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <div className="portfolio-card" key={project.id}>
                            <div className="portfolio-img-wrap">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="portfolio-content">
                                <span className="portfolio-category">{project.category}</span>
                                <h3 className="portfolio-title"><a href={project.link}>{project.title}</a></h3>
                                <a href={project.link} className="view-details">
                                    View Details <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="portfolio-footer">
                    <a href="#contact" className="btn btn-outline">More Works</a>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
