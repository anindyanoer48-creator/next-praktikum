"use client"

import { useEffect, useState } from 'react';

export default function CsrDemoPage() {
    const [waktu, setWaktu] = useState("");
    const [klik, setKlik] = useState(0);

    useEffect(() => {
        setWaktu(new Date().toLocaleTimeString());

        const interval = setInterval(() => {
            setWaktu(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main style={{padding: 40}}>
            <h1>Demo CSR</h1>
            <p>Jam saat ini (client): {waktu}</p>
            <button onClick={() => setKlik(klik + 1)}>Tombol diklik {klik} kali</button>
        </main>
    );
}
    