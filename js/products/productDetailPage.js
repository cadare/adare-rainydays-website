const detailContainer = document.querySelector(".productPage-singleItem");
console.log('hellooooo')
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");






const url = "https://brbforum.com/wp-json/wp/v2/posts/" + id + "?consumer_key=ck_f594e7cc7bc4a0174b4687b924a966264f7bf578&consumer_secret=cs_b13b4fd6e8bc3e176bb2e74a3c4ded2f8e3c4fea";

console.log(url)

async function fetchGame() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);

    } catch (error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }

}

fetchGame();





function createHtml(details) {
    detailContainer.innerHTML = `<h1>${details.title.rendered}</h1>
                               <h6>${details.content.rendered}</h6>
                             `;
}