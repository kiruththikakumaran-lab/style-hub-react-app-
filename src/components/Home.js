import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar">
                <h2 className="logo">Style Hub</h2>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/registration">Register</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to Style Hub</h1>

                    <p>
                        Discover the latest fashion trends
                        and manage your style with Style Hub.
                    </p>

                    <Link to="/registration" className="primary-btn">
                        Get Started
                    </Link>
                </div>
            </section>

            {/* Categories */}
            <section className="section">
                <h2>Explore Our Collections</h2>

                <div className="category-container">
                    <div className="category-card">
                        <h3>👗 Women's Fashion</h3>
                        <p>Discover beautiful outfits.</p>
                    </div>

                    <div className="category-card">
                        <h3>👔 Men's Fashion</h3>
                        <p>Find your perfect style.</p>
                    </div>

                    <div className="category-card">
                        <h3>👜 Accessories</h3>
                        <p>Complete your look.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2026 Style Hub. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Home;