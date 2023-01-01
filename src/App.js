import './App.css';
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

import ProductsContextProvider from './Global/ProductsContext';
import CartContextProvider from './Global/CartContext'; 
import Products from './Components/Products';
import Cart from './Components/Cart';
import NotFound from './Components/NotFound';
function App(){
  return(
  <div>
         <ProductsContextProvider>
          <CartContextProvider>
         <BrowserRouter>
      
      <Navbar/>
      
       
      <Routes>
        <Route path="/" element={<Products/>} />  
        <Route path="/cart" element={<Cart/>} />  
        <Route path="/*" element={<NotFound/>} />  
      </Routes>
      </BrowserRouter>
      
      </CartContextProvider>
       </ProductsContextProvider>
    </div>
  )
}
export default App;