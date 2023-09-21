//Gustavo da Encarnação Rodrigues e Paulo Zatan Zattar Daniel

// Função para calcular o valor total do pedido
function calcularTotal() {
    // Obtém todas as linhas da tabela (exceto a última que contém o valor total da compra)
    const linhas = document.querySelectorAll(".product-row");

    let total = 0;

    
    linhas.forEach((linha) => {
        const precoUnitario = parseFloat(linha.querySelector("td:nth-child(2)").textContent.replace("R$ ", ""));
        const quantidade = parseInt(linha.querySelector("td:nth-child(3) input").value);

        // Calcula o valor total da linha
        const totalLinha = precoUnitario * quantidade;

        // Atualiza a coluna "Valor Total do Item"
        linha.querySelector("td:nth-child(4)").textContent = "R$ " + totalLinha.toFixed(2);

        // Adiciona o valor total da linha ao valor total geral
        total += totalLinha;
    });

    // Atualiza o valor total da compra
    document.getElementById("totalPrice").textContent = "R$ " + total.toFixed(2);
}

// Chama a função para calcular o total quando a página carrega
calcularTotal();


const quantidades = document.querySelectorAll(".product-row input");
quantidades.forEach((quantidade) => {
    quantidade.addEventListener("change", calcularTotal);
});

