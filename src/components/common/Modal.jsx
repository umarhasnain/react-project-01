import React, { useEffect, useState } from 'react'

const Modal = ({ openModal, setOpenModal ,modalId,product}) => {
  const [productData , setProductData] =useState()
  const [getData, setGetdata] = useState([])
  const singleData = product.find((e)=>{
    return e.id === modalId
  })
  

  useEffect(()=>{
    setGetdata(singleData)

  },[])
    
  return (

    <div className={openModal && ' sticky top-[100px] max-sm:top-2 z-10 w-[100%] '} >
      {
        openModal && 
        <div className='fixed inset-0  flex items-center justify-center bg-opacity-15	backdrop-blur-sm	 '>
         <div className='flex justify-evenly items-center bg-zinc-100		 rounded-lg shadow-lg p-[5px] h-[300px] w-[550px]'>
      
         <div className=''>
          {/* {
            getData.map((item)=>{
              console.log(item)
             
            })
          } */}
         <button onClick={() => setOpenModal(false)}>Close</button>
     
         </div>

         </div>

        </div>
      }
    </div>
  )
}

export default Modal
