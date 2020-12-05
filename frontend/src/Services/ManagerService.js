import axios from 'axios';

const MER_API_BASE_URL = "http://localhost:8080/api/v1/Manager_Table";
class ManagerService{

    getManager(){
        return axios.get(MER_API_BASE_URL);
    }
 
    createManager(manager){
      return axios.post(MER_API_BASE_URL, manager);  
    }
    getManagerById(m_id){
      return axios.get(MER_API_BASE_URL +'/'+ m_id)
  }

  UpdateManager(manager,m_id){
      return axios.put(MER_API_BASE_URL, '/',m_id,manager);
  }

  deleteManager(m_id){
      return axios.delete(MER_API_BASE_URL + '/' + m_id);
  }
}
export default new ManagerService()