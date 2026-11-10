import React from 'react';

export default function Labels() {
    return (
        <div className="main-content" style={{ textAlign: 'center', margin: '20px auto', padding: '0 20px', maxWidth: '1200px', paddingTop: '30px' }}>
            <h2 style={{ fontSize: '26px', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Our Distribution Network & Labels</h2>
            <p style={{ color: '#a8e4ff', fontSize: '14px', marginBottom: '30px' }}>Explore independent record labels and partnered music catalogues managed under our network.</p>
            
            <div className="catalog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '30px' }}>
                {/* 1. AW Musik */}
                <div className="label-card" style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '12px', padding: '25px 20px', textAlign: 'center' }}>
                    <img src="https://yt3.ggpht.com/JJDXF8VzG7uX8I0yFfF1kHG8YcpMTnNl5akNpD_ISUTgc6ahCbnBPX6g9GycP-8Ry09IXGeFelxx=s800-c-fcrop64=1,00000000ffffffff-rw-nd-v1" alt="AW Musik" className="label-logo" style={{ width: '80px', height: '80px', marginBottom: '15px', objectFit: 'contain', borderRadius: '50%', border: '2px solid rgba(255, 255, 255, 0.3)', backgroundColor: '#fff' }} />
                    <div className="label-name" style={{ fontSize: '1.2em', marginBottom: '20px', fontWeight: 'bold', color: '#ffffff', textTransform: 'uppercase' }}>AW Musik</div>
                    <div className="platform-links" style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                        <a href="https://open.spotify.com/playlist/1EppXqg8rM21cLBynkxDmv" target="_blank" rel="noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" style={{ width: '32px', height: '32px' }} /></a>
                        <a href="https://www.jiosaavn.com/label/aw-musik-albums/EhoVfTKrQr8_" target="_blank" rel="noreferrer"><img src="https://play-lh.googleusercontent.com/gUR8xEKvCngapSZGkZUgoNETAYuhhkCr0Npza-lPSjbRCM55zdS0SK_KxBj1tg2RoQ" alt="JioSaavn" style={{ width: '32px', height: '32px' }} /></a>
                    </div>
                </div>

                {/* 2. Karan Art DMT */}
                <div className="label-card" style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '12px', padding: '25px 20px', textAlign: 'center' }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCg1jRp5QXnT3S1ogwMT8-ZYNlRj3DB4PJwg&s" alt="Karan Art DMT" className="label-logo" style={{ width: '80px', height: '80px', marginBottom: '15px', objectFit: 'contain', borderRadius: '50%', border: '2px solid rgba(255, 255, 255, 0.3)', backgroundColor: '#fff' }} />
                    <div className="label-name" style={{ fontSize: '1.2em', marginBottom: '20px', fontWeight: 'bold', color: '#ffffff', textTransform: 'uppercase' }}>Karan Art DMT</div>
                    <div className="platform-links" style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                        <a href="https://open.spotify.com/playlist/3YDXJ3E3ry6iRLY8EQyrbF" target="_blank" rel="noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" style={{ width: '32px', height: '32px' }} /></a>
                        <a href="https://www.jiosaavn.com/s/playlist/6e6270244b5f87bac96ad4c03e078359/kad-releases/E32Nt42Q60wGSw2I1RxdhQ__" target="_blank" rel="noreferrer"><img src="https://play-lh.googleusercontent.com/gUR8xEKvCngapSZGkZUgoNETAYuhhkCr0Npza-lPSjbRCM55zdS0SK_KxBj1tg2RoQ" alt="JioSaavn" style={{ width: '32px', height: '32px' }} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}