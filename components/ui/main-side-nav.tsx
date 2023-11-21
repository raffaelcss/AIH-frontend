"use client";

import { FiLogOut } from "react-icons/fi";
import { IoTelescope } from "react-icons/io5";
import LightModeSwitch from "./LightModeSwitch";
import { useState, createContext } from "react";

interface SideNavProps {
  children?: React.ReactNode;
}

export const OpenContext = createContext(true);

export default function SideNav({ children }: SideNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <OpenContext.Provider value={open}>
      <div
        className={`${
          open ? "w-[18rem]" : "w-[5rem]"
        } absolute left-0 z-50 flex h-screen max-w-xs flex-col overflow-hidden bg-white px-2 py-4 shadow-lg transition-[width] duration-200 dark:bg-slate-900`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="flex flex-auto flex-col ">
          <a className="mb-8 flex flex-none cursor-pointer px-2 text-slate-500 ">
            <div className="flex p-2">
              <IoTelescope size="1.8em" className="m-auto" />
            </div>
            <div
              className={`${
                open ? "opacity-100" : "opacity-0"
              }  transition-all delay-100`}
            >
              <div className="w-52 p-2 text-xl font-semibold leading-snug tracking-tight text-slate-500">
                Astro Image HUB
              </div>
            </div>
          </a>
          <div className="flex flex-auto flex-col gap-3 transition-[width] ease-in-out ">
            {children}
          </div>
        </div>
        <div className="mt-2 flex flex-none flex-col text-slate-500 dark:text-gray-100 ">
          <LightModeSwitch />
          <a className="flex h-10 cursor-pointer items-center rounded px-2 hover:bg-indigo-100 hover:dark:bg-slate-500">
            <div className="ml-[5px] items-center p-2">
              <FiLogOut size="1.2em" className="m-auto" />
            </div>
            <div
              className={`${
                open ? "opacity-100" : "opacity-0"
              }  transition-all delay-100`}
            >
              <div className="p-2">LogOut</div>
            </div>
          </a>
        </div>
      </div>
    </OpenContext.Provider>
  );
}
