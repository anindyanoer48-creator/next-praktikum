export default function SsgDemoPage() {
    const waktuBuild = new Date().toLocaleTimeString("id-ID");

    return (
        <main style={{padding: 40}}>
            <h1>Demo SSG</h1>
            <p>Halaman ini digenerasi (build) pada: {waktuBuild}</p>
        </main>
    );
}