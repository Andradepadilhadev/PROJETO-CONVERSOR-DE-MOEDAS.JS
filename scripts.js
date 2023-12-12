// Seleciona o botão de conversão e o menu de seleção de moedas
const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

// Função para converter valores de moedas
function convertValues() {
  // Obtém o valor inserido pelo usuário
  const inputCurrencyValue = parseFloat(
    document.querySelector(".input-currency").value
  );

  // Seleciona os elementos para exibir os valores convertidos e a serem convertidos
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueConverted = document.querySelector(".currency-value");

  // Define os valores das moedas em relação ao Real
  const dolarToday = 5.2;
  const euroToday = 6.2;
  const libraToday = 6.2;
  const bitcoinToday = 200000;

  // Verifica a moeda selecionada e converte o valor
  if (currencySelect.value === "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  } else if (currencySelect.value === "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  } else if (currencySelect.value === "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  } else if (currencySelect.value === "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-BT", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitcoinToday);
  }

  // Exibe o valor a ser convertido
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

// Função para alterar a moeda selecionada
function changeCurrency() {
  // Seleciona os elementos relacionados à moeda e à imagem
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  // Verifica a moeda selecionada e atualiza o nome e a imagem
  if (currencySelect.value === "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImage.src = "./assets/dolar-estados-unidos.png";
  } else if (currencySelect.value === "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/logo-euro.png";
  } else if (currencySelect.value === "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/libra.png";
  } else if (currencySelect.value === "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./assets/bitcoin.png";
  }

  // Chama a função para converter os valores
  convertValues();
}

// Adiciona um ouvinte de eventos para mudança na seleção de moedas
currencySelect.addEventListener("change", changeCurrency);

// Adiciona um ouvinte de eventos para o botão de conversão
convertButton.addEventListener("click", convertValues);
