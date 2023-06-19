import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useGetAllProductsQuery } from "../../features/products/ProductsApiSlice";
import { selectAllProducts, getAllProducts } from "../../features/products/ProductsSlice";
import Loader from "../../components/Loader/Loader";

const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const { data, isFetching } = useGetAllProductsQuery({ limit: 0 });

  React.useEffect(() => {
    if (data) {
      dispatch(getAllProducts(data));
    }
  }, [data]);

  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : (
        <ul>
          {products.map((product) => {
            return (
              <>
                <li>
                  {/* <img src={product.image} alt={product.title} /> */}
                  <p>{product.title}</p>
                </li>
              </>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Products;
