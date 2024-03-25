<<<<<<< HEAD
let fullNameEl = document.getElementById("fullName");
let emailEl = document.getElementById("email");
let phoneEl = document.getElementById("phone");
let preferredDateEl = document.getElementById("preferredDate");
let preferredTimeEl = document.getElementById("preferredTime");
let reasonEl = document.getElementById("reason");
let medicalHistoryEl = document.getElementById("medicalHistory");
let submitEl = document.getElementById("form-submit");


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push,get} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const chatSettings = {
    databaseURL:"https://health-fitness-ec356-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(chatSettings);
const database = getDatabase(app);
const userDB = ref(database,"users");


submitEl.addEventListener("click", function(){
    let user = {
        fullName : fullNameEl.value,
        email : emailEl.value,
        phone : phoneEl.value,
        prefDate : preferredDateEl.value,
        prefTime : preferredTimeEl.value,
        reason : reasonEl.value,
        history : medicalHistoryEl.value,
    }
    console.log(user);


    fullNameEl.value = "";
    emailEl.value="";
    phoneEl.value="";
    preferredDateEl.value="";
    preferredTimeEl.value="";
    reasonEl.value="";
    medicalHistoryEl.value="";


    localStorage.setItem("user",JSON.stringify(user))
    // console.log(user);
    push(userDB,user);
    window.location.href = "./ticket.html"


})
=======
let fullNameEl = document.getElementById("fullName");
let emailEl = document.getElementById("email");
let phoneEl = document.getElementById("phone");
let preferredDateEl = document.getElementById("preferredDate");
let preferredTimeEl = document.getElementById("preferredTime");
let reasonEl = document.getElementById("reason");
let medicalHistoryEl = document.getElementById("medicalHistory");
let submitEl = document.getElementById("form-submit");


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push,get} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const chatSettings = {
    databaseURL:"https://health-fitness-ec356-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(chatSettings);
const database = getDatabase(app);
const userDB = ref(database,"users");


submitEl.addEventListener("click", function(){
    let user = {
        fullName : fullNameEl.value,
        email : emailEl.value,
        phone : phoneEl.value,
        prefDate : preferredDateEl.value,
        prefTime : preferredTimeEl.value,
        reason : reasonEl.value,
        history : medicalHistoryEl.value,
    }
    console.log(user);


    fullNameEl.value = "";
    emailEl.value="";
    phoneEl.value="";
    preferredDateEl.value="";
    preferredTimeEl.value="";
    reasonEl.value="";
    medicalHistoryEl.value="";


    localStorage.setItem("user",JSON.stringify(user))
    // console.log(user);
    push(userDB,user);
    window.location.href = "./ticket.html"


})
>>>>>>> ed6f4688b1b8b1b17be9590cf6d4b3c617c05b27
