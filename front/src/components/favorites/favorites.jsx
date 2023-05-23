import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/actions";
import Card from "../Card";
import { deleteFavorite,reset } from "../../redux/actions/actions";
import Styles from "../favorites/favorites.module.css"

export function Favorites({ myFavorites,deleteFavorite,reset }) {
  const dispatch = useDispatch();

  function onClosef(id){
    deleteFavorite(id)
    
  }
   
  return (
    <div>
      <select className={Styles.select} onChange={(e) => dispatch(orderCards(e.target.value))}>
        {["Ascendente", "Descendente"].map((e, i) => (
          <option className={Styles.option} value={e} key={i}>
            {e}
          </option>
        ))}
      </select>
      <select className={Styles.select} onChange={(e) => dispatch(filterCards(e.target.value))}>
        {["Male", "Female", "unknown", "Genderless"].map((e, i) => (
          <option className={Styles.option} value={e} key={i}>
            {e}
          </option>
        ))}
      </select>
       <button className={Styles.select} onClick={reset}>RESET</button>
      <br />
      <div className={Styles.div}>
        {myFavorites.length &&
          myFavorites.map((e) => (
            <Card 
              key={e.id}
              name={e.name}
              onClose={() =>onClosef(e.id)}
              id={e.id}
              gender={e.gender}
              image={e.image}
              
            />
          ))}
      </div>
    </div>
  );
}
export function mapDispatchToProps(dispatch) {
  return {
    deleteFavorite: function (id) {
      dispatch(deleteFavorite(id));
    },
    reset: function (){
      dispatch(reset());
    },
  };
}



export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
