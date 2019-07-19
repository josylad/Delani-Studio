$(document).ready(function(){

 $("#design-pic").click(function(){
   $(".design-p").toggle();
   $("#design-icon").toggle();

 });

 $("#dev-pic").click(function(){
    $(".dev-p").toggle();
    $("#dev-icon").toggle();
  });

  $("#product-pic").click(function(){
     $(".product-p").toggle();
     $("#product-img").toggle();
     $("#product-h").css("font-weight","Bold");
     $(".product-par").css("text-align","center");
   });

  });
