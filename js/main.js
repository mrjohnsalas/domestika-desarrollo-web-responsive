let navUl = document.querySelector("header nav ul");
let check = document.querySelector("#menu-check");

navUl.addEventListener("click", ()=> {
    check.checked = check.checked == true ? false : true;
});