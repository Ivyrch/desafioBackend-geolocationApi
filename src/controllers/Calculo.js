import GoogleService from "../services/GoogleService.js";
import Algoritmo from "../utils/Algoritmo.js";

class Calculodistancia {
    static router(app){
        app.get("/", async (req, res) => {
            const queries = req.query
            const queriesValues = Object.values(queries)
            
            GoogleService.cordenateAgroup(...queriesValues).then((response) => {
                const result = Algoritmo.distanciaMaxMin(response)
                res.status(200).json(result)
            }).catch((e)=>{
                res.status(400).json(e.message)
            })
        })

    }
}

export default Calculodistancia;