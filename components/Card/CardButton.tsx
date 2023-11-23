interface CardButtonProps{
  children: string;
}

export default function CardButton({children} : CardButtonProps) {
  return (
    <div className="flex h-10 flex-none cursor-pointer items-center justify-center rounded-lg bg-sky-600 text-gray-100 transition-all hover:scale-[1.02] hover:bg-sky-500 dark:bg-sky-500 hover:dark:bg-sky-400">
      <button className="font-semibold dark:text-slate-800">{children}</button>
    </div>
  );
}
