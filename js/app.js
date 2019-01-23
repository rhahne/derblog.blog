$(document).ready(function(){
    var header = $('body');
    
    var backgrounds = new Array(
        'url(images/bg01.jpg)'
      , 'url(images/bg02.jpg)'
      , 'url(images/bg03.jpg)'
      , 'url(images/bg04.jpg)'
    );
    
    var current = 0;
    
    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        header.css('background-image', backgrounds[current]);
    }
    setInterval(nextBackground, 5000);
    
    header.css('background-image', backgrounds[0]);
});

