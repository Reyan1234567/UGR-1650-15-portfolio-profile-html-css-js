var ham = document.querySelector("#hamburger");
var menu = document.querySelector("#main-menu");
var img=document.querySelector("#logo")
var ex=document.querySelector("#close")

ham.addEventListener("click", () => {
    menu.style.display="flex"
    ham.style.display="none"
    ex.style.display="inline"
});

ex.addEventListener("click", () => {
    menu.style.display="none"
    ham.style.display="inline"
    ex.style.display="none"
});
