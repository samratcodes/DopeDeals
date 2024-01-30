import React, { useState } from 'react'
import {Outlet } from 'react-router-dom'
import './App.css'

import useDataFetching from './Hooks/useDataFetching'
import { DataProvider } from './Context/DataContext'
import Footer from './Components/Footer/Footer'
import NavigationMenu from './Components/Navigation/NavigationMenu'
import TopBar from './Components/Navigation/TopBar'



const App = () => {
const [cart,setCart]=useState([{
  id:1,
  price:95,
  title:'Product 1',
  "discountPercentage":4.15,
  "brand":"Samsung",
  thumbnail:"https://cdn.dummyjson.com/product-images/1/1.jpg",
stock:10,
isChecked: false,
quantity:1
},
{"id":7,
"title":"Samsung Galaxy Book S "
,"description":"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
"price":1499,
"discountPercentage":4.15,
"rating":4.25,
"stock":50,"brand":"Samsung",
"category":"laptops",
"thumbnail":"https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
"images":["https://cdn.dummyjson.com/product-images/7/1.jpg",
"https://cdn.dummyjson.com/product-images/7/2.jpg",
"https://cdn.dummyjson.com/product-images/7/3.jpg",
"https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"],
isChecked: false,
quantity:1
}
])
const addCart=(data)=>{
  setCart((prev)=>[...prev,{...data,isChecked: false,quantity:1}])
}
const addBuynow=(data)=>{
  setCart((prev)=>[...prev,{...data,isChecked: true,quantity:1}])
}
  

  const {loading,results,error} = useDataFetching('https://dummyjson.com/products?limit=100')
  return (
    <DataProvider value={{loading,results,error,cart,addCart,addBuynow}}>
<NavigationMenu/>
<TopBar/>
<Outlet/>
 <Footer/>
</DataProvider>
  )
}

export default App
