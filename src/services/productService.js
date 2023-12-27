import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:28790/api/Products/getall")
    }
    getById(productId){
        return axios.get("https://localhost:28790/api/Products/getbyid?id="+ productId)
    }
}