import React, { Component } from 'react';
import StocksService from '../Services/StocksService';


class StockList extends Component {
    constructor(props){
        super(props)

        this.state={
                Stocks: []
        }
         this.addStock=this.addStock.bind(this);
         this.editStock=this.editStock.bind(this);
         this.deleteStock=this.deleteStock.bind(this);
    }

deleteStock(stock_id){
    StocksService.deleteStock(stock_id).then(res =>{
        this.setState({Stocks: this.state.Stocks.filter(Stock =>Stock.stock_id !== stock_id)});
    });

}

    editStock(stock_id){
        
        this.props.history.push(`./UpdateStock/${stock_id}`);
    }

    componentDidMount()
    {
        StocksService.getStocks().then((res) => {
                    this.setState({Stocks:res.data});
        });
    }

    addStock(){
         this.props.history.push('./CreateStock');
    }


    render() {
        return (
            <div>
                <h2 className="text-center">StockList</h2>
            <div className="row">
            <table className="table table-striped table-bordered">

                <thead>
                    <tr>
                        <th> StockName</th>
                        <th>StockItems</th>
                        <th>StockPrice</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.Stocks.map(
                            Stocks=>
                            <tr key={Stocks.stock_id}>
                                <td>{Stocks.stock_name}</td>
                                <td>{Stocks.stock_items}</td>
                                <td>{Stocks.stock_Price}</td>
                                <td>
                                    <button onClick={ () => this.editStock(Stocks.stock_id)} className="btn btn-info" >Edit</button>
                                    <button style={{marginLeft:"10px"}}onClick={ () => this.deleteStock(Stocks.stock_id)} className="btn btn-danger" >Delete</button>

                                </td>
                            </tr>
                        )
                    }


                </tbody>
            </table>

            </div>
            <div className="row">
                <button className="btn btn-primary" onClick={this.addStock}>AddStock</button>
            </div>
            </div>
        );
    }
}

export default StockList;
