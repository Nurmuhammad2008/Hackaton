const openPopUp = document.getElementById("open_pop_up");
const closePopUp = document.getElementById("pop_up_close");
const popUp = document.getElementById("pop_up");

openPopUp.addEventListener("click", function (e) {
  e.preventDefault();
  popUp.classList.add("active");
});
closePopUp.addEventListener("click", () => {
  popUp.classList.remove("active");
});

// document.getElementById("check").onclick = function () {
//   let login = document.getElementById("login");
//   let password = document.getElementById("login");
// };



const typed = new Typed(".multiple-text" , {
  strings: ["Узбекистан !"],
  typeSpeed: 100,
  backSpeed:100,
  backDelay:100,
  loop:true 

})