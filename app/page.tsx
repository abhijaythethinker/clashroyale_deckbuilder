import CardSlots from "./components/CardSlots";
import AllCards from "./components/AllCards";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-gray-900 font-sans">
      <h1 className="text-6xl mt-20 border-pink-500">Clash Royale Deck Builder</h1>
      <CardSlots />
      <AllCards />
    </div>
  );
}
