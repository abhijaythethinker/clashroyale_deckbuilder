export default function CardSlots() {
    const slots = Array(8).fill(null);

    return (
        <main className="p-8">
            <div className="grid grid-cols-4 gap-4">
                {slots.map((slot, i) => (
                <div key={i} className="w-40 h-60 bg-gray-800 rounded-lg border border-gray-600 flex items-center justify-center">
                    {slot ? <img src={slot.image} /> : <span></span>}
                </div>
                ))}
            </div>
        </main>
    );
}