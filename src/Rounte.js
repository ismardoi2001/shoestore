import React from 'react';
import { BrowserRouter as Router,Switch, Route,} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/Productitem';

function RouterConfig() {

  return (
    <div>
      <Rounter>
         <Switch>
          <Route path="/" component={Home}>
          <Route path="/" component={About}>
          <Route path="/" component={Product}>
          <Route path="/" component={ProductItem}>
        </Switch>
      </Rounter>
    </div>
  );
}

export default RouterConfig;
