import { Skeleton } from "@mui/material";

interface CardInfoItemProps {
    children?: React.ReactNode;
    text?: string;
    loading?: boolean;
}

export default function CardInfoItem({children, text, loading} : CardInfoItemProps) {
  return (
    <span className="flex items-center gap-3 text-xs">
      {children}
      {loading ? (
        <Skeleton
          className="dark:bg-slate-800"
          animation="wave"
          variant="text"
          width={75}
          sx={{ fontSize: "0.68rem" }}
        />
      ) : (
        <div className="relative flex overflow-hidden flex-1">
            <span className="whitespace-nowrap">{text}</span>
            <div className="absolute right-0 text-transparent bg-gradient-to-r from-transparent to-white dark:to-slate-900">aaaaa</div>
        </div>
      )}
    </span>
  );
}
