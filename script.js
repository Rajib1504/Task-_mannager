let color = "#6F7131";
let click = "";
document.getElementById("taskCreator").addEventListener("click", function () {
  click = !click;
  if (click == false) {
    document.getElementById("form").classList.add("hidden");
  } else {
    document.getElementById("form").classList.remove("hidden");
  }
});
document.getElementById("colorPalet").addEventListener("click", (event) => {
  event.target.classList.add("border-red-500", "border-2");
  const newColor = event.target.attributes.value.value;
  color = newColor;
  console.log(color);
});
