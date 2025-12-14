import React from "react";
import "./AppCard.css";
const AppCard = (props) => {
  return (
  <div 
    className="
        bg-white
        rounded-x1
        shadow-md
        p-3
        text-center
        cursor-pointer
        hover:-translate-y-1
        transition
        duration-200
    ">
    <img
         src={props.image} 
         alt={props.alt} 
         className="w-full h-32 object-cover rounded-1g"
         />
    <h3 className="text-sm font-semibold text-gray-800 mt-2">
        {props.title}
    </h3>
  </div>
  );
};

export default AppCard;
