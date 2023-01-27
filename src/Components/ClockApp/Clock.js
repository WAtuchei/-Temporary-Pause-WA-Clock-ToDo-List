// Analog Clock
const CHours = document.getElementById('CHours')
const CMins = document.getElementById('CMins')
const CSeconds = document.getElementById('CSeconds')

// Digital Clock
const DHours = document.getElementById('DCHours')
const DMins = document.getElementById('DCMins')
const DSeconds = document.getElementById('DCSeconds')
const DPoint = document.getElementById('DCPoint')
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
    CHours.style.transform = `rotate(${hoursDeg}deg)`
    CMins.style.transform = `rotate(${minsDeg}deg)`
    CSeconds.style.transform = `rotate(${secsDeg}deg)`
    
    //Digital Clock
    DHours.innerText = (hours < 10 ? `0${hours}` : hours)
    DMins.innerText = (mins < 10 ? `0${mins}` : mins)
    DSeconds.innerText = (seconds < 10 ? `0${seconds}` : seconds)
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