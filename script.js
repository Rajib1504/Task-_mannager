let click = "";
document.getElementById("taskCreator").addEventListener("click", function () {
  click = !click;
  if (click == false) {
    document.getElementById("form").classList.add("hidden");
  } else {
    document.getElementById("form").classList.remove("hidden");
  }
});
