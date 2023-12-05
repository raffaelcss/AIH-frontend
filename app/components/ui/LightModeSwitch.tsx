"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { MagicMotion } from "react-magic-motion";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { OpenContext } from "./SideNav";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useTheme } from "next-themes";

export default function LightModeSwitch() {
  //Referencia para animação do ícone
  const [parent, enableAnimations] = useAutoAnimate({ duration: 150 });
  //Contexto do menu aberto
  const open = useContext(OpenContext);

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [darkState, setDarkState] = useState(theme == "dark");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (darkState) {
      setTheme("light");
      setDarkState(false);
    } else {
      setTheme("dark");
      setDarkState(true);
    }
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(prefers-color-scheme: dark)").matches && theme=="system") {
      setDarkState(true);
    }
  }, []);

  if (!mounted) {
    return null;
  }

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
        <div className="retractable w-36 cursor-default p-2">Light Mode</div>
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
