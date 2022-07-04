let cor1 = document.querySelector('#cor-1');
let cor2 = document.querySelector('#cor-2');
let cor3 = document.querySelector('#cor-3');
let cor4 = document.querySelector('#cor-4');
let corEscolhida;
let pixels = document.querySelector('#pixel-board');
let botao = document.querySelector('#clear-board');

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
    let pixel = pixels.children;
    event2.target.classList.remove('corDeFundoBranca');
    if (cor1.classList.contains('selected')) {
        event2.target.classList.remove('corDeFundoBranca');
        event2.target.classList.remove('corDeFundo2');
        event2.target.classList.remove('corDeFundo3');
        event2.target.classList.remove('corDeFundo4');
        event2.target.classList.add('corDeFundoPreta');
    } else if (cor2.classList.contains('selected')) {
        event2.target.classList.remove('corDeFundoBranca');
        event2.target.classList.remove('corDeFundoPreta');
        event2.target.classList.remove('corDeFundo3');
        event2.target.classList.remove('corDeFundo4');
        event2.target.classList.add('corDeFundo2');
    } else if (cor3.classList.contains('selected')) {
        event2.target.classList.remove('corDeFundoBranca');
        event2.target.classList.remove('corDeFundoPreta');
        event2.target.classList.remove('corDeFundo2');
        event2.target.classList.remove('corDeFundo4');
        event2.target.classList.add('corDeFundo3');
    } else if (cor4.classList.contains('selected')) {
        event2.target.classList.remove('corDeFundoBranca');
        event2.target.classList.remove('corDeFundoPreta');
        event2.target.classList.remove('corDeFundo3');
        event2.target.classList.remove('corDeFundo2');
        event2.target.classList.add('corDeFundo4');
    }
}
pixels.addEventListener('click', pintarPixel);

function limparTudo() {
    pixels.children.classList.value = ' ';
    pixels.children.classList.add('pixel corDeFundoBranca');
}
botao.addEventListener('click', limparTudo);

window.onload = pintarPixel;












