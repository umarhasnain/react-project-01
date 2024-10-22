import React from "react";
import cardData from "../../utils/constant/data";

const Card = () => {
  return cardData.map((data, i) => {
    const {img, dis,tittle,linkDis } = data
    return (
     <div className="bg-white flex justify-center items-center  w-full h-auto mt-[50px] mb-[50px]">
        <div className="flex justify-center items-center gap-[10px] w-[500px] h-[250px] bg-orange-400 rounded-lg m-6 mb-8">
        <div className="ml-8">
          <h1 className="mb-4 text-xl">{tittle}</h1>
          <h5>{dis}</h5>
          <p>{linkDis}</p>
        </div>
        <div>
          <img  src={img} className="h-[200px] w-[200px]"/>
        </div>
      </div>
     </div>
    );
  });
};

export default Card;
