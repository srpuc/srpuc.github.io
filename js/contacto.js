// ON PAGE LOAD
$(document).ready( load )

$(window).on( 'hashchange', load )

function load() {

    //test msg
    console.log("loaded contacto.js")

    $('.enviar').on("mouseover", hoverMensajeIn)
    $('.enviar').on("mouseleave", hoverMensajeOut)

    $('.enviar').on("click", clickFormulario)

}

function hoverMensajeIn( event ) {
    if( $( '.nombre' ).val().length === 0 || 
        $( '.telefono' ).val().length === 0 || 
        $( '.email' ).val().length === 0 )
        {
        anime({
            targets: event.currentTarget,
            scaleX: 1.02,
            scaleY: 1.02,
            scaleZ: 1.02,
            backgroundColor: '#C6A4A5'
          });
    }
    else {
        anime({
            targets: event.currentTarget,
            scaleX: 1.02,
            scaleY: 1.02,
            scaleZ: 1.02,
            backgroundColor: '#ADCBA5'
          });
    }
}

function hoverMensajeOut( event ) {
    anime({
        targets: event.currentTarget,
        scaleX: 1.0,
        scaleY: 1.0,
        scaleZ: 1.0,
        backgroundColor: '#f6f6f6'
      });
    
}

function clickFormulario ( event ){

    var html_mensaje = ''

    if( $( '.nombre' ).val().length === 0 || 
        $( '.telefono' ).val().length === 0 || 
        $( '.email' ).val().length === 0 )
        {

            html_mensaje = `
            <p class="d-block text-center">Los datos introducidos no son validos.</p>
            `
            $('.error').html(html_mensaje)
            $('.error').css('display', 'flex');

            anime({
                targets: '.error p' ,
                color: '#E15D5A'
              });

        }
        else
        {

            html_mensaje = `
            <p class="d-block text-center">Formulado enviado. Pronto te responderemos.</p>
            `
            $('.enviar').off("click")
            $('.enviar').css('cursor', 'not-allowed');
            $('.enviar').html(html_mensaje)

            anime({
                targets: '.error',
                opacity: 0
              })

        }

}