var mainFrame = $('ul');
var snd;
var getCount;

function fizzBuzz(i) {
   setTimeout(function() {
      if(i % 3 == 0 && i % 5 == 0) {
         console.log("FizzBuzz");
         $(mainFrame).append('<li class="fizzbuzz"><p>FizzBuzz</p></li>');
      }
      else if(i % 3 == 0) {
         console.log("Fizz");
         $(mainFrame).append('<li class="fizz"><p>Fizz</p></li>');
         snd = new Audio("_/resources/fizz.mp3"); // buffers automatically when created
         snd.play();
      }
      else if(i % 5 == 0) {
         console.log("Buzz");
         $(mainFrame).append('<li class="buzz"><p>Buzz</p></li>');
         snd = new Audio("_/resources/buzz.mp3"); // buffers automatically when created
         snd.play();
      }
      else {
         console.log(i);
         $(mainFrame).append('<li class="' + i + '"><p>' + i + '</p></li>');
      }
   },
   900 * i);
}

//function doSetTimeout(i) {
//  setTimeout(function() { $('.SomeDiv').append('<p>' + i + '</p>'); }, 2000 * i);
//}

//for (var i = 1; i <= 2; ++i)
//  doSetTimeout(i);

$('.btn').click(function(i){
   $('li').remove();
   getCount = $('#count').val();
   for(var i = 1; i <= getCount; i++) {
      fizzBuzz(i);
   }
});

//$(document).ready(fizzBuzz());
