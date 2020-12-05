import React, { Component } from 'react';
import ManagerService from '../Services/ManagerService';


class ManagerList extends Component {
    constructor(props){
        super(props)

        this.state={
                Managers: []
        }
         this.addManager=this.addManager.bind(this);
    }

    deleteManager(m_id){
        ManagerService.deleteManager(m_id).then(res =>{
            this.setState({Managers: this.state.Managers.filter(Manager =>Manager.m_id !== m_id)});
        });
    
    }
    
        editManager(m_id){
            this.props.history.push(`./UpdateManager/${m_id}`);
        }
    

    componentDidMount()
    {
        ManagerService.getManager().then((res) => {
                    this.setState({Managers:res.data});
        });
    }

    addManager(){
         this.props.history.push('./CreateManager');
    }


    render() {
        return (
            <div>
                <h2 className="text-center">ManagersList</h2>
            <div className="row">
            <table className="table table-striped table-bordered">

                <thead>
                    <tr>
                        <th> ManagerName</th>
                        <th>ManagerCompany</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.Managers.map(
                            Managers=>
                            <tr key={Managers.m_id}>
                                <td>{Managers.m_name}</td>
                                <td>{Managers.m_company}</td>
                                <td>
                                    <button onClick={ () => this.editManager(Managers.m_id)} className="btn btn-info" >Edit</button>
                                    <button style={{marginLeft:"10px"}}onClick={ () => this.deleteManager(Managers.m_id)} className="btn btn-danger" >Delete</button>

                                </td>
                                
                            </tr>
                        )
                    }


                </tbody>
            </table>

            </div>
            <div className="row">
                <button classname="btn btn-primary" onClick={this.addManager}>AddManager</button>
            </div>
            </div>
        );
    }
}

export default ManagerList;
