"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { MagicMotion } from "react-magic-motion";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { OpenContext } from "./SideNav";
import { themeChange } from "@/app/utils/themeChangeFunction";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function LightModeSwitch() {
  //Referencia para animação do ícone
  const [parent, enableAnimations] = useAutoAnimate({ duration: 150 });

  //Estado atual do tema
  const [darkState, setDarkState] = useState(true);
  //Contexto do menu aberto
  const open = useContext(OpenContext);

  //Função de clique no botão de mudança de tema
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setDarkState(!darkState);
    //Deve verificar sempre o localStorage pois o State demora para mudar
    localStorage.theme === "dark"
      ? (localStorage.theme = "light")
      : (localStorage.theme = "dark");
    console.log("Storage:" + themeChange());
    console.log("State:" + darkState);
  };

  useEffect(() => {
    setDarkState(themeChange());
  }, []);

  return (
    <div className="flex h-10 items-center md:px-2" onClick={handleClick}>
      <div ref={parent} className="ml-[5px] items-center p-2">
        {darkState ? (
          <BsMoonFill
            id="moonIcon"
            name="moonIcon"
            size="1.2em"
            className="m-auto"
          />
        ) : (
          <BsSunFill
            id="sunIcon"
            name="sunIcon"
            size="1.2em"
            className="m-auto"
          />
        )}
      </div>
      <div
        className={`${
          open ? "opacity-100" : "opacity-0"
        } flex flex-1 items-center  transition-all delay-100`}
      >
        <div className="retractable w-36 p-2">Light Mode</div>
        <MagicMotion>
          <div
            className={`${
              darkState ? "flex-row" : "flex-row-reverse"
            } retractable ml-auto mr-4 inline-flex h-5 w-14 cursor-pointer items-center justify-between rounded-full bg-indigo-100 px-1.5 py-0.5 dark:bg-slate-500 md:mr-0`}
          >
            <div className="h-4 w-4 rounded-full bg-sky-500 dark:bg-gray-100" />
            <div className="self-end text-xs font-normal leading-tight tracking-tight text-gray-700 dark:text-gray-100">
              {darkState ? "ON" : "OFF"}
            </div>
          </div>
        </MagicMotion>
      </div>
    </div>
  );
}
