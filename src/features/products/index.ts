export {
  setAllProducts,
  setProductById,
  setProductsByCategory,
  selectAllProducts,
  selectProductById,
  selectAllProductsByCategory,
} from "./ProductsSlice";

export {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetAllProductsCategoryQuery,
  useGetProductsByCategoryQuery,
} from "./ProductsApiSlice";