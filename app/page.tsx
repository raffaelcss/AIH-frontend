import Card from "@/components/Card/Card";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  let cards: Array<number> = [];
  for (let i = 0; i < 11; i++) {
    cards.push(i);
  } 
  return (
    <div className="h-screen overflow-y-auto px-10 pt-7 text-slate-800 dark:text-gray-100">
      <div className="mb-12">
        <SearchInput />
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((card) => {
          return <Card key={card} />;
        })}
      </div>
    </div>
  );
}
