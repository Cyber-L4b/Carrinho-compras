let totalCarrinho = 0;
limpar();
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").textContent = "R$ 0,00";

function adicionar() {
   // Recuperar valores do produto, quantidade e valor.
   let produto = document.getElementById("produto").value;
   let nomeProduto = produto.split("-")[0]
   let valorUnitario = produto.split("R$")[1]
   let quantidade = document.getElementById("quantidade").value;

   let armazem = [5, 5, 5];

   if (quantidade < armazem) {
      console.log(`Produto selecionado: ${nomeProduto} `)
      console.log(`Valor da unidade: ${valorUnitario}`)

      // Calcular subtotal dos produtos
      let preço = quantidade * valorUnitario
      console.log("_________________________________")
      console.log(`O valor do seu carrinho é: ${preço}`)

      // Adicionar compras ao carinho
      let carrinho = document.getElementById("lista-produtos");
      carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos" id="lista-produtos">
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preço} </span>
    </section>`;

      totalCarrinho = totalCarrinho + preço;

      campoTotal = document.getElementById("valor-total");
      campoTotal.textContent = `R$ ${totalCarrinho}`

      quantidade = document.getElementById("quantidade").value = 0;
   }else {
      alert("Não temos essa quantia em estoque")
   }



   // Atualizar valor total da compra
}

function limpar() {
   totalCarrinho = 0;
   document.getElementById("lista-produtos").innerHTML = "";
   document.getElementById("valor-total").textContent = "R$ 0,00";

}

