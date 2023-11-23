import { GoDotFill } from "react-icons/go";

export default function CardImages() {
  return (
    <div className="relative mt-2 flex h-52 flex-none justify-center rounded-lg bg-[url('https://spacetoday.com.br/wp-content/uploads/2022/03/nebulosa_bolha_02.jpg')] bg-cover bg-center">
      <div className="absolute -bottom-6 flex text-slate-500">
        <GoDotFill size="0.7rem" className="text-sky-400" />
        <GoDotFill size="0.7rem" />
        <GoDotFill size="0.7rem" />
      </div>
    </div>
  );
}
