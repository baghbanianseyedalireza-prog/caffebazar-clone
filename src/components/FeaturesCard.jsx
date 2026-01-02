import React from "react";
const FeaturesCard = (props) => {
  return (
    <div className="flex flex-row px-6 py-2 justify-center gap-x-4 shadow-2xl rounded-xl">
      <img
      src={props.image}
      alt= {props.alt}
      className="w-[60px] h-[60px]"
      />
      <div className="flex flex-col items-center"> 
        <h2 className="text-lg leading-5 font-medium text-[#212529]">{props.title}</h2>
        <p className="text-[#717485] font-normal leading-5 text-xs ">{props.content}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
