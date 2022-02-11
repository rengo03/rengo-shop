import React from "react";
import { useContext } from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import CartProductList from "../components/CartProductList";
import styles from "./Cart.module.css";
import { CartContext } from "../Store/Cart/context";

function Cart() {
  // Extragem din state-ul global produsele favorite.
  const { cartState } = useContext(CartContext);
  const { products } = cartState;

  return (
    <Container className="mb-3">
      <Layout>
        <h1 className={`mb-5  ${styles.header}`}>Cart</h1>
        {products.length === 0 ? (
          <p>You have no products on cart yet.</p>
        ) : (
          <CartProductList productList={products} />
        )}
      </Layout>
    </Container>
  );
}

export default Cart;
