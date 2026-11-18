import React, { useState } from 'react';

import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Name Validation
        if (name.trim().length < 3) {
            alert("Name must be at least 3 characters");
            return;
        }

        // Email Validation
        if (!email.includes("@")) {
            alert("Invalid email");
            return;
        }

        // Phone Validation
        if (!/^\d{10}$/.test(phone)) {
            alert("Phone must be 10 digits");
            return;
        }

        try {
            await addDoc(collection(db, "users"), {
                name: name,
                email: email,
                phone: phone,
                timestamp: new Date()
            });

            alert("Registration successful!");

            setName('');
            setEmail('');
            setPhone('');

        } catch (err) {
            console.error("Error adding document: ", err);
            alert("Error submitting form. Check console.");
        }
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

                <label>Phone Number</label>
                <input
                    type="text"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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