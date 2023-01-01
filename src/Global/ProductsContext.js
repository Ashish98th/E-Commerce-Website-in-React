import React,{createContext, useState} from "react";


import dslr from "../assets/dslr.jpg";
import headphone from "../assets/headphone.jpg";
import iphone from "../assets/iphone.jpg";
import perfume from "../assets/perfume.jpg";
import rings from "../assets/rings.jpg";
import shoes from "../assets/shoes.jpg";
import watch from "../assets/watch.jpg";
import microphone from "../assets/microphone.jpg";

export const ProductsContext=createContext();

const ProductsContextProvider = (props) =>{
  
    const[products]=useState([
        {id:1,name:'Dslr',price:30000,image:dslr,status:'hot'},
        {id:2,name:'Headphone',price:500,image:headphone,status:'hot'},
        {id:3,name:'Iphone',price:300,image:iphone,status:'new'},
        {id:4,name:'Perfume',price:300,image:perfume,status:'new'},
        {id:5,name:'Rings',price:300,image:rings,status:'hot'},
        {id:6,name:'Shoes',price:300,image:shoes,status:'new'},
        {id:7,name:'Watch',price:300,image:watch,status:'new'},
        {id:8,name:'Microphone',price:300,image:microphone,status:'hot'},
    ])
    return(
      <ProductsContext.Provider value={{products:[...products]}} >
        {props.children}
      </ProductsContext.Provider>                                 
    )
}
export default ProductsContextProvider;