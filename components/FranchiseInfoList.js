import React from "react";
import CategoryButton from "../components/TempButton";

export default function FranchiseInfoList() {
  const buttonName = [
    {
      name: "Manage Global Franchise Information",
    },
    {
      name: "Store Locator",
    },
    {
      name: "Global Customer Feedback",
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
