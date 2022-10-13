import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import CartPage from "./pages/CartPage";
import PrivateRoute from "./pages/PrivateRoute";

import {
  HomePage,
  AboutPage,
  ProductsPage,
  SingleProductPage,
  CheckoutPage,
  ErrorPage,
  AuthWrapper
} from "./pages";


function App() {
  return (
    <AuthWrapper>
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="cart" element={<CartPage/>}/>
        <Route path="products" element={<ProductsPage/>}/>
        <Route path="products/:productId" element={<SingleProductPage/>}/>
        <Route path="checkout" element={
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
      }/>
      <Route path="*" element={<ErrorPage />}/>
      </Routes>
      <Footer />
    </Router>
    </AuthWrapper>
  );
}

export default App;
