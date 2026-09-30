"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const menuItems = [
    {href: "/", label: "Beranda"},
    {href: "/tentang", label: "Tentang"},
    {href: "/kontak", label: "Kontak"},
    {href: "/dashboard", label: "Dashboard"},
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav style={{ display: "flex", gap: 16, padding: 16, backgroundColor: "#05fc5c"}}>
            {menuItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    style={{
                        color: "#fff",
                        fontWeight: pathname === item.href ? "bold" : "normal",
                        textDecoration: pathname === item.href ? "underline" : "none",
                    }}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
}