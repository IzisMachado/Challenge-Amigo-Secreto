
let amigos = [];


function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    if (nome) {
        amigos.push(nome);
        atualizarListaAmigos();
        input.value = ''; 
    }
}


function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length > 0) {
        const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `Amigo sorteado: ${sorteado}`;
    } else {
        alert('Adicione pelo menos um nome para sortear.');
    }
}