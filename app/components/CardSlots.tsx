"use client";

import { useEffect, useState } from "react";

export default function CardSlots() {
    const slots = Array(8).fill(null);
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    return (
        <main className="p-8">
            <div className="grid grid-cols-4 gap-4">
                {slots.map((slot, i) => (
                <div key={i} onClick={() => setSelectedCard(i)} className={`w-40 h-60 bg-gray-800 rounded-lg border flex items-center justify-center ${
                    selectedCard === i ? "border-blue-700 shadow-[0_0_15px_blue] ring-2 ring-blue-400" : "border-gray-600"}`}
                  >
                    {slot ? <img src={slot.image} /> : <span></span>}
                </div>
                ))}
            </div>
        </main>
    );
}