var foodlist = [

  {
    "Name": "Eggs And Salad",
    "Description": "A perfect combination of Boiled eggs with salad",
    "Pic": "pexels-photo-1410235.jpeg",
    "Price": "150"
  },

  {
    "Name": "Baked Fish",
    "Description": "A perfect Combination of fish and spices Baked at optimum temprature",
    "Pic": "pexels-photo-416471.jpeg",
    "Price": "450"
  },

  {
    "Name": "Pizza",
    "Description": "A perfect combination of pepperoni and spices combined to make pizza",
    "Pic": "pizza.jpg",
    "Price": "350"
  },

  {
    "Name": "Beef Burger",
    "Description": "Perfectly grilled 250g patty of Beef combined to make a delecious burger",
    "Pic": "beef-burger.jpg",
    "Price": "400"
  },

  {
    "Name": "Haleem",
    "Description": "Traditional pakistani dish served with fried Onions and spices",
    "Pic": "Haleem(2).jpg",
    "Price": "120"
  },

  {
    "Name": "Tikka",
    "Description": "Chicken breast/leg BBQed to your liking",
    "Pic": "download.jpg",
    "Price": "180"
  },

  {
    "Name": "Fruit Salad",
    "Description": "Cucumber Tomatoes and Onions served with Fresh Fruit",
    "Pic": "pexels-photo-936611.jpeg",
    "Price": "200"
  },

  {
    "Name": "EggNbread",
    "Description": "Soft boiled Eggs served with toasted bread and a portion of guacamoli",
    "Pic": "pexels-photo-566566.jpeg",
    "Price": "150"
  },
];

function set_item_page() {
  var item_id = window.sessionStorage.getItem("curr_item");
  document.getElementById("food-name").innerHTML = foodlist[parseInt(item_id)]["Name"];
  document.getElementById("food-desc").innerHTML = foodlist[parseInt(item_id)]["Description"];

}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function increment() {
  document.getElementById('demoInput').stepUp();
}

function decrement() {
  document.getElementById('demoInput').stepDown();
}

function gotoitem(img_id) {
  var x = img_id.id;
  window.sessionStorage.setItem("curr_item", x);
  window.location.href = "item.html"
}