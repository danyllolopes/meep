import { ISale, IProducts } from "../types/ProductType";

export const addProduct = (
  newProduct: IProducts,
  setProducts: React.Dispatch<React.SetStateAction<ISale[]>>
) => {
  setProducts((currentProducts) => {
    const existingProductIndex = currentProducts.findIndex(
      (product) => product.id === newProduct.id
    );
    if (existingProductIndex >= 0) {
      const updatedProducts = [...currentProducts];
      updatedProducts[existingProductIndex] = {
        ...updatedProducts[existingProductIndex],
        qtd: updatedProducts[existingProductIndex].qtd + 1,
      };
      return updatedProducts;
    } else {
      return [...currentProducts, { ...newProduct, qtd: 1 }];
    }
  });
};

export const removeProduct = (
  id: number,
  setProducts: React.Dispatch<React.SetStateAction<ISale[]>>
) => {
  setProducts((currentProducts) => {
    const existingProductIndex = currentProducts.findIndex(
      (product) => product.id === id
    );

    if (existingProductIndex >= 0) {
      const updatedProducts = [...currentProducts];
      const existingProduct = updatedProducts[existingProductIndex];

      if (existingProduct.qtd > 1) {
        updatedProducts[existingProductIndex] = {
          ...existingProduct,
          qtd: existingProduct.qtd - 1,
        };
      } else {
        updatedProducts.splice(existingProductIndex, 1);
      }
      return updatedProducts;
    }
    return currentProducts;
  });
};

export const productQuantity = (id: number, products: ISale[]) => {
  const product = products.find((item) => item.id === id);
  return product ? product.qtd : 0;
};

export const totalProductQuantity = (products: ISale[]) => {
  return products.reduce((total, product) => total + product.qtd, 0);
};

export const totalPrice = (products: ISale[]) => {
  return products.reduce(
    (total, product) => total + product.price * product.qtd,
    0
  );
};
