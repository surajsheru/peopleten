import React from 'react';

import './App.css';
//import Cartcomp from './components/cart/Cartcomp';
import Cartcontainer from './components/cart/Cartcontainer';
import {Provider} from 'react-redux'
import store from './redux/Store'

function App() {
  return (
    <Provider store={store}> 
    <div className="container">
  <h1> YOUR  SHOPPING CART</h1>
  <span>If Cart is Completely Empty then we shell again add the Products for you </span>
  <hr></hr>

  <Cartcontainer/>
  
    </div>
    </Provider>
  );
}

export default App;
