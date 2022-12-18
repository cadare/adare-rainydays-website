const url = 'https://brbforum.com/wp-json/wc/store/products?consumer_key=ck_f594e7cc7bc4a0174b4687b924a966264f7bf578&consumer_secret=cs_b13b4fd6e8bc3e176bb2e74a3c4ded2f8e3c4fea'


const productContainer = document.querySelector('.productPage');
const productShow = document.querySelector('.product-item')

async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products)

    displayProducts(products)

}

getProducts(url)

function displayProducts(products) {
    const productContainer = document.querySelector('#productContainer')


    products.forEach(function (product) {
        productContainer.innerHTML += ` 
    <div class='product-fetch'>
    
    <div class="products"><h2>${product.name}</h2>
    <div class="product-image_fetch" style="background-image:url('${product.images[0].src }')"></div>

    
    </div>
    </div>`


    })
}
// var json = JSON.stringify(product)
// productShow.innerHTML = `  <div class="products"><h2>${json}</h2>`

// const productSingleItem = document.querySelector('.product-item-on-itemPage');

// console.log('hello2')

// productSingleItem.style.backgroundColor = 'red';