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

import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";

import { ProductsDetailsSection } from "./styles";
import TextField from "../../components/TextField/TextField";

const ProductsDetails: React.FC = () => {
  const { id: productId } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const productsByCategory = useAppSelector(selectAllProductsByCategory);
  const product = useAppSelector(selectProductById);
  const { data: productsByCategoryData } = useGetProductsByCategoryQuery(product?.category);
  const { data: selectedProductData } = useGetProductByIdQuery(Number(productId));

  useEffect(() => {
    selectedProductData && dispatch(setProductById(selectedProductData));
    productsByCategoryData && dispatch(setProductsByCategory(productsByCategoryData));
  }, [productsByCategoryData, selectedProductData, dispatch]);

  return (
    <ProductsDetailsSection>
      <TextField variant="h3">{product?.title}</TextField>
      {productsByCategory && <ProductsGrid products={productsByCategory.relatedProducts} />}
    </ProductsDetailsSection>
  );
};

export default ProductsDetails;
