import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from './Components/MainSection/Home/Home.jsx'
import ProductPage from './Components/MainSection/ProductPage/ProductPage.jsx'
import Brands from './Components/MainSection/Brands/Brands.jsx'
import Category from './Components/MainSection/Category/Category.jsx'
import DopeDeals from './Components/MainSection/DopeDeals/DopeDeals.jsx'
import Blogs from './Components/MainSection/Blogs/Blogs.jsx'
import Default from './Default.jsx'
import NavigationMenu from './Components/Navigation/NavigationMenu.jsx'
import TopBar from './Components/Navigation/TopBar.jsx'
import Footer from './Components/Footer/Footer.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'about',
        element:<h1>About</h1>
      },
      {
        path:'contact',
        element:<h1>Contact</h1>
      },
      {
        path:'product/:id',
        element:<ProductPage/>
      },
      {
        path:'Brands/:brand',
        element:<Brands/>
      },
      {
        path:'category/:category',
        element:<Category/>
      },
      {
        path:'DopeDeals',
        element:<DopeDeals/>
      },
      {
        path:'Blogs',
        element:<Blogs/>
      }
    ]
  },
  {
    path: "*",
    element:<>
    <NavigationMenu/>
    <TopBar/>
    gffhh
    <Footer/>
    </> 
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
