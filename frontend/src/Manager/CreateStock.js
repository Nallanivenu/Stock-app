
import React, { Component } from 'react';
import StocksService from '../Services/StocksService';


class CreateStock extends Component {
    constructor(props) {
        super(props);
        this.state={
            Stock_name:'',
            Stock_items:'',
            Stock_Price:''
        }
        this.Namehandler=this.Namehandler.bind(this);
        this.itemhandler=this.itemhandler.bind(this);
        this.pricehandler=this.pricehandler.bind(this);
        this.saveStock=this.saveStock.bind(this);
    }


    saveStock = (e) => {
        e.preventDefault();
        let Stock =  {Stock_name: this.state.Stock_name, Stock_items: this.state.Stock_items, Stock_Price:this.state.Stock_Price}
        console.log('Stock =>' + JSON.stringify(Stock));


    StocksService.createStock(Stock).then(res =>{
        this.props.history.push('/StockList');
    });
    
    
    }


    Namehandler = (event) => {
        this.setState({
            Stock_name: event.target.value
        });
        
    }
    itemhandler = (event) => {
        this.setState({
            Stock_items: event.target.value
        });
    }
        pricehandler = (event) => {
            this.setState({
                Stock_Price: event.target.value
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
                       <h3 className="text-center">AddNew Stock</h3>
                       <div className="card-body">
                           <form>
                               <div className="form-group">
                                   <label>StockName: </label> <input placeholder="stockName" name="Stock_name" className="form-control"
                                    value={this.state.Stock_name} onChange={this.Namehandler}/>
                               </div>
                               <div className="form-group">
                                   <label>StockItems: </label> <input placeholder="StockItems" name="Stock_items" className="form-control"
                                    value={this.state.Stock_items} onChange={this.itemhandler}/>
                               </div>
                               <div className="form-group">
                                   <label>Stock_Price: </label> <input placeholder="price" name="Stock_Price" className="form-control"
                                    value={this.state.Stock_Price} onChange={this.pricehandler}/>
                               </div>
                               <div>
                               <button className="btn btn-success" onclick={this.saveStock}>Save</button>
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

export default CreateStock;