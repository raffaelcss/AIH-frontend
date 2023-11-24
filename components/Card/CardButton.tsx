import { useContext } from "react";
import { CardLoadingContext } from "./Card";
import { Skeleton } from "@mui/material";

interface CardButtonProps {
  children: string;
}

export default function CardButton({ children }: CardButtonProps) {
  const loading = useContext(CardLoadingContext);

  return (
    <div className="relative h-10 overflow-hidden">
      <div
        className={`flex h-10 flex-none cursor-pointer items-center justify-center rounded-lg ${
          loading
            ? "bg-sky-200 text-gray-50 dark:bg-sky-900"
            : "bg-sky-600 text-gray-100"
        }  transition-all hover:scale-[1.02] hover:bg-sky-500 dark:bg-sky-500 hover:dark:bg-sky-400`}
      >
        <button className="font-semibold dark:text-slate-800">
          {children}
        </button>
      </div>
      {loading && (
        <Skeleton
          className="z-999 absolute right-0 top-0 w-full flex-none rounded-lg"
          animation="wave"
          variant="rectangular"
          height={40} 
        />
      )}
    </div>
  );
}
