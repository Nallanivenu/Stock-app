import React, { Component } from 'react'
//import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './Login.css'



class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
             Email:"",
            password: "",
            Role: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

   
        mailhandler = (event) => {
            this.setState({
                Email: event.target.value
            })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    rolehandler = (event) => {
        this.setState({
            Role: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.Role}  Login Successfully !!!!`)
        console.log(this.state);
        this.setState({
          
            Email:"",
            password: '',
            Role: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    {/* <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br /> */}
                   <label>Email:</label> <input type="text" value={this.state.Email} onChange={this.mailhandler} placeholder="mail@mail.com"/><br/>
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label>Role :</label><select onChange={this.rolehandler} defaultValue="Select  Role">
                        <option defaultValue>Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                        <option value="Investor">Investor</option>
                    </select><br />
                    <input type="submit" value="Sign in" />
                </form>
            </div>
            
        )
    }
}

export default Login;