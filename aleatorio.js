// Funcao que seleciona um numero aleatorio de 0 a 100 a cada X ms
const time = 10000;
let randomizado = 0;
function randomizando(){
    randomizado = Math.round(Math.random() * 100);
}
randomizando();
setInterval(randomizando, time);

function getRandomizado() {
    return randomizado;
}

// Funcao que retorna um numero aleatorio quando chamada, de 0 a 'max'
function getRandomInteger(min, max) {
    return min + Math.floor(Math.random() * (max-min+1));
}

module.exports = {
    'getRandomizado': getRandomizado,
    'getRandomInteger': getRandomInteger,
};