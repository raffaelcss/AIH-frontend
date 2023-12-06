import { useFilter } from "@/app/hooks/useFilter";
import { FilterType } from "@/app/types/filter-type";

import { MouseEventHandler } from "react";

interface FilterItemProps {
  text: string;
  onClick?: MouseEventHandler<HTMLLIElement>;
  selected?: boolean;
}

function FilterItem({ text, selected, onClick }: FilterItemProps) {
  return (
    <li
      onClick={onClick}
      className={`cursor-pointer ${
        selected && "border-b-4 border-sky-400 font-bold dark:border-sky-600"
      }`}
    >
      {text}
    </li>
  );
}

export function FilterByType() {
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterType) => {
    setType(value);
  };

  return (
    <ul className="flex gap-5 text-base text-slate-800 dark:text-gray-100">
      <FilterItem
        text="Todos"
        onClick={() => handleChangeType(FilterType.ALL)}
        selected={type === FilterType.ALL}
      />
      <FilterItem
        text="Planetárias"
        onClick={() => handleChangeType(FilterType.PLANETARY)}
        selected={type === FilterType.PLANETARY}
      />
      <FilterItem
        text="Deep Sky"
        onClick={() => handleChangeType(FilterType.DEEP)}
        selected={type === FilterType.DEEP}
      />
    </ul>
  );
}
