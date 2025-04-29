
function entrar() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    
    if (username && password){
        localStorage.setItem('logado', 'true');

        document.getElementById('login').style.display = 'none';
        document.getElementById('principal').style.display = 'block';
    } else {
        alert('Por favor, preencha com Nome e Sobrenome.');
    }
}

function mostrarSenha() {
    var senha = document.getElementById('password');

    if (senha.type === 'password') {
        senha.type = "text";
    } else {
        senha.type = "password";
    }
}

const menuFilmesBtn = document.getElementById('menu-filmes-btn');
const menuFilmes = document.getElementById('menu-filmes');

const menuSeriesBtn = document.getElementById('menu-series-btn');
const menuSeries = document.getElementById('menu-series');

const menuAnimesBtn = document.getElementById('menu-animes-btn');
const menuAnimes = document.getElementById('menu-animes');

/*
// Filmes
menuFilmesBtn.addEventListener('click', () => {
    menuFilmes.style.display = menuFilmes.style.display === 'block' ? 'none' : 'block';
    menuSeries.style.display = 'none';
    menuAnimes.style.display = 'none';
});

// Séries
menuSeriesBtn.addEventListener('click', () => {
    menuSeries.style.display = menuSeries.style.display === 'block' ? 'none' : 'block';
    menuFilmes.style.display = 'none';
    menuAnimes.style.display = 'none';
});

// Animes
menuAnimesBtn.addEventListener('click', () => {
    menuAnimes.style.display = menuAnimes.style.display === 'block' ? 'none' : 'block';
    menuFilmes.style.display = 'none';
    menuSeries.style.display = 'none';
});
*/

const imagens = document.querySelector('.carrossel-imagens');
const bolinhas = document.querySelectorAll('.bolinha');

bolinhas.forEach((bolinha, index) => {
    bolinha.addEventListener('click', () => {
        // Muda a imagem
        imagens.style.transform = `translateX(-${index * 100}vw)`;

        // Atualiza bolinhas
        bolinhas.forEach(b => b.classList.remove('active'));
        bolinha.classList.add('active');
    });
});

// Deixe a primeira bolinha ativa por padrão
bolinhas[0].classList.add('active');











