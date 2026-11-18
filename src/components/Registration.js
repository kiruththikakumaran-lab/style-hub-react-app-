import React, { useState } from 'react';

function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Registered: ${name}, ${email}`);
    };

    return (
        <div className="form-container">
            <h2>Join Style Hub</h2>
            <p>Create your account and explore fashion!</p>

            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label>Email Address</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <button type="submit" className="primary-btn">
                    Register Now
                </button>
            </form>
        </div>
    );
}

export default Registration;