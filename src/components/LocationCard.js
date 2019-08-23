import React from "react";
import { Card } from "semantic-ui-react";

export default function LocationCard({ locations }) {
  console.log(locations)
  return (
    <div>
      {locations.map((location) => {
        return (
          <Card
            key={location.id}
            href='#card-example-link-card'
            header={location.name}
            meta={location.type}
            description=""
          />
        )
      })}
    </div>
  );
}
