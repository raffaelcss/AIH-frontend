import SocialBar from "./SocialBar";
import CardButton from "./cardButton";

export default function Card() {
  return (
    <div className="relative flex h-108 w-68 flex-col overflow-hidden rounded-2xl bg-white p-5 transition-colors dark:bg-slate-900">
      <div className="h-52 flex-none rounded-lg bg-[url('https://spacetoday.com.br/wp-content/uploads/2022/03/nebulosa_bolha_02.jpg')] bg-cover bg-center"></div>
      <div className="flex flex-1 flex-col">
        <div className="mx-px my-2 flex flex-1 flex-col">
          <SocialBar />
          <div className="mt-2 flex flex-1 flex-col justify-between">
            <div className="flex-1">Infos</div>
            <div className="flex-none text-lg font-semibold text-slate-800 dark:text-gray-100">
              Titulo
            </div>
          </div>
        </div>
        <CardButton>Visualizar</CardButton>
      </div>
    </div>
  );
}
