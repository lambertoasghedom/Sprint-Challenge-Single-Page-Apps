import React, { useState, useEffect } from "react";
import axios from 'axios';

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import LocationCard from "./components/LocationCard.js";


export default function App() {

  const [location, setLocation] = useState([])
  console.log(location)

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/')
      .then(data => setLocation(data.data.results))
  }, [])

  return (
    <main>
      <Header />
      <TabNav />
      <WelcomePage />
      {/* <CharacterList /> */}
      <LocationCard location={location}/>
    </main>
  );
}
