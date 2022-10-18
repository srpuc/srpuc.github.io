// ON PAGE LOAD
$(document).ready( load_header )

function load_header() {

    //test msg
    console.log("loaded header.js")

    //index
    var insert = ''
    if ( !document.URL.includes('index.html') ) {
        insert = '../'
    }

    //html to insert
    var html_string = `
    <!-- LOGO -->
    <div class="col-3 ps-5" >
        <a href="./` + insert + `index.html" class="fw-bold fs-4 link-logo" >DOGS & GO</a>
    </div>

    <!-- MENU ITEMS -->
    <div class="col-9 d-flex justify-content-end align-items-center pe-5" >
        <a href="./` + insert + `pages/reservar.html" class="d-inline-flex ms-4" >RESERVAR</a>
        <a href="./` + insert + `pages/productos.html" class="d-inline-flex ms-4" >PRODUCTOS</a>
        <a href="./` + insert + `pages/nosotros.html" class="d-inline-flex ms-4" >NOSOTROS</a>
        <a href="./` + insert + `pages/contacto.html" class="d-inline-flex ms-4" >CONTACTO</a>
    </div>
    `

    //execute insert
    document.getElementsByTagName('header')[0].innerHTML = html_string
    document.getElementsByTagName('header')[0].className = "col-12 sticky-top d-flex align-items-center"
    document.getElementsByTagName('head')[0].innerHTML += `<link rel="stylesheet" href="./` + insert + `css/header.css">`
    
    $('a').on("mouseover", hoverItemIn)
    $('a').on("mouseleave", hoverItemOut)
    

}

function hoverItemIn( event ) {
    anime({
        targets: event.currentTarget,
        scaleX: 1.05,
        scaleY: 1.05,
        scaleZ: 1.05,
      });
}

function hoverItemOut( event ) {
    anime({
        targets: event.currentTarget,
        scaleX: 1.0,
        scaleY: 1.0,
        scaleZ: 1.0,
      });
}