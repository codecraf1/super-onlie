// Array para armazenar os produtos no carrinho
let carrinho = [];

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
    // Adiciona o produto ao array carrinho
    carrinho.push({ nome: nome, preco: preco });
    atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const itensCarrinho = document.getElementById("itens-carrinho");
    const totalCarrinho = document.getElementById("total-carrinho");

    // Limpar os itens do carrinho antes de atualizar
    itensCarrinho.innerHTML = "";

    let total = 0;

    // Iterar sobre os itens no carrinho e exibi-los
    carrinho.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item-carrinho");
        itemDiv.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        itensCarrinho.appendChild(itemDiv);
        total += item.preco;
    });

    // Atualiza o total
    totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Selecionar todos os botões de adicionar ao carrinho
const botoesAdicionar = document.querySelectorAll(".produto .btn");

// Adicionar evento de clique a cada botão de adicionar
botoesAdicionar.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        // Seleciona o nome e o preço do produto com base no índice
        const nomeProduto = document.querySelectorAll(".produto h3")[index].textContent;
        const precoProduto = parseFloat(document.querySelectorAll(".produto p")[index].textContent.replace("R$", "").trim());
        
        // Chama a função para adicionar o produto ao carrinho
        adicionarAoCarrinho(nomeProduto, precoProduto);
    });
});

// Função para limpar o carrinho
function limparCarrinho() {
    carrinho = [];  // Esvazia o array do carrinho
    atualizarCarrinho();  // Atualiza a interface para refletir o carrinho vazio
}

// Adicionar evento de clique no botão de limpar carrinho
document.getElementById("limpar-carrinho").addEventListener("click", limparCarrinho);

// Adicionar comentários
document.getElementById("adicionar-comentario").addEventListener("click", () => {
    const comentarioInput = document.getElementById("novo-comentario");
    const novoComentario = comentarioInput.value.trim();
    
    if (novoComentario) {
        const listaComentarios = document.getElementById("lista-comentarios");
        const comentarioDiv = document.createElement("div");
        comentarioDiv.textContent = novoComentario;
        listaComentarios.appendChild(comentarioDiv);
        comentarioInput.value = ""; // Limpa o campo de texto
    } else {
        alert("Por favor, escreva um comentário antes de enviar.");
    }
});
