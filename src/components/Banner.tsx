import banner from "../assets/images/banner.png";
const Banner = () => {
  console.log("I am in Banner component check for re renders ");
  return (
    <div className="md:h-[435px] relative mt-4">
      <div className="w-full  ">
        <img src={banner} alt="banner" className=" object-cover w-full" />
      </div>
      <h1 className="hidden md:block absolute h-[73px] top-24 left-28 w-[583px] text-[67px] text-white">
        Food Dairy
      </h1>
    </div>
  );
};

export default Banner;
