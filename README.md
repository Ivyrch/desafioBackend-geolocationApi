## Descrição do Projeto: 

A aplicação consiste em um ambiente back-end onde um ou mais endereços são recebidos e é realizado um cálculo entre as distancias. Foi necessário utiizar a API do Google, Geocoding, para a realização do projeto. 

## Exemplo de retorno da aplicação: 

```json
{
  "maisPerto": {
    "percurso": {
      "InicioPercurso": "Av Branco 145 Centro Rio de Janeiro RJ  20010-000",
      "destino": "Praça Mal. Âncora, 122 Centro, Rio de Janeiro RJ, 20021​200"
    },
    "distancia": 0.007218005508453442
  },
  "maisDistante": {
    "percurso": {
      "InicioPercurso": "Praça Mal. Âncora, 122 Centro, Rio de Janeiro RJ, 20021​200",
      "destino": "Av Branco 145 Centro Rio de Janeiro RJ  20010-000"
    },
    "distancia": 0.007218005508453442
  }
}

```

## Exemplo de URL: 

```
https://api-locationn.herokuapp.com/?address1=Av+Branco+145+Centro+Rio+de+Janeiro+RJ+%2020010-000&addres2=Pra%C3%A7a+Mal.+%C3%82ncora,+122+Centro,+Rio+de+Janeiro+RJ,+20021%E2%80%8B200

```