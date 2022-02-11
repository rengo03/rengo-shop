import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import styles from "./CartProduct.module.css";
import { removeFromCart } from "../Store/Cart/actions";
import { CartContext } from "../Store/Cart/context";

function CartProduct(props) {
  const { productId, imgSrc, title, price } = props;

  // Extragem dispatch-ul care modifica state-ul aferent produselor din cart.
  const { cartDispatch } = useContext(CartContext);

  function handleRemoveFromCart(productId) {
    // Apelam actiunea de stergere din cart.
    const actionResult = removeFromCart(productId);
    // Trimitem rezultatul actiunii catre reducer.
    cartDispatch(actionResult);
  }

  return (
    <Container>
      <div className={styles.container}>
        <Link to={`/product/${productId}`}>
          <div className={styles.dFlex}>
            <div className={styles.secondaryContainer}>
              <div className={styles.imgSize}>
                <img src={imgSrc} alt="product" />
              </div>
              <h5>{title}</h5>
            </div>
            <h4>{price} $</h4>
          </div>
        </Link>
        <button
          onClick={() => {
            // Pasam id-ul corespunzator functiei care actualizeaza lista produselor din cart.
            handleRemoveFromCart(productId);
          }}
        >
          <span class="material-icons">delete</span>
        </button>
      </div>
    </Container>
  );
}

export default CartProduct;
