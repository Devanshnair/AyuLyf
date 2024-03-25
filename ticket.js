let nameEl = document.querySelector(".name")
let emailEl = document.querySelector(".email")
let phoneEl = document.querySelector(".phone")
let prefDateEl = document.querySelector(".prefDate")
let prefTimeEl = document.querySelector(".prefTime")

let me = JSON.parse(localStorage.getItem("user"))
console.log(me.fullName)

nameEl.textContent += me.fullName;
emailEl.textContent += me.email;
phoneEl.textContent += me.phone
prefDateEl.textContent += me.prefDate

// var selectedOption = prefTimeEl.options[selectElement.selectedIndex];

//   // Retrieve the value and text of the selected option
//   var selectedValue = selectedOption.value;
//   var selectedText = selectedOption.text;
prefTimeEl.textContent += me.prefTime