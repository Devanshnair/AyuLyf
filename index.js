import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth,GoogleAuthProvider,signInWithPopup,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCJEC5kmXdxmhDiIhi5cV3-MjaTI_JFsIM",
    authDomain: "health-fitness-ec356.firebaseapp.com",
    projectId: "health-fitness-ec356",
    storageBucket: "health-fitness-ec356.appspot.com",
    messagingSenderId: "106730492223",
    appId: "1:106730492223:web:5a067f6bcb3807dc1f438a"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.language = "en";
  const provider = new GoogleAuthProvider();


  const login = document.querySelector(".login--btn");
  if(login){
    
    login.addEventListener("click",function(){
  
     signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
    //   window.location.href = "#"
  
      }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    })
  }

  // const getStarted = document.querySelector(".getStarted");
  // if(getStarted){
    
  //   getStarted.addEventListener("click",function(){
  
  //    signInWithPopup(auth, provider)
  //   .then((result) => {
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const user = result.user;
  //     console.log(user);
  //   //   window.location.href = "#"
  
  //     }).catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });
  //   })
  // }

