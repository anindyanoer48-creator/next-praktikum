export default function JsxDemoPage() {
    const nama = "Mahasiswa";
    const daftarMataKuliah = ["Matematika", "Fisika", "Kimia", "Biologi"];
    const sudahAbsen = true;
    
    return (
        <main style={{padding: 40}}>
            <h1>Halo, {nama}!</h1>
            <p>Status kehadiran: {sudahAbsen ? "Sudah absen" : "Belum absen"}</p>
            <h2>Daftar Mata Kuliah:</h2>
            <ul>
                {daftarMataKuliah.map((mk) => (
                    <li key={mk}>{mk}</li>
                ))}
            </ul>
        </main>
    );
}