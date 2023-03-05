const input = document.querySelector("input");
const button = document.querySelector("button");

const place = document.querySelector("#place");
const degrees = document.querySelector("#degrees");
const img = document.querySelector(".img");
const wind = document.querySelector("#wind");
const content = document.querySelector(".content")

button.addEventListener('click', () =>{
    if(!input.value)return;

    getDataApi();
})

