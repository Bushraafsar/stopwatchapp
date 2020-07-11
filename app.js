var min = 0;
var sec = 0;
var msec = 0;
var interval;
var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");
var hoursheading = document.getElementById("hours");

function timer(){
    msec++
    msecheading.innerHTML = msec;
    if (msec >= 100){
        sec++
        secheading.innerHTML = sec;
        msec=0;
    }else if(sec >= 60){
        min++
        minheading.innerHTML= min;
        sec=0;
    }else if(min >= 60){
        hours++
        hoursheading.innerHTML=hours;
        min=0;
    }
    
}

function start(){
    clearInterval(interval);
    interval=setInterval(timer,10);

}

function stop (){
    clearInterval(interval);
}

function reset(){
    min =00;
    sec=00;
    msec=00;
    hours=00;
    min
    minheading.innerHTML = min;
    secheading.innerHTML =sec;
    msecheading.innerHTML =msec;
    hoursheading.innerHTML =hours;
    clearInterval(interval)
}