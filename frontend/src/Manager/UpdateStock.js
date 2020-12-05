 import React, { Component } from 'react';
import StocksService from '../Services/StocksService';

class UpdateStock extends Component {
    constructor(props) {
        super(props);
        this.state={
            stock_name:'',
            stock_items:'',
            stock_Price:'',
        }
        this.Namehandler=this.Namehandler.bind(this);
        this.itemhandler=this.itemhandler.bind(this);
        this.pricehandler=this.pricehandler.bind(this);
        this.UpdateStock=this.UpdateStock.bind(this);
    }

    commponentDidMount(){
        StocksService.getStockById(this.state.stock_id).then((res) =>{
            let Stocks=res.data;
            this.setState({stock_name:Stocks.stock_name,
                stock_items: Stocks.stock_items,
                stock_Price: Stocks.stock_Price
        });
    });

    }


    UpdateStock = (e) =>{
        e.preventDefault();
        let Stocks =  {stock_name: this.state.stock_name, stock_items: this.state.stock_items, stock_Price:this.state.stock_Price}
        console.log(JSON.stringify(Stocks));

        StocksService.UpdateStock(Stocks,this.state.stock_id).then(res => {
            this.props.history.push(`/StockList`);
        });

         }


    Namehandler = (event) => {
        this.setState({
            stock_name: event.target.value
        });
    }
    itemhandler = (event) => {
        this.setState({
            stock_items: event.target.value
        })
    }
        pricehandler = (event) => {
            this.setState({
                stock_Price: event.target.value
            });
    }

    cancel(){
        this.props.history.push('./StockList');
    }
    
    render() {
        return (
            <div>
                 <div className="container">
                   <div className="row">
                       <h3 className="text-center">UpdateStock</h3>
                       <div className="card-body">
                           <form>
                               <div className="form-group">
                                   <label>StockName: </label> <input placeholder="StockName" name="stock_name" className="form-control"
                                    value={this.state.stock_name} onChange={this.Namehandler}/>
                               </div>
                               <div className="form-group">
                                   <label>StockItems: </label> <input placeholder="StockItems" name="stock_items" className="form-control"
                                    value={this.state.stock_items} onChange={this.itemhandler}/>
                               </div>
                               <div className="form-group">
                                   <label>Stock_Price: </label> <input placeholder="price" name="stock_Price" className="form-control"
                                    value={this.state.stock_Price} onChange={this.pricehandler}/>
                               </div>
                               
                               <button className="btn btn-success" onclick={this.UpdateStock}>Save</button>
                               <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                           </form>
                       </div>
                   </div>
               </div>
               </div>
        );
    }
}

export default UpdateStock;