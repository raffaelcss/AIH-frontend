import { useContext } from "react";
import { CardLoadingContext } from "./Card";
import { Skeleton } from "@mui/material";

interface CardButtonProps {
  children: string;
}

export default function CardButton({ children }: CardButtonProps) {
  const loading = useContext(CardLoadingContext);

  return (
    <div className="relative h-10">
      {loading ? (
        <Skeleton
          className="rounded-lg dark:bg-slate-800"
          variant="rectangular"
          height={40}
        />
      ) : (
        <div className="flex h-10 flex-none cursor-pointer items-center justify-center rounded-lg bg-sky-400 text-gray-50 transition-all hover:scale-[1.02] hover:bg-sky-500 dark:bg-sky-600 hover:dark:bg-sky-500">
          <button className="font-semibold dark:text-slate-800">
            {children}
          </button>
        </div>
      )}
    </div>
  );
}
