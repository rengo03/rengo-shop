import React from "react";
import { useContext } from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import ProductCardList from "../components/ProductCardList";
import { FavoritesContext } from "../Store/Favorites/context";
import styles from "./Favorites.module.css";

function Favorites() {
  // Extragem din state-ul global produsele favorite.
  const { favoritesState } = useContext(FavoritesContext);
  const { products } = favoritesState;
  return (
    <Container className="mb-3">
      <Layout>
        <h1 className={`mb-5  ${styles.header}`}>Wishlist</h1>
        {products.length === 0 ? (
          <p>You have no products on wishlist yet.</p>
        ) : (
          <ProductCardList productList={products} />
        )}
      </Layout>
    </Container>
  );
}

export default Favorites;
