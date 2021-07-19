function calculateTip() {
  var bill = document.getElementById("bill").value;
  var tip = document.getElementById("tip").value;
  var numOfPeople = document.getElementById("numOfPeople").value;

  //calculate tip and round two decimal places
  var total = (bill * tip) / numOfPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  document.getElementById("tipAmtResults").style.display = "block";
  document.getElementById("totalAmt").innerHTML = total;

}