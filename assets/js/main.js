
//import {Typed} from './typed/typed';
//const myModule = require('./mymodule');
//include("js/second_file.js");

let MainController = (function(){
  var selectors = {
      datepicker:'#datepicker',
      datepicker1:'#datepicker1'
 },
 bindEvents = function bindEvents(){
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
      strings: ["ERES UNA MUJER MUY",
       "HERMOSA Y AVENTURERA"
      ],
      typeSpeed: 130,
      loop: false,
      contentType: 'html'

  });
  $(".final").typed({
    strings: ["¡BONITA NOCHE!"],
    startDelay: 8000,
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
