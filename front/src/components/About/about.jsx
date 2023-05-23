import React from "react";
import Styles from "./about.module.css"

export default function About() {
  return (
    <div className={Styles.divcontainer}>
      <h1 className={Styles.title}>RICK AND MORTY APPLICATION</h1>
      <h2>Hola, esta es mi aplicacion de rick y morty</h2>
      <p>este es mi proyecto con seguimiento en clase</p>
      <p>
        Frontend: HTML, CSS, JavaScript, React, Redux, Material UI, Styled
        Components, React Router, React Native.{" "}
      </p>
      <p>
        Backend: Node.js, Express, Sequelize ORM, PostgreSQL,{" "}
      </p>
      <p>
        Herramientas de desarrollo: Git, GitHub, Visual Studio Code,
        Slack.{" "}
      </p>
      <p>
        Otros temas: Metodologías ágiles, trabajo en equipo, buenas prácticas de
        programación, patrones de diseño, testing, seguridad y autenticación en
        aplicaciones web, entre otros.
      </p>
    </div>
  );
}
