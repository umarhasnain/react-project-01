import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from '../components/common/Button'
import Modal from './common/Modal';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeatureProduct = () => {
    const [isloading, setisloading] = useState(false);
    const [product ,setProduct] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [modalId ,setmodalId] = useState(0)

//Update Modal ID
    const modalIdUpdate = (id) => {
      setmodalId(id)
    }

     // Get Data from the API
  const getData = async () => {
    setisloading(true);
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      const res = data?.data;
      setProduct(res);
      setisloading(false);
    } catch (error) {
      console.log(error);
      setisloading(false);
    }
  };

  //Open Modl Func

  const hanleClick = () => {
    setOpenModal(true)
    
  }

  // Manage Effect Events
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
    getData();
  }, []);
  return (
      <div>
        <h1 data-aos="fade-up" className="flex justify-center items-center text-center text-2xl font-bold mb-12">Featured Products</h1>
       <Modal product={product} modalId={modalId} openModal={openModal} setOpenModal={setOpenModal} />

     <div  className='flex justify-evenly items-center flex-wrap'>
     {
             
          product.slice(0, 6).map((item) => {
            const {id, image,title,price}  = item
            // console.log(item)
            return (
              <div data-aos="fade-up" className='bg-slate-100 w-[350px] m-4 rounded-xl' >
            
            <div key={id} className='flex justify-center  flex-col gap-4 p-4'>
              <img className='h-[250px] w-[250px] rounded ' src={image} alt={title} />
            <h3 className='w-[250px] truncate'><strong>Tittle: </strong>{title}</h3>
              <p><strong>Price: </strong>${price}</p>
              <div className='flex justify-center items-center'>
              <button key={id}  className="bg-blue-600 text-white font-semibold h-12 w-full rounded-lg hover:bg-blue-700 transition duration-200" onClick={()=> modalIdUpdate(id) + hanleClick()}>Read More</button>

              </div>
              {/* <Button data='Read More' onClick={()=> console.log("horh h")} /> */}
            </div>
             </div>
            )
          })
        
      }
     </div>
    </div>
  )
}

export default FeatureProduct
