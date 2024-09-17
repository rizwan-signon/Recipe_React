const List = () => {
  console.log("I am in list component check for re renders ");
  return (
    <div className="max-w-xs md:max-w-2xl mx-auto mt-8 mb-20 flex flex-col gap-4">
      <hr className="border-gray-400 border-[1px]" />
      <ul className="flex items-center justify-around text-xl text-[#84BD00] font-medium">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Explore</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
      </ul>
      <hr className="border-gray-400 border-[1px]" />
    </div>
  );
};

export default List;
