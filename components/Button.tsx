"use client";

interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary";
}

export default function Button({ label, onClick, variant = "primary" }: ButtonProps) {
    const style = {
        padding: "8px 16px",
        border: "none",
        borderRadius: 6,
        color: "#fff",
        backgroundColor: variant === "primary" ? "#0F5C5C" : "#C88A1E",
        cursor: "pointer",
    };

    return (
        <button style={style} onClick={onClick}>
            {label}
        </button>
    );
}