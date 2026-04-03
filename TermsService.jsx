import React from 'react';
import './PrivacyPolicy.css'; // Reusing the same styling for consistency

const TermsService = () => {
    return (
        <div className="legal-container">
            <div className="legal-content">
                <h1>Terms & Service</h1>
                <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
                </section>

                <section>
                    <h2>2. Use License</h2>
                    <p>Permission is granted to temporarily view the materials on Subhajit Developer's website for personal, non-commercial transitory viewing only.</p>
                </section>

                <section>
                    <h2>3. Disclaimer</h2>
                    <p>The materials on this website are provided on an 'as is' basis. Subhajit Developer makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                </section>

                <section>
                    <h2>4. Limitations</h2>
                    <p>In no event shall Subhajit Developer or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.</p>
                </section>

                <section>
                    <h2>5. Governing Law</h2>
                    <p>These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
                </section>
            </div>
        </div>
    );
};

export default TermsService;
