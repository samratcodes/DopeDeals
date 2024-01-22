import { createContext,useContext } from "react";
export const DataContext = createContext({
        loading:true,
        results:[],
        error:"",
})

export const useData =()=>(
    useContext(DataContext)
)
export const DataProvider = DataContext.Provider;