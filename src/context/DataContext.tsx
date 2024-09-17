import useDataFetch from "@/hooks/useDataFetch";
import { ReactNode, createContext, useState } from "react";

export const DataContext = createContext({});
type PropType = {
  children: ReactNode;
};
export const DataProvider = ({ children }: PropType) => {
  const { data, error, loading } = useDataFetch();
  const [search, setSearch] = useState("");

  return (
    <DataContext.Provider value={{ data, error, loading, search, setSearch }}>
      {children}
    </DataContext.Provider>
  );
};
