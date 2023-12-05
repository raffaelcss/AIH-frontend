"use client";

import CardImages from "./CardImages";
import CardInfo from "./CardInfo";
import SocialBar from "./SocialBar";
import CardButton from "./CardButton";
import { LuMoreVertical } from "react-icons/lu";
import { Avatar, Skeleton } from "@mui/material";
import { createContext, useEffect, useState } from "react";

export const CardLoadingContext = createContext(true);

export default function Card() {
  const [loading, setLoading] = useState(true);

  //Simula tempo de carregamento
  let timeSimulatedLoading = Math.round(Math.random() * 1000);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, timeSimulatedLoading);
  });

  //Simula alguns usuários sem foto
  let retiraFoto = Math.random() >= 0.5 ? "*" : ""; 

  return (
    <CardLoadingContext.Provider value={loading}>
      <div className="relative flex w-68 flex-col overflow-hidden rounded-2xl bg-white p-4 transition-colors dark:bg-slate-900">
        <div className="flex h-[35px] items-center justify-between text-slate-500">
          <a className="flex flex-1 items-center gap-2">
            {loading ? (
              <Skeleton
                className="dark:bg-slate-800"
                variant="circular"
                width={32}
                height={32}
              />
            ) : (
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: "rgb(226 232 240)",
                  color: "rgb(100 116 139)",
                }}
                src={`${retiraFoto}https://avatars.githubusercontent.com/u/79311217?v=4`}
              />
            )}

            {loading ? (
              <div>
                <Skeleton
                  className="dark:bg-slate-800"
                  variant="text"
                  width={150}
                  sx={{ fontSize: "0.875rem" }}
                />
                <Skeleton
                  className="dark:bg-slate-800"
                  variant="text"
                  width={130}
                  sx={{ fontSize: "10px" }}
                />
              </div>
            ) : (
              <div>
                <div className="text-sm font-semibold dark:text-slate-300">
                  raffaelcss
                </div>
                <div className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                  Timóteo, MG, Brasil
                </div>
              </div>
            )}
          </a>
          <div className="flex-none cursor-pointer">
            <LuMoreVertical size="1.4rem" />
          </div>
        </div>
        <CardImages />
        <div className="flex flex-1 flex-col">
          <div className="mx-px my-2 flex flex-1 flex-col">
            <SocialBar />
            <div className="mt-2 flex flex-1 flex-col justify-between">
              <CardInfo />
              {loading ? (
                <Skeleton
                  className="dark:bg-slate-800"
                  variant="text"
                  sx={{ fontSize: "1.2rem" }}
                />
              ) : (
                <div className="flex-none text-lg font-semibold text-slate-800 dark:text-gray-100">
                  Nebulosa da Bolha
                </div>
              )}
            </div>
          </div>
          <CardButton>Visualizar</CardButton>
        </div>
      </div>
    </CardLoadingContext.Provider>
  );
}
