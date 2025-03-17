function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let botao = jogo.querySelector(".dashboard__item__button");
    
    if (botao.textContent.trim() === "Alugar") {
        jogo.querySelector('.dashboard__item__img').classList.add('dashboard__item__img--rented');
        jogo.querySelector('.dashboard__item__button').classList.add('dashboard__item__button--return');
        botao.innerHTML = "Devolver";
    } else {
        jogo.querySelector('.dashboard__item__img').classList.remove('dashboard__item__img--rented');
        jogo.querySelector('.dashboard__item__button').classList.remove('dashboard__item__button--return');
        botao.innerHTML = "Alugar";
    }
}