import axios from 'axios';
import React, { useEffect, useState } from 'react'

const NewArrivals = () => {
    const [isloading, setisloading] = useState(false);

    const [product ,setProduct] = useState([])
// console.log(product);

     // Get Data from the API
  const getData = async () => {
    setisloading(true);
    try {
      const data = await axios.get("https://api.escuelajs.co/api/v1/products");
      const res = data?.data;
      setProduct(res);
      // console.log(res);
      
      setisloading(false);
      // const categories = [...new Set(res.map((item) => item.category))];
    //   setcategory(categories);
    //   setFilterProduct(res);
    // console.log(categories);
    
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
        <h1 className="text-center text-2xl font-bold mb-12">New Arrivals</h1>

     <div className='flex justify-evenly items-center flex-wrap'>
     {
        isloading ? (
          <h1>Loading...</h1>
        ) : (
     
          product.slice(0,7).map((item) => (
            
            <div className='bg-slate-100 w-[350px] m-4 rounded-xl' >
            
            <div key={item.id} className='flex justify-center items-center flex-col gap-4 p-4'>
              {/* {console.log(item)} */}
            
              <img className='h-[250px] w-[250px] rounded ' src={item.images[1]} alt={item.title} />
            <h3 className='font-bold'>{`Tittle: ${item.title}`}</h3>
            {/* <p>{`Description: ${item.description}`}</p> */}
            {/* <p>{`Price: ${item.price}`}</p> */}
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
