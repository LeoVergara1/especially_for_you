
//import {Typed} from './typed/typed';
//const myModule = require('./mymodule');
//include("js/second_file.js");

let MainController = (function(){
  var selectors = {
      datepicker:'#datepicker',
      datepicker1:'#datepicker1'
 },
 bindEvents = function bindEvents(){
      var audio1 = document.getElementById('music');
      console.log(audio1)
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      window.setTimeout(async function () {
        console.log("Inicia audio");
        audio1.play();
        await sleep(3000);
        console.log("Lanza modal")
        $('#exampleModal').modal('show');
        $("#heart_to").on("click",()=> {$('#exampleModal').modal('show')});
      }, 115000)
      console.log("Satrt bindEvents");

 };

 var typed = function(){
   console.log("Typed..");
    $(".otro").typed({
        strings: ["^1000 This is a <strong>Test</strong> <br>and another line.", "Segundo texto de prueba"],
        typeSpeed: 50,
        loop: false,
        contentType: 'html'
    });
   $(".puntos").typed({
    strings: ["..."],
    showCursor: false,
    typeSpeed: 300,
    backSpeed: 300,
    loop: true,
    contentType: 'html'
    });
    $(".otro").typed({
      strings: ["Sé que podría ser un poco precipitado para decirlo, pero la verdad es que ya desde la primera vez que te vi, tuve una sensación, debo aceptar que en su momento preferí ignorarla un poco ya te contaré en persona 😊",
       "Sabes siempre me ha gustado ser detallista, y esto ya lo había pensado, así que el hecho de conocerte me hizo recordar y pensar que valdría la pena realizarlo.",
       "La verdad es que estoy un poco sorprendido conmigo mismo porque no imaginé sentir esta sensación por alguien, lo cual me hace pensar en arriesgar y dedicártelo.",
       "No importa el resultado después de esto, lo que tiene valor es que te lo dedico tan sólo a ti y me sentiría satisfecho sabiendo que te ha gustado.",
       "Eres hermosa en muchos aspectos, para ser sincero en todos jeje, pero lo que mas me ha gustado es tu forma tan linda y tierna de ser así mismo eso lo complementas siendo tan dedicada en tus sueños y metas "
      ],
      typeSpeed: 50,
      loop: false,
      contentType: 'html'

  });
  $(".final").typed({
    strings: ["¡Ahora la canción… tan sólo espera un poco !"],
    startDelay: 105000,
    showCursor: false,
    typeSpeed: 200,
    loop: false,
    contentType: 'html'
    });

 };
 var start = function(){
 console.log("Start controller js");
 bindEvents();
 typed();

 };
 return{
      start:start
 }

}());
jQuery(function($){
MainController.start();
});
