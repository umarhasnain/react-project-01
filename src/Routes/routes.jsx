import AllProducts from "../components/AllProducts.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Home from "../pages/Home";

const routes = [
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/home',
        element: <Home/>
    },
    {
        path:'/products',
        element: <AllProducts/>
    },
    {
        path:'/contact',
        element: <Contact/>
    },
]

export default routes;