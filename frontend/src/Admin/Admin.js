import React from 'react';
import Login from '../Login/Login';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import ManagerList from './ManagerList';
import CreateManager from './CreateManager';
import UpdateManager from './UpdateManager';
import CompanyLists from '../investor/CompanyLists';
import CreateCompany from './CreateCompany';
import UpdateCompany from './UpdateCompany';


function Admin() {
    return (
      <div className="Admin">
         
     
     <Router>
         
         <nav class="navbar navbar-expand-lg navbar-light bg-primary ">
         <Link className="navbar-brand" to="#">Admin</Link>
  
         
         <div className="collapse navbar-collapse" id="navbarNav">
       < ul className="navbar-nav">

       
     <li class="nav-item">
       <Link className="nav-link" to="/CreateManager">Add Manager</Link>
    </li>
    <li class="nav-item">
       <Link className="nav-link" to="/UpdateManager">UpdateManager</Link>
    </li>

    <li class="nav-item">
       <Link className="nav-link" to="/ManagerList">ManagerList</Link>
    </li>
    
    <li class="nav-item">
       <Link className="nav-link" to="/CreateCompany">Add Company</Link>
    </li>

    <li class="nav-item">
       <Link className="nav-link" to="/UpdateCompany">Update Company</Link>
    </li>

    <li class="nav-item">
       <Link className="nav-link" to="/CompanyLists">CompanyList</Link>
    </li>

     <li class="nav-right">
       <Link className="nav-link" to="/Login">LOGIN</Link>
    </li> 
    </ul>
    </div>
    </nav>
    <Switch>
       
    <Route path="/ManagerList" component={ManagerList}/>
     <Route path="/CompanyLists"  component={CompanyLists}/> 
    <Route path="/Login" component={Login}/>
    <Route  path="/CreateManager"  component={CreateManager}/>
    <Route  path="/UpdateManager"  component={UpdateManager}/>
    <Route  path="/CreateCompany"  component={CreateCompany}/>
    <Route  path="/UpdateCompany"  component={UpdateCompany}/>
    </Switch>
    </Router>
    </div>
    );
}
export default Admin;