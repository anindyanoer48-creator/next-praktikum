"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const daftarProduk = [
  { id: 110, name: "Laptop" },
  { id: 112, name: "Keyboard" },
  { id: 113, name: "Monitor" },
];

export default function CariProdukPage() {
  const router = useRouter();
  const [idTerpilih, setIdTerpilih] = useState("daftarProduk[0].id");

  const lihatProduk = () => {
    router.push(`/produk/${idTerpilih}`);
  };
  
  return (
    <main style={{ padding: 40 }}>
      <h1>Cari Produk</h1>
      <select value={idTerpilih} onChange={(e) => setIdTerpilih(e.target.value)}>
        {daftarProduk.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>
      <button onClick={lihatProduk} style={{ marginLeft: 12 }}>
        Lihat Produk
      </button>
    </main>
  );
}