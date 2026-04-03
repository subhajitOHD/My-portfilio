import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate newsletter subscription
        setStatus('Subscribing...');
        setTimeout(() => {
            setStatus('Thank you for subscribing! You will receive our latest updates soon.');
            setEmail('');
        }, 1500);
    };

    return (
        <div className="newsletter-page">
            <div className="newsletter-content">
                <h1>Weekly Newsletter</h1>
                <p className="newsletter-description">
                    Stay updated with the latest in tech, development tips, and my recent projects.
                    Sign up to Private's weekly newsletter to get the latest updates directly in your inbox.
                </p>

                <form className="newsletter-page-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <i className="fas fa-envelope"></i>
                        <input
                            type="email"
                            placeholder="subhajitdas1040@gamil.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="subscribe-btn">
                        Subscribe Now <i className="fas fa-paper-plane"></i>
                    </button>
                </form>

                {status && <p className="status-message">{status}</p>}

                <div className="newsletter-benefits">
                    <div className="benefit-item">
                        <i className="fas fa-rocket"></i>
                        <h3>Project Updates</h3>
                        <p>Be the first to know about my latest open-source projects and experiments.</p>
                    </div>
                    <div className="benefit-item">
                        <i className="fas fa-code"></i>
                        <h3>Coding Tips</h3>
                        <p>Practical advice and snippets to help you improve your development skills.</p>
                    </div>
                    <div className="benefit-item">
                        <i className="fas fa-bolt"></i>
                        <h3>Tech Trends</h3>
                        <p>A curated list of interesting articles and tools from the tech world.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
