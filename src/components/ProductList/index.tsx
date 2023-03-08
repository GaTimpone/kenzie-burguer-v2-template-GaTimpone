import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { dataCard } = useContext(CartContext);

  return <ProductCard dataCard={dataCard} />;
};

export default ProductList;
