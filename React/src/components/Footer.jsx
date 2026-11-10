import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer" style={{ padding: '22px 15px', backgroundColor: 'rgba(0, 0, 0, 0.8)', borderTop: '1px solid rgba(255, 255, 255, 0.15)', textAlign: 'center', marginTop: '40px', color: '#ffffff', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ fontWeight: 800, letterSpacing: '1.5px', fontSize: '18px', marginBottom: '12px', textTransform: 'uppercase', color: '#ffffff' }}>AW Musik</div>
            <div style={{ fontSize: '11px', opacity: 0.6, letterSpacing: '0.5px' }}>
                © <span>{currentYear}</span> AW Musik. All Rights Reserved.
            </div>
        </div>
    );
}