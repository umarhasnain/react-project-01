import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Modal from '../components/common/Modal'
import AOS from 'aos';
import 'aos/dist/aos.css';

const NewArrivals = () => {
    const [isloading, setisloading] = useState(false);
    const [product, setProduct] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [arrivalData,setArrivalData] = useState([])
      const [modalId ,setmodalId] = useState(0)
  
      //Update Modal ID
      const modalIdUpdate = (id) => {
        setmodalId(id)
      }
  
     // Get Data from the API
  const getData = async () => {
    setisloading(true);
    try {
      const data = await axios.get("https://api.escuelajs.co/api/v1/products");
      const res = data?.data;
      setArrivalData(res.slice(0,7))
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
      console.log("okh");
      
    }

  // Manage Effect Events
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true, 
    });
    getData();
  }, []);
  return (
      <div className=''>
        <h1 data-aos="fade-leftnpm run devnom run dev npsslkdlan"  className="text-center text-2xl font-bold mb-12">New Arrivals</h1>
        {/* <Modal product={product} modalId={modalId} openModal={openModal} setOpenModal={setOpenModal} /> */}
     <div className='flex justify-evenly items-center flex-wrap'>
     {
        isloading ? (
          <h1>Loading...</h1>
        ) : (
     
          product.slice(0,7).map((item) => (     
            <div data-aos="fade-right" className='bg-slate-100 w-[350px] m-4 rounded-xl'  >
            {/* onClick={()=> modalIdUpdate(item.id) + hanleClick()} */}
            <div key={item.id}   className='flex justify-center items-center flex-col gap-4 p-4'>
              
            
              <img className='h-[250px] w-[250px] rounded ' src={item.images[0] && item.category.image} alt={item.title} />
            <h3 className='font-bold'>{`Tittle: ${item.title}`}</h3>
            <p><strong>Price: </strong> {item.price}</p>    
            </div>
             </div>         
          ))
        )
      }
     </div>
    </div>
  )
}

export default NewArrivals
