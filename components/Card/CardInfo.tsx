import { IoSparklesSharp } from "react-icons/io5";
import { FaArrowDownUpAcrossLine, FaLocationDot } from "react-icons/fa6";
import { LuArrowDownToLine } from "react-icons/lu";
import { RiStackFill } from "react-icons/ri";
import { SiUtorrent } from "react-icons/si";

import { useContext } from "react";
import { CardLoadingContext } from "./Card";
import CardInfoItem from "./CardInfoItem";

export default function CardInfo() {
  const loading = useContext(CardLoadingContext);

  return (
    <div className="flex-1">
      <div className="mb-3 grid flex-none grid-flow-row grid-cols-2 gap-1">
        <CardInfoItem text="NGC 7635" loading={loading}>
          <IoSparklesSharp size="0.9rem" />
        </CardInfoItem>
        <CardInfoItem text="2.3k" loading={loading}>
          <LuArrowDownToLine size="0.9rem" />
        </CardInfoItem>
        <CardInfoItem text="Ratio 2.3" loading={loading}>
          <FaArrowDownUpAcrossLine size="0.9rem" />
        </CardInfoItem>
        <CardInfoItem text="18" loading={loading}>
          <RiStackFill size="0.9rem" />
        </CardInfoItem>
        <CardInfoItem text="Jaguaraçu, MG, Brasil" loading={loading}>
          <FaLocationDot size="0.9rem" />
        </CardInfoItem>
        <CardInfoItem text="231 SE/10 LE" loading={loading}>
          <SiUtorrent size="0.9rem" />
        </CardInfoItem>
      </div>
    </div>
  );
}
