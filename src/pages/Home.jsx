import React from "react";

import styles from "./Home.module.css";
import BigButton from "../components/BigButton";
//importam imaginile.
import electronicsPhoto from "../images/electronics.jpg";
import jeweleryPhoto from "../images/jewelery.jpg";
import menPhoto from "../images/Men`sClothing.jpg";
import womenPhoto from "../images/Women`sClothing.jpg";
import Layout from "../components/Layout";
import AboutUs from "./AboutUs";
//react-router-dom
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";

function Home() {
  return (
    <Container className="mb-3">
      <Layout>
        <div className={styles.container}>
          <div className={styles.parent}>
            <Link to="/category/men's clothing">
              <div className={styles.child1}>
                <BigButton title={"Men`s Clothing"} img={menPhoto} />
              </div>
            </Link>
            <Link to="/category/women's clothing">
              <div className={styles.child2}>
                <BigButton title={"Women`s Clothing"} img={womenPhoto} />
              </div>
            </Link>
          </div>
          <div className={styles.parent}>
            <Link to="/category/electronics">
              <div className={styles.child3}>
                <BigButton title={"Electronics"} img={electronicsPhoto} />
              </div>
            </Link>
            <Link to="/category/jewelery">
              <div className={styles.child4}>
                <BigButton title={"Jewelery"} img={jeweleryPhoto} />
              </div>
            </Link>
          </div>
        </div>
        <AboutUs />
      </Layout>
    </Container>
  );
}

export default Home;
