
import { add_Favorite,delete_Favorite,ORDER,FILTER, getFav,RESET } from "../actions/types"

const initialState= {
  idUser:0,
    myFavorites: [],
    allCharacters:[]
}


function rootReducer (state =initialState,{type,payload}){

  switch ( type ) {
    case getFav:
      return{
        ...state,
        allCharacters:[...payload],
        myFavorites:[...payload]
      }


    case add_Favorite:
         const addFav=[...state.allCharacters,payload]
        
        return {
          ...state,
          myFavorites : [...addFav ],
          allCharacters:[...addFav]
        } 
     case delete_Favorite:
         const filtered = state.myFavorites.filter( e => e.id !== payload )
     
        return {
               ...state,
           myFavorites: [...filtered],
           allCharacters:[...filtered]

           }
      case ORDER:
        let orderfav;
        if(payload === "Ascendente"){
          orderfav = state.myFavorites.sort((a,b)=>
          a.id<b.id ?1:-1

          )
        }else{
          orderfav=state.myFavorites.sort((a,b)=>
          a.id>b.id ?1:-1)
        }
        
      
      return{
        ...state,
        myFavorites:[...orderfav]
      }
      case FILTER:
        
        return {
          ...state,
          myFavorites: state.allCharacters.filter(per =>per.gender === payload)
        }
        case RESET:
        
        return {
          ...state,
          myFavorites: state.allCharacters
        }


      case "LOGIN":
        return {...state,idUser: payload}
    
  
    default:
      return state
        
  }
}

export default rootReducer;