$(document).ready(() => {
    /*colores de camisa */
    $("#color-azul").on("click", () => { cambiarCamisaColor("camiseta1.png") });
    $("#color-negro").on("click", () => { cambiarCamisaColor("camiseta2.png") });
    $("#color-rosado").on("click", () => { cambiarCamisaColor("camiseta7.png") });
    $("#color-gis").on("click", () => { cambiarCamisaColor("camisagris.png") });
    $("#color-blanca").on("click", () => { cambiarCamisaColor("camisablanca.png") });



    /*pictograma */
    $("#icon2").on("click", () => { cambiarPictograma("icon2.svg") });
    $("#icon3").on("click", () => { cambiarPictograma("icon3.svg") });
    $("#icon4").on("click", () => { cambiarPictograma("icon4.svg") });
    $("#icon5").on("click", () => { cambiarPictograma("icon5.svg") });
    $("#icon6").on("click", () => { cambiarPictograma("icon6.svg") });
    $("#icon7").on("click", () => { cambiarPictograma("icon7.svg") });
    $("#icon8").on("click", () => { cambiarPictograma("icon8.svg") });
    $("#icon9").on("click", () => { cambiarPictograma("icon9.svg") });
    $("#icon10").on("click", () => { cambiarPictograma("icon10.svg") });
    $("#icon11").on("click", () => { cambiarPictograma("icon11.svg") });

    /*botones cambio de fuente */
    $("#cambiarfuente1").on("click", () => { cambiarfuente("Myriad-Pro") });
    $("#cambiarfuente2").on("click", () => { cambiarfuente("Conduit-ITC") });
    $("#cambiarfuente3").on("click", () => { cambiarfuente("Courier-New") });
    $("#cambiarfuente4").on("click", () => { cambiarfuente("Arial") });
    $("#cambiarfuente5").on("click", () => { cambiarfuente("Georgia") });
    $("#cambiarfuente6").on("click", () => { cambiarfuente("Helvetica") });

});

const cambiarCamisaColor = (parametro) => { 
    console.log("entra");
   // $('#previsualizador-imagen').css('background-color', '#FF4000');
   // $("#previsualizador-imagen"). css('previsualizador-imagen', 'url("https://vignette.wikia.nocookie.net/despicableme/images/0/06/Daveault2.png/revision/latest?cb=20130911160410")');
    $("#previsualizador-imagen").css("background-image","url(" + '././assets/img/'+ parametro + ")");
    $("#campotexto").attr(".previsualizador-imagen") ;
};

const cambiarPictograma = (parametro) => {
    $("#previsualizador-logotipo").empty().append(`<img src="assets/icons/${parametro}" id="icon2" height="20px" width="20px" alt=""></img>`);
};

const cambiarfuente = (parametro) => {
    $("#previsualizador-logotipo").empty().append(`<p class="${parametro}">${$("#txt_texto").val()}</p>`);
};

