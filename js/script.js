var learnMoreJennifer = document.querySelector(".pets-jennifer");
var popupJennifer = document.querySelector(".popup-pets-jennifer");
var close = document.querySelector(".popup-close");

var learnMoreCharly = document.querySelector(".pets-charly");
var popupCharly = document.querySelector(".popup-pets-charly");


learnMoreJennifer.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupJennifer.classList.add("popup-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupCharly.classList.remove("popup-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupJennifer.classList.remove("popup-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupCharly.classList.remove("popup-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupJennifer.classList.contains("popup-show")) {
      popupJennifer.classList.remove("popup-show");
    }
  }
});

learnMoreCharly.addEventListener("click", function(evt){
  evt.preventDefault();
  popupCharly.classList.add("popup-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupCharly.classList.contains("popup-show")) {
      popupCharly.classList.remove("popup-show");
    }
  }
});
