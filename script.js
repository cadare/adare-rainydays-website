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


var myElement = document.querySelectorAll('.product__price');
console.log(myElement)

for (let i = 0; i < myElement.length; i++) {
  var btnAddCart = document.createElement("button");
  btnAddCart.className = 'addCart'
  btnAddCart.innerHTML = "Add";

  myElement[i].appendChild(btnAddCart).onclick = function () {
    location.href = "/bag.html";
  };
}


// var button = document.createElement("BUTTON")

// button.innerText = "Button"

// myElement.appendChild(button)


// var heart = document.getElementById('heart');

// heart.addEventListener('click', function () {
//   heart.style.color = '#66c144';
// });

// var addItemId = 0;

// function addToCart(item) {
//   addItemId += 1;
//   var selectedItem = document.createElement('div')
//   selectedItem.classList.add('cartImg')
//   selectedItem.setAttribute('id', addItemId);
//   var cartItems = document.getElementById('')

// }