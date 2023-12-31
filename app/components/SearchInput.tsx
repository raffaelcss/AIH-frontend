import { IoSearch } from "react-icons/io5";

export default function SearchInput() {
  return (
    <div className="flex h-11 w-68 md:w-96 items-center gap-4 rounded-xl bg-white px-4 dark:bg-slate-800">
      <div className="text-slate-500 dark:text-gray-100">
        <IoSearch size="1.3em" />
      </div>
      <input
        className="w-full bg-white text-lg font-normal text-slate-500 focus:outline-none dark:bg-slate-800 dark:text-gray-100"
        name="search"
        placeholder="Pesquisar"
      />
    </div>
  );
}
