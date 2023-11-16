"use client"

import { useContext, useEffect, useState } from "react";
import { OpenContext } from "./main-side-nav";

interface NavItemProps{
    name: string;
    children?: React.ReactNode;
    badge?: number;
}

export default function NavItem( {name, children} : NavItemProps){

    const [quantity, setQuantity] = useState(0);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setQuantity(quantity + 1);
    };

    const open = useContext(OpenContext);

    return (
        <a onClick={handleClick} className="h-10 cursor-pointer rounded text-slate-500 dark:text-gray-100 hover:bg-indigo-100 hover:dark:bg-slate-500 flex px-2">
            <div className="items-center ml-[5px] relative p-2 flex">
                {children} 
                {(!open && quantity > 0)&&
                    <div className="flex absolute rounded-full h-2 w-2 bg-sky-500 right-1"/>
                }    
            </div>
            <div className={`${open ? "opacity-100" : "opacity-0"} transition-all delay-100`}>
                <div className="w-36 retractable p-2 text-base font-normal leading-snug tracking-tight">
                    {name}
                </div>
                {quantity > 0 &&
                    <div className="my-auto ml-auto w-6 h-6 bg-indigo-100 dark:bg-gray-100 rounded justify-center items-center inline-flex">
                        <div className="text-sky-600 text-xs font-bold leading-7">
                            {quantity}
                        </div>
                    </div>
                }
            </div>
        </a>
    )
}