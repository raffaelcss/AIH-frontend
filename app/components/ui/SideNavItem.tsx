"use client";

import { useContext, useEffect, useState } from "react";
import { OpenContext } from "./SideNav";

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
      className="flex h-10 cursor-pointer rounded text-slate-500 hover:bg-indigo-100 dark:text-gray-100 hover:dark:bg-slate-500 md:px-2"
    >
      <div className="relative ml-[5px] flex items-center p-2">
        {children}
        {!open && quantity > 0 && (
          <span className="absolute right-1 h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="absolute inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
          </span>
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
