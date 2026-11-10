import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="nav-bar">
            <div className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to="/" className="nav-logo-link">
                    <img src="https://c.saavncdn.com/labels/Aw_Musik_20230420112404_500x500.jpg" alt="AW Musik Logo" className="nav-logo" />
                </Link>
                <span style={{ fontWeight: 800, letterSpacing: '1px', fontSize: '16px', color: '#ffffff', textTransform: 'uppercase' }}>AW MUSIK</span>
                <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">☰</button>
            </div>
            <div className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
                <Link to="/" style={isActive('/') ? { borderColor: '#ffcc00', color: '#ffcc00' } : {}}>Home</Link>
                <Link to="/releases" style={isActive('/releases') ? { borderColor: '#ffcc00', color: '#ffcc00' } : {}}>Releases</Link>
                <Link to="/labels" style={isActive('/labels') ? { borderColor: '#ffcc00', color: '#ffcc00' } : {}}>Distributed Labels</Link>
                <Link to="/dash">Artist Portal</Link>
                <a href="/#contact">Contact</a>
            </div>
        </nav>
    );
}