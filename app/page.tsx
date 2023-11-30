import Card from "@/components/Card/Card";
import { FilterBar } from "@/components/ui/FilterBar";
import Header from "@/components/ui/Header";

export default function Home() {
  let cards: Array<number> = [];
  for (let i = 0; i < 12; i++) {
    cards.push(i);
  }
  return (
    <div className="h-screen overflow-y-auto text-slate-800 dark:text-gray-100">
      <Header />
      <FilterBar />
      <div className="grid grid-cols-1 justify-items-center gap-6 px-12 py-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {cards.map((card) => {
          return <Card key={card} />;
        })}
      </div>
    </div>
  );
}
