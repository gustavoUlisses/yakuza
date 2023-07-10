const calculateButton = document.getElementById('calculate');
const resultElement = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const percentageInput = document.getElementById('percentage');
  const numberInput = document.getElementById('number');
  
  const percentage = parseFloat(percentageInput.value);
  const number = parseFloat(numberInput.value);
  
  if (isNaN(percentage) || isNaN(number)) {
    resultElement.textContent = 'Digite um valor válido.';
  } else {
    const result = (percentage / 100) * number;
    resultElement.textContent = `Resultado: ${result}`;
  }
});
