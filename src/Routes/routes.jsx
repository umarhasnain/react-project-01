import About from "../components/About.jsx";
import AllProducts from "../components/AllProducts.jsx";
import CatLists from "../components/CatLists.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import ProductDetails from "../components/ProductDetails.jsx";
import ProductLayout from "../layout/ProductLayout.jsx";
import Home from "../pages/Home";

const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/product",
      element: <ProductLayout />, // Parent component
      children: [
        {
          path: "/product",
          element: <AllProducts />,
        },
        {
          path: ":id",
          element: <ProductDetails />,
        },
      ],
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/categorylist/:category",
      element: <CatLists />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ];
  

export default routes;
