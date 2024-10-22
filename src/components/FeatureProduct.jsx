import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FeatureProduct = () => {
    const [isloading, setisloading] = useState(false);

    const [product ,setProduct] = useState([])
console.log(product);

     // Get Data from the API
  const getData = async () => {
    setisloading(true);
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      const res = data?.data;
      setProduct(res);
      console.log(res);
      
      setisloading(false);
    //   const categories = [...new Set(res.map((item) => item.category))];
    //   setcategory(categories);
    //   setFilterProduct(res);
    } catch (error) {
      console.log(error);
      setisloading(false);
    }
  };

  // Manage Effect Events
  useEffect(() => {
    getData();
  }, []);
  return (
      <div className=''>
        <h1 className="text-center text-2xl font-bold mb-12">Featured Products</h1>

     <div className='flex justify-evenly items-center flex-wrap'>
     {
        isloading ? (
          <h1>Loading...</h1>
        ) : (
            
          product.slice(0, 6).map((item) => (
            <div className='bg-slate-100 w-[350px] m-4 rounded-xl' >
            
            <div key={item.id} className='flex justify-center items-center flex-col gap-4 p-4'>
              <img className='h-[250px] w-[250px] rounded ' src={item.image} alt={item.title} />
            <h3 className='w-[300px]'>{item.title}</h3>
              <p>${item.price}</p>
            </div>
             </div>
          
          ))
        )
      }
     </div>
    </div>
  )
}

export default FeatureProduct
