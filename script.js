let cid = [
  ["UN BAN", 0.5],
  ["CINCI BANI", 2.05],
  ["ZECE BANI", 3.6],
  ["CINCI ZECI BANI", 20.5],
  ["UN LEU", 70],
  ["CINCI LEI", 100],
  ["ZECE LEI", 300],
  ["CINCI ZECI LEI", 1250],
  ["O SUTĂ LEI", 1200],
];

//Write the function to calculate the change owed to the customer

function calculateChange() {
  //Select item price and cash provided by customer
  let price = parseFloat(document.getElementById("item-price").value);
  let cash = parseFloat(document.getElementById("cash").value);

  //Calculate change owed to the customer
  let changeAmount = cash - price;

  //Assign solution for each case according to money available in drawer (SWITCH STATEMENT???)

  //Update display message according to change
  let changeDisplay = document.getElementById("change");
  if (changeAmount >= 0) {
    changeDisplay.textContent = changeAmount.toFixed(2);
  } else if (cash === 0) {
    changeDisplay.textContent = "No cash provided.";
  } else {
    changeDisplay.textContent =
      "Insufficient cash provided. Additional RON " +
      Math.abs(changeAmount).toFixed(2) +
      " needed.";
  }
}

//Declare references to input fields and button
const calculateButton = document.getElementById("calculate-button");
const cashInput = document.getElementById("cash");

//Add event listeners for click and enter key press
calculateButton.addEventListener("click", calculateChange);

cashInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    calculateChange();
  }
});
