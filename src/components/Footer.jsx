import React from "react";
import styles from "./Footer.module.css";
//Importam useParams pentru a stabili culoarea footerului in fc. de categoria din URL
import { useParams } from "react-router-dom";

function Footer() {
  // Extragem paramtrul venit din URL.
  const { categoryId } = useParams();
  //Cream o variabila care sa defineasca culoarea footerului
  let footerColor;

  switch (categoryId) {
    case "electronics": {
      footerColor = styles.bgColor2;
      break;
    }
    case "jewelery": {
      footerColor = styles.bgColor4;
      break;
    }
    case "men's clothing": {
      footerColor = styles.bgColor1;
      break;
    }
    case "women's clothing": {
      footerColor = styles.bgColor3;
      break;
    }
    default:
      break;
  }

  return (
    <footer>
      <div className={styles.separator}></div>
      <div className={styles.dFlex}>
        <div className="d-flex flex-column align-items-start">
          <h1>Links</h1>
          <p>About us</p>
          <p>Terms and conditions</p>
        </div>
        <div className="d-flex flex-column align-items-start">
          <h1>Contact</h1>
          <p className="d-flex  align-items-center">
            <span className="material-icons">email</span>
            liviu.leonard03@gmail.com
          </p>
          <p className="d-flex  align-items-center">
            <span className="material-icons">call</span>
            +40749615***
          </p>
        </div>
        <div className="d-flex flex-column align-items-start">
          <h1>Contact</h1>
          <a href="https://www.linkedin.com/in/liviu-leonard-spatariu-2065a9230/">
            <div className="d-flex  align-items-center mb-3">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg=="
                alt="linkedin"
              />
              liviu.spatariu08@gmail.com
            </div>
          </a>
          <a href="https://github.com/rengo03">
            <div className="d-flex  align-items-center mb-3">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=="
                alt="github"
              />
              /rengo03
            </div>
          </a>
        </div>
      </div>
      <div className={`${styles.footer} ${footerColor}`}>
        <p className="text-center m-0 py-3 text-light">
          Rengo`s shop © 2021. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
