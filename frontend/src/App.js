import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import About from './About/About';
//import Login from './Login/Login';
import registration from './Registration/Registration';
import invest from './investor/investor';
import Admin from './Admin/Admin';
import Manager from './Manager/Manager';
import './App.css';
//import ListUsers from './components/ListUsers';

function App() {
  return (
    <div className="App">
      {/* <ListUsers/> */}
    
         <Router>
       
       <nav class="navbar navbar-expand-lg navbar-light bg-secondary ">
       <Link className="navbar-brand" to="#">STOCK APPLICATION</Link>

       
       <div className="collapse navbar-collapse" id="navbarNav">
     < ul className="navbar-nav">

     <li class="nav-item-light">
       <Link className="nav-link" to="/About">About us</Link>
     </li>
 

     <li class="nav-item-light">
       <Link className="nav-link" to="/Admin">Admin</Link>
     </li>
 
     <li class="nav-item-light">
       <Link className="nav-link" to="/Manager">Manager</Link>
     </li>
 

     <li class="nav-item-light">
       <Link className="nav-link" to="/investor">Investor</Link>
     </li>
 
{/* 
       <li class="nav-item-light">
       <Link className="nav-link" to="/Login">Login</Link>
     </li> */}

     <li class="nav-item-light">
       <Link className="nav-link" to="/Registration">Register</Link>
     </li>
      </ ul>
    </div>
    </nav>


    <Switch>
      {/* <Route exact path="/About" component={home}/>  */}
      {/* <Route path="/profile" component={profile}/>
      <Route path="/SellStocks" component={SellStocks}/>
      <Route path="/BuyStocks" component={BuyStocks}/>
      <Route path="/ViewAll" component={ViewAll}/> */}
       <Route exact path="/About" component={About}/>
      <Route path="/investor" component={invest}/>
      <Route path="/Registration" component={registration}/>
      <Route path="/Admin" component={Admin}/>
      <Route path="/Manager" component={Manager}/> 
        
      
       
       
 </Switch>
    
    </Router> 
    </div>
  );

    }

export default App;

