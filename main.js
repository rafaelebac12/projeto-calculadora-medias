const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./reprovado.png" alt="emoji decepcionado" />';
const atividade = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span';
const notaminima = parseFloat(prompt("digite a nota mínima"));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

   adicionallinha();
   atualizatabela();
   atualizamediafinal();
});

function adicionallinha() {
    const inputnomeAtividade = document.getElementById('nome-atividade');
    const inputnotaAtividade = document.getElementById('nota-atividade');

    if (atividade.push(inputnomeAtividade.value)) {
    alert(`A atividade: ${inputnomeAtividade.value} já foi inserida`);
} else {
    atividade.push(inputnomeAtividade.value)
    notas.push(parseFloat(inputnotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputnomeAtividade.value}</td>`;
    linha += `<td>${inputnotaAtividade.value}</td>`;
    linha += `<td>${inputnotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
}

    inputnomeAtividade.value = '';
    inputnotaAtividade.value = '';
}

function atualizatabela() {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}

function atualizamediafinal() {
    const mediafinal = calculamediafinal();

    document.getElementById('media-final-valor').innerHTML = mediafinal;
    document.getElementById('media-final-resultado').innerHTML = mediafinal >= 7 ? spanAprovado : spanReprovado;
}

function calculamediafinal() {
    let somadasnotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somadasnotas += notas[1];
    }

    return somadasnotas / notas.length;
}

 