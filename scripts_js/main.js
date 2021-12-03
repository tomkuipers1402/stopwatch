
var total = 0;
var timer = null;

function startTimer() {
    if (timer != null) return;
    timer = setInterval(counting, 10);
}

function counting() {
    total = total + 0.01;
    time = sec2time(total);
    document.getElementById("counter").innerHTML = time;
}

function sec2time(timeInSeconds) {
    var pad = function(num, size) { return ('00' + num).slice(size * -1); },
    time = parseFloat(timeInSeconds).toFixed(2),
    hours = Math.floor(time / 60 / 60),
    minutes = Math.floor(time / 60) % 60,
    seconds = Math.floor(time - minutes * 60),
    milliseconds = time.slice(-2);

    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + ',' + pad(milliseconds, 2);
}

function stopTimer() {
    clearInterval(timer);
    timer = null
}

function resetTimer() {
    total = 0;
    document.getElementById("counter").innerHTML = "00:00:00,00";
    clearInterval(timer);
    timer = null
}
