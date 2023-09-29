export function abrirLogin() {
  document.getElementById("login").classList.add("top-[150px]");
  document.getElementById("login").classList.remove("top-[-400px]");
  document.getElementById("bg-login").classList.remove("top-[-750px]");
  document.getElementById("bg-login").classList.add("top-[98px]");
}

export function fecharLogin() {
   document.getElementById("login").classList.remove("top-[150px]");
  document.getElementById("login").classList.add("top-[-400px]");
  document.getElementById("bg-login").classList.remove("top-[98px]");
  document.getElementById("bg-login").classList.add("top-[-750px]");
}

export function inicializarLogin() {
  const botaoAbrirLogin = document.getElementById("abrir-login");
  const botaoFecharLogin = document.getElementById("fechar-login");

  botaoFecharLogin.addEventListener("click", fecharLogin);
  botaoAbrirLogin.addEventListener("click", abrirLogin);
}