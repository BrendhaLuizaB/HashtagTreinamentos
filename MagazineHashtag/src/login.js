export function abrirLogin() {
  document.getElementById("login").classList.add("top-[200px]");
  document.getElementById("login").classList.remove("top-[-400px]");
}

export function fecharLogin() {
   document.getElementById("login").classList.remove("top-[200px]");
  document.getElementById("login").classList.add("top-[-400px]");
}

export function inicializarLogin() {
  const botaoAbrirLogin = document.getElementById("abrir-login");

  // botaoAbrirLogin.addEventListener("click", fecharLogin);
  botaoAbrirLogin.addEventListener("click", abrirLogin, fecharLogin);
}