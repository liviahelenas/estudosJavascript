console.log("Bem-Vindo!");
console.log(document.title);

///Manipulando DOM 

///por nome da tag
const todosH1 = document.getElementsByTagName('h1');
console.log("Todos elementos h1 (mesma tag)", todosH1)
const todosP = document.getElementsByTagName('p');
console.log("Todos da Tag p (mesma tag)", todosP);
///por classe
const todosClasseParagrafo = document.getElementsByClassName('paragrafoClass');
console.log("Apenas objetos da classe criada (mesma classe)", todosClasseParagrafo);
///por nome
const emailInput = document.getElementsByName('email');
console.log(emailInput);

///por id
const imagemJavascript = document.getElementById('image.js');
console.log(imagemJavascript);

//SELETORES:
const paragrafoQuerry = document.querySelector('p');
const paragrafoQuerryAll = document.querySelectorAll('p');

console.log("text content", paragrafoQuerry.textContent);
console.log("innerHtml:", paragrafoQuerry.innerHTML);

paragrafoQuerry.innerHTML = '<strong>Elemento alterado DOM</strong>';

/// Adicionando items novos

const listaUl = document.querySelector('ul#lista');
const listaLis = document.querySelectorAll('ul > li');
const novaTagLi = document.createElement('li');
novaTagLi.textContent = "Item  adicionado pelo Dom";

listaUl.appendChild(novaTagLi);
listaUl.insertBefore(novaTagLi, listaLis [0]);


