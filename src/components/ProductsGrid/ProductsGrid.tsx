import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ProductGrid } from "./styles";
import { IProps } from "./IProps";

const ProductsGrid: React.FC<IProps> = ({ products }) => {
  return (
    <ProductGrid>
      {products && products.map((product) => (
        <ProductCard key={product.id} item={product} />
      ))}
    </ProductGrid>
  );
};

export default ProductsGrid;
