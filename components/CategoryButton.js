import React from "react";

export default function CategoryButton(props) {
  return (
    <div>
      <div className="my-6">
        <button className="bg-white hover:bg-red-700 text-red-600 font-medium py-4 px-4 rounded-md w-10/12">
          {props.name}
        </button>
      </div>
    </div>
  );
}
