import React from 'react';

export default function Home() {
    return (
        <div>
            {/* 1. About Us Section */}
            <div id="about" className="section">
                <h2 className="section-header">About AW Musik</h2>
                <div className="about-box">
                    Founded in 2018, <strong style={{ color: '#ffffff' }}>AW Musik</strong> is an exclusive independent record label and parent music distribution network. Evolving beyond electronic and instrumental roots into Hip-Hop and multi-genre soundscapes, we power global metadata management, publishing, and supply-chain infrastructure for partnered sub-labels and diverse indie rosters spanning Pop, Folk, Hip-Hop, and Regional Indian music worldwide.
                </div>
            </div>

            <hr style={{ border: 0, borderTop: '1px solid rgba(255,255,255,0.15)', maxWidth: '1200px', margin: '20px auto' }} />

            {/* 2. Catalogue Size Section */}
            <div id="stats" className="section">
                <h2 className="section-header">Catalogue Size</h2>
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon">🎵</div>
                        <div className="stat-number">130</div>
                        <div className="stat-label">Tracks live under AW Musik</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">💿</div>
                        <div className="stat-number">64</div>
                        <div className="stat-label">Releases live under AW Musik</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">🎧</div>
                        <div className="stat-number">350</div>
                        <div className="stat-label">Tracks delivered across many labels</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">📈</div>
                        <div className="stat-number">5B</div>
                        <div className="stat-label">Total digital streams achieved</div>
                    </div>
                </div>
            </div>

            <hr style={{ border: 0, borderTop: '1px solid rgba(255,255,255,0.15)', maxWidth: '1200px', margin: '20px auto' }} />

            {/* 3. Rolling Marquees */}
            <div id="roster" className="section">
                <h2 className="section-header">Roster & Distribution Network</h2>
                
                <div className="sub-header" style={{ marginTop: '10px' }}>Featured Artists</div>
                <div className="marquee-container">
                    <div className="marquee-content">
                        <span className="roster-pill">Anup Wasave</span>
                        <span className="roster-pill">Mrfreasher</span>
                        <span className="roster-pill">Sujeet Kumar Sharma</span>
                        <span className="roster-pill">DJ Farman</span>
                        <span className="roster-pill">Karan Art DMT</span>
                        <span className="roster-pill">Sanskar Balas</span>
                        <span className="roster-pill">Shyam Khanderiya</span>
                        <span className="roster-pill">Ok Sinha</span>
                        <span className="roster-pill">Jasraj Gill</span>
                        <span className="roster-pill highlight">& Many More</span>
                    </div>
                </div>

                <div className="sub-header" style={{ marginTop: '25px' }}>Sub-Labels & Client Networks</div>
                <div className="marquee-container">
                    <div className="marquee-content reverse">
                        <span className="roster-pill">AW Musik</span>
                        <span className="roster-pill">nusstudio</span>
                        <span className="roster-pill">FV Digital</span>
                        <span className="roster-pill">Karan Art DMT</span>
                        <span className="roster-pill">StarClip Music</span>
                        <span className="roster-pill">S4B Recordz</span>
                        <span className="roster-pill">DFN Recordz</span>
                        <span className="roster-pill">Sangi Music</span>
                        <span className="roster-pill">Music Cottage</span>
                        <span className="roster-pill">Sanskar Music</span>
                        <a href="/releases" className="roster-pill highlight" style={{ textDecoration: 'none' }}>& Many More</a>
                    </div>
                </div>
            </div>

            <hr style={{ border: 0, borderTop: '1px solid rgba(255,255,255,0.15)', maxWidth: '1200px', margin: '20px auto' }} />

            {/* 4. Contact Section */}
            <div id="contact" className="section">
                <h2 className="section-header">Contact & Inquiries</h2>
                <div className="contact-box">
                    <p style={{ marginBottom: '8px', opacity: 0.9 }}>For catalog inquiries, distribution partnerships, and licensing:</p>
                    <p style={{ fontWeight: 'bold', color: '#7dc4ff', fontSize: '18px' }}>contact@awmusik.co.in</p>
                </div>
            </div>
        </div>
    );
}