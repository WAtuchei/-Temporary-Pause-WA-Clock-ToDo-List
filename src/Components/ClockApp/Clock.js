// Analog Clock
const CHours = document.getElementById('CHours')
const CMins = document.getElementById('CMins')
const CSeconds = document.getElementById('CSeconds')

// Digital Clock
const DHours = document.getElementById('DHours')
const DMins = document.getElementById('DMins')
const DSeconds = document.getElementById('DSeconds')
const DPoint = document.getElementById('DPoint')

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

    //Digital Clock
    DHours.innerText = hours
    DMins.innerText = (mins < 10 ? `0${mins}` : mins)
    DSeconds.innerText = (seconds < 10 ? `0${seconds}` : seconds)
    DDate.innerText = daydate
    DYear.innerText = year
    switch (day) {
        case 0: DDay.innerText = "Sunday"
        break;

        case 1: DDay.innerText = "Monday"
        break;

        case 2: DDay.innerText = "Tuesday"
        break;

        case 3: DDay.innerText = "Wednesday"
        break;

        case 4: DDay.innerText = "Thursday"
        break;

        case 5: DDay.innerText = "Friday"
        break;

        case 6: DDay.innerText = "Saturday"
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