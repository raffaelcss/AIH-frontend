import Card from "@/components/Card/Card";
import SearchInput from "@/components/SearchInput";
import { Avatar, Pagination, PaginationItem } from "@mui/material";

export default function Store() {
  let cards: Array<number> = [];
  for (let i = 0; i < 12; i++) {
    cards.push(i);
  }
  return (
    <div className="h-screen overflow-y-auto pt-7 text-slate-800 dark:text-gray-100 md:px-10">
      <div className="mb-4 flex md:mb-8">
        <div className="flex flex-1 justify-center md:justify-start">
          <SearchInput />
        </div>
        <a className="hidden flex-none items-center md:flex">
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: "rgb(255, 255, 255)",
              color: "rgb(100 116 139)",
            }}
            src="https://avatars.githubusercontent.com/u/79311217?v=4"
          />
        </a>
      </div>
      <div className="mb-4 flex justify-center md:justify-end">
        <Pagination color="primary" className="dark:text-gray-100" count={26} shape="rounded" size="small" />
        
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((card) => {
          return <Card key={card} />;
        })}
      </div>
    </div>
  );
}
