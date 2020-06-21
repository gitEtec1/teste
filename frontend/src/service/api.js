//Para utilizar o axios deve-se primeiramente executar o comando: npm install axios.
//Axios é um cliente HTTP utilizado para fazer as chamadas do backend e obter as respostas.
//Apos a instalação do axios podemos criar os codigos abaixo.

import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3333"
});

export default api;