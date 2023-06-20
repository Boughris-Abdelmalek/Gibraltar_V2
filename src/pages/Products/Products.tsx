import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useGetAllProductsQuery } from "../../features/products/ProductsApiSlice";
import { selectAllProducts, setAllProducts } from "../../features/products/ProductsSlice";
import Loader from "../../components/Loader/Loader";

import { ProductSection } from "./styles";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";
import TextField from "../../components/TextField/TextField";

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
        <>
          <TextField variant="h3" transform="uppercase" className="title">all products</TextField>
          <ProductsGrid products={products} />
        </>
      )}
    </ProductSection>
  );
};

export default Products;
