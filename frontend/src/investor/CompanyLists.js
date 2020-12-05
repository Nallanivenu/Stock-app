import React, { Component } from 'react';
import CompanyService from '../Services/CompanyService';
//import './todo.css'

class CompanyLists extends Component {
    constructor(props){
        super(props)

        this.state={
                Company: []
        }
        this.deleteCompany=this.deleteCompany.bind(this);
        
    }

    deleteCompany(cmp_id){
        CompanyService.deleteCompany(cmp_id).then(res =>{
            this.setState({Company: this.state.Company.filter(Company =>Company.cmp_id !== cmp_id)});
        });
    
    }

    editCompany(Cmp_id){
        
        this.props.history.push(`./UpdateCompany/${Cmp_id}`);
    }



    componentDidMount()
    {
        CompanyService.getCompany().then((res) => {
                    this.setState({Company:res.data});
        });
    }

  
    render() {
        return (
            <div>
                <h2 className="text-center">CompaniesList</h2>
            <div className="row">
            <table className="table table-striped table-bordered">

                <thead>
                    <tr>
                        <th> CompanyName</th>
                        <th>CompanyType</th>
                        <th>CompanyManager</th>
                        <th>Actions</th>
                        </tr>
                </thead>

                <tbody>
                    {
                        this.state.Company.map(
                            Company=>
                            <tr key={Company.cmp_id}>
                                <td>{Company.company_Name}</td>
                                <td>{Company.company_Type}</td>
                                <td>{Company.company_Manager}</td>
                                 <td>
                                    <button onClick={ () => this.editCompany(Company.Cmp_id)} className="btn btn-info" >Edit</button>
                                    <button style={{marginLeft:"5px"}}onClick={ () => this.deleteCompany(Company.cmp_id)} className="btn btn-danger" >Delete</button>
                                     </td>
                            </tr>
                        )
                    }


                </tbody>
            </table>

            </div>
            <div className="row">
                <button classname="btn btn-primary" onClick={this.addCompany}>AddCompany</button>
            </div>
          
            </div>
        );
    }
}

export default CompanyLists;
