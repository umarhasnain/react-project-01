import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Slider = () => {
  const onChange = (currentSlide) => {
  };
  return (
   <div>
     <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}><img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-5.jpg&w=3840&q=100" alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-6.jpg&w=3840&q=100" alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-5.jpg&w=3840&q=100" alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-6.jpg&w=3840&q=100" alt="" /></h3>
      </div>
    </Carousel>
   </div>
  );
};
export default Slider;