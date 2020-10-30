import React from "react";
import StoreResultItem from "../components/StoreResultItem";

export default function StoreResultList() {
  const locationResult = [
    {
      street: "123 Hello St",
      city: "State",
      something: "some text",
    },
    {
      street: "456 Bye St",
      city: "State",
      something: "some text",
    },
    {
      street: "789 Time St",
      city: "State",
      something: "some text",
    },
  ];

  const locationResultMap = locationResult.map((locationResult, i) => {
    return (
      <StoreResultItem
        key={i}
        street={locationResult.street}
        city={locationResult.city}
        something={locationResult.something}
      />
    );
  });

  return <div>{locationResultMap}</div>;
}
