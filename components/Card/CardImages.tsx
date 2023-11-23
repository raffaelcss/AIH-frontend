"use client";

import { useState } from "react";
import { GoDotFill } from "react-icons/go";

export default function CardImages() {
  //Foto selecionada
  const [selected, setSelected] = useState(0);

  const handleClick = (select: number) => {
    setSelected(select);
  };

  let imagesUrl = [
    "bg-[url('https://t.ctcdn.com.br/f0wJRiJYddfZgg5uPjlOQUFozL4=/5000x2813/smart/i552851.jpeg')]",
    "bg-[url('https://i0.wp.com/gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2016/07/nebulosa-orion-1.jpg')]",
    "bg-[url('https://ogimg.infoglobo.com.br/in/17082413-242-265/FT1086A/760/fantasma-estrela-agonizante.jpg')]",
  ];
  return (
    <div
      className={`relative mt-2 flex h-52 flex-none justify-center rounded-md transition-[background-image] duration-300 ease-out ${imagesUrl[selected]} bg-cover bg-center`}
    >
      <div className="absolute -bottom-6 flex text-slate-500">
        <GoDotFill
          size="0.7rem"
          className={`${selected == 0 ? "text-sky-400" : ""} cursor-pointer`}
          onClick={() => {
            handleClick(0);
          }}
        />
        <GoDotFill
          size="0.7rem"
          className={`${selected == 1 ? "text-sky-400" : ""} cursor-pointer`}
          onClick={() => {
            handleClick(1);
          }}
        />
        <GoDotFill
          size="0.7rem"
          className={`${selected == 2 ? "text-sky-400" : ""} cursor-pointer`}
          onClick={() => {
            handleClick(2);
          }}
        />
      </div>
    </div>
  );
}
