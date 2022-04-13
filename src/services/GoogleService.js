import axios from "axios"
import { ModelLocalizacao } from "../models/ApiModels.js"
import * as dotenv from "dotenv"
dotenv.config()

class GoogleService {
    static async geolocation(enderecos){
        const codigoUrl = encodeURIComponent(enderecos)
        const key = process.env.API_KEY
        const req = (await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${codigoUrl}&key=${key}`)).data 
        return new ModelLocalizacao(req.results[0].geometry.location, enderecos)
    }
    static async cordenateAgroup(...params) {
        const agrupar = []
        for(let i = 0; i < params.length; i++) { 
            let endereco = await this.geolocation(params[i])
            agrupar.push(endereco)
           
        
        }
          
       return agrupar   
    }


}

export default GoogleService;