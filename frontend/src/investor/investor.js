import React from 'react';
import Login from '../Login/Login';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import StockLists from './StockLists';

import CompanyList from '../Admin/CompanyList';


function invest() {
    return (
      <div className="invest">
         
     
     <Router>
         
         <nav class="navbar navbar-expand-lg navbar-light bg-primary ">
         <Link className="navbar-brand" to="#">INVESTOR</Link>
  
         
         <div className="collapse navbar-collapse" id="navbarNav">
       < ul className="navbar-nav">

       
     <li class="nav-item">
       <Link className="nav-link" to="/StockLists">Available Stocks</Link>
    </li>

    <li class="nav-item">
       <Link className="nav-link" to="/CompanyList">Companies</Link>
    </li>

     <li class="nav-right">
       <Link className="nav-link" to="/Login">LOGIN</Link>
    </li> 
    </ul>
    </div>
    </nav>
    <Switch>
    <Route path="/Login" component={Login}/>
    <Route path="/StockLists" component={StockLists}/>
    <Route path="/CompanyList" component={CompanyList}/>
    </Switch>
    </Router>
    </div>
    );
}
export default invest;