"use client";

import { useContext, useEffect, useState } from "react";
import { OpenContext } from "./main-side-nav";

interface NavItemProps {
  name: string;
  children?: React.ReactNode;
  badge?: number;
}

export default function NavItem({ name, children }: NavItemProps) {
  const [quantity, setQuantity] = useState(0);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setQuantity(quantity + 1);
  };

  const open = useContext(OpenContext);

  return (
    <a
      onClick={handleClick}
      className="flex h-10 cursor-pointer rounded px-2 text-slate-500 hover:bg-indigo-100 dark:text-gray-100 hover:dark:bg-slate-500"
    >
      <div className="relative ml-[5px] flex items-center p-2">
        {children}
        {!open && quantity > 0 && (
          <div className="absolute right-1 flex h-2 w-2 rounded-full bg-sky-500" />
        )}
      </div>
      <div
        className={`${
          open ? "opacity-100" : "opacity-0"
        } flex flex-1 transition-all delay-100`}
      >
        <div className="retractable w-36 p-2 text-base font-normal leading-snug tracking-tight">
          {name}
        </div>
        {quantity > 0 && (
          <div className="my-auto ml-auto inline-flex h-6 w-6 items-center justify-center rounded bg-indigo-100 dark:bg-gray-100">
            <div className="text-xs font-bold leading-7 text-sky-600">
              {quantity}
            </div>
          </div>
        )}
      </div>
    </a>
  );
}
