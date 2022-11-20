import {
  products
} from "./products.js";



// Hamburger meny
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});


// Flipping words with color random
var keywords = ['adventurous.', 'fantastic.', 'incredible.'];
var count = 1;
setInterval(function () {
  $('span.keyword').fadeOut(400, function () {
    $(this).html(keywords[count]);
    count++;
    if (count == keywords.length) count = 0;

    var hue =
      'rgb(' +
      Math.floor(Math.random() * 255) +
      ',' +
      Math.floor(Math.random() * 255) +
      ',' +
      Math.floor(Math.random() * 255) +
      ')';

    $(this).fadeIn(400).css('color', hue);
  });
}, 1500);


// Making a cart for the website Rainydays that is functional

// getting the target element


let myElement = document.querySelectorAll('.product__price');



for (let i = 0; i < myElement.length; i++) {
  var btnAddCart = document.createElement("button");
  btnAddCart.className = 'addCart'
  btnAddCart.innerHTML = "Add";
  myElement[i].appendChild(btnAddCart)
  myElement[i].addEventListener('click', () => {
    cartNumbers(products[i])
    totalCost(products[i])
  })



  // .onclick = function () {
  //   location.href = "/bag.html";
  // };


}

function onloadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    document.querySelector('.cartCountNum span').textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem('cartNumbers');
  // console.log('The product in the cart is', product)
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1)
    document.querySelector('.cartCountNum span').textContent = productNumbers + 1;

  } else {
    localStorage.setItem('cartNumbers', 1)
    document.querySelector('.cartCountNum span').textContent = 1;
  }
  setItems(product)

}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInsideCart');
  cartItems = JSON.parse(cartItems)
  console.log('My cart Items are', cartItems)

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1
  } else {
    product.inCart = 1
    cartItems = {
      [product.tag]: product
    }
  }



  localStorage.setItem("productsInsideCart", JSON.stringify(cartItems))
}

//Function for addng total cost


function totalCost(product) {

  //console.log('The total sum is ', product.price)
  let cartCost = localStorage.getItem('totalCost')
  console.log('My cart cost is', cartCost)



  if (cartCost != null) {
    cartCost = parseInt(cartCost)
    localStorage.setItem('totalCost', cartCost + product.price)
  } else {

    localStorage.setItem('totalCost', product.price)

  }

}

function displayCard() {
  let cartItems = localStorage.getItem('productsInsideCart');
  cartItems = JSON.parse(cartItems)
  let productContainer = document.querySelector('.product-box')
  let cartCost = localStorage.getItem('totalCost')

  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
     
     <div class='samle'> 
      <div class='product-items'>
     
      <ion-icon name="close-circle"></ion-icon>
      <ion-icon name="arrow-dropleft-circle"></ion-icon>
     <img src="/images/${item.tag}.jpg">
     <span>${item.name}</span>
  
     </div>
     <div class='price'>$${item.price},00$</div>
     <div class='quantity'>
     <ion-icon name="add-circle"></ion-icon>
     <span>${item.inCart}</span>
      <ion-icon name="remove-circle"></ion-icon>
     </div>

     <div class='totale'>$${item.inCart * item.price},00</div>

   
     </div>
 
  
      `
    })
    productContainer.innerHTML += `  
  <div class='cartTotalContainer'>
  <h4 class='cartTotalTitle'>Cart Total  </h4>
  <h4 class='cartTotal'>
   $${cartCost}
  </h4>
  </div>
    `;


  }

}


// totalCost()
onloadCartNumbers()
displayCard()


const form = document.querySelector('.form-connect')
var firstName = document.getElementById('name')


const email = document.querySelector('.email');
const msg = document.querySelector('.msg');
const errorNodes = document.querySelectorAll('.error')
const success = document.getElementById('success');

// form.addEventListener('submit', (e) => {
//   e.preventDefault()

//   validateForm()

// });

function validateForm() {

  clearMassage()
  let errorFlag = false;

  if (firstName.value.length < 1) {

    errorNodes[0].innerText = 'Name cannot be blank';
    firstName.classList.add('error-border')
    errorFlag = true

  }
  if (!emailIsValid(email.value)) {
    errorNodes[1].innerText = 'Invalid email';
    email.classList.add('error-border')
    errorFlag = true
  }
  if (msg.value.length < 1) {
    errorNodes[2].innerText = 'Kindly enter your massage';
    msg.classList.add('error-border')
    errorFlag = true
  }

  if (!errorFlag) {
    success.innerHTML = 'Success!'
    setTimeout(function () {
      refreshPage()
    }, 1000);

  }

}

/// clear error and success
function clearMassage() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";

  }

  success.innerText = ''
  firstName.classList.remove('error-border');
  email.classList.remove('error-border');
  msg.classList.remove('error-border')


}
//is emailvalid
function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email)

}

function refreshPage() {
  console.log("Refreshing page");
  location.reload ? location.reload() : location = location;
}



const url = 'https://brbforum.com/wp-json/wc/store/products?consumer_key=ck_f594e7cc7bc4a0174b4687b924a966264f7bf578&consumer_secret=cs_b13b4fd6e8bc3e176bb2e74a3c4ded2f8e3c4fea'


const productContainer = document.querySelector('.productPage');
const productShow = document.querySelector('.product-item')

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products[1].prices)

  products.forEach(function (product) {
    productContainer.innerHTML += ` 
    <div class='product-fetch'>
    
    <div class="products"><h2>${product.name}</h2>
    <div class="product-image_fetch" style="background-image:url('${product.images[0].src }')"></div>

    
    </div>
    </div>`
  })
}

getProducts(url)
console.l
var json = JSON.stringify(products[1].tag)
productShow.innerHTML = `  <div class="products"><h2>${json}</h2>`