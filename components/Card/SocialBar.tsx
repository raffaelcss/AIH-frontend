import {
  LuThumbsUp,
  LuMessageCircle,
  LuSend,
  LuBookmark,
} from "react-icons/lu";

export default function SocialBar() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LuThumbsUp
            size="1.4rem"
            className="cursor-pointer transition-colors hover:text-sky-600 dark:hover:text-sky-500"
          />
          <LuMessageCircle
            size="1.4rem"
            className="cursor-pointer transition-colors hover:text-sky-600 dark:hover:text-sky-500"
          />
          <LuSend
            size="1.4rem"
            className="cursor-pointer transition-colors hover:text-sky-600 dark:hover:text-sky-500"
          />
        </div>
        <LuBookmark
          size="1.4rem"
          className="cursor-pointer transition-colors hover:text-sky-600 dark:hover:text-sky-500"
        />
      </div>
      <div className="mt-2 text-xs">105 views</div>
    </>
  );
}