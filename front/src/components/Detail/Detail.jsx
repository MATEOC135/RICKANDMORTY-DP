import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Styles from "./detail.module.css"

export default function Detail() {
  const [character, setCharacter] = useState({});
  const { detailId } = useParams();
  console.log(detailId);
  console.log(useParams);

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert(" este es el alert de los detalees ");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
<div className={Styles.characterContainer}>
  <img className={Styles.characterImage} src={character.image} alt={character.name} />
  <div className={Styles.characterInfo}>
    <h1>{character.name}</h1>
    <p>Gender: {character.gender}</p>
    <p>Species: {character.species}</p>
    <p>Status: {character.status}</p>
    <p>Origin: {character.origin}</p>
  </div>
</div>
  );
}
