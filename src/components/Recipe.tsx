import { Clock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Recipe = ({ pizza }) => {
  console.log("I am in recipe component check for re renders ");
  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      onClick={() => handleDetails(pizza.id)}
      className=" h-[314px] max-w-xs mx-auto md:mx-0 md:w-full cursor-pointer hover:scale-105 transition-all duration-300 "
    >
      <div className="h-2/3 w-full">
        <img
          src={pizza.image}
          alt="banner"
          className="h-full object-cover w-full"
        />
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <div className="flex items-center justify-between">
          <h1>{pizza.name}</h1>
          <h1>{pizza.reviewCount}</h1>
        </div>
        <div className="flex items-center justify-between">
          <div className=" flex items-center gap-3">
            <Clock />
            <span>{pizza.cookTimeMinutes} min</span>
          </div>
          <div className="flex items-center gap-3">
            {pizza.mealType.map((type) => (
              <span key={type}>{type[0]}</span>
            ))}
            <h1>{pizza.rating}</h1>
            <Star />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
