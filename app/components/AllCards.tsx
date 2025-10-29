"use client";

import { useEffect, useState } from "react";

type Card = {
  id: string;
  name: string;
  iconUrls?: { medium?: string };
};

export default function AllCards() {
  const [cards, setCards] = useState<Card[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const resp = await fetch("/api/cards");
        if (!resp.ok) {
            throw new Error(`API error ${resp.status}`);
        }
        const json = await resp.json();

        const cardArray: Card[] = Array.isArray(json) ? json : json.items ?? json;
        if (mounted) {
            setCards(cardArray);
        }
      } catch (err: any) {
        console.error(err);
        if (mounted)  {
            setError(err.message || "Unknown error");
        }
      }
    };

    load();
    return () => { mounted = false; };
  }, []);

  if (error) return <div className="p-4 text-red-400">Error: {error}</div>;
  if (!cards) return <div className="p-4">Loading cards…</div>;

  return (
    <main className="p-4 grid grid-cols-12 gap-4">
      {cards.map((c) => (
        <div key={c.id} className="text-center">
          {c.iconUrls?.medium ? (
            <img
              src={c.iconUrls.medium}
              alt={c.name}
              className="w-full h-auto hover:scale-110 transition-transform"
            />
          ) : (
            <div className="h-24 w-full bg-gray-700 rounded-lg" />
          )}
        </div>
      ))}
    </main>
  );
}