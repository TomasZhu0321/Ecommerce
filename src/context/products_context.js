import axios from "axios";
import React, { Children, createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
  isSidebarOpen:false
};


const ProductsContext = createContext();
export const ProductsProvider =({children})=>{
  const [state,dispatch] = useReducer(reducer, initialState);
  const openSideBar =()=>{
    dispatch({type:SIDEBAR_OPEN});
  }
  const closeSideBar =()=>{
    dispatch({type:SIDEBAR_CLOSE});
  }
  return(
    <ProductsContext.Provider value={{...state, openSideBar, closeSideBar}}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext=()=>{
  return (
    useContext(ProductsContext)
  )
}
// const ProductsContext = createContext();

// export const ProductsProvider = ({ children }) => {
//   const [state,dispatch] = useReducer(reducer,initialState);
//   const openSideBar = () =>{
//     dispatch({type:SIDEBAR_OPEN})
//   }
//   const closeSideBar = () =>{
//     dispatch({type:SIDEBAR_CLOSE})
//   }
//   return (
//     <ProductsContext.Provider value={{...state,openSideBar,closeSideBar}}>
//       {children}
//       </ProductsContext.Provider>
//   );
// };

// export const useProductsContext=()=>{
//   return (
//     useContext(ProductsContext)
//   )
// }
