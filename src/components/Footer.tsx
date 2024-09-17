import rectangle from "../assets/images/Rectangle.png";
import logo from "../assets/images/CP-Logo.png";
const Footer = () => {
  console.log("I am in footer component check for re renders ");
  return (
    <div className=" relative mt-24">
      <div className="h-[243px]">
        <img src={rectangle} />
      </div>
      <div className=" absolute left-[112px] top-[100px]">
        <img src={logo} />
        <h1 className="text-white capitalize">all rights reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
