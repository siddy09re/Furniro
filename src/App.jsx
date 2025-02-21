import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './App.css'

import MainLayout from './Shared/Layout/MainLayout'
import Home from './Pages/HomePage/Container/Home'
import Shop from './Pages/ShopPage/Container/Shop'
import Blog from './Pages/BlogPage/Container/Blog'
import Contact from './Pages/ContactPage/Container/Contact'
import Cart from './Pages/CartPage/Container/Cart'
import SingleProduct from './Pages/SingleProductPage/Container/SingleProduct'
import Checkout from './Pages/CheckoutPage/Container/Checkout'



function App() {
  
  const router = createBrowserRouter([

    {
      path: "/",
      element: <MainLayout/>,
      children : [
        {
          index : true,
          element : <Home/>
        },
        {
          path : "/shop",
          element : <Shop/>
        },
        {
          path : "/blog",
          element : <Blog/>
        },
        {
          path: "/contact",
          element : <Contact/>
        },
        {
          path : "/cart",
          element : <Cart/>,
 
        },
        {
          path: "/checkout",
          element: <Checkout/>
        },
        {
          path : "/singleproduct",
          element  :<SingleProduct/>
        },



      ]
    }
  ])

  return (
   
    
    <RouterProvider router = {router}>

        

    </RouterProvider>
  )
}

export default App
