let cor1 = document.querySelector('#cor-1');
let cor2 = document.querySelector('#cor-2');
let cor3 = document.querySelector('#cor-3');
let cor4 = document.querySelector('#cor-4');
let corEscolhida;
const pixels = document.querySelector('#pixel-board');
let botao = document.querySelector('#clear-board');
const pixel = pixels.childNodes;

function colorSelected(event) {
    let corSelecionada = document.querySelector('.selected');
    corSelecionada.classList.remove('selected');
    event.target.classList.add('selected');
    console.log(corSelecionada);
}
cor1.addEventListener('click', colorSelected);
cor2.addEventListener('click', colorSelected);
cor3.addEventListener('click', colorSelected);
cor4.addEventListener('click', colorSelected);

function pintarPixel(event2) {
    let clicado = event2.target;
    if (cor1.classList.contains('selected')) {
        event2.target.classList = 'pixel corDeFundoPreta';
    } else if (cor2.classList.contains('selected')) {
        event2.target.classList = 'pixel corDeFundo2';
    } else if (cor3.classList.contains('selected')) {
        event2.target.classList = 'pixel corDeFundo3';
    } else if (cor4.classList.contains('selected')) {
        event2.target.classList = 'pixel corDeFundo4';
    }
}
pixels.addEventListener('click', pintarPixel);

function limparTudo(event3) {
    for (let i of pixel) {
        i.classList = 'pixel corDeFundoBranca';
    }
}
// Metodo alternativo usando seus objetos:
//     for (let i of Object.keys(pixel)) {
//      let check = pixel[i];
//      check.classList = 'pixel corDeFundoBranca';
//   }

botao.addEventListener('click', limparTudo);


window.onload = pintarPixel, limparTudo;

