import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <nav className="navbar">
                <h2 className="logo">Style Hub</h2>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/registration">Register</Link>
                </div>
            </nav>

            <section className="section">
                <h2>About Style Hub</h2>

                <div className="category-card">
                    <h3>Our Story</h3>
                    <p>
                        Style Hub is a fashion and clothing platform
                        designed to help users explore the latest
                        fashion trends and discover their personal style.
                    </p>

                    <h3>Our Mission</h3>
                    <p>
                        Our mission is to make fashion simple,
                        stylish and accessible for everyone.
                    </p>

                    <Link to="/registration" className="primary-btn">
                        Join Style Hub
                    </Link>
                </div>
            </section>

            <footer className="footer">
                <p>© 2026 Style Hub. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default About;