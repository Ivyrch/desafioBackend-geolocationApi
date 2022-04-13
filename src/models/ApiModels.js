export class ModelLocalizacao {
    constructor(cordenada, endereco) {
        this.cordenada = cordenada,
        this. endereco = endereco 
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