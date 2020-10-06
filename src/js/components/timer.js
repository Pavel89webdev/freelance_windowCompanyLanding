
const timer = (date) => {
    const daysDiv = document.querySelector('#days'),
          hoursDiv = document.querySelector('#hours'),
          minutesDiv = document.querySelector('#minutes'),
          secondsDiv = document.querySelector('#seconds');

    function setValueToDiv(div, value){
        if(value < 10){
            div.textContent = `0${value}`; 
        } else {
            div.textContent = value;
        } 
    }

    const setTimer = () => {

        const now = new Date().getTime();
        const promoDate = Date.parse(`${date}T00:00:00.000+03:00`);
        const delta = promoDate - now;

        const allSeconds = Math.floor(delta / 1000);

        const seconds = allSeconds % 60;
        const days = Math.floor(allSeconds / 60 / 60 / 24);
        const hours = Math.floor(allSeconds / 60 / 60 - days * 24);
        const minutes = Math.floor(allSeconds / 60 - hours * 60 - days * 60 * 24);

        if(delta < 0){
            [daysDiv, hoursDiv, minutesDiv, secondsDiv].map( item => {
                item.textContent = '00';
            });
            clearInterval(timerID);
            return;
        }

        setValueToDiv(daysDiv, days);
        setValueToDiv(hoursDiv, hours);
        setValueToDiv(minutesDiv, minutes);
        setValueToDiv(secondsDiv, seconds);
    };

    setTimer();

    const timerID = () => setInterval( setTimer, 1000);

    timerID();
   
};

export default timer;