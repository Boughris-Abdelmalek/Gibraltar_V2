import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectCartProducts, setCartProducts } from "../../features/cart/CartSlice";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectCartProducts);

  useEffect(() => {
    if (products) {
      dispatch(setCartProducts(products));
    }
  }, [products]);
  // The Cart page should display the products currently in the user's cart, along with their quantity and total price. The user should be able to add or remove products from the cart on this page.

  return (
    <div>
      Cart
      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Cart;
