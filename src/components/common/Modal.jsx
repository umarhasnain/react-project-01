import React, { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const Modal = ({ openModal, setOpenModal, modalId, product}) => {
  const singleData =  product.find((e) => {
    return e.id === modalId;
  });

  console.log(singleData);
  console.log(modalId, singleData);
  
  

  return (
    <div
      className={openModal && " sticky top-[100px] max-sm:top-2 z-10 w-[100%] "}
    >
      {openModal && (
        <div className="fixed inset-0  flex items-center justify-center bg-opacity-15	backdrop-blur-sm">
          <div className="flex justify-evenly flex-wrap bg-zinc-100 gap-8 p-4 rounded-lg shadow-lg p-[5px] h-auto w-[550px]">
            <div>
              
              <img
                src={singleData.image}
                 className="h-[200px] w-[250px] rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-125"
                alt=""
              />
            </div>
            <div className="m-2">
              <div className="flex justify-end mt-[-20px]  mb-[15px]">
                <button onClick={() => setOpenModal(false)}><IoMdCloseCircle className="h-[30px] w-[30px]" /></button>
              </div>
              <h1><strong>Tittle: </strong>{singleData.title}</h1>
              <p className="mt-2 mb-2"><strong>Description: </strong>{singleData.description}</p>
              <p><strong>category: </strong>{singleData.category}</p>
              <h1 className="mt-2 mb-2"><strong>Price: </strong>{singleData.price}</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
