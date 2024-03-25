<<<<<<< HEAD
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
=======
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
>>>>>>> ed6f4688b1b8b1b17be9590cf6d4b3c617c05b27
prefTimeEl.textContent += me.prefTime