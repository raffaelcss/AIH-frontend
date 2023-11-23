import { IoSparklesSharp } from "react-icons/io5";
import { FaArrowDownUpAcrossLine } from "react-icons/fa6";
import { LuArrowDownToLine } from "react-icons/lu";
import { RiStackFill } from "react-icons/ri";

export default function CardInfo() {
  return (
    <div className="grid flex-1 grid-flow-col grid-rows-2 gap-1">
      <span className="flex items-center gap-3 text-xs">
        <IoSparklesSharp size="0.9rem" />
        NGC 7635
      </span>
      <span className="flex items-center gap-3 text-xs">
        <FaArrowDownUpAcrossLine size="0.9rem" />
        Ratio 2.3
      </span>
      <span className="flex items-center gap-3 text-xs">
        <LuArrowDownToLine size="1rem" />
        2.3k
      </span>
      <span className="flex items-center gap-3 text-xs">
        <RiStackFill size="0.9rem" />
        18 stacks
      </span>
    </div>
  );
}
