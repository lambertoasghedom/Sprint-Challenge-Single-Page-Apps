import React from "react";
import { Card } from "semantic-ui-react";

export default function LocationCard({ location }) {
  
  // console.log(location.residents)
  // let counter = 0;
  // // let numbers = location.residents.map((local) => {
  // //   counter += 1
  // // })
  
  return (
    <div>
      {location.map((location) => {
        return (
          <Card
            href='#card-example-link-card'
            header={location.name}
            meta={location.type}
            meta={location.dimension}
            description=""
          />
        )
      })}
    </div>
  );
}
