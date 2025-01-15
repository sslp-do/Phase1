function changeColor() {
    document.getElementById("button").style.backgroundColor = "rgba(255, 255, 255, 0.351)";
    document.getElementById("button").style.border = "solid 2px rgba(122, 177, 102, 0.7)";
}

function resetColor() {
    document.getElementById("button").style.backgroundColor = "rgba(122, 177, 102, 0.7)";
}

const images = ["../../images/hommos.png",
    "../../images/chicken.png",
    "../../images/curry chicken.png",
    "../../images/egg plant.png",];
const titles = [
    "Herb Hummus with Nuts",
    "Roasted Chicken",
    "Curry Chicken",
    "Eggplant with Vegetables"
];
const texts = [
    "Indulge in the creamy, savory goodness of homemade hummus, perfectly complemented by a vibrant herb pesto drizzle. This dish is artfully garnished with cherry tomatoes, crunchy nuts, pomegranate seeds, and delicate edible flowers, making it a feast for both the eyes and the palate.Whether you're hosting a dinner party or looking to impress your guests with a gourmet appetizer, this unique twist on a classic is sure to delight.",
    "Elevate your dining experience with our Herb-Glazed Roasted Chicken with Veggie Medley! Savor the deliciousness of a perfectly roasted chicken thigh, infused with a delightful herb glaze, paired with a colorful medley of roasted vegetables including tender carrots and earthy mushrooms. This dish is not only a feast for your taste buds but also a visual delight, served on a pristine white plate to highlight the vibrant ingredients.",
    "Treat your taste buds to the exotic flavors of our Curry Chicken! This aromatic dish features tender chicken pieces simmered in a rich and flavorful curry sauce, infused with a blend of fragrant spices and herbs. Served with fluffy basmati rice and garnished with fresh cilantro, this hearty meal is sure to transport you to the vibrant streets of India. Whether you're a fan of bold and spicy dishes or simply looking to add some excitement to your dinner table, our Curry Chicken is the perfect choice for a memorable dining experience.",
    "Savor the rich and smoky flavors of our Eggplant with Vegetables! This hearty dish features tender roasted eggplant, sweet bell peppers, juicy cherry tomatoes, and aromatic herbs, all cooked to perfection in a savory tomato sauce. Whether you're a vegetarian looking for a satisfying meal or a meat lover seeking a flavorful side dish, this Eggplant with Vegetables is sure to please. Treat yourself to a taste of the Mediterranean with this delicious and nutritious dish!"

]
let currentIndex = 0;

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    const titleElement = document.getElementById('title');
    titleElement.textContent = titles[currentIndex];
    const textElement = document.getElementById('text');
    textElement.textContent = texts[currentIndex];
    const imgElement = document.getElementById('image');

    imgElement.src = images[currentIndex];
}, 10000);

function linkText() {
    document.getElementById("title").style.color = "rgba(122, 177, 102, 0.7)";
}

function normalText() {
    document.getElementById("title").style.color = "black";
}
/////////////neeeewwwww

function ingredients() {

    const persons = document.getElementById("persons").value;
    if (persons < 1) {
        alert("Please enter a valid number of persons.");
    } else {
        const ingredients = document.getElementsByName("ingredients");
        for (let i = 0; i < ingredients.length; i++) {
            const ingredient = ingredients[i].innerHTML || 0;
            ingredients[i].innerHTML = ingredient * (persons / 2);
        }
        alert("The ingredients have been adjusted for " + persons + " persons.");
    }
}
var fav = false
var fav_list = [];
var chosen_res;

function store_res() {
    chosen_res = document.getElementById("title").textContent;
    console.log(chosen_res);
}

function click_fav_button() {
    document.getElementById("fav").style.backgroundColor = "rgba(101, 252, 0, 0.377)";
    document.getElementById("fav").innerHTML = " <img src='/images/done.svg'; height=20px >  Added!"
    fav = true
    fav_list.push(chosen_res);
}
function reset_fav_button() {

    document.getElementById("fav").style.backgroundColor = "rgba(122, 177, 102, 0.7)";
    document.getElementById("fav").innerHTML = "<img src='/images/add_icon.svg' alt='add' height=15px>Favourite";
    fav = false
    fav_list.pop(chosen_res);
}
function change_fav_button() {
    if (fav) {
        reset_fav_button();
    } else {
        click_fav_button();
    }
}

function show_fav() {

    let index = 0;
    if (fav_list.length == index){}
    else {
        if (fav_list.length == 0) {
            alert("You have no favourite recipes yet.")
        } else {
            document.getElementById("cardTitle").innerHTML= fav_list[index];
        }
    }
}