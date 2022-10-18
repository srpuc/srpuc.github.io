$(document).ready( load )

$(window).on( 'hashchange', load )

var servicios = [   ['15$',['Lavado y secado.', 'Opción de guardería.'], 'Servicio basico'],
                    ['25$',['Lavado y secado.', 'Corte y peinado.', 'Opción de guardería.'], 'Servicio completo'],
                    ['30$',['Lavado y secado.', 'Corte y peinado.', 'Comida.'], 'Pack DOGS & GO']]

function load() {

    //test msg
    console.log("loaded reservar.js")

    loadStart();

}

function loadStart() {

    var html_string = `
    
    <div class="servicios d-flex flex-column justify-content-evenly" >

            <div class="titulo d-flex flex-column align-items-center">
                <p class="d-block">Tarifas servicio peluqueria.</p>
                <p class="d-block subtitulo">Encuentranos en <span class="highlight">Rosalia de Castro, 85, Santiago de Compostela</span> de Lunes a Sabado desde las  <span class="highlight">9:00</span> a las <span class="highlight"> 18:00 </span>.</p>
            </div>
            
            <div class="cards d-flex justify-content-between">

                <div id="card_1" class="card d-flex justify-content-center align-items-center">
                    <div class="square">
                        <img src="./../img/s_1.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body d-flex flex-column align-items-center justify-content-center">
                        <p class="card-title">Servicio basico</p>
                        <p class="card-link" >15.0$</p>
                        <p class="card-info">Mas información</p>
                    </div>
                </div>
    
                <div id="card_2" class="card d-flex justify-content-center align-items-center">
                    <div class="square">
                        <img src="./../img/s_2.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body d-flex flex-column align-items-center justify-content-center">
                        <p class="card-title">Servicio completo</p>
                        <p class="card-link" >25.0$</p>
                        <p class="card-info">Mas información</p>
                    </div>
                </div>
    
                <div id="card_3" class="card d-flex justify-content-center align-items-center">
                    <div class="square">
                        <img src="./../img/s_3.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body d-flex flex-column align-items-center justify-content-center">
                        <p class="card-title">Pack DOGS & GO</p>
                        <p class="card-link" >30.0$</p>
                        <p class="card-info">Mas información</p>
                    </div>
                </div>

            </div>

            <div class="detailed-info justify-content-center">

                <div class="d-flex justify-content-between detailed-card" >

                    <div class="detailed-item">
                    </div>

                    <div class="detailed-description d-flex justify-content-between align-items-center">
                    </div>

                </div>

            </div>

            <div class="reserva flex-column">
                <p>TEST</p>
            </div>

        </div>
    
    `

    document.getElementsByTagName('main')[0].innerHTML = html_string

    loadListeners()

}

function loadListeners() {

    var hover = document.getElementsByClassName("card")

    Array.from(hover).forEach( card => {
        card.addEventListener("mouseover", hoverExpand)
        card.addEventListener("mouseleave", hoverContract)
        card.addEventListener("click", clickDetails)
    });
}

function hoverExpand( event ) {

    anime({
        targets: event.currentTarget,
        scaleX: 1.02,
        scaleY: 1.02,
        scaleZ: 1.02
      });

    event.currentTarget.children[1].children[1].style.display = 'none';
    event.currentTarget.children[1].children[2].style.display = 'block';

    anime({
        targets: event.currentTarget.children[1].children[2],
        opacity: '1',
    })

}

function hoverContract( event ){

    anime({
        targets: '.card',
        scaleX: 1.0,
        scaleY: 1.0,
        scaleZ: 1.0
      });

    event.currentTarget.children[1].children[1].style.display = 'block';
    event.currentTarget.children[1].children[2].style.display = 'none';

}

