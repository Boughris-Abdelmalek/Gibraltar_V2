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

import {
  ProductDetailsSection,
  ProductDetailsContainer,
  ProductImage,
  ProductInfos,
  ProductDetails,
  ProductActions,
  Button,
  ProductInfoSpan,
  ProductRelatedSection,
  Rate,
} from "./styles";
import TextField from "../../components/TextField/TextField";
import Loader from "../../components/Loader/Loader";
import { AddToCartIcon } from "../../components/Icon/Icon";
import { generateStarRating } from "../../utils";

const ProductsDetails: React.FC = () => {
  // using the id from the params to allow url changing and bookmarking
  const { id: productId } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const productsByCategory = useAppSelector(selectAllProductsByCategory);
  const product = useAppSelector(selectProductById);
  const { data: productsByCategoryData } = useGetProductsByCategoryQuery(product?.category);
  const { data: selectedProductData, isFetching } = useGetProductByIdQuery(Number(productId));

  // name, image, price, description, and related products.

  const starRating = generateStarRating(product?.rating?.rate);

  useEffect(() => {
    selectedProductData && dispatch(setProductById(selectedProductData));
    productsByCategoryData && dispatch(setProductsByCategory(productsByCategoryData));
  }, [productsByCategoryData, selectedProductData, dispatch]);

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <ProductDetailsSection>
            <ProductDetailsContainer>
              <ProductImage src={product?.image} alt={product?.title} />
              <ProductInfos>
                <ProductInfoSpan>
                  <TextField variant="h3">{product?.title}</TextField>
                  <Rate>
                    <TextField variant="h5">{product?.rating?.rate}</TextField>
                    {starRating}
                    <TextField variant="h6" color="primary" className="rating-count">
                      ({product?.rating?.count} ratings)
                    </TextField>
                  </Rate>
                </ProductInfoSpan>
                <ProductInfoSpan>
                  <TextField variant="h5" transform="capitalize" weight="bold">
                    price
                  </TextField>
                  <TextField variant="h6">{product?.price}$</TextField>
                </ProductInfoSpan>
                <ProductDetails>
                  <ProductInfoSpan>
                    <TextField variant="h5" weight="bold" transform="capitalize">
                      category
                    </TextField>
                    <TextField variant="h5">{product?.category}</TextField>
                  </ProductInfoSpan>
                  <ProductInfoSpan>
                    <TextField variant="h5" weight="bold" transform="capitalize">
                      description
                    </TextField>
                    <TextField variant="h6">{product?.description}</TextField>
                  </ProductInfoSpan>
                  <ProductActions>
                    <AddToCartIcon />
                    <Button>buy</Button>
                  </ProductActions>
                </ProductDetails>
              </ProductInfos>
            </ProductDetailsContainer>
          </ProductDetailsSection>
          <ProductRelatedSection>
            <TextField variant="h3" transform="uppercase" className="category-title">also in the {product?.category} category</TextField>
            {productsByCategory && <ProductsGrid products={productsByCategory.relatedProducts} />}
          </ProductRelatedSection>
        </>
      )}
    </>
  );
};

export default ProductsDetails;
