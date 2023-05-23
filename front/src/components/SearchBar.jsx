import { useState } from "react";
import Styles from "../components/Nav/searchBar.module.css"

/* const styleInput = {
  padding: "10px",
  margin:"10px, ",
  borderRadius: "5px",
};

const styleButton = {
  backgroundImage:
    "radial-gradient(at 20px 20px,rgb(52, 36, 139),rgb(238, 122, 180))",
  color: "white",
  border: "0px",
  borderRadius: "5px",
  fontWeight: "bold",
  fontSize: "15px",
  padding: "10px",
  margin: "25px 10px 25px 0px",
};
 */
export default function SearchBar(props) {
  const [character, setCharacter] = useState(0);

  const handleSearch = (e) => {
    let { value } = e.target;
    setCharacter(value);
  };

  return (
    <div>
      <input className={Styles.input} type="search" onChange={handleSearch} />
      <button className={Styles.button} onClick={() => props.onSearch(character)}>
        Agregar
      </button>
      <button className={Styles.button} onClick={props.random}>
        random boton
      </button>
    </div>
  );
}
