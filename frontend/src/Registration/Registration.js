import React, { Component } from 'react'
import './Registration.css'



class registration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            Email:"",
            password: "",
            Role: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
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
        alert(`${this.state.firstName} ${this.state.Role}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
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
                    <h1>User Registration</h1>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                   <label>Email:</label> <input type="text" value={this.state.Email} onChange={this.mailhandler} placeholder="mail@mail.com"/><br/>
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label>Role :</label><select onChange={this.rolehandler} defaultValue="Select Gender">
                        <option defaultValue>Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                        <option value="Investor">Investor</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            
        )
    }
}

export default registration;