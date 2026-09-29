export const dynamic = "force-dynamic";

export default function SsrDemoPage() {
    const waktuServer = new Date().toLocaleTimeString("id-ID");

    return (
        <main style={{padding: 40}}>
            <h1>Demo SSR</h1>
            <p>Halaman ini dirender di server pada: {waktuServer}</p>
        </main>
    );
}