import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/products" exact>
          <ProductsPage />
        </Route>
        <Route path="/products/:productId" children={<SingleProductPage/>} exact>
        </Route>
        <PrivateRoute path="/checkout" exact>
          <CheckoutPage />
        </PrivateRoute>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
        <Route path="*" >
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </AuthWrapper>
  );
}

export default App;
