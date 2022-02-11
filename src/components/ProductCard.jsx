import React from "react";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import styles from "./ProductCard.module.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { removeFromFavorites } from "../Store/Favorites/actions";
import { FavoritesContext } from "../Store/Favorites/context";
import { addToCart } from "../Store/Cart/actions";
import { CartContext } from "../Store/Cart/context";

function ProductCard(props) {
  const { productId, imgSrc, title, price, hasCloseButton } = props;

  // Extragem paramtrul venit din URL.
  const { categoryId } = useParams();
  // In functie de parametrul primit in url, schimbam tema paginii.

  let btnColor = styles.buttonColor;
  let priceColor;

  switch (categoryId) {
    case "electronics": {
      priceColor = styles.priceColor2;
      btnColor = styles.btn2;
      break;
    }
    case "jewelery": {
      priceColor = styles.priceColor4;
      btnColor = styles.btn4;
      break;
    }
    case "men's clothing": {
      priceColor = styles.priceColor1;
      btnColor = styles.btn1;
      break;
    }
    case "women's clothing": {
      priceColor = styles.priceColor3;
      btnColor = styles.btn3;
      break;
    }
    default:
      break;
  }
  // Extragem dispatch-ul care modifica state-ul aferent produselor favorite.
  const { favoritesDispatch } = useContext(FavoritesContext);

  function handleRemoveFromFavorites(id) {
    // Apelam actiunea de stergere de la favorite.
    const actionResult = removeFromFavorites(id);
    // Trimitem rezultatul actiunii catre reducer.
    favoritesDispatch(actionResult);
  }
  // Extragem dispatch-ul care modifica state-ul aferent produselor din cart.
  const { cartDispatch } = useContext(CartContext);

  function handleAddToCart(product) {
    // Apelam actiunea de adaugare in cart.
    const actionResult = addToCart(product);
    // Trimitem rezultatul actiunii catre reducer.
    cartDispatch(actionResult);
  }

  return (
    <Card className={styles.cardSize}>
      <Link to={`/product/${productId}`}>
        <Card.Img className={styles.imgSize} variant="top" src={imgSrc} />
        <Card.Body className={styles.body}>
          <div className={styles.title}>
            <Card.Title>{title}</Card.Title>
          </div>

          <Card.Title className={priceColor}>{price}$</Card.Title>
        </Card.Body>
      </Link>
      <button
        onClick={() => {
          // Construim payload-ul actiunii si apelam functia care trimite actiunea catre reducer.
          handleAddToCart({
            id: productId,
            image: imgSrc,
            title,
            price,
          });
        }}
        className={btnColor}
      >
        Add to Cart
      </button>
      {hasCloseButton && (
        <Button
          variant="light"
          className={styles.closeButton}
          onClick={() => {
            // Pasam id-ul corespunzator functiei care actualizeaza lista de favorite.
            handleRemoveFromFavorites(productId);
          }}
        >
          <span className="material-icons text-dark">close</span>
        </Button>
      )}
    </Card>
  );
}

export default ProductCard;
