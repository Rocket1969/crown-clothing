import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/Button.component";

import "./product-card.scss";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext)
  
  const addPoductToCart = () => addItemToCart(product)

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addPoductToCart}>Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
