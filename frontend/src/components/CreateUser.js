import React, { Component } from 'react';
import UserService from '../Services/UserService';

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state={           
            firstName:'',
            lastname:'',
            email:'',
            Role:''

        }
        this.firsthandler=this.firsthandler.bind(this);
        this.lasthandler=this.lasthandler.bind(this);
        this.mailhandler=this.mailhandler.bind(this);
        this.rolehandler=this.rolehandler.bind(this);
        this.saveUser=this.saveUser.bind(this);
    }


        saveUser = (e)=>{
            e.preventDefault();
            let user =  {firstName:this.state.firstName, lastname:this.state.lastname, email:this.state.email, Role:this.state.role}
            console.log('user =>' + JSON.stringify(user));

        UserService.createUser(user).then(res =>{
            this.props.history.push('/ListUsers');
        });
        
        
        }



    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        });
    }
    lasthandler = (event) => {
        this.setState({
            lastname: event.target.value
        });
    }
        mailhandler = (event) => {
            this.setState({
                email: event.target.value
            });
    }

    rolehandler = (event) => {
        this.setState({
            Role: event.target.value
        });
    }
    
cancel(){
    this.props.history.push('./ListUsers');
}

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                       <h3 className="text-center">Add User</h3>
                       <div className="card-body">
                           <form>
                               <div className="form-group">
                                   <label>Firstname: </label> <input placeholder="First Name" name="firstName" className="form-control"
                                    value={this.state.firstName} onChange={this.firsthandler}/>
                               </div>
                               <div className="form-group">
                                   <label>Lastname: </label> <input placeholder="lastname" name="lastname" className="form-control"
                                    value={this.state.lastname} onChange={this.lasthandler}/>
                               </div>
                               <div className="form-group">
                                   <label>Email: </label> <input placeholder="mail@mail" name="email" className="form-control"
                                    value={this.state.email} onChange={this.mailhandler}/>
                               </div>
                               <div className="form-group">
                                   <label>Role: </label> <input placeholder="Role" name="Role" className="form-control"
                                    value={this.state.Role} onChange={this.rolehandler}/>
                               </div>
                               <button className="btn btn-success" onclick={this.saveUser}>Save</button>
                               <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                           </form>
                       </div>
                   </div>
               </div>

            </div>
        );
    }
}

export default CreateUser;