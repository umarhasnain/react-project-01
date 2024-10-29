import axios from "axios";
import { createContext, useEffect, useState } from "react";

const MainContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [fakeAPI , setFakeAPI] = useState([]);

console.log(fakeAPI);

  const getData = async () => {
    setisloading(true);
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      const res = data?.data;
      const data1 = await axios.get("https://api.escuelajs.co/api/v1/products");
      const res1 = data1?.data;
      const combinedArray = [...res, ...res1];
      setFakeAPI(res)
      console.log(combinedArray);
      
      setProducts(combinedArray);

      setisloading(false);
      //   const categories = [...new Set(res.map((item) => item.category))];
      //   setcategory(categories);
      //   setFilterProduct(res);
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
    <MainContext.Provider value={{ products, setProducts ,fakeAPI}}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, ProductProvider };
