const semicircles = document.querySelectorAll(".semicircle");
const timer = document.querySelector(".timer");
const hrsInputEl = document.querySelector(".hrs")
const minsInputEl = document.querySelector(".mins")
const secsInputEl = document.querySelector(".secs")
const startEl = document.getElementById("start");
const resetEl = document.getElementById("reset");

let audio = new Audio("waterfall sound.mp3");



// startEl.addEventListener("click",()=>{
//     hr = hrsInputEl.value;
//     min = minsInputEl.value;
//     sec = secsInputEl.value;
//     setInterval(() => {
//         countDownTimer(hr,min,sec)
//     },1000)
//     // countDownTimer();
// })

var futureTime;
var setTime

function test(){

    let hr = hrsInputEl.value||2;
    let min = minsInputEl.value || 10;
    console.log(secsInputEl.value)
    let sec = secsInputEl.value || 30;
    const hours = hr*3600000;
    const minutes = min * 60000;
    const seconds = sec * 1000;
    setTime = hours + minutes + seconds;
    const startTime = Date.now();
    futureTime = startTime+setTime;
    console.log(futureTime)
    const timerLoop = setInterval(countDownTimer);

}



function countDownTimer(){

    audio.play();

    const currentTime = Date.now();
    const remainingTime = futureTime - currentTime;
    const angle = (remainingTime/setTime) * 360;

    if(angle>180){
        semicircles[2].style.display = "none";
        semicircles[0].style.transform = "rotate(180deg)";
        semicircles[1].style.transform =` rotate(${angle}deg)`;
    }else{
        semicircles[2].style.display = "block";
        semicircles[0].style.transform =` rotate(${angle}deg)`;
        semicircles[1].style.transform =` rotate(${angle}deg)`;
    }
    


    const hrs = Math.floor((remainingTime/(1000*60*60)) % 24).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:false});
    const mins = Math.floor((remainingTime/(1000*60))%60).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:false});
    const secs = Math.floor((remainingTime/(1000))%24).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:false});

    timer.innerHTML=`
        <div>${hrs}</div>
        <div class = "colon">:</div>
        <div>${mins}</div>
        <div class = "colon">:</div>
        <div>${secs}</div>
        `

    if(remainingTime<=5500){
        semicircles[0].style.backgroundColor = "red";
        semicircles[1].style.backgroundColor = "red";
        timer.style.color = "red";
    }


    if(remainingTime<0){
        clearInterval(timerLoop);
        semicircles[0].style.display="none"
        semicircles[1].style.display="none"
        semicircles[2].style.display="none"


        timer.innerHTML=`
        <div>00</div>
        <div class = "colon">:</div>
        <div>00</div>
        <div class = "colon">:</div>
        <div>00</div>
        `
        timer.style.color = "grey"
    }
}