function clickDetails( event ) {

    console.log('click', event.currentTarget.id )

    document.getElementsByClassName('detailed-item')[0].innerHTML = document.getElementById( event.currentTarget.id ).innerHTML
    document.getElementsByClassName('detailed-item')[0].children[1].children[2].style.display = 'none'

    document.getElementsByClassName('detailed-info')[0].style.display = 'flex'

    $('html, body').animate({
        scrollTop: $(".detailed-info").offset().top
    }, 10);

    let index = 0

    switch ( event.currentTarget.id ) 
    {
        case 'card_1': index = 0; break;
        case 'card_2': index = 1; break;
        case 'card_3': index = 2; break;
        default: break;
    }

    let description_items = ''

    Array.from( servicios[index][1] ).forEach( element => {
        description_items += '<p class="description-item" >' + element + '</p>'
    })

    var html_detail = `
    
    <div class="description d-flex flex-column justify-content-start">
        <p class="description-service" > ` + servicios[index][2] + ` </p>
        <p class="description-title" >Incluye</p>
        ` + description_items + `
    </div>

    <div class="d-flex flex-column description-price">
        <div class="price">
            <p class="description-title" >Precio del paquete. ` + servicios[index][0] +`</p>
        </div>

        <div>
        <p>Reserva ya</p>
        </div>
    </div>

    `

    document.getElementsByClassName('detailed-description')[0].innerHTML = html_detail

    $('.description-price').on("mouseover", hoverPriceIn)
    $('.description-price').on("mouseleave", hoverPriceOut)

    $('.description-price').on("click", clickPrice)
   
}

function hoverPriceIn( event ) {
    anime({
        targets: event.currentTarget,
        scaleX: 1.02,
        scaleY: 1.02,
        scaleZ: 1.02
      });
}

function hoverPriceOut( event ) {
    anime({
        targets: event.currentTarget,
        scaleX: 1.0,
        scaleY: 1.0,
        scaleZ: 1.0
      });
    
}

function clickPrice( event ) {

    $('.reserva').css('display', 'flex');

    $('html, body').animate({
        scrollTop: $(".reserva").offset().top
    }, 10);

    var html_reserva = `
    
    <div class="d-flex justify-content-between">

        <div class="reserva-titulo" >
            <p>Haz tu reserva</p>
        </div>

        <div class="error justify-content-center align-items-center" >
        </div>

    </div>

    <div class="d-flex justify-content-between reserva-campos">

        <div class="d-flex flex-column reserva-contacto">
            <p class="titulo" >Información de contacto</p>
            <div class="d-flex flex-column justify-content-start inputs" >
                <input class="name" type="text" placeholder="Nombre">
                <input class="telefono" type="text" placeholder="Telefono">
                <input class="email" type="text" placeholder="Email">
            </div>
        </div>

        <div class="d-flex flex-column reserva-datos">
            <p class="titulo">Datos de la reserva</p>
            <div class="inputs d-flex flex-column justify-content-start">
                <input class="fecha" type="text" placeholder="Fecha">
                <input class="hora" type="text" placeholder="Hora">
            </div>
        </div>

        <div class="datepicker">
            
        </div>

    </div>

    <div class="reserva-boton d-flex justify-content-center align-items-center">
        <p class="d-block text-center" >Confirmar reserva</p>
    </div>
    
    `

    $('.reserva').html(html_reserva)

    $('.datepicker').datepicker({ onSelect: function( date ){
        console.log('date')
        $('.fecha').val( date )
    } })

    $('.reserva-boton').on("mouseover", hoverBotonIn)
    $('.reserva-boton').on("mouseleave", hoverBotonOut)

    $('.reserva-boton').on("click", clickReserva)

}

function clickDatepicker( event ){

    $('.fecha').val('hola')

}

function hoverBotonIn( event ){

    if( $( '.name' ).val().length === 0 || 
        $( '.telefono' ).val().length === 0 || 
        $( '.email' ).val().length === 0 ||
        $( '.fecha' ).val().length === 0 ||
        $( '.hora' ).val().length === 0 )
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

function hoverBotonOut( event ){
    anime({
        targets: event.currentTarget,
        scaleX: 1.0,
        scaleY: 1.0,
        scaleZ: 1.0,
        backgroundColor: '#f6f6f6'
      });
}

function clickReserva( event ){

    var html_mensaje = ''

    if( $( '.name' ).val().length === 0 || 
        $( '.telefono' ).val().length === 0 || 
        $( '.email' ).val().length === 0 ||
        $( '.fecha' ).val().length === 0 ||
        $( '.hora' ).val().length === 0 )
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
            <p class="d-block text-center">Tu reserva ha sido confirmada, revisa tu email.</p>
            `
            $('.reserva-boton').off("click")
            $('.reserva-boton').css('cursor', 'not-allowed');
            $('.reserva-boton').html(html_mensaje)

            anime({
                targets: '.error',
                opacity: 0
              })

        }



}