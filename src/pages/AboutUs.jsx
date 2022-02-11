import React from "react";
import Container from "react-bootstrap/Container";
import aboutUs from "../images/about-us.png";
import styles from "./AboutUs.module.css";
function AboutUs() {
  return (
    <Container>
      <div className="d-flex flex-column align-items-center mt-5">
        <h1>About Us</h1>
        <div className={styles.aboutUs}>
          <div>
            <img src={aboutUs} alt="" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              repudiandae culpa in quaerat autem eum illo dolor totam, quidem
              iste quae exercitationem nihil porro ad odit harum. Voluptatem
              molestiae ipsa, praesentium sint modi nostrum voluptatum officia
              dolore sunt neque officiis corporis tempore iste iusto blanditiis
              eaque quaerat qui cupiditate, nisi maxime nulla! Nostrum provident
              nam repudiandae voluptas nulla ipsa tempore, possimus voluptates
              perferendis officiis ea quam atque voluptatibus id laudantium,
              doloremque quo cumque porro! Soluta, debitis minima sunt dicta
              repellat optio, dolore fuga voluptatibus odio facere sed libero
              error earum! Aspernatur fuga fugiat consectetur, quae iste
              asperiores? Doloribus, earum nostrum?
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutUs;
