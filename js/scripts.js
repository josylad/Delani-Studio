$(document).ready(function() {

  $("#design-pic").click(function() {
    $(".design-p").toggle();
    $("#design-pic").toggle();

  });
  $(".design-p").click(function() {
    $("#design-pic").show();
    $(".design-p").hide();
  })


  $("#dev-pic").click(function() {
    $(".dev-p").toggle();
    $("#dev-pic").toggle();
  });
  $(".dev-p").click(function() {
    $("#dev-pic").show();
    $(".dev-p").hide();
  })

  $("#product-pic").click(function() {
    $(".product-p").toggle();
    $("#product-pic").toggle();
  });
  $(".product-p").click(function() {
    $("#product-pic").show();
    $(".product-p").hide();
  })

});

//Mouse overlay effect
$(document).ready(function() {
  $('.wrap').mouseover(function() {
    $('.text-overlay').show();
  }).mouseout(function() {
    $('.text-overlay').hide();
  });

  $('.wrap2').mouseover(function() {
    $('.text-overlay2').show();
  }).mouseout(function() {
    $('.text-overlay2').hide();
  });

  $('.wrap3').mouseover(function() {
    $('.text-overlay3').show();
  }).mouseout(function() {
    $('.text-overlay3').hide();
  });

  $('.wrap4').mouseover(function() {
    $('.text-overlay4').show();
  }).mouseout(function() {
    $('.text-overlay4').hide();
  });

  $('.wrap5').mouseover(function() {
    $('.text-overlay5').show();
  }).mouseout(function() {
    $('.text-overlay5').hide();
  });

  $('.wrap6').mouseover(function() {
    $('.text-overlay6').show();
  }).mouseout(function() {
    $('.text-overlay6').hide();
  });

  $('.wrap7').mouseover(function() {
    $('.text-overlay7').show();
  }).mouseout(function() {
    $('.text-overlay7').hide();
  });

  $('.wrap8').mouseover(function() {
    $('.text-overlay8').show();
  }).mouseout(function() {
    $('.text-overlay8').hide();
  });

});


function contact(form){
  var name = document.forms["myform"]["fname"].value;
      var email = document.forms["myform"]["email"].value;
      var message = document.forms["myform"]["message"].value;
      alert("Hi " + name + "," + " We have received your message. Thank you for reaching out to us. ");
        }
