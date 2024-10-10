import React from "react";
import { ISale, IProducts } from "../types/ProductType";
import {
  addProduct,
  removeProduct,
  productQuantity,
  totalProductQuantity,
  totalPrice,
} from "../utils/productUtil";

type IDataContext = {
  handleAddProduct: (newProduct: IProducts) => void;
  handleRemoveProduct: (id: number) => void;
  getProductQuantity: (id: number) => number;
  getTotalProductQuantity: number;
  getTotalPrice: number;
  products: ISale[];
};

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};

export const DateContextProvider = ({ children }: React.PropsWithChildren) => {
  const [products, setProducts] = React.useState<ISale[]>([]);

  const handleAddProduct = (newProduct: IProducts) => {
    addProduct(newProduct, setProducts);
  };

  const handleRemoveProduct = (id: number) => {
    removeProduct(id, setProducts);
  };

  const getProductQuantity = React.useCallback((id: number) => {
    return productQuantity(id, products);
  },[ products]);

  const getTotalProductQuantity = React.useMemo(() => {
    return totalProductQuantity(products);
  },[products]);

  const getTotalPrice = React.useMemo(() => {
    return totalPrice(products);
  },[products]);

  return (
    <DataContext.Provider
      value={{
        products,
        handleAddProduct,
        handleRemoveProduct,
        getProductQuantity,
        getTotalProductQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
