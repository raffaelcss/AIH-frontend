import { IoSearch } from "react-icons/io5";

export default function SearchInput(){
    return(
        <div className="px-4 w-96 h-11 left-0 top-0 bg-white dark:bg-slate-900 rounded-xl flex items-center gap-4">
            <div className="text-slate-500 dark:text-gray-100">
                <IoSearch size="1.3em" />
            </div>
            <input className="w-full text-slate-500 dark:text-gray-100 bg-white dark:bg-slate-900 text-lg font-normal focus:outline-none target:bg-[#00FF00]" name="search" placeholder="Pesquisar"/>
        </div>
    )
}