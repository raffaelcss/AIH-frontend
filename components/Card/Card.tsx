import CardImages from "./CardImages";
import CardInfo from "./CardInfo";
import SocialBar from "./SocialBar";
import CardButton from "./CardButton";

export default function Card() {
  return (
    <div className="relative flex w-68 flex-col overflow-hidden rounded-2xl bg-white p-5 transition-colors dark:bg-slate-900">
      <div className="">Usuario</div>
      <CardImages />
      <div className="flex flex-1 flex-col">
        <div className="mx-px my-2 flex flex-1 flex-col">
          <SocialBar />
          <div className="mt-2 flex flex-1 flex-col justify-between">
            <CardInfo />
            <div className="mt-1 flex-none text-lg font-semibold text-slate-800 dark:text-gray-100">
              Nebulosa da Bolha
            </div>
          </div>
        </div>
        <CardButton>Visualizar</CardButton>
      </div>
    </div>
  );
}
