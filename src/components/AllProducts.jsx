import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";

const AllProducts = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [found, setFound] = useState(false);
  const navigate = useNavigate();

  // Get Data from the API
  const getData = async () => {
    setIsLoading(true);
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      const res = data?.data;
      setProduct(res);
      setFilterProduct(res); // Set initial filter products to all products
      setIsLoading(false);
      const categories = [...new Set(res.map((item) => item.category))];
      setCategory(categories);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  // Handle Category Filtering
  const handleChange = (cat) => {
    if (cat === "All") {
      setFilterProduct(product); // Show all products if "All" is selected
    } else {
      const filterData = product.filter((item) => item.category === cat);
      setFilterProduct(filterData);
    }
  };

  // Handle Filter Product By Search
  const handleSearch = () => {
    if (search.trim() === "") {
      setFilterProduct(product); // Reset to all products if search is empty
      setFound(false);
    } else {
      const searchFilter = product.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      if (searchFilter.length === 0) {
        setFound(true);
      } else {
        setFilterProduct(searchFilter);
        setFound(false);
      }
    }
  };

  // Handle Enter Search
  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    getData();
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <h1 data-aos="fade-up" className="text-center text-3xl font-bold mb-12 mt-12">
        All Products
      </h1>

      <div>
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            <div className="flex flex-col justify-evenly md:flex-row gap-12 mb-4 items-center m-10">
              <input
                value={search}
                onKeyDown={handleEnterSearch}
                onChange={(e) => {
                  setSearch(e.target.value);
                  handleSearch();
                }}
                placeholder="Search products..."
                className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 placeholder-gray-400"
              />
              <select
                onChange={(e) => handleChange(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              >
                <option value="All">All Categories</option>
                {category.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <button
                onClick={handleSearch}
                className="bg-blue-600 text-white font-semibold h-12 rounded-lg w-full md:w-1/3 hover:bg-blue-700 transition duration-200 shadow-lg flex items-center justify-center"
              >
                <span>🔍</span> Search
              </button>
            </div>

            {found ? (
              <p className="text-center text-red-500">No Data Found</p>
            ) : (
              <div className="flex justify-evenly items-center flex-wrap">
                {filterProduct.map((item) => {
                  const { id, image, title, price } = item;
                  return (
                    <div key={id} data-aos="fade-down" className="bg-white w-[350px] m-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer" onClick={() => navigate(`/product/${id}`)}>
                      <div className="flex justify-center flex-col gap-4 p-4">
                        <img
                          className="h-[250px] w-[250px] rounded"
                          src={image}
                          alt={title}
                        />
                        <h3 className="w-[250px] truncate">
                          <strong>Title: </strong>
                          {title}
                        </h3>
                        <p>
                          <strong>Price: </strong>${price}
                        </p>
                        <div className="flex justify-center items-center">
                          <button className="bg-blue-600 text-white font-semibold h-12 w-full rounded-lg hover:bg-blue-700 transition duration-200">
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
