import React from "react";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout";
//pentru a extrage datele necesare de al server
import { getProductDetailsEndpoint } from "../api/Endpoints";
import { getProductDetails } from "../api/adaptors";
import { useFetch } from "../utils/hooks/useFetch";
import { useParams } from "react-router-dom";
//stilizare
import styles from "./ProductDetails.module.css";
//pentru adaugarea la favorite
import { useContext } from "react";
import { addToFavorites } from "../Store/Favorites/actions";
import { FavoritesContext } from "../Store/Favorites/context";
//pentru adaugarea in cart
import { addToCart } from "../Store/Cart/actions";
import { CartContext } from "../Store/Cart/context";

function ProductDetails() {
  // Extragem parametrul venit din URL.
  const { productId } = useParams();

  // Generam endpointul pentru detaliile stirii.
  const productDetailsEndpoint = getProductDetailsEndpoint(productId);
  // Fetch-uim datele de la server.
  let productDetails = useFetch(productDetailsEndpoint);
  // Adaptam datele de la server la datele de care au nevoie componentele de react.
  const adaptedProductDetails = getProductDetails(productDetails);

  const { title, price, image, category, description } = adaptedProductDetails;
  console.log(adaptedProductDetails);

  let color;
  let btnColor;
  switch (adaptedProductDetails.category) {
    case "electronics": {
      color = styles.violet;
      btnColor = styles.btn2;
      break;
    }
    case "jewelery": {
      color = styles.pink;
      btnColor = styles.btn4;
      break;
    }
    case "men's clothing": {
      color = styles.blue;
      btnColor = styles.btn1;
      break;
    }
    case "women's clothing": {
      color = styles.orange;
      btnColor = styles.btn3;
      break;
    }
    default:
      break;
  }
  // Extragem functia care modifica state-ul global.
  const { favoritesDispatch } = useContext(FavoritesContext);

  function handleAddToFavorites(product) {
    // Apelam actiunea de adaugare la favorite.
    const actionResult = addToFavorites(product);
    // Trimitem rezultatul actiunii catre reducer.
    favoritesDispatch(actionResult);
  }

  //extragem functia care modifica state-ul global.
  const { cartDispatch } = useContext(CartContext);

  function handleAddToCart(product) {
    // apelam functia de adaugare in cart
    const actionResult = addToCart(product);
    //trimitem rezultatul actiunii catre reducer.
    cartDispatch(actionResult);
  }

  return (
    <Container className="mb-3">
      <Layout>
        <div>
          <h1>{title}</h1>
          <p className={color}>{category}</p>
        </div>
        <div>
          <div className={styles.parent}>
            <div className={styles.imgSize}>
              <img src={image} alt="product" />
            </div>

            <div className="d-flex flex-column justify-content-center ">
              <h1>{price} $</h1>
              <button
                className={`${btnColor} d-flex justify-content-center `}
                onClick={() => {
                  // Construim payload-ul actiunii si apelam functia care trimite actiunea catre reducer.
                  handleAddToCart({
                    id: productId,
                    image,
                    title,
                    price,
                  });
                }}
              >
                <span className="material-icons text-dark ">shopping_cart</span>
                <p className="mb-0">Add to Cart</p>
              </button>
              <button
                className={`${btnColor} d-flex justify-content-center `}
                onClick={() => {
                  // Construim payload-ul actiunii si apelam functia care trimite actiunea catre reducer.
                  handleAddToFavorites({
                    id: productId,
                    image,
                    title,
                    price,
                    hasCloseButton: true,
                  });
                }}
              >
                <span className="material-icons text-dark ">favorite</span>
                <p className="mb-0">Add to Wishlist</p>
              </button>
            </div>
          </div>
          <div className="m-5">
            <h2 className={color}>Description</h2>
            <p>{description}</p>
          </div>
        </div>
      </Layout>
    </Container>
  );
}

export default ProductDetails;
