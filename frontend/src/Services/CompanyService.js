import axios from 'axios';

const CMP_API_BASE_URL = "http://localhost:8080/api/v1/Company_Table";
class CompanyService{

    getCompany(){
        return axios.get(CMP_API_BASE_URL);
    }
 
    createCompany(Company){
      return axios.post(CMP_API_BASE_URL, Company);  
    }

    getCompanyById(Cmp_id){
        return axios.get( CMP_API_BASE_URL+'/'+ Cmp_id)
    }

    UpdateCompany(Company,Cmp_id){
        return axios.put(CMP_API_BASE_URL, '/',Company,Cmp_id);
    }

    deleteCompany(cmp_id){
        return axios.delete(CMP_API_BASE_URL + '/' + cmp_id);
    }
}
export default new CompanyService()