"use client";

import { useState } from "react";
import {
  LuThumbsUp,
  LuMessageCircle,
  LuSend,
  LuBookmark,
} from "react-icons/lu";

export default function SocialBar() {
  const [liked, setLiked] = useState(false);
  const [marked, setMarked] = useState(false);

  const likeClick = (event: React.MouseEvent<HTMLElement>) => {
    setLiked(!liked);
  };

  const markClick = (event: React.MouseEvent<HTMLElement>) => {
    setMarked(!marked);
  };

  return (
    <>
      <div className="flex items-center justify-between">
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
            } cursor-pointer transition-colors hover:text-red-600 dark:hover:red-500`}
          />
        </div>
      </div>
      <div className="mt-2 text-xs">105 views</div>
    </>
  );
}
