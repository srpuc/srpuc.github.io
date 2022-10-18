// ON PAGE LOAD
$(document).ready( load )

$(window).on( 'hashchange', load )

function load() {

    //test msg
    console.log("loaded footer.js")

    //index
    var insert = ''
    if ( !document.URL.includes('index.html') ) {
        insert = '../'
    }

    //html to insert
    var html_string = `
    <!-- INFO -->
    <div class="col-9 d-flex flex-column justify-content-evenly ps-4">
        <p class="d-block">Av. Rosalia de Castro, 85, Santiago de Compostela</p>
        <p class="d-block">Lunes - Sabado / 9:00 a 18:00</p>
    </div>

    <!-- LOGO -->
    <div class="col-3 d-flex justify-content-end align-items-center pe-5">
        <a href="./` + insert + `index.html" class="fw-bold fs-4">DOGS & GO</a>
    </div>
    `

    //execute insert
    document.getElementsByTagName('footer')[0].innerHTML = html_string
    document.getElementsByTagName('footer')[0].className = "d-flex"
    document.getElementsByTagName('head')[0].innerHTML += `<link rel="stylesheet" href="./` + insert + `css/footer.css">`

}