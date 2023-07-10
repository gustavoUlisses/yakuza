document.getElementById("calculate-btn").addEventListener("click", function () {
  var percentage = parseFloat(
    document.getElementById("percentage-input").value
  );
  var value = parseFloat(document.getElementById("value-input").value);

  if (!isNaN(percentage) && !isNaN(value)) {
    var profit = (percentage / 100) * value;
    var clientValue = value - profit;

    document.getElementById("profit-result").innerText =
      profit.toLocaleString();
    document.getElementById("client-result").innerText =
      clientValue.toLocaleString();
  }
});
