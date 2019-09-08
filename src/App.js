import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import LocationCard from "./components/LocationCard.js";

import './App.css'


export default function App() {

  const [location, setLocation] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/')
      .then(res => setLocation(res.data.results))
  }, [])

  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <ul className="list-header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/episodes">Episodes</Link>
        </li>
      </ul>
      
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/characters" component={CharacterList}/>
      <Route path="/locations" render={ () => <LocationCard locations={location} />}/>
    </main>
  );
}
