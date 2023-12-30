const secondsSpan = document.querySelector('#seconds');
const minutesSpan = document.querySelector('#minutes');
const hundredthsSpan = document.querySelector('#hundredths');
const timerButton = document.querySelector('#timer-button');

let minutesValue = 0;
let secondsValue = 0;
let hundredthsValue = 0;
let currentChronometer;
let currentButton;

function startChronometer(){

    currentButton = event.target;
    currentButton.disabled = true;
    currentChronometer = setInterval(() => {

        hundredthsValue += 1;
        if (hundredthsValue === 100) {
            
            hundredthsValue = 0;
            secondsValue += 1;
            if (secondsValue === 60) {
                secondsValue = 0;
                minutesValue += 1;
                minutesSpan.textContent = formatValue(minutesValue);
            }
            secondsSpan.textContent = formatValue(secondsValue);

        }
        hundredthsSpan.textContent = formatValue(hundredthsValue)}, 10);
    }        

function formatValue(value){

    return(('0' + value).slice(-2));

}

function stopChronometer(){
    currentButton.disabled = false;
    clearInterval(currentChronometer);

}

function resetChronometer(){
    secondsValue = 0;
    secondsSpan.textContent = '00';
    minutesValue = 0;
    minutesSpan.textContent = '00';
    hundredthsValue = 0;
    hundredthsSpan.textContent = '00';

}

