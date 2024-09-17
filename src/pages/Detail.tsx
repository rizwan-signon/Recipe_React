import { DataContext } from "@/context/DataContext";
import { Check } from "lucide-react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const { data } = useContext(DataContext);
  const pizza = data.find((pizza) => pizza.id === parseInt(id));
  console.log(pizza);
  return (
    <div className=" flex items-center justify-between w-[87%] mx-auto md:mt-[200px] mt-10 flex-col-reverse md:flex-row gap-4">
      <div className="h-[550px] bg-[#8B888836] md:w-[560px] rounded-[28px] p-6 overflow-y-auto ">
        <div className="">
          <h1 className="text-3xl">{pizza.name}</h1>
          <div className="mt-5">
            {pizza.instructions.map((instructions, index) => (
              <h1 key={index}>{instructions}</h1>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-4 mt-5">
          <h1 className=" capitalize text-xl font-semibold">ingredients</h1>
          <hr className=" border-black" />
          <div>
            {pizza.ingredients.map((ingred, index) => (
              <ul key={index} className="flex items-center gap-4 my-2">
                <div className="w-5 h-5 rounded-full flex items-center justify-center bg-green-700">
                  <Check className="text-white" />
                </div>
                <li className="text-gray-400 capitalize font-semibold">
                  {ingred}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="md:h-[552px] md:w-[557px]">
        <img src={pizza.image} className="h-full rounded-full object-cover" />
      </div>
    </div>
  );
};

export default Detail;
