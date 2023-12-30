var inputMinutes;
var inputSeconds;
var inputHours;
var currentChronometer;
var valueSeconds;
var valueMinutes;
var valueHours;



function setValue() {


    
    inputSeconds = parseInt(document.getElementById("secondsInput").value);
    inputMinutes = parseInt(document.getElementById("minutesInput").value);
    inputHours = parseInt(document.getElementById("hoursInput").value);

    valueSeconds = inputSeconds;
    valueMinutes = inputMinutes;
    valueHours = inputHours;    

    document.getElementById('seconds').innerText = formatValue(valueSeconds);
    document.getElementById('minutes').innerText = formatValue(valueMinutes);
    document.getElementById('hours').innerText = formatValue(valueHours);

    
    if ((valueSeconds > 0) || (valueMinutes > 0) || (valueHours > 0)) {

        currentButton = event.target;
        currentButton.disabled = true;

        console.log(valueSeconds > 0);
        console.log((valueSeconds > 0) || (valueMinutes > 0) || (valueHours > 0))
        
        currentChronometer = setInterval(() => {

            valueSeconds-=1;

            if (valueSeconds === -1){
    
                valueSeconds = 59;
    
                valueMinutes -= 1;
    
                if (valueMinutes === -1) {
    
                    valueMinutes = 59;
    
                    valueHours -= 1;

                    if (valueHours === -1 && valueMinutes > 0) {
                        valueHours = 0;
                        valueMinutes = 0;
                        valueSeconds = 0;
                        console.log(1===1);
                        clearInterval(currentChronometer);
                    }
                    
                    
                    document.getElementById('hours').innerText = formatValue(valueHours);    
                }
                
                document.getElementById('minutes').innerText = formatValue(valueMinutes);
            }
            document.getElementById('seconds').innerText = formatValue(valueSeconds)}, 1000);  
            
            
    } 

    

}

function stopChronometer(){

    valueSeconds = inputSeconds;
    valueMinutes = inputMinutes;
    valueHours = inputHours;

    if ((valueSeconds > 0) || (valueMinutes > 0) || (valueHours > 0)) {
        currentButton.disabled = false;
        clearInterval(currentChronometer);
    }
    

}

function formatValue(value){

    return(('0' + value).slice(-2));

}


