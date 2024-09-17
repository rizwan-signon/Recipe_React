import logo from "../assets/images/CP-Logo.png";
import Search from "./Search";
const Header = () => {
  console.log("I am in header component check for re renders ");
  return (
    <div className=" hidden md:flex max-w-7xl  items-center gap-28 ml-[112px] py-4">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <Search />
    </div>
  );
};

export default Header;
