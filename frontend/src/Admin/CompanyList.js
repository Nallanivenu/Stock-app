import React, { Component } from 'react';
import CompanyService from '../Services/CompanyService';
import './todo.css'

class CompanyList extends Component {
    constructor(props){
        super(props)

        this.state={
                Company: []
        }
         this.addCompany=this.addCompany.bind(this);
    }

    componentDidMount()
    {
        CompanyService.getCompany().then((res) => {
                    this.setState({Company:res.data});
        });
    }

    addCompany(){
         this.props.history.push('./addCompany');
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
                        
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.Company.map(
                            Company=>
                            <tr key={Company.id}>
                                <td>{Company.company_Name}</td>
                                <td>{Company.company_Type}</td>
                                <td>{Company.company_Manager}</td>
                            </tr>
                        )
                    }


                </tbody>

            </table>

            </div>
           
            </div>
        );
    }
}

export default CompanyList;
