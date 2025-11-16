//*****************************************************************************
// Hidden field
//*****************************************************************************
const hiddenField = document.getElementById("hidden-field");
const referrerSelect = document.getElementById("referrer-select");
const clearForm = document.getElementById("clear-form");

referrerSelect.addEventListener("change", (event) => {
  if (event.target.value == "magic" || event.target.value == "other") {
    setShow();
  } else {
    setHidden();
  }
});
const setHidden = () => {
  hiddenField.className = "visually-hidden";
};
const setShow = () => {
  hiddenField.className = "";
};
//*****************************************************************************
// Footer
//*****************************************************************************
const yearDisplay = document.getElementById("year-display");
let currentYear = new Date().getFullYear();
yearDisplay.textContent = currentYear;