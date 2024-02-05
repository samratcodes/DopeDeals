import { createContext,useContext } from "react";
export const DataContext = createContext({
        cart:[],
        loading:true,
        results:[],
        error:"",
        deleteCart: (todo) => {},
        addCart: (todo) => {},
        addBuynow: (todo) => {},

})

export const useData =()=>(
    useContext(DataContext)
)
export const DataProvider = DataContext.Provider;