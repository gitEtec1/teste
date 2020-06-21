const express = require('express'); //Importando as funcionanlidade do Express. Para importar no Node tem que ser atraves de uma variavel.

const app = express(); //Variavel responsavel para armazenar a aplicação.

app.use(express.json()); //Comando para que nossa aplicação possa reconhecer pasagens de dados via JSON.

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

//Metodos para poder criar a primeira rota e exibir os dados no navegador.
app.post('/user', (request, response) => { //Passar o endereço da rota e especificar os dois parametros de uma função, onde o 1° parametro é a requisição e o 2° parametro é a resposta.
    
    //Exemplo de passagem de QUERY: app.get('/user') http://localhost:3333/user?name=Luis&idade=26
    const query = request.query; //Pega todos os dados que sao passados pela requisiçao HTTP.

    //Exemplo de passagem de ROUTE: app.get('/user/:id') - http://localhost:3333/ongs/1
    const parametros = request.params; //Pega apenas o dado solicitado pela requisiçao HTTP.

    //Exemplo de passagem de BODY: app.post('/user') e no insominia passar um objeto via JSON no post.
    const dados = request.body; //Pega os dados de um corpo JSON criado no body de um metodo POST. Para visualizar os dados do JSON deve passar a chamada dele no topo do codigo.

    console.log(query);
    
    //return response.send("Hello World"); //Retornar a resposta para o navegador.

    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Pedro Paulo"
    })

});

app.listen(3333); //Listando a porta que vai ficar na ouvindo o servidor para ser exibido no localhost.
//Para inicializar o servidor é necessario via terminal passar o comando - node index.js