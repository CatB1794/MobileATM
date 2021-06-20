const currencyConverterEndPoint = "https://api.frankfurter.app";

export const fetchCurrencyLatest = () => {
  return fetch(`${currencyConverterEndPoint}/latest`)
    .then((response) => response.json())
    .then((data) => Object.keys(data.rates));
};

export const convertCurrencyAPI = (amount, baseCurrency, quoteCurrency) => {
  return fetch(
    `${currencyConverterEndPoint}/latest?amount=${amount}&from=${baseCurrency}&to=${quoteCurrency}`
  ).then((response) => response.json());
};
