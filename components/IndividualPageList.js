import React from "react";
import CategoryButton from "../components/TempButton";

export default function IndividualPageList() {
  const buttonName = [
    {
      name: "Manage Store Information",
    },
    {
      name: "Manage Menu Items",
    },
    {
      name: "Manage Rewards & Promotions",
    },
    {
      name: "Manage Customer Messages",
    },
  ];

  const buttonNameMap = buttonName.map((buttonName, i) => {
    return <CategoryButton key={i} name={buttonName.name} />;
  });

  return <div>{buttonNameMap}</div>;
}
