import axios from 'axios';
const STOCK_API_BASE_URL = "http://localhost:8080/api/v1/Stocks";
class StockService{

    getStocks(){
        
        return axios.get(STOCK_API_BASE_URL);
    }
    createStock(Stock){
        return axios.post(STOCK_API_BASE_URL, Stock);  
      }
      getStockById(stock_id){
          return axios.get(STOCK_API_BASE_URL +'/'+ stock_id)
      }

      UpdateStock(Stocks,stock_id){
          return axios.put(STOCK_API_BASE_URL, '/',Stocks,stock_id);
      }

      deleteStock(stock_id){
          return axios.delete(STOCK_API_BASE_URL + '/' + stock_id);
      }

}
export default new StockService()