var hours = document.querySelector("#hr");
var mins = document.querySelector("#mn");
var secs = document.querySelector("#ss");

var startBtn = document.querySelector("#start");
var stopBtn = document.querySelector("#stop");
var resetBtn = document.querySelector("#reset");

var [hr, mn, ss] = [0, 0, 0];

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hr = 0;
    mn = 0;
    ss = 0;
    hours.innerHTML = "00";
    mins.innerHTML = "00";
    secs.innerHTML = "00";
})

function stopWatch() {
    if (timer) {
        ss++;
        if (ss == 60) {
            mn++;
            ss = 0;
        }
        if (mn == 60) {
            hr++;
            ss = 0;
            mn = 0;
        }
        let hrString = hr;
        let minString = mn;
        let secString = ss;

        if (hr < 10) {
            hrString = "0" + hrString;
        }

        if (mn < 10) {
            minString = "0" + minString;
        }

        if (ss < 10) {
            secString = "0" + secString;
        }

        hours.innerHTML = hrString;
        mins.innerHTML = minString;
        secs.innerHTML = secString;

        setTimeout(stopWatch, 1000);
    }
}