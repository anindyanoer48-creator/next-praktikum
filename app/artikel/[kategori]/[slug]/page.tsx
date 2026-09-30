export default async function ArtikelDetailPage({ params }: { params: Promise<{ kategori: string, slug: string }> }) {
    const { kategori, slug } = await params;
    return (
        <main style={{ padding: 40 }}>
            <h1>Detail Artikel</h1>
            <p>Kategori: {kategori}</p>
            <p>Slug: {slug}</p>
        </main>
    )
}