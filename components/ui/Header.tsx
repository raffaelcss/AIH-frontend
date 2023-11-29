import SearchInput from "@/components/SearchInput";
import { Avatar } from "@mui/material";

export default function Header() {
  return (
    <header className="flex">
      <div className="flex flex-1 justify-center md:justify-start">
        <SearchInput />
      </div>
      <a className="hidden flex-none items-center md:flex">
        <Avatar
          sx={{
            width: 40,
            height: 40,
            bgcolor: "rgb(255, 255, 255)",
            color: "rgb(100 116 139)",
          }}
          src="https://avatars.githubusercontent.com/u/79311217?v=4"
        />
      </a>
    </header>
  );
}
