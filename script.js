let btnBack = document.querySelector(".back");
let btnNext = document.querySelector(".next");

let list = document.querySelector(".container");

btnNext.onclick = () => moneItemOnClick("next");
btnBack.onclick = () => moneItemOnClick("back");

function moneItemOnClick(type) {
  let listItem = document.querySelectorAll(".list-item");

  if (type === "next") {
    list.appendChild(listItem[0]);
  } else {
    list.prepend(listItem[listItem.length - 1]);
  }
}