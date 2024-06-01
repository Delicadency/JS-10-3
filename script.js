/* Korzystając z Frankfurter API, stwórz przycisk o id=”getCurrencies”, który wywołuje funkcję getCurrencyList, która wykona fetch wywołującą zapytanie pod adres https://api.frankfurter.app/latest. 

Zwrócony zostanie obiekt z listą dostępnych walut i ich wartości względem EUR. Twoim zadaniem jest stworzyć w JS element <select> i włożyć do niego <option>, które będą miały w sobie tekst odpowiadający kodom walut, a oprócz tego atrybut value ustawiony na taką samą wartość.
Stworzony <select> dodaj do body. */

const createButton = () => {
  const button = document.createElement("button");
  button.id = "getCurrencies";
  button.innerText = "Pobierz waluty";
  document.body.appendChild(button);
};
const getCurrencyList = createButton();
getCurrencyList.addEventListener("click", () => {
  const apiURL = "https://api.frankfurter.app/latest";
  fetch(apiURL)
    .then((response) => response.json)
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});
