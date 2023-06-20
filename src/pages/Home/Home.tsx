import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Loader from "../../components/Loader/Loader";
import { useGetAllProductsQuery } from "../../features/products/ProductsApiSlice";
import { selectAllProducts, setAllProducts } from "../../features/products/ProductsSlice";
import { Slider, Slides, SlideDetails, ProductTitle, COT, Hero } from "./styles";

import "swiper/css";
import "swiper/css/effect-fade";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const { data, isFetching } = useGetAllProductsQuery({ limit: 5 });

  useEffect(() => {
    if (data) {
      dispatch(setAllProducts(data));
    }
  }, [data]);

  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : (
        <Hero>
          <Slider slidesPerView={1} navigation loop effect="fade">
            {products.map((product) => {
              return (
                <Slides key={product.id}>
                  <img src={product.image} />
                  <SlideDetails>
                    <ProductTitle>{product.title}</ProductTitle>
                    <COT>see more</COT>
                  </SlideDetails>
                </Slides>
              );
            })}
          </Slider>
        </Hero>
      )}
    </div>
  );
};

export default Home;
