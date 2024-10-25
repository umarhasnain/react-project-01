import React from 'react'
import Home from './pages/Home'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import routes from './Routes/routes';

const App = () => {
  return (
    <div>
      <Routes>
        {
          routes.map((item,i) => {
            console.log(item);
            
            return (
              <Route key={i} path={item.path} element={item.element} />
            )
          })
        }

      </Routes>
      {/* <Home/> */}
    </div>
  )
}

export default App
