import React from 'react';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            year: "2025 - 2026",
            degree: "Post Graduate Diploma in Computer Application (PGDCA)",
            institution: "Vidya Bharati Educational Development and Training Society",
            desc: "Agartala Center."
        },
        {
            year: "2022 - 2025",
            degree: "Bachelor of Computer Application (BCA)",
            institution: "ICFAI University, Tripura",
            desc: "CGPA: 3.88"
        },
        {
            year: "2022",
            degree: "Higher Secondary (Class 12)",
            institution: "Sonamura N.C. Institution",
            desc: "TBSE Board | Stream: Arts | Percentage: 54.2%"
        }
    ];

    return (
        <section id="education" className="education section-padding">
            <div className="container">
                <div className="title-area text-center mb-60">
                    <div className="section-badge mx-auto"></div>
                    <h2>My <span className="text-primary">Education</span></h2>
                </div>

                <div className="timeline">
                    {educationData.map((edu, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-content">
                                <span className="timeline-date">{edu.year}</span>
                                <h3>{edu.degree}</h3>
                                <h4>{edu.institution}</h4>
                                <p>{edu.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
