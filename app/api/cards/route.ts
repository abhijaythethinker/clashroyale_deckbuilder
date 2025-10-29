import { NextResponse} from "next/server";

export async function GET() {
    const url = "https://api.clashroyale.com/v1/cards";

    const res = await fetch (url, {
        headers: {
            Authorization: `Bearer ${process.env.CR_API_KEY}`,
            Accept: "application/json",
        },

        cache: "no-store",
    });

    if (!res.ok) {
        const text = await res.text();
        return new Response(JSON.stringify({error: text || "Failed to fetch cards"}), {
            status: res.status,
            headers: { "Content-Type": "application/json"}
        })
    }

    const data = await res.json();

    return NextResponse.json(data);
}