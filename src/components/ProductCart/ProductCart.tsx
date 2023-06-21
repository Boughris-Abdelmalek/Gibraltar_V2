import React from "react";
import { Card, Image, ProductControles, Controles, Button } from "./styles";
import TextField from "../TextField/TextField";
import { RemoveFromCartIcon } from "../Icon/Icon";
import { useAppDispatch } from "../../app/hooks";
import { removeFromCart, updateQuantity } from "../../features/cart/CartSlice";

const ProductCart: React.FC = ({ item }) => {
  const { title, image, price, quantity, id } = item || {};

  const dispatch = useAppDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  const handleAddProductQuantity = () => {
    dispatch(updateQuantity(id))
  }

  return (
    <Card>
      <Image src={image} alt={title} />
      <TextField variant="h5" className="product-title">
        {title}
      </TextField>
      <ProductControles>
        <Controles>
          <Button>+</Button>
          <TextField variant="h5" align="right" className="product-price">
            {quantity}
          </TextField>
          <Button>-</Button>
        </Controles>
        <RemoveFromCartIcon onClick={handleRemoveFromCart} className="remove-from-cart" />
        <TextField variant="h5" align="right" className="product-price">
          {price}$
        </TextField>
      </ProductControles>
    </Card>
  );
};

export default ProductCart;
