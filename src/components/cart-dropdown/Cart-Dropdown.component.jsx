import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/Button.component";
import CartItem from "../cart-item/Cart-Item.component";

import {CartDropdownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHanlder = () => {
      navigate("/checkout");
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        )) : <EmptyMessage as="span">Your cart is empty</EmptyMessage>
          }
      </CartItems>
      <Button onClick={goToCheckoutHanlder} >Go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
