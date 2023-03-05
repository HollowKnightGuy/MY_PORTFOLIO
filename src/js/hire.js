const input1 = document.getElementById("nameinput");
const input2 = document.getElementById("phoneinput");
const input3 = document.getElementById("emailinput");
const input4 = document.getElementById("messageinput");

input1.addEventListener("blur", function () {
  input1.previousElementSibling.style.color = "var(--text3-color)";
});

input2.addEventListener("blur", function () {
  input2.previousElementSibling.style.color = "var(--text3-color)";
});

input3.addEventListener("blur", function () {
  input3.previousElementSibling.style.color = "var(--text3-color)";
});

input4.addEventListener("blur", function () {
  input4.previousElementSibling.style.color = "var(--text3-color)";
});

AOS.init();
