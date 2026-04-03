import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero section-padding">
            <div className="container hero-container">

                {/* Left Content */}
                <div className="hero-content animate-fade-in">
                    <h1 className="hero-title">
                        Hi, I'm <span className="name-color">Subhajit Das</span>,<br />
                        <span className="developer-text-new">Full-Stack Developer</span>
                    </h1>
                    <p className="hero-desc">
                        I use the skills I’m acquiring every day to assist business owners flourish. Although I’m not an expert, I enjoy developing and changing. My drive to keep going comes from my love of assisting people and applying knowledge to make a significant difference.
                    </p>

                    <div className="hero-actions">
                        <a href="/Subhajit_CV.pdf" download="Subhajit_CV.pdf" className="btn btn-primary">Download CV</a>


                    </div>
                </div>

                {/* Right Image/Shape */}
                <div className="hero-image-wrapper">
                    <div className="circle-shape"></div>
                    <img src="/hero-img-v2.jpg" alt="Subhajit Das" className="hero-image" />

                    {/* Decorative Elements */}
                    <div className="pattern-dots pattern-1"></div>
                    <div className="pattern-dots pattern-2"></div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
