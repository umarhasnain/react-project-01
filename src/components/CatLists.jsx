import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { MainContext } from '../context/MainContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CatLists = () => {
    const navigate = useNavigate(); 
    const { category: categoryParam, modalId } = useParams();
    const { fakeAPI: products = [] } = useContext(MainContext);

    // Filter products based on matching category and modalId
    const filteredProducts = products.filter(product => 
        product.category === categoryParam
    );

    useEffect(()=>{
        AOS.init({
            duration: 1000, 
            once: true, 
          });
    },[])

    return (
        <div  className="p-5">
            <h1 data-aos="fade-up" className="text-2xl font-bold mb-4">{categoryParam} Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div data-aos="fade-down" key={product.id} className="border rounded-lg shadow-lg p-4 bg-white">
                            <img src={product.image} className='w-[300px] h-[300px]' alt="" />
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="text-gray-700 text-xl m-2"><strong>Price</strong>: ${product.price}</p>
                            <p className="text-gray-700 text-xl m-2 "><strong>Category</strong>: {product.category}</p>
                           

                            <button onClick={()=>{navigate(`/product/${product.id}`)}} className="bg-blue-600 text-white font-semibold h-12 w-full rounded-lg hover:bg-blue-700 transition duration-200">
                            View Details
                        </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">No products found in this category.</p>
                )}
            </div>
        </div>
    );
};

export default CatLists;
