import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../redux/actions/actions";
import { useState, useEffect } from "react";

const Divcard = styled.div`
  display: grid;
  background-color: blueviolet;
  border-radius: 15px;
  color: white;
  overflow: hidden;
  margin: 25px 25px 25px 25px;
`;
const Divcardc = styled.div`
  display: grid;
 
`;

const Img = styled.img`
  border-radius: 50%;
  box-shadow: 8px 0px 8px 8px #333;
`;
const Title = styled.h1`
  color: white;
`;

const Species = styled.h2`
  color: white;
`;
const Gender = styled.h2`
  color: white;
`;
const Button = styled.button`
position: relative;
rigth:-120px;

background-color: black;
color: white;
border 2px;
width:auto;
height: 30px;
border-radius: 5px;
font-weight: bold;
font-size: 15px`;

export function Card(props) {
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorite(props.id);
    } else {
      setIsFav(true);
      props.addFavorite(props);
    }
  }

  useEffect(() => {
    props.myFavorites?.forEach((fav) => {
      let propsid = props.id;
      if (fav.id === Number(propsid)) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <Divcard>
      
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <Divcardc><Button onClick={() => props.onClose()}> Quitar Card </Button></Divcardc>
      
      <Link to={`/detail/${props.id}`}>
        <Title>{props.name}</Title>
        <Species>{props.species}</Species>
        <Gender>{props.gender}</Gender>
        <Img src={props.image} alt="image no found" />
      </Link>
    </Divcard>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorite: function (fav) {
      dispatch(addFavorite(fav));
    },
    deleteFavorite: function (id) {
      dispatch(deleteFavorite(id));
    },
  };
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
