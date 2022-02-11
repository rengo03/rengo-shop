import React from "react";
import styles from "./Header.module.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import logo from "../images/LOGO_BLACK_SIMPLE.png";

function Header() {
  return (
    <div>
      <header>
        <nav>
          <Container className="d-flex justify-content-between align-items-center px-3">
            <Link to="/" className={`${styles.logoSize} p-3`}>
              <img src={logo} alt="logo" />
            </Link>
            <div className="d-flex justify-content-between align-items-center">
              <Link to="/favorites">
                <div className="p-3 d-flex flex-column align-items-center ">
                  <span className="material-icons text-dark ">favorite</span>
                  <p className="m-0">Wishlist</p>
                </div>
              </Link>
              <Link to="/cart">
                <div className="p-3 d-flex flex-column align-items-center">
                  <span className="material-icons text-dark ">
                    shopping_cart
                  </span>
                  <p className="m-0">Cart</p>
                </div>
              </Link>
            </div>
          </Container>
        </nav>
      </header>
    </div>
  );
}

export default Header;
