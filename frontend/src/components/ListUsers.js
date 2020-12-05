import React, { Component } from 'react';
import UserService from '../Services/UserService';

class ListUsers extends Component {
    constructor(props){
        super(props)

        this.state={
                user: []
        }
         this.addUser=this.addUser.bind(this);
    }

    componentDidMount()
    {
        UserService.getUsers().then((res) => {
                    this.setState({user:res.data});
        });
    }

    addUser(){
         this.props.history.push('./CreateUser');
    }


    render() {
        return (
            <div>
                <h2 className="text-center">usersList</h2>
            <div className="row">
            <table className="table table-striped table-bordered">

                <thead>
                    <tr>
                        <th> FirstName</th>
                        <th>user LastName</th>
                        <th>user Email</th>
                        
                        <th>user Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.user.map(
                            user=>
                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                
                                <td>{user.role}</td>
                            </tr>
                        )
                    }


                </tbody>
            </table>

            </div>
            <div className="row">
                <button classname="btn btn-primary" onClick={this.addUser}>AddUser</button>
            </div>
            </div>
        );
    }
}

export default ListUsers;







