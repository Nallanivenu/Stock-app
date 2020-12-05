import React from 'react';
import Login from '../Login/Login';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import StockList from './StocksList';
import './Manager.css';
import CreateStock from './CreateStock';
import UpdateStock from './UpdateStock';


function Manager() {
    return (
      <div className="Manager">
         
     
     <Router>
         
         <nav class="navbar navbar-expand-lg navbar-light bg-primary ">
         <Link className="navbar-brand" to="#">Manager</Link>
  
         
         <div className="collapse navbar-collapse" id="navbarNav">
       < ul className="navbar-nav">
    
    <li class="nav-item">
       <Link className="nav-link" to="/CreateStock">addStock</Link>
    </li>
    <li class="nav-item">
       <Link className="nav-link" to="/UpdateStock">UpdateStock</Link>
    </li>
    <li class="nav-item">
       <Link className="nav-link" to="/StockList">StockList</Link>
    </li>

     <li class="nav-right">
       <Link className="nav-link" to="/Login">LOGIN</Link>
    </li> 
    </ul>
    </div>
    </nav>
    <Switch>
    <Route path="/Login"  component={Login}/>
    <Route path="/StockList" component={StockList}/>
    <Route path="/CreateStock" component={CreateStock}/>
    <Route path="/UpdateStock" component={UpdateStock}/>
    </Switch>
    </Router>
    </div>
    );
}
export default Manager;