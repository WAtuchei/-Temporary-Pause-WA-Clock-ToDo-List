// Analog Clock
const ClockHours = document.getElementById('Clock-Hours')
const ClockMins = document.getElementById('Clock-Mins')
const ClockSeconds = document.getElementById('Clock-Seconds')

// Digital Clock
const DigiHours = document.getElementById('Digi-Hours')
const DigiMins = document.getElementById('Digi-Mins')
const DigiSeconds = document.getElementById('Digi-Seconds')
const DigiPoint = document.getElementById('Digi-Point')
const DDay = document.getElementById('Day')
const DDate = document.getElementById('Date')
const DMonth = document.getElementById('Month')
const DYear = document.getElementById('Year')

const Clock = () => { setInterval(() => {
    // Get Date JS
    let Now = new Date();
    let hours = Now.getHours();
    let mins = Now.getMinutes();
    let seconds = Now.getSeconds();
    let day = Now.getDay();
    let daydate = Now.getDate();
    let month = Now.getMonth();
    let year = Now.getFullYear();

    // Analog Clock
    const hoursDeg = (360/12) * hours + (360/12/60) * mins;
    const minsDeg = (360/60) * mins + (360/60/60) * seconds;
    const secsDeg = (360/60) * seconds;
    ClockHours.style.transform = `rotate(${hoursDeg}deg)`
    ClockMins.style.transform = `rotate(${minsDeg}deg)`
    ClockSeconds.style.transform = `rotate(${secsDeg}deg)`
    
    //Digital Clock
    DigiHours.innerText = (hours < 10 ? `0${hours}` : hours)
    DigiMins.innerText = (mins < 10 ? `0${mins}` : mins)
    DigiSeconds.innerText = (seconds < 10 ? `0${seconds}` : seconds)
    DDate.innerText = daydate
    DYear.innerText = year
    switch (day) {
        case 0: DDay.innerText = "Sun"
        break;
        case 1: DDay.innerText = "Mon"
        break;
        case 2: DDay.innerText = "Tue"
        break;
        case 3: DDay.innerText = "Wed"
        break;
        case 4: DDay.innerText = "Thu"
        break;
        case 5: DDay.innerText = "Fri"
        break;
        case 6: DDay.innerText = "Sat"
        break;
    }
    switch (month) {
        case 0: DMonth.innerText = "January"
        break;
        case 1: DMonth.innerText = "February"
        break;
        case 2: DMonth.innerText = "March"
        break;
        case 3: DMonth.innerText = "April"
        break;
        case 4: DMonth.innerText = "May"
        break;
        case 5: DMonth.innerText = "June"
        break;
        case 6: DMonth.innerText = "July"
        break;
        case 7: DMonth.innerText = "August"
        break;
        case 8: DMonth.innerText = "September"
        break;
        case 9: DMonth.innerText = "Octorber"
        break;
        case 10: DMonth.innerText = "November"
        break;
        case 11: DMonth.innerText = "December"
        break;
    }
}, 1000);
}

Clock();