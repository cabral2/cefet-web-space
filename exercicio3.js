// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let expandButtons = document.querySelectorAll(".botao-expandir-retrair");

expandButtons.forEach((button) => {
  button.addEventListener("click", (ev) => {
    const added = ev.currentTarget.parentElement.classList.toggle("expandido");
    if (added) ev.currentTarget.innerHTML = "-";
    else ev.currentTarget.innerHTML = "+";
  });
});
