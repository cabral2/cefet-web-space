// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
let calculateButton = document.querySelector("#calcular");

calculateButton.addEventListener("click", () => {
  let m1Element = document.querySelector("#massa1");
  let m2Element = document.querySelector("#massa2");
  let dElement = document.querySelector("#distancia");
  let gElement = document.querySelector("#constante");
  let resultElement = document.querySelector("#resultado");

  const m1 = m1Element && m1Element.value ? m1Element.value : 0;
  const m2 = m2Element && m2Element.value ? m2Element.value : 0;
  const d = dElement && dElement.value ? dElement.value : 1;
  const g = gElement && gElement.value ? gElement.value : 0;

  resultElement.value = (g * m1 * m2) / d ** 2;
});
