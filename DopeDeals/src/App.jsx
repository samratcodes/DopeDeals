import React from 'react'
import NavigationBar from './Components/Navigation/NavigationBar'
import './App.css'
import Home from './Components/MainSection/Home/Home'
import useDataFetching from './Hooks/useDataFetching'
import { DataProvider } from './Context/DataContext'

const App = () => {
  const {loading,results,error} = useDataFetching('https://dummyjson.com/products?limit=100')
  return (
    <DataProvider value={{loading,results,error}}>
 <NavigationBar/>
 <Home/> 
    </DataProvider>
  )
}

export default App
