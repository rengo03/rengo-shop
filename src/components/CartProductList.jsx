import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CartProduct from "./CartProduct";

function CartProductList(props) {
  const { productList } = props;

  return (
    <Container>
      {productList.map((product) => {
        return (
          <Row>
            <CartProduct
              productId={product.id}
              imgSrc={product.image}
              title={product.title}
              price={product.price}
            />
          </Row>
        );
      })}
    </Container>
  );
}

export default CartProductList;
