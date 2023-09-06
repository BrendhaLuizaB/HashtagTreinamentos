import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utils";

export function renderizarCatalogo() {
  for (const product of catalogo) {
    const cardProduct = `<div class="group flex flex-col p-2 justify-between w-48 m-2 shadow-xl shadow-slate-400 rounded-lg" id="card-produto${product.id}">
    <img
      src=${product.imagem}
      alt="produto1"
      class="group-hover:scale-110 duration-300 my-3 rounded-lg"
    />
    <p class="text-sm">${product.marca}</p>
    <p class="text-sm">${product.nome}</p>
    <p class="text-sm">R$${product.preco}</p>
    <button id="adicionar-${product.id}" class="bg-slate-950 hover:bg-slate-700 text-slate-200"><i class="fa-solid fa-cart-plus"></i></button>
    </div>
    `;

    document.getElementById("produto-container").innerHTML += cardProduct;
  }
  for (const product of catalogo) {
    document
      .getElementById(`adicionar-${product.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(product.id));
  }
}
