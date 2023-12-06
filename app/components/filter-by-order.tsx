import { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FilterContext } from "../contexts/filter-context";
import { PriorityType } from "../types/priority-types";

interface FilterByOrderProps {}

export function FilterByOrder(props: FilterByOrderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { priority, setPriority } = useContext(FilterContext);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleUpdatePriority = (value: PriorityType) => {
    setPriority(value);
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={handleOpen}
        className="flex cursor-pointer items-center gap-3 border-none text-sm font-normal text-slate-500"
      >
        Organizar por
        <IoIosArrowDown />
      </button>
      {isOpen && (
        <ul className="absolute right-0 top-full z-50 flex w-56 flex-col gap-1 rounded bg-white px-4 py-3 font-normal text-slate-500 shadow-xl dark:bg-slate-900">
          <li
            onClick={() => handleUpdatePriority(PriorityType.NEWS)}
            className="cursor-pointer text-sm"
          >
            Novidades
          </li>
          <li
            onClick={() => handleUpdatePriority(PriorityType.POPULARITY)}
            className="cursor-pointer text-sm"
          >
            Populares
          </li>
          <li
            onClick={() => handleUpdatePriority(PriorityType.MINOR_PRICE)}
            className="cursor-pointer text-sm"
          >
            Moedas: Menor - maior
          </li>
          <li
            onClick={() => handleUpdatePriority(PriorityType.BIGGEST_PRICE)}
            className="cursor-pointer text-sm"
          >
            Moedas: Maior - menor
          </li>
        </ul>
      )}
    </div>
  );
}
