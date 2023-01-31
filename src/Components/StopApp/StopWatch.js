const StopMins = document.getElementById('Stop-Mins')
const StopSecs = document.getElementById('Stop-Seconds')
const StopMillisecs = document.getElementById('Stop-Millisecs')

let interval;

const StartWatch = () => {
    startTime = new Date().getTime();
    interval = setInterval(() => {
        // Get Date JS
        let elapsed = new Date().getTime() - startTime;
        let millisecs = (elapsed % 1000).toString().slice(0,2);
        let seconds = Math.floor(elapsed / 1000);
        let mins = Math.floor(seconds / 60);

        StopMins.innerText = (mins < 10 ? `0${mins}` : mins)
        StopSecs.innerText = (seconds < 10 ? `0${seconds}` : seconds)
        StopMillisecs.innerText = (millisecs < 10 ? `0${millisecs}` : millisecs)
    },1)
}

const StopWatch = () => {
    clearInterval(interval);
}

const ResetWatch = () => {
    StopWatch();
    StopMins.innerText = "00"
    StopSecs.innerText = "00"
    StopMillisecs.innerText = "00"
}

$('#Start').click(StartWatch)
$('#Clear').click(ResetWatch)
$('#Stop').click(StopWatch)
