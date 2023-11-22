import { LuThumbsUp, LuHeart, LuSend, LuBookmark } from "react-icons/lu";
export default function SocialBar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <LuHeart
          size="1.4rem" 
          className="cursor-pointer transition-colors hover:text-red-600"
        />
        <LuThumbsUp
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
  );
}
