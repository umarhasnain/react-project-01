import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Carousel'
import Card from '../components/common/Card'
import FeatureCat from '../components/FeatureCat'
import FeatureProduct from '../components/FeatureProduct'
import FlashSale from '../components/FlashSale'
import NewArrivals from '../components/NewArrivals'
import Footer from '../components/Footer'
import AllProducts from '../components/AllProducts'
import Animation from '../components/common/Animation'

const Home = () => {
  return (
    <div>
        <Header/>    
        <Slider/>
        <div className=''>
        <Card/>
        </div>
       <div className='flex '>
       <FeatureCat/>
       </div>
       <div className='flex bg-white'>
        <FeatureProduct/>
       </div>
       <div className='flex justify-center items-center'>
       <FlashSale/>
       </div>
       <NewArrivals/>
    
       <Footer/>
    </div>
  )
}

export default Home
