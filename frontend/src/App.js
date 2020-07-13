import React from 'react';
import './App.css';
import data from './data';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen'

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open") /*we said what open was in the css*/
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open") /* remove the class open listed in css*/
  }

  return (
    <BrowserRouter>
    <div class="grid-container">
      <header class="header">
        <div class="brand">
          <button onClick={openMenu}> 
              &#9776;
          </button>
          <a href="index.html">Isal Knives</a>
        </div>
        <div class="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>

      <aside class="sidebar">
        <h3>Shopping Categories</h3>
        <button class="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
              <a href="index.html">Pants</a>
          </li>
          <li>
              <a href="index.html">Shirts</a>
          </li>
        </ul>
      </aside>
      <main class="main">
        <div class="content">
            <Route path="/products/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <ul class="products"> 
             { 
              data.products.map(product =>
              <li>
                  <div class="product">
                      <img class="product-image" src={product.image} alt="product"/>
                      <div class="product-name">
                      <a href="product.html">{product.name}</a>
                          </div>
                      <div class="product-brand">{product.brand}</div>
              <div class="product-price">{product.price}</div>
              <div class="product-rating">{product.rating} Stars {product.numReviews}</div>
                  </div>
              </li>)
             }              
</ul>
        </div>
      </main>
        <footer class="footer">
            All rights reserved. © GuillemTubert
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
