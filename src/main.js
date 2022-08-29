// Navbar
var hamburger = document.querySelector('#hamburger');
var navlinks = document.querySelector('#navlinks');

var line = hamburger.querySelector('#line');
var line2 = hamburger.querySelector('#line2');

hamburger.addEventListener('click', function (){
    if (navlinks.classList.contains('hidden')){
        navlinks.classList.remove('hidden');
        line.classList.add('rotate-45', 'absolute');
        line2.classList.add('-rotate-45', 'absolute');
        line2.classList.remove('mt-1.5');
    } else{
        navlinks.classList.add('hidden');
        line.classList.remove('rotate-45', 'absolute');
        line2.classList.remove('-rotate-45', 'absolute');
        line2.classList.add('mt-1.5');
    }
})

// carrusel
var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    },
    cubeEffect: {
      shadow: false,
      slideShadows: false,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

// Cambiar el texto del elemento del contador (plural)
function changeTextCounterElement(element, time, text1, text2){
    Math.floor(time) === 1 ? document.getElementById(element).innerHTML  = text1 : document.getElementById(element).innerHTML  = text2;
}

// Contar tiempo de relación
var DateTime = luxon.DateTime;
function countLove(){
    fetch('https://worldtimeapi.org/api/timezone/America/Mexico_City')
    .then(
    function(response) {
        if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        return;
        }
        response.json().then(function(data) {
        var hoy = data.datetime;
        var inicio ='2021-07-19T00:00:00.550394-05:00';
        var diferencia =  DateTime.fromISO(hoy).diff(DateTime.fromISO(inicio),['days', 'hours', 'minutes', 'seconds']);

        document.getElementById('seconds').innerHTML = Math.floor(diferencia.seconds);
        changeTextCounterElement('secondsText', Math.floor(diferencia.seconds), 'segundo', 'segundos');
        
        document.getElementById('minutes').innerHTML = diferencia.minutes;
        changeTextCounterElement('minutesText', diferencia.minutes, 'minuto', 'minutos');
        
        document.getElementById('hours').innerHTML = diferencia.hours;
        changeTextCounterElement('hoursText', diferencia.hours, 'hora', 'horas');

        document.getElementById('days').innerHTML = diferencia.days;
        });
    })
    .catch(function(err) {
    console.log('Fetch Error :-S', err);
    });
}
window.onload = function() {
setInterval(countLove, 1000);
}

// Card
function changeTextCard(showText, hiddenTexts, btnText, hiddenBtns){
   document.getElementById(showText).classList.toggle('hidden');

    for(const hiddenText of hiddenTexts){
        document.getElementById(hiddenText).classList.add('hidden');
    }
    for(const hiddenBtn of hiddenBtns){
        document.getElementById(hiddenBtn).classList.remove('bg-red-500', 'bg-opacity-60');
    }

    if(document.getElementById(showText).classList.contains('hidden')){
        document.getElementById('defaultText').classList.remove('hidden');
        document.getElementById(btnText).classList.remove('bg-red-500', 'bg-opacity-60')
    }else{
        document.getElementById('defaultText').classList.add('hidden');
        document.getElementById(btnText).classList.add('bg-red-500', 'bg-opacity-60')
    }
}

// Música
const music = new Audio('src/forro_enamorado.mp3');
function playMusic(){
    if (music.duration > 0 && !music.paused) {
        music.pause();
    } else {
        music.play();
    }
}