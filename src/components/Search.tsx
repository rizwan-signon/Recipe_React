import { SearchIcon } from "lucide-react";
import DropMenu from "./DropMenu";
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";

const Search = () => {
  console.log("I am in search component check for re renders ");
  const { setSearch } = useContext(DataContext);

  return (
    <>
      <div className=" relative rounded-[20px] border-[2px] flex items-center gap-2 w-[726px] h-[46px]">
        <div className="bg-[#D0C5C5] w-1/5 rounded-2xl flex items-center justify-between">
          <DropMenu />
        </div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search"
          className="outline-none w-4/5 h-[44px] text-2xl"
        />
        <div className=" w-[44px] h-[46px]  absolute right-[-3px] rounded-full bg-[#D0C5C5] flex items-center justify-center">
          <SearchIcon className="" />
        </div>
      </div>
    </>
  );
};

export default Search;
