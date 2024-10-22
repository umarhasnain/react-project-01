import React, { useEffect, useState } from "react";
import axios from "axios";

// Dummy image path
const dummyImage = "/assets/imgs/card1.png"; // No need to import if in public folder

const FeatureCat = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState([]);

  // Fetch Data from the API
  const getData = async () => {
    setIsLoading(true);
    try {
      const data = await axios.get("https://api.escuelajs.co/api/v1/categories");
      const res = data?.data;
      setProduct(res);
      setIsLoading(false);

      // Extract unique categories by filtering duplicates
      const uniqueCategories = Array.from(new Set(res.map((item) => item.name)));
      setCategory(uniqueCategories);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full overflow-hidden mt-[50px] mb-[80px]">
      <h1 className="text-center text-2xl font-bold mb-12">Feature Categories</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="slider-container relative w-full overflow-hidden">
          {/* Slider track container */}
          <div className="slider-track flex space-x-4 animate-scroll">
            {category.map((cat, i) => {
              return (
                <div
                  key={i}
                  className="category-card inline-block w-[250px] h-[180px] bg-slate-200 p-4 rounded-xl flex-shrink-0"
                >
                  {product
                    .filter((product) => product.name === cat)
                    .slice(0, 1) // Show only the first occurrence
                    .map((item) => {
                      const { id, name, image } = item;
                      return (
                        <div key={id} className="text-center flex justify-center items-center flex-col">
                          <img
                            className=" h-[100px] w-[100px] object-cover mb-4 rounded-lg"
                            src={image || dummyImage} // Fallback to dummy image if no image provided
                            alt={name}
                            onError={(e) => {
                              e.target.src = dummyImage;
                            }} // Fallback if image fails to load
                          />
                          <h2 className="text-xl font-bold">{name}</h2>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureCat;
