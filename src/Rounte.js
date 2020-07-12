import React from 'react';
import { BrowserRouter as Rounter,Switch, Route,} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/Productitem';

function RouteConfig() {

  return (
    <div>
      <Rounter>
         <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Product" component={Product}/>
          <Route path="/Product/:id" component={ProductItem}/>
        </Switch>
      </Rounter>
    </div>
  );
}

export default RouteConfig;
