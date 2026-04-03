import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsList = [
        { name: "React / Next.js", icon: "fab fa-react", color: "#61DAFB" },
        { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
        { name: "JavaScript / ES6+", icon: "fab fa-js-square", color: "#F7DF1E" },
        { name: "HTML5 & CSS3", icon: "fab fa-html5", color: "#E34F26" },
        { name: "MongoDB", icon: "fas fa-database", color: "#47A248" },
        { name: "Python", icon: "fab fa-python", color: "#3776AB" },
        { name: "AWS Cloud", icon: "fab fa-aws", color: "#FF9900" },
        { name: "Git & GitHub", icon: "fab fa-github", color: "#181717" }
    ];

    const nonTechnicalSkills = [
        { name: "Figma", icon: "fab fa-figma", color: "#F24E1E" },
        { name: "Adobe Photoshop", icon: "fas fa-image", color: "#31A8FF" },
        { name: "Adobe Illustrator", icon: "fas fa-pen-nib", color: "#FF9A00" },
        { name: "Canva", icon: "fas fa-paint-brush", color: "#00C4CC" },
        { name: "CapCut", icon: "fas fa-video", color: "#000000" },
        { name: "Excel", icon: "fas fa-file-excel", color: "#217346" },
        { name: "Tally ERP", icon: "fas fa-file-invoice-dollar", color: "#74787A" },
        { name: "Google Ads", icon: "fab fa-google", color: "#4285F4" }
    ];

    return (
        <section id="skills" className="skills-section section-padding-sm bg-light">
            <div className="container">
                <div className="skills-header">
                    <div className="title-area">
                        <div className="section-badge center-badge"></div>
                        <h2>Technical Skills</h2>
                        <p className="section-desc mt-2 center-text">
                            A comprehensive toolkit I use to build robust and scalable full-stack applications.
                        </p>
                    </div>
                </div>

                <div className="skills-grid">
                    {skillsList.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-icon-wrap" style={{ color: skill.color }}>
                                <i className={skill.icon}></i>
                            </div>
                            <h3>{skill.name}</h3>
                        </div>
                    ))}
                </div>

                <div className="skills-header" style={{ marginTop: '60px' }}>
                    <div className="title-area">
                        <div className="section-badge center-badge"></div>
                        <h2>Software & Tools</h2>
                        <p className="section-desc mt-2 center-text">
                            Additional applications and platforms I use for design, management, and marketing.
                        </p>
                    </div>
                </div>

                <div className="skills-grid">
                    {nonTechnicalSkills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-icon-wrap" style={{ color: skill.color }}>
                                <i className={skill.icon}></i>
                            </div>
                            <h3>{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
