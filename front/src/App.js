import './App.css'
import Nav from './components/Nav/Nav'
import Cards from './components/Cards.jsx'
import { useState, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import About from './components/About/about'
import Detail from './components/Detail/Detail'
import Form from "./components/Form/Form"
import axios from "axios"
 

import { useNavigate } from 'react-router-dom'
import Favorites from './components/favorites/favorites'


function App() {
  const location = useLocation();
  axios.defaults.baseURL ="http://localhost:3001/"  


  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "alejo@outlook.com";
  const password = "Alejo123"

  const [characters, setCharacters] = useState([]);

  function onClose(id) {
    setCharacters(characters.filter((e) => e.id !== id))
  }

  function random() {
    let randomid = Math.floor(Math.random() * 826);
    console.log(randomid);
    onSearch(randomid);

  }
  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }

  }


  useEffect(() => {
    !access && navigate('/');
  }, [access]);


  function onSearch(character) {
    axios.get(`rickandmorty/onSearch/${character}`)
      .then((response) => {
        const data = response.data;
        if (data.name) {
          const isCharacterRepeated = characters.find((element) => element.id === data.id);
          if (isCharacterRepeated === undefined) {
            setCharacters((characters) => [...characters, data]);
          } else {
            alert("Personaje repetido, prueba con otro ID.");
          }
        } else {
          window.alert('No hay personajes con ese ID.');
        }
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error);
      });
  }

  return (

    <div className='App' style={{ padding: '25px' }} >
      {location.pathname !== "/" && <Nav onSearch={onSearch} random={random} />}

      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />

      </Routes>

    </div>
    /* 
        <div className='App' style={{ padding: '25px' }}>
          <div>
           <Nav onSearch={onSearch} random={random}/>
          </div>
          <hr />
          <div>
            <Cards
              characters={characters}  onClose={onClose}
            />
          </div>
          
        </div> */
  )
}

export default App
