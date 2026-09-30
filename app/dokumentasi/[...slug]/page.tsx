export default async function DokumentasiPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;
    return (
        <main style={{ padding: 40 }}>
            <h1>Dokumentasi</h1>
            <p>Path: {slug.join("/")}</p>
        </main>
    )
}