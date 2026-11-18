import React from 'react';
import app from './firebase';
import './App.css';

import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Home from './components/Home';
import Registration from './components/Registration';
import About from './components/About';
console.log("Firebase Connected Successfully!", app);

function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/registration"
                    element={<Registration />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;