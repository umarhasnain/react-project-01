import React from "react";
import cardData from "../../utils/constant/data";

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {
        cardData.map((data, i) => {
          const { img, dis, tittle, linkDis } = data;
          return (
            <div key={i} className="bg-white w-full sm:w-auto h-auto mt-6 mb-6">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-[500px] h-auto bg-orange-400 mr-4 rounded-lg p-4">
                <div className="">
                  <h1 className="mb-4 text-xl">{tittle}</h1>
                  <h5>{dis}</h5>
                  <p>{linkDis}</p>
                </div>
                <div>
                  <img src={img} className="h-[200px] w-[200px]" alt="Card Image"/>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Card;
