import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import {
  setProductById,
  setProductsByCategory,
  selectProductById,
  selectAllProductsByCategory,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
} from "../../features/products";

const ProductsDetails: React.FC = () => {
  const { id: productId } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const relatedProducts = useAppSelector(selectAllProductsByCategory);
  const product = useAppSelector(selectProductById);
  const { data: productsByCategoryData } = useGetProductsByCategoryQuery(product?.category);
  const { data: selectedProductData } = useGetProductByIdQuery(Number(productId));

  useEffect(() => {
    if (selectedProductData) {
      dispatch(setProductById(selectedProductData));
    }

    if (productsByCategoryData) {
      dispatch(setProductsByCategory(productsByCategoryData));
    }
  }, [productsByCategoryData, selectedProductData, dispatch]);

  console.log(relatedProducts);

  return (
    <>
      <h1>{productId}</h1>
      {/* <ul>
        {relatedProducts.map((item) => { // Renamed productsRelated to relatedProducts
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul> */}
    </>
  );
};

export default ProductsDetails;
