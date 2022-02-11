import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ProductCardList from "../components/ProductCardList";
// import {getProductDetailsEndpoint} from "../api/Endpoints";
import { getProductCategoriesEndpoint } from "../api/Endpoints";
import { getProductList } from "../api/adaptors";
import { useFetch } from "../utils/hooks/useFetch";
import styles from "./ProductsCategory.module.css";
import Layout from "../components/Layout";

function ProductsCategory() {
  // Generam endpoint-urile pentru categoriile de produse.
  const electronicsEndpoint = getProductCategoriesEndpoint("electronics");
  const jeweleryEndpoint = getProductCategoriesEndpoint("jewelery");
  const menClothingEndpoint = getProductCategoriesEndpoint("men's clothing");
  const womenClothingEndpoint =
    getProductCategoriesEndpoint("women's clothing");
  // Fetch-uim datele de la server.
  let electronicsData = useFetch(electronicsEndpoint);
  let jeweleryData = useFetch(jeweleryEndpoint);
  let menClothingData = useFetch(menClothingEndpoint);
  let womenClothingData = useFetch(womenClothingEndpoint);
  // Adaptam datele de la server la datele necesare componentelor de react.
  const adaptedElectronicsData = getProductList(electronicsData);
  const adaptedJeweleryData = getProductList(jeweleryData);
  const adaptedMenClothingData = getProductList(menClothingData);
  const adaptedWomenClothingData = getProductList(womenClothingData);

  // Extragem paramtrul venit din URL.
  const { categoryId } = useParams();
  // In functie de parametrul primit in url, afisam titlul categoriei.
  let title = "";
  let adaptedData = [];
  let titleColor;
  switch (categoryId) {
    case "electronics": {
      title = "Electronics";
      adaptedData = adaptedElectronicsData;
      titleColor = styles.title2;
      break;
    }
    case "jewelery": {
      title = "Jewelery";
      adaptedData = adaptedJeweleryData;
      titleColor = styles.title4;
      break;
    }
    case "men's clothing": {
      title = "Men's clothing";
      adaptedData = adaptedMenClothingData;
      titleColor = styles.title1;
      break;
    }
    case "women's clothing": {
      title = "Women's clothing";
      adaptedData = adaptedWomenClothingData;
      titleColor = styles.title3;
      break;
    }
    default:
      break;
  }

  return (
    <div>
      <Container className="mb-3">
        <Layout>
          <h1 className={`${titleColor} mb-5`}>{title}</h1>
          {/* Afisam lista peoduselor. */}
          <ProductCardList productList={adaptedData} />
        </Layout>
      </Container>
    </div>
  );
}

export default ProductsCategory;
