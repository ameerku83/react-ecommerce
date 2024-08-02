import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css'
import { createBrowserRouter } from "react-router-dom";

// @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");

import Root from './pages/Root';

import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';





const router=createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<ProductList/>

      },
      {
        path:"/product/:id",
        element:<ProductDetail/>

      },
      {
        path:"/cart",
        element:<Cart/>

      },
     
    ]


  }
 
])     

export default router  