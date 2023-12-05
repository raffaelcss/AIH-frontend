import { Skeleton } from "@mui/material";

interface CardInfoItemProps {
  children?: React.ReactNode;
  text?: string;
  loading?: boolean;
}

export default function CardInfoItem({
  children,
  text,
  loading,
}: CardInfoItemProps) {
  return (
    <span className="flex items-center gap-3 text-xs">
      {children}
      {loading ? (
        <Skeleton
          className="dark:bg-slate-800"
          variant="text"
          width={75}
          sx={{ fontSize: "0.68rem" }}
        />
      ) : (
        <div className="relative flex flex-1 overflow-hidden">
          <span className="whitespace-nowrap">{text}</span>
          <div className="absolute right-0 w-10 bg-gradient-to-r from-transparent to-white text-transparent dark:to-slate-900">
            a
          </div>
        </div>
      )}
    </span>
  );
}
