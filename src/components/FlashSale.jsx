import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const FlashSale = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);

  // Fetch data from the API
  const getData = async () => {
    setIsLoading(true);
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      const res = data?.data;
      setProduct(res);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // Trigger data fetching on component mount
  useEffect(() => {
    getData();
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of slides to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-[85%]">
      <h1 className="text-center text-2xl font-bold mb-12 mt-12">Flash Sale</h1>

      {/* If loading, show loading message */}
      {isLoading ? (
        <h1 className="text-center">Loading...</h1>
      ) : (
        <Slider autoplay {...settings}>
          {product.slice(7, 14).map((item) => (
            <div key={item.id} className="p-4">
              <div className="bg-slate-100 rounded-xl flex flex-col items-center p-4">
                <img className="h-[250px] w-[250px] object-cover rounded" src={item.image} alt={item.title} />
                <h3 className="w-[300px] text-center mt-4 mb-2">{item.title}</h3>
                <p className="text-lg font-semibold">${item.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      )}

      <div className='mt-16 mb-16'>
        <img src="./assets/imgs/banner-7.webp"  alt="" />
      </div>
    </div>
  );
};

export default FlashSale;
