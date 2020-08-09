const title = document.querySelector(".js-title1");
const header = document.querySelector("header");

function movingTitle() {
    title.innerHTML = "Koki + Heejin's Profile";
}
function leavingTitle() {
    title.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<span>&nbsp;&nbsp;</span>Kokheejin's Profile";
}

header.addEventListener("mouseover",movingTitle);
header.addEventListener("mouseleave",leavingTitle);