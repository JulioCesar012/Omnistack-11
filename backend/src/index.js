const routes = require('./routes');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); //{origin}: 'https://meuapp.com' 
//essa sintaxe origin deve ser utilizada para segurança no modo de produção

app.use(express.json());

app.use(routes);

app.listen(3333);



//Métodos de requisições http:

/**
* GET - Buscar informações no back-end
* POST - Criar uma informação no back-end
* PUT - Alterar uma informação no back-end
* DELETE - Deletar uma informação no back-end
*/

/**
 * Tipos de Parâmetros:
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, Paginação, etc);
 * Route Params: Parametros utilizados para identificar recursos (no route params nao se pode enviar parametros a mais do que o esperado)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * Request: Guarda todos dados que vem da requisição do usuario;
 * Response: Retorna todos dados para o usuário;
 */

 /**
  * Banco de dados:
  * 
  * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server (Linguagem universal)
  * 
  * NOSQL: MongoDB, CouchDB, etc (Bancos não relacionais, banco individuais,propria linguagem de comunicação,  estrutura muito livre porem pouco estruturado)
  */

  /**
   * Instalar driver do banco de dados: SELECT * FROM users
   * Query Builder: table('users').select('*').where();
   * 
   * Staging: Ambiente de produção para o time de desenvolvimento, simula a aplicação online.
   */