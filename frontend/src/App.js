import React from 'react';

import './global.css'

import Routes from './routes';

function App() {
  return (
    <Routes />
    );
}

export default App;

// No react nao se pode colocar um elemento abaixo do outro sem ter algum elemento por volta

/** Conceitos do ReactJS
 * 
 * // Um componente no React é uma função que retorna HTML
 * // Quando nosso Html esta escrito dentrode um arquivo JS chamamos de JSX = (Javascript e XML)
 * 
 * // Propriedades: propriedades no react é quase a mesma coisa do HTML no quisito de atributos,
 * por exemplo podemos passar um parametro id, as propriedades tem a mesma sintaxe de atributos porém são atributos passados
 * para componentes ao invés de elementos do HTML.
 * 
 * Uma das formas de recuperarmos os arquivos por meio de arquivos separados é instanciando nossos
 * arquivos e chamando por meio de props, exemplo: ao criarmos um arquivo Header.js para recuperarmos um titulo basta adicionarmos 
 * ao principalchamando por meio da função props.title, para recuperarmos dentro de uma tag utilizamos o props.children
 * 
 * Sempre que quiser injetar uma variavel, função, qualquer coisa que seja javascript dentro do html do nosso componente
 * utilizamos chaves {}
 * 
 * Sempre nas propriedades é bom fazer um desustruturação para saber quais são as propriedades que tal
 * variavel recebe, ao inves de receber o objeto de propriedade inteiro podemos utilizar chaves ({ children }) e colocar quais propriedades quero obter
 * sendo que a propriedade no corpo deve ser passada sem a sintaxe props
 * 
 * 
 * // Estado:
 * 
 * Estado é uma informação que vai ser mantida pelo componente, imagine que o componente precisa armazenar
 * um tipo de informação, um input do usuario, uma coisa que vem de uma api externa, uma listagem do usuario
 * ele precisa lidar com elas, editar, excluir. Então assim sendo, nao podemos utilizar variaveis convencionais, 
 * utilizamos pra isso um conceito chamado estado
 * 
 * O Estado toda vez que ele é alterado ele vai renderizar novamente, exibindo as informações atualizadas em tela
 * Quando utilizamos o metodo useState ele retorna um array com 2 posiçõe [valor, functiondeAtualização]
 * 
 * 
 * Exemplo::
 * 
 * import React, { useState } from 'react';

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
    
  }

  return (
    <div>
    <Header> Contador : {counter} </Header>
    <button onClick={increment}>Incrementar</button>
    </div>
    );
}

export default App;
 */


 //Componentes criados de forma indivual para melhor organização do código devem ser criados utilizando letras maisculas
