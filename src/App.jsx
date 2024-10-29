import React from "react";
import Home from "./pages/Home";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import routes from "./Routes/routes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from "react-toastify";

const App = () => {
  <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition: Bounce
/>
{/* Same as */}
  return (
    <div>
      <Routes>
        {routes.map((item, i) => (
          <Route key={i} path={item.path} element={item.element}>
            {item.children?.map((child, index) => (
              <Route key={index} path={child.path} element={child.element} />
            ))}
          </Route>
        ))}
      </Routes>
      <ToastContainer />

      {/* <Home/> */}
    </div>
  );
};

export default App;
