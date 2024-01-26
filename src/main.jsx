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
        path:'Product',
        element:<ProductPage/>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
