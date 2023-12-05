import SideNav from "@/app/components/ui/SideNav";
import NavItem from "@/app/components/ui/SideNavItem";
import { IoBagHandle } from "react-icons/io5";
import { FaPenSquare, FaImages, FaUserAlt } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { BsFillChatDotsFill, BsGearFill, BsGridFill } from "react-icons/bs";

export default function SideNavAIH() {
  return (
    <SideNav>
      <NavItem name="Home">
        <FaHouse size="1.2em" />
      </NavItem>
      <NavItem name="Posts">
        <FaPenSquare size="1.2em" />
      </NavItem>
      <NavItem name="Meus Packs">
        <FaImages size="1.2em" />
      </NavItem>
      <NavItem name="Comentários" badge={1}>
        <BsFillChatDotsFill size="1.2em" />
      </NavItem>
      <NavItem name="Loja de Packs">
        <IoBagHandle size="1.2em" />
      </NavItem>
      <NavItem name="Perfil">
        <FaUserAlt size="1.2em" />
      </NavItem>
      <NavItem name="Configurações">
        <BsGearFill size="1.2em" />
      </NavItem>
      <NavItem name="Ferramentas">
        <BsGridFill size="1.2em" />
      </NavItem>
    </SideNav>
  );
}
