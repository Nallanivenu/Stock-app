import React, { Component } from 'react';
import StocksService from '../Services/StocksService';

class StockLists extends Component {
    constructor(props){
        super(props)

        this.state={
                Stocks: []
        }
         
    }

    componentDidMount()
    {
        StocksService.getStocks().then((res) => {
                    this.setState({Stocks:res.data});
        });
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
                        
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.Stocks.map(
                            Stocks=>
                            <tr key={Stocks.id}>
                                <td>{Stocks.stock_name}</td>
                                <td>{Stocks.stock_items}</td>
                                <td>{Stocks.stock_Price}</td>
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

export default StockLists;
