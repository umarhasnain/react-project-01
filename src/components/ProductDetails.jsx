import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MainContext } from '../context/MainContext';

const ProductDetails = () => {
    const data = useContext(MainContext);
    const productData = data?.products;
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const singleData = productData?.find((e) => e.id === parseInt(id));

    useEffect(() => {
        if (singleData) setProduct([singleData]);
    }, [singleData]);

    return (
        <div className="flex justify-center items-center p-8 bg-gray-100 min-h-screen">
            {product?.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg border border-gray-200 p-4 md:p-8 gap-8 w-full max-w-4xl"
                >
                    <div className="flex-shrink-0 mx-auto md:mx-0">
                        <img
                            className="h-100 w-80 object-cover rounded-lg border border-gray-300"
                            src={item.image}
                            alt={item.title}
                        />
                    </div>
                    <div className="flex flex-col justify-between gap-2 w-full">
                        <h1 className="text-3xl font-semibold text-gray-800">
                            {item.title}
                        </h1>
                        <p className="text-gray-600 text-lg">
                            <strong>Description:</strong> <br />
                            {item.description}
                        </p>
                        <p className="text-xl font-semibold text-gray-900">
                            <strong>Price:</strong> ${item.price}
                        </p>
                       <div className='flex gap-2 flex-wrap'>
                       <button  className="bg-blue-600 text-white font-semibold h-12 w-full rounded-lg hover:bg-blue-700 transition duration-200">
                           
                            Add to Cart
                        </button>
                        <button  className="bg-blue-600 text-white font-semibold h-12 w-full rounded-lg hover:bg-blue-700 transition duration-200">
                            Buy Now
                        </button>
                       </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductDetails;
