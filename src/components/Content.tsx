import { useContext } from "react";
import Recipe from "./Recipe";
import { DataContext } from "@/context/DataContext";

const Content = () => {
  const { data, error, search, loading } = useContext(DataContext);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 md:gap-10 max-w-5xl mx-auto">
      {data.map((pizza) => (
        <Recipe key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Content;
