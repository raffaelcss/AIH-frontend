import CardImages from "./CardImages";
import CardInfo from "./CardInfo";
import SocialBar from "./SocialBar";
import CardButton from "./CardButton";
import { FaUserAlt } from "react-icons/fa";
import { LuMoreVertical } from "react-icons/lu";
import { Avatar } from "@mui/material";

export default function Card() {
  return (
    <div className="relative flex w-68 flex-col overflow-hidden rounded-2xl bg-white p-4 transition-colors dark:bg-slate-900">
      <div className="flex items-center justify-between text-slate-500">
        <div className="flex flex-1 items-center gap-2">
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: "rgb(226 232 240)",
              color: "rgb(100 116 139)",
            }}
            src="https://avatars.githubusercontent.com/u/79311217?v=4"
          />
          <div className="text-sm font-semibold dark:text-slate-300">
            raffaelcss
          </div>
        </div>
        <div className="flex-none cursor-pointer">
          <LuMoreVertical size="1.4rem" />
        </div>
      </div>
      <CardImages />
      <div className="flex flex-1 flex-col">
        <div className="mx-px my-2 flex flex-1 flex-col">
          <SocialBar />
          <div className="mt-2 flex flex-1 flex-col justify-between">
            <CardInfo />
            <div className="mt-3 flex-none text-lg font-semibold text-slate-800 dark:text-gray-100">
              Nebulosa da Bolha
            </div>
          </div>
        </div>
        <CardButton>Visualizar</CardButton>
      </div>
    </div>
  );
}
