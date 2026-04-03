import React from 'react';
import './Certificates.css';
import pgdcaImg from '../assets/certificates/pgdca.png';
import cloudComputingImg from '../assets/certificates/cloud_computing.png';
import hardwareImg from '../assets/certificates/hardware.png';

const Certificates = () => {
    const certificatesData = [
        {
            id: 1,
            title: "Post Graduate Diploma in Computer Applications (PGDCA)",
            image: pgdcaImg,
        },
        {
            id: 2,
            title: "Certified Cloud Computing and Virtualization Expert",
            image: cloudComputingImg,
        },
        {
            id: 3,
            title: "Computer Hardware Engineering (CHE)",
            image: hardwareImg,
        }
    ];

    return (
        <section id="certificates" className="certificates section-padding">
            <div className="container">
                <div className="title-area text-center mb-60">
                    <div className="section-badge mx-auto">Certification</div>
                    <h2>My <span className="text-primary">Certificates</span></h2>
                </div>

                <div className="certificates-grid">
                    {certificatesData.map((cert) => (
                        <div key={cert.id} className="certificate-card">
                            <div className="certificate-image">
                                <img src={cert.image} alt={cert.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
