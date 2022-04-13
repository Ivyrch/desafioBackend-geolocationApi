import { Percurso, Distancia, Response } from "../models/ApiModels.js";


class Algoritmo{ 
    static distanciaEuclidiana(x1, x2, y1, y2) {
        return Math.sqrt(
            Math.pow((x1-x2), 2) +
            Math.pow((y1-y2), 2)
        )
    }
    static distanceList(arr) {
        const list = []
        for(let i =0; i < arr.length; i++) {
            for (let j=0; j < arr.length; j++) {
                let value = this.distanciaEuclidiana(
                    arr[i].coordinate.lat,
                    arr[j].coordinate.lat,
                    arr[i].coordinate.lng,
                    arr[j].coordinate.lng

                )
            
                let percurso = new Percurso(arr[i].ApiModels.enderecos, arr[j].enderecos)
                let distancia = new Distancia(percurso, value)
                list.push(distancia)
            }
        }
        return list 
    }
    static ordernarDistancias(arr) {
        let order = this.distanceList(arr).sort((a,b) => {
        if(a.distance < b.distance){
                     return -1
        } else if(a.distance > b.distance) {
            return 1
        } else {
            return 0
        }
        })
  
                return order
}
   
    static distanciaMaxMin(arr) {
        let ordenarDistancias = this.ordernarDistancias(arr)
        let remove = 0; 
        ordenarDistancias = ordenarDistancias.filter((item) => {
            return item.distance !== remove
        })
        
        let maiorDistancia = ordenarDistancias.length -1
        return new Response(ordenarDistancias[0], ordenarDistancias[maiorDistancia])
    }
}


export default Algoritmo
