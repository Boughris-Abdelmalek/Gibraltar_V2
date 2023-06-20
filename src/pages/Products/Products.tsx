import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useGetAllProductsQuery } from "../../features/products/ProductsApiSlice";
import { selectAllProducts, setAllProducts } from "../../features/products/ProductsSlice";
import Loader from "../../components/Loader/Loader";
import ProductCard from "../../components/ProductCard/ProductCard";

import { ProductSection, ProductsGrid } from "./styles";

const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const { data, isFetching } = useGetAllProductsQuery({ limit: 0 });

  useEffect(() => {
    if (data) {
      dispatch(setAllProducts(data));
    }
  }, [data, dispatch]);

  return (
    <ProductSection>
      {isFetching ? (
        <Loader />
      ) : (
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </ProductsGrid>
      )}
    </ProductSection>
  );
};

export default Products;
