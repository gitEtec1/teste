const crypto = require('crypto'); //Importação de um modulo do Node para gerar criptografia automaticamente.

//Importanto o modulo que faz conexão com o banco de dados. A partir dele poderemos usar as funcionalidades do CRUD.
const connection = require('../database/connection');

module.exports = {

    //Metodo criado para listar todos os dados que existem dentro de uma determinada tabela no banco.
    async list(request, response) { 

        //Comando para realizar um select dentro do banco. Caso queira pegar campos especificos deve passar os parametros de maneira separada. Ex: select('name','email');
        const ongs = await connection('ongs').select('*');  //O parametro async/await representa que a função deve esperar a finalização do comando await antes de dar sequencia no restante do codigo.
    
        return response.json(ongs); //retornando os dados via JSON.
        
    },

    //Metodo criado para inserir os dados informados pelo usuario em uma determinada tabela do banco.
    async create(request, response) { //Passar o endereço da rota e especificar os dois parametros de uma função, onde o 1° parametro é a requisição e o 2° parametro é a resposta.
    
        //Desembrulhando cada um dos dado passado pelo usuario em variaveis separadas, desta forma mantemos o controle para receber somente o desejado e caso necessario tratar de forma individual.
        const { name, email, whatsapp, city, uf } = request.body;
    
        //Comando que cria o id do usuario de maneira aleatoria.
        const id = crypto.randomBytes(4).toString('HEX');
        
        //Inserindo os dados passados pelo usuario na determinada tabela do banco.
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
        
        //Retornando uma resposta ao usuario apos a inserção.
        return response.json({id});
    }

};