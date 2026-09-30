export default function DashboardLayout({ children, }: { children: React.ReactNode; }) {
    return (
        <div style={{ display: "flex"}}>
            <aside style={{ width: 200, padding: 16, backgroundColor: "#fdf3e3", minHeight: "80vh" }}>
                <h3>Menu Dashboard</h3>
                <p>Sidebar Khusus Dashboard</p>

                <h3>Menu Dashboard</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li><a href="/dashboard">Ringkasan</a></li>
                    <li><a href="/dashboard/profil">Profil</a></li>
                    <li><a href="/dashboard/pengaturan">Pengaturan</a></li>
                </ul>
                </aside>
                <div style={{ flex: 1, padding: 16 }}>
                    {children}
                </div>
            </div>

    );
}
