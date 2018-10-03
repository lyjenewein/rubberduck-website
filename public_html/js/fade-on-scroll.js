/*
fade-on-scroll.js
Author: Lydia Jenewein
Created: October 2018
*/
function setAlpha(alpha) {
    $("nav").css("background-color", "rgba(0, 0, 0," + alpha + ")");
}

function calcAlpha() {
    //definiera variabel för alfa-värdet
    let alpha = 0; 

    //definiera en variabel för hur längt det är till toppen avHTML-dokumentet
    let scroll = $(document).scrollTop();

    //vid vilken pixel ska faden starta
    const fadeStart = 100;

    //Vid vilken pixel ska faden sluta
    const fadeStop = 200;

    //hur långt är det mellan start och stop
    const fadeLength = fadeStop - fadeStart;

    if (scroll < fadeStart) {
        alpha = 0;
    } else if (scroll < fadeStop){
        alpha = (scroll - fadeStart) / fadeLength;
    } else {
        alpha = 1;
    }
    //returnera vad alpha nu har blivit efter vår uträkning
    return alpha;
}

$(document).scroll(function(){
    setAlpha(calcAlpha());
});



