const convertButton = document.querySelector(".convert-button")

function convertValues(){
   const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueConvert = document.querySelector(".currency-value")

   const dolarToday = 5.2

   const convertedValue = inputCurrencyValue / dolarToday

   currencyValueToConvert.innerHTML = inputCurrencyValue

   console.log(convertedValue)
}

convertButton.addEventListener("click", convertValues)
