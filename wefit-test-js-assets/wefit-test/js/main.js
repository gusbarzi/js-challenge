
//Colando menu de forma horizontal
let myDiv = document.getElementById('div-menu');
    myDiv.classList.remove("btn-group-vertical");


//Lista
let quarto = document.createElement('li');
let quinto = document.createElement('li');

quarto.appendChild(document.createTextNode('Quarto Item'));
quinto.appendChild(document.createTextNode('Quinto Item'));
 
document.getElementById('list-group').appendChild(quarto);
document.getElementById('list-group').appendChild(quinto);

//Removendo a classe active do primeiro elemento
let primeiraLi = document.getElementById('primeiro');
    primeiraLi.classList.remove("active");

//adicionando classes nas li
quarto.className = "list-group-item active"
quinto.className = "list-group-item"


//Cards
let imgUm = document.getElementById('imagem-01');
imgUm.setAttribute('src', 'https://placeimg.com/300/180/nature');

let textUm = document.getElementById('text-01').innerText = "Natureza"


let imgDois = document.getElementById('imagem-02');
imgDois.setAttribute('src', 'https://placeimg.com/300/180/animals');

let textDois = document.getElementById('text-02').innerText = "Animais"


let imgQuatro = document.getElementById('imagem-04');
imgQuatro.setAttribute('src', 'https://placeimg.com/300/180/tech');

let textQuatro = document.getElementById('text-04').innerText = "Tecnologia"

//Mudando a cor do botão do card animais
let imgBtn = document.getElementById('btn-verde')
    imgBtn.className = "btn btn-success"


//Header

//Mudando cor de fundo
let jumbotron = document.querySelector(".jumbotron")
jumbotron.style.backgroundColor = '#6b757e'
jumbotron.style.color = '#fff'

//Botão verde
let headerBtn = document.querySelector("#btn-verde-large")
    headerBtn.className = "btn btn-success btn-lg"

//Invertendo a posição dos elementos
let boxHeader = document.querySelector("#box-header")
    boxHeader.className = "jumbotron d-flex align-items-end flex-column bd-highlight mb-3"