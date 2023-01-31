const SwitchBTNs = document.querySelectorAll('.switch-btn')

// Event
for (let BTN of SwitchBTNs){
    BTN.addEventListener('click', () => {

        const ClockAppZone = document.getElementById('ClockAppZone')
        const StopAppZone = document.getElementById('StopAppZone')
        let [ClockApp, StopApp, TimerApp] = 
            [SwitchBTNs[0], SwitchBTNs[1], SwitchBTNs[2]]

        const ClockSW = () => {
            ClockApp.classList.add('active')
            StopApp.classList.remove('active')
            TimerApp.classList.remove('active')
            ClockAppZone.classList.add('App-show')
            ClockAppZone.style.display = "block"
            StopAppZone.classList.remove('App-show')
            StopAppZone.style.display = "none"
        }
        const StopSW = () => {
            ClockApp.classList.remove('active')
            StopApp.classList.add('active')
            TimerApp.classList.remove('active')
            ClockAppZone.classList.remove('App-show')
            ClockAppZone.style.display = "none"
            StopAppZone.classList.add('App-show')
            StopAppZone.style.display = "block"
        }
        const TimerSW = () => {
            ClockApp.classList.remove('active')
            StopApp.classList.remove('active')
            TimerApp.classList.add('active')
        }
        switch (BTN) {
            case ClockApp:
                ClockSW();
                break;
            case StopApp:
                StopSW();
                break;
            case TimerApp:
                TimerSW();
                break;
        }
    })
}