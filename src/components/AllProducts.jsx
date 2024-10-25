import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import FeatureCat from './FeatureCat'
import FeatureProduct from './FeatureProduct'

const AllProducts = () => {
  const allProducts = useContext(MainContext)
  const allProductData = allProducts?.products

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-12 mt-12">All Products</h1>
     {/* <Modal product={product} modalId={modalId} openModal={openModal} setOpenModal={setOpenModal} /> */}

   <div  className='flex justify-evenly items-center flex-wrap'>
   {
    
          
        allProductData.map((item) => {
          const {id, image,title,price ,category}  = item
          // console.log(item)
        
          return (
            <div className='bg-slate-100 w-[350px] m- rounded-xl' >
          
          <div key={id} className='flex justify-center  flex-col gap-4 p-4'>
            <img className='h-[250px] w-[250px] rounded ' src={image  ?image : item.images[1]} alt={title} />
          <h3 className='w-[250px] truncate'><strong>Tittle: </strong>{title}</h3>
            <p><strong>Price: </strong>${price}</p>
            <div className='flex justify-center items-center'>
            <button key={id} className='w-[110px] h-[35px] bg-orange-600 rounded-lg text-white '>Read More</button>

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

export default AllProducts
