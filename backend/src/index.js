const express = require('express'); //Importando as funcionanlidade do Express. Para importar no Node tem que ser atraves de uma variavel.
const routes = require('./routes'); //Importando o routes que esta em um arquivo separado para melhor organização do codigo.
const app = express(); //Variavel responsavel para armazenar a aplicação.

const cors = require('cors');

app.use(cors());
app.use(express.json()); //Comando para que nossa aplicação possa reconhecer pasagens de dados via JSON.
app.use(routes); //Fazendo uso do routes dentro do index.js.

/**
 * ROTAS: Caminho de uma pagina.
 * RECURSO: Um dado especifico dentro da rota.
 * 
 */

/**
 * Metodos HTTP:
 * GET: Buscar/listar informações do Back-End;
 * POST: Criar uma informação no Back-End;
 * PUT: Alterar uma informação no Back-End;
 * DELETE: Deletar uma informação no Back-End;
 * 
 */

 /**
  * Tipos de Parametros:
  * 
  * QUERY PARAMS: Parametros nomeados enviados na rota apos o simbolo de "?" (Filtros, paginação);
  * ROUTE PARAMS: Parametros utilizados para identificar recursos (Um unico dado dentro da rota);
  * REQUEST BODY: É o corpo da requisção utilizado para criar ou alterar recursos.
  * 
  */

  /**
   * Maneiras de realizar conexao com o Banco de Dados.
   * 
   * 1° Instalar o DRIVER: Select * From users;
   * 2° Query Builder: table('users').select('*').where()
   *    A opcao 2 sera realizada atraves de uma ferramenta chamada KNEX
   * 
   */

app.listen(3333); //Listando a porta que vai ficar na ouvindo o servidor para ser exibido no localhost.
//Para inicializar o servidor é necessario via terminal passar o comando - node index.js