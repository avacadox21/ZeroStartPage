let timeH1 = document.getElementsByClassName('time')[0];
//set timeH1 element to current hour and minute
timeH1.innerHTML = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
;
//set timeH1 element to current hour and minute
setInterval(function () {
    timeH1.innerHTML = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
}
, 1000);


