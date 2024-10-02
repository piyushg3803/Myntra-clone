let btn = document.getElementById("menu")
let menu = document.getElementById("sidebar")

let searchBtn = document.getElementById("search")
let search = document.getElementById("search-pop")

function menuToggle(){
    menu.classList.toggle('active')
    console.log("clicked");
}

function searchToggle(){
    search.classList.add('active-search')
    console.log("clicked");
}

function closeSearch(){
    search.classList.remove("active-search")
}