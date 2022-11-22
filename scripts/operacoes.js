const adicao = document.querySelector('.somar');
const subtracao = document.querySelector('.subtrair');
const divisao = document.querySelector('.divisao');
const multiplicacao = document.querySelector('.multi');

const visor = document.querySelector('.resultado');

adicao.addEventListener('click', () => {

    document.querySelector('.resultado').value = visor.value + '+';
});

const limparBtn = document.querySelector('.btn-limpar');

limparBtn.addEventListener('click', () => {
    document.querySelector('.resultado').value = '';
})

subtracao.addEventListener('click', () => {
    document.querySelector('.resultado').value = visor.value + '-';
});

multiplicacao.addEventListener('click', () => {
    document.querySelector('.resultado').value = visor.value + '*';
});

divisao.addEventListener('click', () => {
    document.querySelector('.resultado').value = visor.value + '/';
});


