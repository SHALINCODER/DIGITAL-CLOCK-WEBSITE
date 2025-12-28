const now = new Date();
const clockElement = document.querySelector('.clock');


function updateClock() {
    const now = new Date(); //create a new Date object every second
    let hours = now.getHours(); //21
    let minutes = now.getMinutes(); //55
    let seconds = now.getSeconds(); //35
    clockElement.textContent = 
        `${hours.toString().padStart(2, '0')}:` + 
        `${minutes.toString().padStart(2, '0')}:` +
        `${seconds.toString().padStart(2, '0')}`;
}
updateClock();
setInterval(updateClock, 1000);