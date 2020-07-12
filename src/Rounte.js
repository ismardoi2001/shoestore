import React from 'react';
import { BrowserRouter as Rounter,Switch, Route,} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/Productitem';
import NavBar from './Components/Navbar';

function RouteConfig() {

  return (
    <div>
      <Rounter>
      <NavBar/>
         <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Product" component={Product}/>
          <Route path="/Product/:id" component={ProductItem}/>
          <Route path="*" component={()=><h2> 404 Page Not Found</h2>}/>
        </Switch>
      </Rounter>
    </div>
  );
}

export default RouteConfig;
