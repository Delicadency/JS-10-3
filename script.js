/* Korzystając z Frankfurter API, stwórz przycisk o id=”getCurrencies”, który wywołuje funkcję getCurrencyList, która wykona fetch wywołującą zapytanie pod adres https://api.frankfurter.app/latest. 

Zwrócony zostanie obiekt z listą dostępnych walut i ich wartości względem EUR. Twoim zadaniem jest stworzyć w JS element <select> i włożyć do niego <option>, które będą miały w sobie tekst odpowiadający kodom walut, a oprócz tego atrybut value ustawiony na taką samą wartość.
Stworzony <select> dodaj do body. */
const createContainer = () => {
  const div = document.createElement("div");
  div.classList.add("container");
  div.classList.add("flex-center");
  document.body.appendChild(div);
  return div;
};
const container = createContainer();

const createButton = () => {
  const button = document.createElement("button");
  button.id = "getCurrencies";
  button.innerText = "Pobierz waluty";
  button.classList.add("margin");
  button.classList.add("padding");
  container.appendChild(button);
  return button;
};
const getCurrencyList = createButton();
getCurrencyList.addEventListener("click", () => {
  const apiURL = "https://api.frankfurter.app/latest";
  getCurrencyList.disabled = true;
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const rates = data?.rates;
      if (rates) {
        const label = document.createElement("label");
        label.setAttribute("for", "currency-select");
        label.innerText = "Wybierz walutę";
        label.classList.add("margin");
        container.appendChild(label);
        const select = document.createElement("select");
        select.id = "currency-select";
        for (const [currency, rate] of Object.entries(rates)) {
          const option = document.createElement("option");
          option.value = currency;
          option.innerText = currency;
          option.classList.add("padding");
          select.appendChild(option);
        }
        container.appendChild(select);

        const rateInfo = document.createElement("p");
        rateInfo.id = "rate-info";
        container.appendChild(rateInfo);

        select.addEventListener("change", (event) => {
          const selectedCurrency = event.target.value;
          const selectedRate = rates[selectedCurrency];
          rateInfo.innerText = `1 EUR kosztuje ${selectedRate} ${selectedCurrency}.`;
        });
      } else {
      }
    })
    .catch((err) => console.error(err));
});
