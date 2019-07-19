$(document).ready(function(){

 $("#design-pic").click(function(){
   $(".design-p").toggle();
   $("#design-img").toggle();
   $("#design-h").css("font-weight","Bold");
   $(".design-par").css("text-align","center");

 });

 $("#dev-pic").click(function(){
    $(".dev-p").toggle();
    $("#dev-img").toggle();
    $("#dev-h").css("font-weight","Bold");
    $(".dev-par").css("text-align","center");
  });
