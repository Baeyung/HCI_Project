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

function add_to_cart()
{
  var item_id = window.sessionStorage.getItem("curr_item");
  var quantity = document.getElementById("demoInput").value;
  console.log(quantity);

  var cart_string = window.sessionStorage.getItem("cart")
  if (cart_string == null){
    cart_string = "[]";
  }
  var prev_cart = JSON.parse(cart_string);
  console.log(prev_cart);
  prev_cart.push({"ID":item_id, "Quantity":quantity});
  window.sessionStorage.setItem("cart", JSON.stringify(prev_cart));
  window.location.href="main.html"
}

function fill_cart()
{
  var cart_string = window.sessionStorage.getItem("cart")
  if (cart_string == null){
    cart_string = "[]";
  }
  var prev_cart = JSON.parse(cart_string);

  const fragment = document.createDocumentFragment();
  var total_amount = 0;
  var total_items = 0;
  for (var i in prev_cart) {
    const li = document.createElement("li");
    li.innerHTML = '<div class="product"> <img src=' + foodlist[parseInt(prev_cart[i]["ID"])]["Pic"] + ' width="80", height="80">'+
    '<p id="item-desc">'+ foodlist[parseInt(prev_cart[i]["ID"])]["Name"]+' , half</p> <p id="single-price"> Price = '+ foodlist[parseInt(prev_cart[i]["ID"])]["Price"] + '</p>\
    <button id="minus" onclick="decrement()">-</button>\
    <input id="demoInput" type="number" min="1" max="100", value='+prev_cart[i]["Quantity"]+'>\
    <button id="plus"onclick="increment()">+</button>\
    <p id="all-price">Total =' + (parseInt(foodlist[parseInt(prev_cart[i]["ID"])]["Price"]) * parseInt(prev_cart[i]["Quantity"])).toString() +'</p></div>'
    fragment.appendChild(li);

    total_amount += (parseInt(foodlist[parseInt(prev_cart[i]["ID"])]["Price"]) * parseInt(prev_cart[i]["Quantity"]));
    total_items+=1;

  }
  const container = document.getElementById("overview-list-item");
  document.getElementById("total-item-cost").innerHTML=total_amount.toString();
  document.getElementById("total-item-grand-cost").innerHTML=total_amount.toString();
  document.getElementById("no-of-products").innerHTML= total_items.toString() + ' items in cart'; 
  container.innerHTML = "";
  container.appendChild(fragment);
}

function make_order()
{
  window.sessionStorage.setItem("cart","[]");
  window.location.href="main.html"
}

function set_item_page()
{
  var item_id=window.sessionStorage.getItem("curr_item");
  document.getElementById("food-name").innerHTML=foodlist[parseInt(item_id)]["Name"];
  document.getElementById("food-desc").innerHTML=foodlist[parseInt(item_id)]["Description"];

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

function gotoitem(img_id){
  var x = img_id.id;
  window.sessionStorage.setItem("curr_item",x);
  window.location.href = "item.html"
}