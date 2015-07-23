$(function(){

$("#nameheader").hover(function(){
    $(this).fadeToggle(1000);
  });

$("#moustache").click(function(){
  $("<div><h3 class = 'temp'>Temporary Header</h3>Temporary Section</div><br />").appendTo("body");
  });

$("#moustache").hover(function(){
  $("#moustache").css("width","105px");
  $("#moustache").css("background-color","white");
},function(){
  $("#moustache").css("width","100px");
  $("#moustache").css("background-color","");
  });

});
