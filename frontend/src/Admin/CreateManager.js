import React, { Component } from 'react';
import ManagerService from '../Services/ManagerService';

class CreateManager extends Component {
    constructor(props) {
        super(props);
        this.state={
            m_name:'',
            m_company:''
        }

        this.namehandler=this.namehandler.bind(this);
        this.cmphandler=this.cmphandler.bind(this);
        this.saveManager=this.saveManager.bind(this);
    }

    saveManager = (e) => {
        e.preventDefault();
        let manager =  {m_name: this.state.m_name, m_company: this.state.m_company}
        console.log('Manager =>' + JSON.stringify(manager));


    ManagerService.createManager(manager).then(res =>{
        this.props.history.push('/ManagerList');
    });
}
    
namehandler = (event) => {
    this.setState({
        m_name: event.target.value
    });
}
cmphandler = (event) => {
    this.setState({
        m_company: event.target.value
    });
}

cancel(){
    this.props.history.push('./ManagerList');
}
    render() {
        return (
            <div>
                 <div className="container">
                   <div className="row">
                       <h3 className="text-center">AddNew Manager</h3>
                       <div className="card-body">
                           <form>
                               <div className="form-group">
                                   <label>ManagerName: </label> <input placeholder="ManagerName" name="m_name" className="form-control"
                                    value={this.state.m_name} onChange={this.namehandler}/>
                               </div>
                               <div className="form-group">
                                   <label>ManagerCompany: </label> <input placeholder="companyName" name="m_company" className="form-control"
                                    value={this.state.m_company} onChange={this.cmphandler}/>
                               </div>
                             
                               <button className="btn btn-success" onclick={this.saveManager}>Save</button>
                               <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                           </form>
                       </div>
                   </div>
               </div>
                
            </div>
        );
    }
}

export default CreateManager;