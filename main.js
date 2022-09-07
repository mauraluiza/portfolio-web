const LISTA_INTERESSES = document.querySelectorAll('.icones')

for(let i = 0; i < LISTA_INTERESSES.length; i++) {
    const INTERESSE = LISTA_INTERESSES[i]
    let idInteresse = INTERESSE.id
    
    INTERESSE.onclick = function() {
        mostraTexto(idInteresse)
    }
}

const descricoesInteresses = {
    'interesse-colorir': 'Colorir é um hábito que tenho desde criança! Sempre fui incentivada a me expressar através do lápis de cor e, até hoje, vejo como meu refúgio em situações de estresse ou tédio.',
    'interesse-livro': 'A leitura também é algo que me anima demais! Gosto de variar nos gêneros literários e adoro conhecer novos autores. Meu livro favorito se chama "Até o fim", do escritor Harlan Coben.',
    'interesse-musica': 'Chuto que 80% das músicas que ouço é rock. Apesar disso, me considero bastante eclética e dificilmente vou reclamar de uma música!',
    'interesse-natureza': 'Gosto muito de estar em contato com a natureza e frequentemente vou em parques e praças arborizadas. Meu sonho é visitar uma praia ou fazer trilha em uma floresta!',
    'interesse-veganismo': 'Sou apaixonada pelos animais e me tornei vegana em 2020! Na minha vida, busco sempre me conscientizar em relação ao sofrimento deles e amo testar receitas e produtos veganos.',
}

function mostraTexto (idInteresse) {
    let texto = document.querySelector('#texto-interesses')
    let caixaDisplay = document.querySelector('#caixa-interesses')

    caixaDisplay.classList.remove('display-texto')

    texto.innerHTML = descricoesInteresses[idInteresse] || ''
}

