import React, { useState } from 'react';

export default function Releases() {
    const [filter, setFilter] = useState('album');

    const albums = [
        "https://c.saavncdn.com/547/Fl-Studio-Album-Unknown-2018-20240607203713-500x500.jpg",
        "https://c.saavncdn.com/799/Fl-Studio-Album-Vol-2-Unknown-2018-20250117015243-500x500.jpg",
        "https://c.saavncdn.com/696/Music-Maker-Jam-Unknown-2018-20220309042833-500x500.jpg",
        "https://c.saavncdn.com/448/FL-Studio-Album-3-Unknown-2018-20250108171150-500x500.jpg"
    ];

    const singles = [
        "https://i.scdn.co/image/ab67616d0000b2739b9b5b922c25556ae4a34f91",
        "https://source.boomplaymusic.com/group10/M00/08/03/1ed09bd8212e40d88f6e4c8983f6e4c2_464_464.png"
    ];

    const clients = [
        "https://c.saavncdn.com/897/Surta-A-Melody-Of-Love-CG-Song-Hindi-2020-20230825163336-500x500.jpg",
        "https://c.saavncdn.com/512/Ae-Sangi-Vo-A-Melody-Of-Love-CG-Song-Unknown-2020-20230811091124-500x500.jpg"
    ];

    return (
        <div className="main-content" style={{ padding: '30px 20px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>AW Musik Complete Discography</h2>
            
            <div className="btn-group-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '25px' }}>
                <div className="btn-group" style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                    <button className={`btn ${filter === 'album' ? 'active' : ''}`} onClick={() => setFilter('album')}>Albums ({albums.length})</button>
                    <button className={`btn ${filter === 'single' ? 'active' : ''}`} onClick={() => setFilter('single')}>Singles ({singles.length})</button>
                    <button className={`btn ${filter === 'client' ? 'active' : ''}`} onClick={() => setFilter('client')}>Client Content ({clients.length})</button>
                </div>
                <div style={{ fontSize: '16px', color: '#a8e4ff', fontWeight: '600' }}>
                    Total Releases: {albums.length + singles.length + clients.length}
                </div>
            </div>

            <div className="gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
                {filter === 'album' && albums.map((url, i) => (
                    <div key={i} className="gallery-item"><img src={url} alt="album" style={{ width: '100%', borderRadius: '10px' }} /></div>
                ))}
                {filter === 'single' && singles.map((url, i) => (
                    <div key={i} className="gallery-item"><img src={url} alt="single" style={{ width: '100%', borderRadius: '10px' }} /></div>
                ))}
                {filter === 'client' && clients.map((url, i) => (
                    <div key={i} className="gallery-item"><img src={url} alt="client" style={{ width: '100%', borderRadius: '10px' }} /></div>
                ))}
            </div>
        </div>
    );
}