let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

toggle.ondblclick = () => {
  menu.classList.toggle("active");
};

$(function () {
  $(".menu").draggable();
});
