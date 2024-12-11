import React, { useState } from 'react'
import {Outlet } from 'react-router-dom'
import './App.css'

import useDataFetching from './Hooks/useDataFetching'
import { DataProvider } from './Context/DataContext'
import Footer from './Components/Footer/Footer'
import NavigationMenu from './Components/Navigation/NavigationMenu'
import TopBar from './Components/Navigation/TopBar'



const App = () => {
const [cart,setCart]=useState([

])

const deleteCart = (index) => {
  let newCart = [...cart];
  newCart.splice(index, 1);
  setCart(newCart);
};
const addCart=(data)=>{
  setCart((prev)=>[...prev,{...data,isChecked: false,quantity:1}])
}
const addBuynow=(data)=>{
  setCart((prev)=>[...prev,{...data,isChecked: true,quantity:1}])
}
  

  const {loading,results,error} = useDataFetching('https://dummyjson.com/products?limit=100')
  return (
    <DataProvider value={{loading,results,error,cart,addCart,addBuynow,deleteCart}}>
<NavigationMenu/>
<TopBar/>
<Outlet/>
 <Footer/>
</DataProvider>
  )
}

export default App
