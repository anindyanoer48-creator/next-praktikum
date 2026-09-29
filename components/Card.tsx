interface CardProps {
    title: string;
    variant?: "default" | "highlight";
    children: React.ReactNode;
};

export default function Card({ title, variant="default", children }: CardProps) {
    const bgColor = variant === "highlight" ? "#FDF3E3" : "#FFFFFF";
    return (
        <div style={{border: "1px solid #ccc", padding: 16, borderRadius: 8, marginBottom: 12, backgroundColor: bgColor}}>
            <h3>{title}</h3>
            <div>
                {children}
            </div>
        </div>
    );
}