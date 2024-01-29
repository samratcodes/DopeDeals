import { createContext,useContext } from "react";
export const DataContext = createContext({
        cart:[{id:1,quantity:1}],
        loading:true,
        results:[],
        error:"",
})

export const useData =()=>(
    useContext(DataContext)
)
export const DataProvider = DataContext.Provider;