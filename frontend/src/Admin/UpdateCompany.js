import React, { Component } from 'react';
import CompanyService from '../Services/CompanyService';

class UpdateCompany extends Component {
    constructor(props) {
        super(props);
        this.state={
            Company_Name:'',
        Company_Type:'',
        Company_Manager:''
        }
        this.CompanyNamehandler=this.CompanyNamehandler.bind(this);
        this.CompanyTypehandler=this.CompanyTypehandler.bind(this);
        this.CompanyManagerhandler=this.CompanyManagerhandler.bind(this);
    }
    commponentDidMount(){
        CompanyService.getCompanyById(this.state.Cmp_id).then((res) =>{
            let Company=res.data;
            this.setState({Company_Name:Company.Company_Name,
                Company_Type: Company.Company_Type,
                Company_Manager:Company.Company_Manager
                
        });
    });
    }

    Updateompany = (e) => {
        e.preventDefault();
        let Company =  {Company_Name: this.state.Company_Name, Company_Type: this.state.Company_Type, Company_Manager: this.state.Company_Manager}
        console.log('Company =>' + JSON.stringify(Company));


    CompanyService.UpdateCompany(Company).then(res =>{
        this.props.history.push('/CompanyList');
    });
}
      
CompanyNamehandler = (event) => {
    this.setState({
        Company_Name: event.target.value
    });
    
}
CompanyTypehandler = (event) => {
    this.setState({
        Company_Type: event.target.value
    });
}
    CompanyManagerhandler = (event) => {
        this.setState({
            Company_Manager: event.target.value
        });
}
cancel(){
    this.props.history.push('./CompanyLists');
}
    
    render() {
        return (
            <div>

<div className="container">
                   <div className="row">
                       <h3 className="text-center">Update Company</h3>
                       <div className="card-body">
                           <form>
                               <div className="form-group">
                                   <label>CompanyName: </label> <input placeholder="CompanyName" name="Company_Name" className="form-control"
                                    value={this.state.Company_Name} onChange={this.CompanyNamehandler}/>
                               </div>
                               <div className="form-group">
                                   <label>CompanyType: </label> <input placeholder="CompanyType" name="Company_Type" className="form-control"
                                    value={this.state.Company_Type} onChange={this.CompanyTypehandler}/>
                               </div>
                               <div className="form-group">
                                   <label>CompanyManager: </label> <input placeholder="Manager" name="Company_Manager" className="form-control"
                                    value={this.state.Company_Manager} onChange={this.CompanyManagerhandler}/>
                               </div>
                               <div>
                               <button className="btn btn-success" onclick={this.saveCompany}>Save</button>
                               <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                          </div>
                           </form>
                       </div>
                   </div>
               </div>
                
            </div>
        );
    }
}

export default UpdateCompany;