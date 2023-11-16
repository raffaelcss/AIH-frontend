"use client"

import { FiLogOut } from "react-icons/fi";
import { IoTelescope } from "react-icons/io5";
import LightModeSwitch from "./LightModeSwitch";
import { useState, createContext } from "react";

interface SideNavProps{
    children?: React.ReactNode;
}

export const OpenContext = createContext(true);

export default function SideNav({children} : SideNavProps){

    const [open, setOpen] = useState(false);

    return (
        <OpenContext.Provider value={open}>
            <div 
                className={`${open ? "w-[18rem]" : "w-[5rem]"} transition-[width] duration-200 absolute left-0 bg-white dark:bg-slate-900 max-w-xs h-screen px-2 py-4 flex flex-col overflow-hidden`}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <div className="flex flex-col flex-auto ">
                    <a className="cursor-pointer text-slate-500 flex px-2 flex-none mb-8 ">
                        <div className="p-2 flex">
                            <IoTelescope size="1.8em" className="m-auto"/>
                        </div>
                        <div className={`${open ? "opacity-100" : "opacity-0"}  transition-all delay-100`}>
                            <div className="text-slate-500 p-2 w-52 text-xl font-semibold leading-snug tracking-tight">
                                Astro Image HUB
                            </div>
                        </div>
                    </a>
                    <div className="transition-[width] ease-in-out flex flex-col gap-3 flex-auto ">
                        {children}
                    </div>
                </div>
                <div className="text-slate-500 dark:text-gray-100 mt-2 flex flex-col flex-none ">
                    <LightModeSwitch/>
                    <a className="hover:bg-indigo-100 hover:dark:bg-slate-500 rounded h-10 cursor-pointer flex px-2 items-center">
                        <div className="items-center ml-[5px] p-2">
                            <FiLogOut size="1.2em" className="m-auto"/>
                        </div>
                        <div className={`${open ? "opacity-100" : "opacity-0"}  transition-all delay-100`}>
                            <div className="p-2">
                                LogOut
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </OpenContext.Provider>
    )
}