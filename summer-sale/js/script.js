let totalPrice = 0;
let discount = 0;
let totalPriceWithDiscount = 0;
let hasDiscount = false;
let count = 1;

document.getElementById("total-price").innerHTML = 0.0;
document.getElementById("discount").innerHTML = 0.0;
document.getElementById("total-after-discount").innerHTML = 0.0;
let coupon = "sell200";
const inputField = document.getElementById("coupon-input");

// enable apply button based on coupon code is correct or not and total amount > 200
inputField.addEventListener("keyup", function (event) {
  if (event.target.value.toLowerCase() === coupon) {
    document.getElementById("coupon-btn").removeAttribute("disabled");
  } else {
    document.getElementById("coupon-btn").setAttribute("disabled", true);
  }
});

function couponConfirmed() {
  document.getElementById("coupon-status").innerHTML =
    "<b>SELL200</b> coupon applied !!!";
  hasDiscount = true;
  if (hasDiscount && totalPrice >= 200) {
    discount = (totalPrice * 0.2).toFixed(2);
    document.getElementById("discount").innerHTML = discount;
  }
  totalPriceWithDiscount = (totalPrice - discount).toFixed(2);
  document.getElementById("total-after-discount").innerHTML =
    totalPriceWithDiscount;
}

function getPriceAfterCoupon() {
  totalPrice - totalPrice * 0.2;
}

function addItemToCart(itemID, itemPriceID) {
  const priceOfItem = parseFloat(
    document.getElementById(itemPriceID).innerHTML
  );
  totalPrice += priceOfItem;
  document.getElementById("total-price").innerHTML = totalPrice;
  // enable purchase button based on amount is more than 0 tk
  if (parseFloat(document.getElementById("total-price").innerHTML) > 0) {
    document.getElementById("purchase-btn").removeAttribute("disabled");
  } else {
    document.getElementById("purchase-btn").setAttribute("disabled", true);
  }
  if (hasDiscount && totalPrice >= 200) {
    discount = (totalPrice * 0.2).toFixed(2);
    document.getElementById("discount").innerHTML = discount;
  }
  totalPriceWithDiscount = (totalPrice - discount).toFixed(2);
  document.getElementById("total-after-discount").innerHTML =
    totalPriceWithDiscount;
  const newCartItem = document.getElementById(itemID).innerText;
  document
    .getElementById("cart-section-products-list")
    .appendChild(document.createElement("li")).innerText = `${
    count++ + ". " + newCartItem
  }`;
}

// copy coupon code on btn click
function copyToClipboard() {
  navigator.clipboard.writeText("SELL200");
  document
    .getElementById("coupon-copy")
    .setAttribute("title", "Copied the Coupon: SELL200");
}

function goHome() {
  window.location.href = "index.html";
}
