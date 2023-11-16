"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { MagicMotion } from "react-magic-motion";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { OpenContext } from "./main-side-nav";
import autoAnimate from "@formkit/auto-animate";
import { themeChange } from "@/app/utils/themeChangeFunction";



export default function LightModeSwitch() {

    //Referencia para animação do ícone
    const switchRef = useRef(null);

    //Estado atual do tema
    const [darkState, setDarkState] = useState(true);
    //Contexto do menu aberto
    const open = useContext(OpenContext);

    //Função de clique no botão de mudança de tema
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setDarkState(!darkState);
        //Deve verificar sempre o localStorage pois o State demora para mudar
        localStorage.theme === 'dark' ? localStorage.theme = 'light' : localStorage.theme = 'dark';
        console.log("Storage:" + themeChange());
        console.log("State:" + darkState);
    };

    useEffect(() => {
        if (switchRef.current) {
            autoAnimate(switchRef.current);
        }
        //Atualiza o tema assim que carrega o componente
        setDarkState(themeChange());
    }, [switchRef]);

    return (
        <div className="h-10 flex px-2 items-center">
            <div ref={switchRef} className="items-center ml-[5px] p-2">
                {darkState
                    ? <BsMoonFill id="moonIcon" name="moonIcon" size="1.2em" className="m-auto" />
                    : <BsSunFill id="sunIcon" name="sunIcon" size="1.2em" className="m-auto" />}
            </div>
            <div className={`${open ? "opacity-100" : "opacity-0"} items-center flex flex-1  transition-all delay-100`}>
                <div className="w-36 retractable p-2">
                    Light Mode
                </div>
                <MagicMotion>
                    <div onClick={handleClick} className={`${darkState ? "flex-row" : "flex-row-reverse"} cursor-pointer retractable w-14 h-5 px-1.5 py-0.5 ml-auto bg-indigo-100 dark:bg-slate-500 rounded-full justify-between items-center inline-flex`}>
                        <div className="w-4 h-4 bg-sky-500 dark:bg-gray-100 rounded-full" />
                        <div className="self-end text-gray-700 dark:text-gray-100 text-xs font-normal leading-tight tracking-tight">
                            {darkState ? "ON" : "OFF"}
                        </div>
                    </div>
                </MagicMotion>
            </div>
        </div>
    );
}
