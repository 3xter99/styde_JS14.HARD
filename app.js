
let text = document.querySelector('.text')
let miniText = document.querySelector('.mini-text')

const printDate = function() {

    let data = new Date();
    let year = data.getFullYear();
    let numberMonth = data.getMonth();
    let numberWeekDay = data.getDay()
    let day = data.getDate()
    let numberHour = data.getHours();
    let numberMinutes = data.getMinutes();
    let seconds = data.getSeconds();
    let month;
    let weekDay;


    switch (numberMonth)
    {
        case 0: month="января"; break;
        case 1: month="февраля"; break;
        case 2: month="марта"; break;
        case 3: month="апреля"; break;
        case 4: month="мае"; break;
        case 5: month="июня"; break;
        case 6: month="июля"; break;
        case 7: month="августа"; break;
        case 8: month="сентября"; break;
        case 9: month="октября"; break;
        case 10: month="ноября"; break;
        case 11: month="декабря"; break;
    }

    switch (numberWeekDay) {
        case 0: weekDay="Воскресенье"; break;
        case 1: weekDay="Понедельник"; break;
        case 2: weekDay="Вторник"; break;
        case 3: weekDay="Среда"; break;
        case 4: weekDay="Четверг"; break;
        case 5: weekDay="Пятница"; break;
        case 6: weekDay="Суббота"; break;
    }

    let hourWord = numberHour === 0 || numberHour >= 5 && numberHour <= 20 ? 'часов' : numberHour >=2 &&
    numberHour <= 4 || numberHour === 22 || numberHour === 23 ? 'часа' : 'час';

    let minutesWord = numberMinutes % 10 === 1 ? 'минута' : numberMinutes >= 5 && numberMinutes <=20 ||
        numberMinutes >= 25 && numberMinutes <= 30 || numberMinutes >= 35 && numberMinutes <=40 ||
        numberMinutes >= 45 && numberMinutes <=50 || numberMinutes >= 55 && numberMinutes <= 60 || numberMinutes === 0? 'минут' : 'минуты';

    let secondsWord = seconds % 10 === 1 ? 'секунда' : seconds >= 5 && seconds <=20 ||
    seconds >= 25 && seconds <= 30 || seconds >= 35 && seconds <=40 ||
    seconds >= 45 && seconds <=50 || seconds >= 55 && seconds <= 60  || seconds === 0? 'секунд' : 'секунды';

    // let li = document.createElement('li')
    text.textContent = `Сегодня ${weekDay}, ${day} ${month} ${year} года, ${numberHour} ${hourWord} ${numberMinutes} ${minutesWord} ${seconds} ${secondsWord}`;
    // list.appendChild(li);
}

setInterval(printDate, 1000);

const addZero = n => n < 10 ? '0'+ n : n;

const miniData = function () {

    let data = new Date();
    let year = data.getFullYear();
    let numberMonth = data.getMonth() + 1;
    let day = data.getDate()
    let numberHour = data.getHours();
    let numberMinutes = data.getMinutes();
    let seconds = data.getSeconds();


    miniText.textContent = `${addZero(numberHour)}:${addZero(numberMinutes)}:${addZero(seconds)}  ${addZero(numberMonth)}:${addZero(day)}:${addZero(year)}`;


}

setInterval(miniData, 1000)
