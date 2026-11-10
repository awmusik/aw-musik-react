import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Releases from './pages/Releases';
import Labels from './pages/Labels';
import Dashboard from './pages/Dashboard';

export default function App() {
    return (
        <Router>
            <div className="music-container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/releases" element={<Releases />} />
                    <Route path="/labels" element={<Labels />} />
                    <Route path="/dash" element={<Dashboard />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}