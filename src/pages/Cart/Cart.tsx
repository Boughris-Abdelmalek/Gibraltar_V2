import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectCartProducts, setCartProducts } from "../../features/cart/CartSlice";
import { CartContainer, TotalContainer } from "./styles";
import TextField from "../../components/TextField/TextField";
import ProductCart from "../../components/ProductCart/ProductCart";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, total } = useAppSelector(selectCartProducts);

  useEffect(() => {
    if (products) {
      dispatch(setCartProducts(products));
    }
  }, [products]);

  return (
    <CartContainer>
      <TextField variant="h3" transform="uppercase" className="title">
        cart
      </TextField>
      <ul>
        {products.map((product) => {
          return <ProductCart key={product.id} item={product} />;
        })}
      </ul>
      <TotalContainer>
        <TextField variant="h4" transform="uppercase" className="title">
          total
        </TextField>
        <TextField variant="h4" transform="uppercase" className="title">
          {total}$
        </TextField>
      </TotalContainer>
    </CartContainer>
  );
};

export default Cart;
