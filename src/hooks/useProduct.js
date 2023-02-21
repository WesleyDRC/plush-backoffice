import { useContext } from "react";
import { ProductsContext } from "../contexts/products";

const useProduct = () => {
  return useContext(ProductsContext);
};

export default useProduct;
