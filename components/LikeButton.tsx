"use client";

import { useState } from "react";

export default function LikeButton() {
    const [suka, setSuka] = useState(0);

return (
    <button onClick={() => setSuka(suka + 1)}>
        Suka ({suka})
    </button>
);
}