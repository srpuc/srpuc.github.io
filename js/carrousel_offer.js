$(document).ready( function() {

    //test msg
    console.log("loaded carrousel_promoted.js")

    //index
    var insert = ''
    if ( !document.URL.includes('index.html') ) {
        insert = '../'
    }

    var card_names = [ 'Cama', 'Salvavidas', 'Cuerda', 'Champú' ]

    var max_cards = 7

    var start = 1
    var end = 5
    
    var html_string = ''
    var html_out = ''

    for (let i = start; i < end; i++) {
        
        html_string += `
    
        <!-- ITEM -->
        <div class="card flex-shrink-0 d-flex flex-column justify-content-between ">
            <div class="card-img d-flex justify-content-center align-items-center">
                <img src="./` + insert + `offer_items/item_` + i + `/img.png" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
                <p class="card-title">` + card_names[i-1] + `</p>
            </div>
        </div>
    
        `
        
    }

    html_out = `
    
    <div class="container-wrapper ">
        <div class="carrousel-container d-flex align-items-center justify-content-between" >
        ` + html_string + `
        </div>
    </div>

    `

    $('.oferta .carrousel-wrapper').html( html_out )

    $('.card').on("mouseover", hoverCardIn)
    $('.card').on("mouseleave", hoverCardOut)

    console.log($('.card'))
    

} )

function hoverCardIn( event ) {
    anime({
        targets: event.currentTarget,
        scaleX: 1.02,
        scaleY: 1.02,
        scaleZ: 1.02,
      });
}

function hoverCardOut( event ) {
    anime({
        targets: event.currentTarget,
        scaleX: 1.0,
        scaleY: 1.0,
        scaleZ: 1.0,
      });
}