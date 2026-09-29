"use client";

import Button from "../../components/Button";

export default function ButtonDemo() {
    return (
        <main style={{padding: 40}}>
            <h1>Demo Reusable Button</h1>
            <div style={{display: "flex", gap: 12,}}>
                <Button label="Simpan" variant="primary" onClick={() => alert("Data disimpan!")}/>
                <Button label="Batal" variant= "secondary" onClick={() => alert("Aksi dibatalkan!")}/>
                <Button label="Kirim" variant="primary" onClick={() => alert("Formulir dikirim!")}/>
            </div>
        </main>
    );
}