/* Activador de JQuery */
$(document).ready(function(){

    // Activación de transición del menú principal
    $('aside#menu-moviles nav a, header article nav a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });

    // Abrir y cerrar Menú Hamburguesa
    $('#abrir').click(function(){
        $('aside#menu-moviles').animate({
            left: 0
        },300,'easeOutExpo');

        $('#abrir').hide();
        $('#cerrar').show();

        event.preventDefault();
    });

    $('#cerrar, aside#menu-moviles nav a').click(function(){
        $('aside#menu-moviles').animate({
            left: -290
        },300,'easeOutExpo');

        $('#abrir').show();
        $('#cerrar').hide();

        event.preventDefault();
    });
});