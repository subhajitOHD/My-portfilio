import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

    // --- EMAILJS CONFIGURATION ---
    const SERVICE_ID = 'service_11y77fl';
    const TEMPLATE_ID = 'template_wkw82u3';
    const PUBLIC_KEY = '1V9tESLSeNRQZYvWK';


    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            });
    };

    return (
        <section id="contact" className="contact-new">
            <div className="hexagon-bg"></div>

            <div className="container contact-container-new">

                {/* Left Side: Info & Socials */}
                <div className="contact-info-new">
                    <div className="contact-badge">
                        <i className="fas fa-th-large"></i> Contact Me
                    </div>

                    <h2 className="contact-title-main">
                        Do You Have A Project<br />And Want To Discuss?
                    </h2>

                    <p className="contact-desc-new">
                        Are you curious? To find out how we can work together on your project and provide outstanding outcomes, connect with me on these platforms.
                    </p>

                    <div className="connect-me-section">
                        <h4>Connect with me</h4>
                        <div className="connect-icons">
                            <a href="https://www.linkedin.com/in/subhajit-das-aa09482a3/" target="_blank" rel="noopener noreferrer" className="connect-icon-item linkedin" title="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/subhajitOHD" target="_blank" rel="noopener noreferrer" className="connect-icon-item github" title="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.behance.net/subhajitdas50" target="_blank" rel="noopener noreferrer" className="connect-icon-item behance" title="Behance">
                                <i className="fab fa-behance"></i>
                            </a>
                        </div>
                    </div>

                    <div className="contact-divider-dash">
                        <i className="fas fa-asterisk"></i>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="contact-form-card">
                    <h3 className="form-title">Active & Ready to use Contact Form!</h3>

                    <form
                        ref={form}
                        className="contact-form-new"
                        onSubmit={sendEmail}
                    >
                        <div className="form-group-new">
                            <input type="text" name="name" placeholder="Enter Your Name" required />
                        </div>
                        <div className="form-group-new">
                            <input type="email" name="email" placeholder="Enter Your Email" required />
                        </div>
                        <div className="form-group-new">
                            <input type="tel" name="phone" placeholder="Mobile Number" />
                        </div>
                        <div className="form-group-new">
                            <input type="text" name="subject" placeholder="Subject" />
                        </div>
                        <div className="form-group-new">
                            <textarea name="message" placeholder="Message" rows="4" required></textarea>
                        </div>

                        <button
                            type="submit"
                            className="contact-submit-btn"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? (
                                <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                            ) : (
                                <><i className="fas fa-paper-plane"></i> Submit</>
                            )}
                        </button>

                        {status === 'success' && (
                            <div className="form-message-success">
                                <i className="fas fa-check-circle"></i> Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="form-message-error">
                                <i className="fas fa-exclamation-triangle"></i> Something went wrong. Please try again!
                            </div>
                        )}
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
