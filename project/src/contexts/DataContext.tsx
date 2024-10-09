import React from "react";
import { IProducts } from "../types/ProductType";
import useFetch from "../hooks/useFetch";

type IDataContext = {
  data: IProducts[] | null;
  loading: boolean;
  error: string | null;
}

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error('useData precisa estar em DataContextProvider');
  return context;
}

export const DateContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<IProducts[]>('');
  return <DataContext.Provider value={{ data, error, loading }}>{ children }</DataContext.Provider>
}