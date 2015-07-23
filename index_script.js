$(function(){

  $("#nameheader").hover(function(){
    $(this).fadeToggle(1000);
  });

$("#mypic").click(function(){
  $("<div><h3>Temporary Header</h3>Temporary Section</div><br />").appendTo("body");
  });




});
