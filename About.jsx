import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container about-container">

                {/* Left Side: Image */}
                <div className="about-image-wrapper">
                    <div className="bg-shape-yellow"></div>
                    <img src="/about-workspace.png" alt="Subhajit Das Workspace" className="about-image" />
                    {/* Decorative frame box */}
                    <div className="frame-box"></div>
                </div>

                {/* Right Side: Content & Skills */}
                <div className="about-content">
                    <div className="title-area">
                        <div className="section-badge"></div>
                        <h2>Professional Solutions for Your Digital Needs</h2>
                    </div>
                    <p className="about-desc">
                        I am a dedicated Full-Stack Developer with a passion for creating efficient, scalable, and user-friendly digital products. With expertise in both technical development and business-oriented services like data entry and accounting, I provide comprehensive solutions tailored to your unique requirements.
                    </p>
                    <div className="about-actions">
                        <a href="#contact" className="btn btn-primary">Work Together</a>
                    </div>

                    <div className="skills-container">
                        {/* Skill 1 */}
                        <div className="skill-item">
                            <div className="skill-info">
                                <span className="skill-name">Frontend Development (React)</span>
                                <span className="skill-percent">95%</span>
                            </div>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{ width: '95%' }}></div>
                            </div>
                        </div>

                        {/* Skill 2 */}
                        <div className="skill-item">
                            <div className="skill-info">
                                <span className="skill-name">Backend Development (Node.js)</span>
                                <span className="skill-percent">88%</span>
                            </div>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{ width: '88%' }}></div>
                            </div>
                        </div>

                        {/* Skill 3 */}
                        <div className="skill-item">
                            <div className="skill-info">
                                <span className="skill-name">Database (MongoDB/SQL)</span>
                                <span className="skill-percent">80%</span>
                            </div>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{ width: '80%' }}></div>
                            </div>
                        </div>

                        {/* Skill 4 */}
                        <div className="skill-item">
                            <div className="skill-info">
                                <span className="skill-name">Figma Design</span>
                                <span className="skill-percent">98%</span>
                            </div>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{ width: '98%' }}></div>
                            </div>
                        </div>

                        {/* Skill 5 */}
                        <div className="skill-item">
                            <div className="skill-info">
                                <span className="skill-name">WordPress Development</span>
                                <span className="skill-percent">70%</span>
                            </div>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
