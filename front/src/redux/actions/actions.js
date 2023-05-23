import { add_Favorite, delete_Favorite, ORDER, FILTER, getFav,RESET } from "./types";



export function addFavorite(fav, idUser) {
  return async function (dispatch) {
    try {
      const data = await fetch(`http://localhost:3001/fav?idUser=${idUser}`, {
        method: "POST",
        body: JSON.stringify(fav),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
        .then((res) => res.json())
      if (data) dispatch({ type: add_Favorite, payload: data })

    } catch (error) {
      console.log(error)
    }
  }
}

export function deleteFavorite(id, idUser) {
  return async function (dispatch) {
    try {
      const data = await fetch(`http://localhost:3001/fav/${id}?idUser=${idUser}`, {
        method: "DELETE"

      })
        .then((res) => res.json())
      if (data.success) dispatch({ type: delete_Favorite, payload: id })
    } catch (error) {
      console.log(error)

    }
  }

}


export function getFavorites(idUser) {
  return async function (dispatch) {
    try {
      const data = await fetch(`http://localhost:3001/fav?idUser=${idUser}`)
        .then((res) => res.json)

      if (data) dispatch({
        type: getFav,
        payload: data
      })

    } catch (error) {
      console.log(error)

    }

  }

}




export function filterCards(status) {
  return {
    type: FILTER,
    payload: status
  }

}

export function orderCards(id) {
  return {
    type: ORDER,
    payload: id
  }

}



export function login(email, password) {
  return async function (dispatch) {
    try {
      const obj = await fetch(`http://localhost:3001/login?email=${email}&password=${password}`).then((resp) => resp.json)

      if (obj.access) dispatch({ type: "LOGIN", payload: obj.id })


    } catch (error) {
      console.log(error)
    }
  }

}

export function reset(status) {
  return {
    type: RESET,
    payload: status
  }

}