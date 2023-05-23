import Card from "./Card.jsx";
import styled from "styled-components";

const Divcards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
 
  
`;

export default function Cards(props) {
  const { characters } = props;

  return (
    
    <Divcards>
      {characters.map((characters) => (
        <Card
          key={characters.id}
          name={characters.name}
          species={characters.species}
          gender={characters.gender}
          image={characters.image}
          onClose={() => props.onClose(characters.id)}
          id={characters.id}
        />
      ))}
    </Divcards>
  );
}
