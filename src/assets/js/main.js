var $grid = $(".collection-list").isotope({
  // options
});
// filter items on button click
$(".filter-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  resetFilterBtns();
  $(this).addClass("active-filter-btn");
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $(".filter-button-group").find("button");

function resetFilterBtns() {
  filterBtns.each(function () {
    $(this).removeClass("active-filter-btn");
  });
}

// Cart functionality

let cart = document.querySelectorAll(".addToShoppingCart");
console.log(cart);

let products = [
  {
    name: "gray shirt",
    price: 36.5,
    inCart: 0,
  },

  {
    name: "red shirt",
    price: 33.5,
    inCart: 0,
  },

  {
    name: "blue shirt",
    price: 37.5,
    inCart: 0,
  },

  {
    name: "black shirt",
    price: 45.5,
    inCart: 0,
  },
];

for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}
function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".countItem").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".countItem").textContent = 1;
  }
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function onLoadCartNumbers(){
  let productNumbers=localStorage.getItem("cartNumbers");
  document.querySelector(".countItem").textContent=productNumbers;
}

onLoadCartNumbers()
