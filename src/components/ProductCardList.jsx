import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "./ProductCard";

function ProductCardList(props) {
  const { productList } = props;

  return (
    <div>
      {/* Folosim grid-ul bootstrap pentru asezarea in pagina. */}
      <Container>
        <Row>
          {/* Mapam prin lista de produse, iar pentru fiecare produs, afisam un card. */}
          {productList.map((product) => {
            return (
              <Col xs={12} md={6} lg={4} className="mb-4" key={product.id}>
                <ProductCard
                  productId={product.id}
                  imgSrc={product.image}
                  title={product.title}
                  price={product.price}
                  hasCloseButton={product.hasCloseButton}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default ProductCardList;
