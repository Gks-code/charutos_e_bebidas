// Menu Mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// Carregar produtos em destaque
const destaquesContainer = document.getElementById('destaques');

const produtos = [
    {
        id: 1,
        nome: "Whisky Johnnie Walker Blue Label",
        descricao: "Blended Scotch Whisky de luxo com sabores complexos.",
        preco: "R$ 1.899,90",
        imagem: "img/produtos/whisky-blue-label.jpg"
    },
    {
        id: 2,
        nome: "Charuto Cohiba Siglo VI",
        descricao: "Um dos charutos mais cobiçados do mundo, feito à mão em Cuba.",
        preco: "R$ 599,90",
        imagem: "img/produtos/cohiba-siglo-vi.jpg"
    },
    {
        id: 3,
        nome: "Vinho Château Lafite Rothschild 2015",
        descricao: "Um dos vinhos mais prestigiados de Bordeaux, safra excepcional.",
        preco: "R$ 4.999,90",
        imagem: "img/produtos/lafite-rothschild.jpg"
    },
    {
        id: 4,
        nome: "Conhaque Louis XIII",
        descricao: "O ápice da arte do conhaque, envelhecido por décadas.",
        preco: "R$ 12.999,90",
        imagem: "img/produtos/louis-xiii.jpg"
    }
];

function carregarProdutos() {
    destaquesContainer.innerHTML = '';
    
    produtos.forEach(produto => {
        const produtoHTML = `
            <div class="produto-card">
                <div class="produto-img">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                </div>
                <div class="produto-info">
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                    <div class="preco">${produto.preco}</div>
                    <button class="btn" onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
        
        destaquesContainer.innerHTML += produtoHTML;
    });
}

// Simulação de carrinho
function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    alert(`${produto.nome} foi adicionado ao carrinho!`);
    // Aqui você implementaria a lógica real do carrinho
}

// Carregar produtos quando a página carregar
window.addEventListener('DOMContentLoaded', carregarProdutos);

// Efeito de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validação do formulário de newsletter
const newsletterForm = document.querySelector('.newsletter form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        
        if (email && email.includes('@') && email.includes('.')) {
            alert('Obrigado por assinar nossa newsletter!');
            this.reset();
        } else {
            alert('Por favor, insira um e-mail válido.');
        }
    });
}