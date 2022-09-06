import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import CartPage from "./pages/CartPage";
import {
  HomePage,
  AboutPage,
  ProductsPage,
  SingleProductPage,
  CheckoutPage,
  ErrorPage,
} from "./pages";


function App() {
  return (
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
        <Route path="/checkout" exact>
          <CheckoutPage />
        </Route>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
        <Route path="*" >
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
