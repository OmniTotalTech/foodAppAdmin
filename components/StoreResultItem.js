import React, { Component } from "react";
import RoomIcon from "@material-ui/icons/Room";

export default function StoreResultItem(props) {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-3 my-2">
        <div className="flex">
          <div className="w-1/6">
            <RoomIcon />
          </div>
          <div className="w-3/4 px-2">
            <p className="text-red-600 text-sm"> {props.street}</p>
            <p className="text-sm">{props.city}</p>
            <p className="text-green-500 text-sm">{props.something}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
