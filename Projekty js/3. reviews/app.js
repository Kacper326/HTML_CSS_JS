const reviews = [{
    id: 1,
    name: "Kacper Zawalski",
    img:
        "https://www.dolina-noteci.pl/data/include/cms/Blog-DN/co_powinien_jesc_kot.jpg",
    text: "lorem lorem lorem lorem lorem lorem lorem",
},
{
    id: 2,
    name: "Ania Kot",
    img:
        "https://ocdn.eu/pulscms-transforms/1/snhktkpTURBXy80OGE4OGZlZDZkY2VmZjViNTU5ZjA5YzFhYTUyMzMwMy5qcGeRkwXNBLDNAnM",
    text: "lorem lorem lorem lorem lorem lorem lorem",
},
{
    id: 3,
    name: "Bartek Dzięcioł",
    img:
        "https://artnapi.pl/pol_pl_Kot-w-Miami-Malowanie-po-numerach-1242_1.jpg",
    text: "lorem lorem lorem lorem lorem lorem lorem",
}, 
{
    id: 4,
    name: "Kamil Glik",
    img:
        "https://www.colorland.pl/sites/default/files/article-image/kot1_1.jpg",
    text: "lorem lorem lorem lorem lorem lorem lorem",
}
];

//select items 
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item 
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
})

// show person based on item 

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

// show previous person
prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})


// get random Number 

function getRandomNumber() {
    return Math.floor(Math.random() * reviews.length)
}

// show random person 
randomBtn.addEventListener('click', function() {
    let random = getRandomNumber();
    do {
        random = getRandomNumber();
    } while (currentItem == random)
    currentItem = random;
    showPerson(currentItem);
})