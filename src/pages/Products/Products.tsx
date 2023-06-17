import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useGetAllProductsQuery } from "../../features/products/ProductsApiSlice";
import { selectAllProducts, getAllProducts } from "../../features/products/ProductsSlice";

const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const { data } = useGetAllProductsQuery();

  React.useEffect(() => {
    if (data) {
      dispatch(getAllProducts(data));
    }
  }, [data]);

  return <div>
    <ul>
      {
        products.map(product => {
          return <li>{product.title}</li>
        })
      }
    </ul>
  </div>;
};

export default Products;
