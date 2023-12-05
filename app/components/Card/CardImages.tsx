"use client";

import { Skeleton } from "@mui/material";
import { useContext, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { CardLoadingContext } from "./Card";
import shuffleArray from "@/app/utils/shufleArray";

export default function CardImages() {
  //Foto selecionada
  const [selected, setSelected] = useState(0);

  const loading = useContext(CardLoadingContext);

  const handleClick = (select: number) => {
    if (!loading) setSelected(select);
  };

  let imagesUrl = [
    "bg-[url('https://t.ctcdn.com.br/f0wJRiJYddfZgg5uPjlOQUFozL4=/5000x2813/smart/i552851.jpeg')]",
    "bg-[url('https://i0.wp.com/gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2016/07/nebulosa-orion-1.jpg')]",
    "bg-[url('https://ogimg.infoglobo.com.br/in/17082413-242-265/FT1086A/760/fantasma-estrela-agonizante.jpg')]",
    "bg-[url('https://www.universetoday.com/wp-content/uploads/2009/05/Messier7-e1457980086441.jpg')]",
    "bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/M5s.jpg/1200px-M5s.jpg')]"
  ];

  //Simulando imagens diferentes usando embaralhamento
  shuffleArray(imagesUrl);

  return (
    <div className="relative mt-2 flex h-52 justify-center">
      {loading ? (
        <Skeleton
          className="flex-1 rounded-md dark:bg-slate-800"
          variant="rectangular"
          height={208}
        />
      ) : (
        <div
          className={`flex-1 rounded-md transition-[background-image] duration-300 ease-out ${imagesUrl[selected]} bg-cover bg-center`}
        ></div>
      )}

      <div
        className={`absolute -bottom-6 flex ${
          loading ? "text-slate-300 dark:text-slate-800" : "text-slate-500"
        } `}
      >
        <GoDotFill
          size="0.7rem"
          className={`${
            selected == 0 && !loading ? "text-sky-400" : ""
          } cursor-pointer`}
          onClick={() => {
            handleClick(0);
          }}
        />
        <GoDotFill
          size="0.7rem"
          className={`${
            selected == 1 && !loading ? "text-sky-400" : ""
          } cursor-pointer`}
          onClick={() => {
            handleClick(1);
          }}
        />
        <GoDotFill
          size="0.7rem"
          className={`${
            selected == 2 && !loading ? "text-sky-400" : ""
          } cursor-pointer`}
          onClick={() => {
            handleClick(2);
          }}
        />
      </div>
    </div>
  );
}
