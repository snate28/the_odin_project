
var drow =64;

//Asks for squares per row
var row=64;


row= parseInt(prompt('Enter a number of squares per row betweem 1 and 64 ',64));
create();
function create(){
//Creates the grid of squares
 function addSquare(){
$('.grid').append('<div class="square"></div>');
};

for(var i=1;i<=row*row;i++){
 addSquare();
};


//Sets width and height for the squares according to the grid's width
var width = ($('.grid').width()) / row;
$('.square').css({'width':width, "height":width});
};

//Gets a random color for square
function getRandomColor(input){
 function random(){
  return Math.floor(Math.random() * 255).toString(16);
 };
 var r = random();
 var b = random();
 var g = random();
 return "#"+r+b+g;
}; 


var color = getRandomColor;

$('.random').click(function(){
 color = getRandomColor;
 debag();
 });                           

$('.black').click(function(){
 color ="black";
 debag();
 });


//Sets the color of square

$('.square').mouseenter(function(){
 $(this).css('background-color', color);

});


$('.clear').click(function(){
 $('.square').css('background-color', '#DDDDDD');
 $('.square').css('opacity','1');
});



$('.reset').click(function(){
 location.reload();
});
$('.trail').click(function(){
 color=0;
$('.square').hover(function() {
 

   $(this).css("opacity", 0);
  }, function () {
   $(this).fadeTo('fast', 1);
   
  });
  
});

$('.incremential').click(function(){
 color ="red";
 
    
 $('.square').mouseenter(function(){
                  //increases opacity of a square
    $(this).css("opacity", $(this).css("opacity") * 0.75);
   });
 
});


//debagging
function debag(){
$('.square').hover(function() { //makes the trail stop
 $(this).css("opacity", 1);
  } );
};





 









 



