"use client";

import { useContext, useState } from "react";
import {
  LuThumbsUp,
  LuMessageCircle,
  LuSend,
  LuBookmark,
} from "react-icons/lu";
import { CardLoadingContext } from "./Card";
import { Skeleton } from "@mui/material";

export default function SocialBar() {
  const [liked, setLiked] = useState(false);
  const [marked, setMarked] = useState(false);

  const loading = useContext(CardLoadingContext);

  const likeClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!loading) setLiked(!liked);
  };

  const markClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!loading) setMarked(!marked);
  };

  return (
    <>
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div onClick={likeClick}>
            <LuThumbsUp
              size="1.4rem"
              className={`${
                liked ? "fill-sky-600 text-sky-600 dark:text-sky-600" : ""
              } cursor-pointer transition-colors hover:text-sky-600 dark:hover:text-sky-500`}
            />
          </div>
          <div>
            <LuMessageCircle
              size="1.4rem"
              className="cursor-pointer transition-colors hover:text-sky-600 dark:hover:text-sky-500"
            />
          </div>
          <div>
            <LuSend
              size="1.4rem"
              className="cursor-pointer transition-colors hover:text-sky-600 dark:hover:text-sky-500"
            />
          </div>
        </div>
        <div onClick={markClick}>
          <LuBookmark
            size="1.4rem"
            className={`${
              marked
                ? "fill-red-600 text-red-600 dark:fill-gray-100 dark:text-gray-100"
                : ""
            } dark:hover:red-500 cursor-pointer transition-colors hover:text-red-600`}
          />
        </div>
      </div>
      {loading ? (
        <Skeleton
          className="dark:bg-slate-800"
          variant="text"
          width={75}
          sx={{ fontSize: "0.65rem" }}
        />
      ) : (
        <div className="text-xs">105 views</div>
      )}
    </>
  );
}
