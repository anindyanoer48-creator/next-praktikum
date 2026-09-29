import Greeting from "../components/Greeting";
import Card from "../components/Card";

export default function Home() {
    return (
        <main style={{padding: 40}}>
            <h1>Pertemuan 2 - React & TypeScript</h1>
            <Greeting />
            <Card title="Identitas">
                <p>Nama: Hasya Anindya Nur Ramadhan</p>
                <p>NIM: 251101034</p>
            </Card>
            <Card title="Progres Praktikum" variant="highlight">
                <p>Pertemuan 2 sedang dikerjakan.</p>
            </Card>
        </main>
    );
}