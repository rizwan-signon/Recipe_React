import { LuArrowRightToLine } from "react-icons/lu";
import { ImUser } from "react-icons/im";
import { useState } from "react";
import logo from "../assets/images/CP-Logo.png";
import { Menu } from "lucide-react";
const NavBar = () => {
  console.log("I am in navbar component check for re renders ");
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((show) => (show === true ? false : true));
  };
  console.log(show);
  return (
    <div className=" md:h-[37px] bg-black">
      <nav className=" hidden md:flex w-[85%] mx-auto items-center justify-between h-[37px] text-white">
        <ul className=" flex items-center gap-12 ">
          <li>
            <a href="#">community</a>
          </li>
          <li>
            <a href="#">Books</a>
          </li>
          <li>
            <a href="#">Recipe index</a>
          </li>
          <li>
            <a href="#">popular</a>
          </li>
        </ul>
        <div className=" hidden md:flex items-center gap-4 ">
          <div className=" flex items-center gap-2">
            <LuArrowRightToLine className=" text-green-600" />
            <h1>register</h1>
          </div>
          <div className=" flex items-center gap-2">
            <ImUser className=" text-green-600" />
            <h1>login</h1>
          </div>
        </div>
      </nav>
      {/*mobile responsive */}
      <div className="flex items-center justify-between mx-4 md:hidden relative">
        <div className="w-8 h-8 rounded-full">
          <img src={logo} className="w-full h-full object-cover rounded-full" />
        </div>
        <Menu onClick={handleShow} className="text-white cursor-pointer" />
        {show && (
          <ul className=" md:hidden absolute  top-8 p-2 rounded-2xl right-0 bg-[#D0C5C5] z-30 w-1/2 flex flex-col gap-2 ">
            <li className=" hover:bg-gray-300 p-2 rounded-lg cursor-pointer transition-all duration-300">
              <a href="#">community</a>
            </li>
            <li className=" hover:bg-gray-300 p-2 rounded-lg cursor-pointer transition-all duration-300 ">
              <a href="#">Books</a>
            </li>
            <li className=" hover:bg-gray-300 p-2 rounded-lg cursor-pointer transition-all duration-300 ">
              <a href="#">Recipe index</a>
            </li>
            <li className=" hover:bg-gray-300 p-2 rounded-lg cursor-pointer transition-all duration-300 ">
              <a href="#">popular</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
