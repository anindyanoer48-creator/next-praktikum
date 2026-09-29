import LikeButton from "../../components/LikeButton";

const artikel = {
    judul: "Mengenal Next.js App Router",
    isi: "Next.js App Router adalah fitur baru yang diperkenalkan di Next.js 13. Dengan App Router, pengembang dapat membuat aplikasi web dengan struktur folder yang lebih terorganisir dan mendukung fitur-fitur modern seperti server components, streaming, dan nested layouts. App Router memungkinkan pengembang untuk mengelola routing aplikasi dengan lebih mudah dan efisien."
}

export default function ArtikelPage() {
    return (
        <main style={{padding: 40}}>
            <h1>{artikel.judul}</h1>
            <p>{artikel.isi}</p>
            <LikeButton />
        </main>
    );
}