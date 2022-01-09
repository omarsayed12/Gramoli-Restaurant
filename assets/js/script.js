// define global variable
let navbar = document.getElementById('fixed-nav');
let header = document.getElementById('header');

// function to do sticky navbar
window.addEventListener("scroll", ()=> {
  setTimeout(() =>{
    if (window.scrollY >= 50) {
      navbar.classList.add("sticky")
    }else {
      navbar.classList.remove("sticky");
    }
  })
})

//function to do style for the header
window.addEventListener("scroll", () =>{
  setTimeout(()=> {
  window.scrollY >= 50
    ? (header.style.marginTop = "80px")
    : (header.style.marginTop = "0")
  })
});

// function date picker


let productInCart =JSON.parse(localStorage.getItem("shoppingCart"));
const parentElement = document.querySelector("#buyItems");
const cartSumPrice = document.querySelector("#sum-price");
const products = document.querySelectorAll(".mealz-content");

if(!productInCart) {
  productInCart = [];
}

const countTheSumPrice = function() {
  let sumPrice = 0;
  productInCart.forEach(product => {
    sumPrice += product.price
  });
  return sumPrice;
}


const updateShopingCartHTML = function() {
  localStorage.setItem("shoppingCart",JSON.stringify(productInCart));

  if(productInCart.length > 0) {
    let result = productInCart.map(product => {
      return `
      <li class="buyItem">
          <div>
            <h5> ${product.name}</h5>
            <h6>${product.price}$</h6>
            <div>
              <button class="button-minus btn link-light btn-info m-1 px-2 py-0" data-id='${product.id}'>-</button>
              <span class="countOfProduct">${product.count}</span>
              <button class="button-plus btn link-light btn-info px-2 py-0" data-id='${product.id}'>+</button>
            </div>
          </div>
           <img src="${product.image}" class="w-100 img-product rounded">
        </li>
      `
    });
    parentElement.innerHTML = result.join('');
    // document.querySelector(".checkout").classList.remove("hidden");
    // cartSumPrice.innerHTML = "$" + countTheSumPrice();

  } else {
    // document.querySelector(".checkout").classList.add("hidden");
    parentElement.innerHTML = '<h4 class="empty">shoping cart is impty</h4>';
    cartSumPrice.innerHTML = "";
  }
}
function updateProductsinCart(product) {
  for(let i = 0; i < productInCart.length; i++) {
    if(productInCart[i].id == product.id) {
      productInCart[i].count += 1;
      productInCart[i].price = productInCart[i].basePrice * productInCart[i].count;
      return;
    }
  }
  productInCart.push(product);
}
products.forEach(product => {
  product.addEventListener("click", (e) => {
    if(e.target.classList.contains('add-to-cart')) {
      const productID = e.target.dataset.productId;
      const productName = product.querySelector(".meal-name").innerHTML;
      console.log(productName);
      const productPrice = product.querySelector(".price-value").innerHTML;
       console.log(productPrice);
      const ProductImg = product.querySelector(".img-meal").src;
      console.log(ProductImg);

      let productToCart = {
        name: productName,
        image: ProductImg,
        id: productID,
        count: 1,
        price: +productPrice,
        basePrice : +productPrice
      }
      updateProductsinCart(productToCart);
      updateShopingCartHTML();
    }
  })
});

parentElement.addEventListener('click', (e) => {
  const isPlusButton = e.target.classList.contains('button-plus');
  const isMinusButton = e.target.classList.contains('button-minus');
  if(isPlusButton || isMinusButton) {
    for(let i = 0; i <productInCart.length; i++) {
      if(productInCart[i].id === e.target.dataset.id) {
        if(isPlusButton) {
          productInCart[i].count += 1;
        } else if(isMinusButton) {
          productInCart[i].count -= 1;
        }
        productInCart[i].price = productInCart[i].basePrice * productInCart[i].count;
      }
      if(productInCart[i].count <= 0) {
        productInCart.splice(i, 1);
      }
    }
    updateShopingCartHTML();
  }
})

updateShopingCartHTML();

let cart = document.querySelector('.cart-btn');
cart.addEventListener("click", () => {
  let disCart = document.querySelector('.cart');

  if (disCart.style.display === "block") {
    disCart.style.display = "none";
  } else {
   disCart.style.display = "block";
  }
})


