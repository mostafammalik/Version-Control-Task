var minu = document.getElementById("menu");
var navbar = document.getElementById("navbar");
// console.log(document.title);
if (document.title == "Home") {
  minu.style.display = "none";
  navbar.style.paddingInline = "50px";
  // navbar.style.marginInline="50px"
} else minu.style.display = "block";
// minu.style.opacity = "1";
var dropmenu = document.getElementById("dropdown-menu");
minu.onmouseover = function () {
  dropmenu.style.display = "block";
};
minu.onmouseleave = function () {
  dropmenu.style.display = "none";
};
//////////////////////
//home
var muma = document.getElementById("mumia");
muma.onclick = function () {
  window.location = "../HTML/Home.html";
};
///////////////////////
//about
var about = document.getElementById("About");
about.onclick = function () {
  window.location = "../HTML/About.html";
};
console.log("3333333333333333333");

///////////////////////
//cart
var cart = document.getElementById("cart-container");
cart.onclick = function () {
  // window.location = "../HTML/Cart.html";
  window.open("../HTML/Cart.html", "blank");
};
////////////////////////
//about
var mumaimg = document.getElementById("misonimg");
mumaimg.onmouseover = function () {
  mumaimg.style.transform = "scale(1.2)";
  mumaimg.style.transition = "all 1.5s linear";
};
mumaimg.onmouseleave = function () {
  mumaimg.style.transform = "scale(1)";
  mumaimg.style.transition = "all 0.9s linear";
};
