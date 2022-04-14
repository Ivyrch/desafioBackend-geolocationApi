export class ModelLocalizacao {
    constructor(cordenada, enderecos) {
        this.cordenada = cordenada,
        this.enderecos = enderecos
    }
}

export class Percurso { 
    constructor(InicioPercurso, destino) { 
        this.InicioPercurso = InicioPercurso,
        this.destino = destino


    }
}

export class Distancia { 
    constructor(percurso, distancia) {
        this.percurso = percurso,
        this.distancia = distancia
    }
} 


export class Response{
    constructor(maisPerto, maisDistante) {
        this.maisPerto = maisPerto
        this.maisDistante = maisDistante
    }
}