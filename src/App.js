import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  HomePage,
  AboutPage,
  ProductsPage,
  SingleProductPage,
  CheckoutPage,
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
        <Route path="*" >
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
