const StopMins = document.getElementById('Stop-Mins')
const StopSecs = document.getElementById('Stop-Seconds')
const StopMillisecs = document.getElementById('Stop-Millisecs')

const StopCurrent = () => { setInterval(() => {
    // Get Date JS
    let Now = new Date();
    let mins = Now.getMinutes();
    let seconds = Now.getSeconds();
    let millisecs = Now.getMilliseconds().toString().slice(0,2);
    
    StopMins.innerText = (mins < 10 ? `0${mins}` : mins)
    StopSecs.innerText = (seconds < 10 ? `0${seconds}` : seconds)
    StopMillisecs.innerText = millisecs
}, 10)
}

StopCurrent();