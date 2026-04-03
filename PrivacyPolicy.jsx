import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="legal-container">
            <div className="legal-content">
                <h1>Privacy Policy</h1>
                <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2>1. Information We Collect</h2>
                    <p>We only collect information that you voluntarily provide to us when you use the contact form or sign up for our newsletter. This may include your name, email address, and any message you send.</p>
                </section>

                <section>
                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to respond to your inquiries, provide the services you request, and send you updates via our newsletter if you have opted in.</p>
                </section>

                <section>
                    <h2>3. Data Protection</h2>
                    <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure.</p>
                </section>

                <section>
                    <h2>4. Third-Party Links</h2>
                    <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites.</p>
                </section>

                <section>
                    <h2>5. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at subhajitdas1040@gmail.com.</p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
