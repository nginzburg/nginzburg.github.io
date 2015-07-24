$(function(){

$("#nameheader").hover(function(){
    $(this).fadeToggle(1000);
  });

$("#moustache").click(function(){
  $("<div>Temporary Header</h3>Temporary Section</div><br />").appendTo("body");
  });

$("#moustache").hover(function(){
  $("#moustache").css("width","105px");
  $("#moustache").css("background-color","white");
},function(){
  $("#moustache").css("width","100px");
  $("#moustache").css("background-color","");
  });

  $("#bio").click(function(){
    $("#bioPic").slideDown(2000);
  });

  $("#bio").dblclick(function(){
    $("#bioPic").slideUp(1000);
  });

  $("#bio").hover(function(){
    $("#bio").text("Show Bio Android With Link to G+");
  },function(){
    $("#bio").text("Bio");
  });

//

$("#interests").click(function(){
  $("#intPic").slideDown(2000);
});

$("#interests").dblclick(function(){
  $("#intPic").slideUp(1000);
});

$("#interests").hover(function(){
  $("#interests").text("Chris Pratt");
},function(){
  $("#interests").text("Interests");
});

//
//

$("#cssipic").click(function(){
  $("#imgsPic").slideDown(2000);
});

$("#cssipic").dblclick(function(){
  $("#imgsPic").slideUp(1000);
});

$("#cssipic").hover(function(){
  $("#cssipic").text("YAAASSSS");
},function(){
  $("#cssipic").text("Google CSSI");
});

//

});
