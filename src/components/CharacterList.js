import React, { useEffect, useState } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import axios from 'axios';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ characters, setCharacters ] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(data => setCharacters(data.data.results))
      .catch(err => `${err} 🔫🔫🔫🔫🔫`)
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map((char) => {
        return (
          <div key={char.id}>
            <Card>
              <Image src={char.image} alt={char.name} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{char.name}</Card.Header>
                <Card.Meta>{char.species} {char.status}</Card.Meta>
                <Card.Description>
                  Location: {char.location.name}
                </Card.Description>
                <Card.Description>
                  Origin: {char.origin.name}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    Episodes
                  </a>
                </Card.Content>
            </Card>
          </div>
        )
      })}
    </section>
  );
}