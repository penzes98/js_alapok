/*jslint devel: true*/
/*global $, jQuery, alert*/
/*jslint indent: 2*/


(function () {
  'use strict';
  console.log("hello world");
  $('.image-popup').magnificPopup({
    type: 'image',
      gallery: {
          enabled: true
      }
  });
}());
//minden image-popup class-al rendelkező elemet elrejtünk
//[].forEach.call(document.querySelectorAll('.image-popup'),
//               function (el) {
//    el.style.display = 'none' ;
//});


//ez ugaynazt csinálja mint a fentebbi kód, csak ez a jquery library segitségével:
$('.image-popup').css('display', 'none');

