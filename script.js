// Hamburger meny
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

// Popup on homepage after 2 seconds

const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

window.onload = () => {
  setTimeout(() => {
    popup.style.display = 'block';

    // Add some time delay to show popup
  }, 1500);
};

close.addEventListener('click', () => {
  popup.style.display = 'none';
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
});

var heart = document.getElementById('heart');

heart.addEventListener('click', function () {
  heart.style.color = '#66c144';
});
