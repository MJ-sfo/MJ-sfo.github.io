// sanity check
console.log("app.js linked.");
// $("img").trigger( "mouseover", function() {
//   console.log("mouseover");
// });

// $( "img" ).on( "mouseover", function() {
//   console.log("mouseover");
//   ( "img" ).attr({"width": "100%"; "height": "100%";});
// });

// $("img").hover(
//   // Mouse Over
//   function(){
//     $(this).animate({width: 100,height: 100}, 1000);
//   },
//   // Mouse Out
//   function(){
//       $(this).animate({width: 50,height: 50}, 1000);
// });

// $(".anotherMike").hover(
//   // Mouse Over
//   function(){
//     $(this).animate({width: 75,height: 75}, 1000);
//   },
//   // Mouse Out
//   function(){
//       $(this).animate({width: 50,height: 50}, 1000);
// });

// $("img").hover(
//  // Mouse Over: Expand to 75 x 75
//   function(){
//     $(this).effect("size", { to: {width: 75,height: 75} }, 1000);
//   },
//   // Mouse Out: 50 x 50 is original size
//   function(){
//     $(this).effect("size", { to: {width: 50,height: 50} }, 500);
// });

// var $image = $('.anotherMike'),
//     imgWidth = $image.width(),
//     imgHeight = $image.height();
// $('.anotherMike').hover(function() {
//   //The mouseover
//   $(this).width( imgWidth * 2);
//   $(this).height( imgHeight * 2);
// }, function() {
//   $(this).width( imgWidth );
//   $(this).height( imgHeight );
// });

$(document).ready(function(){
var ht= $("img").height(),
wd=$("img").width(),
mult=3; //change to the no. of times you want to increase your image
      //size.
$("img").on('mouseenter', function(){
$(this).animate({height: ht*mult,
                 width: wd*mult}, 500);
});
$("img").on('mouseleave', function(){
$(this).animate({height: ht,
                 width: wd}, 500);
})
});
