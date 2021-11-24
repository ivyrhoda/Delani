$(document).ready(function() {
  $('.click').click(function() {
      $(this).children('.hide').slideToggle(1200);
      $(this).children('.show').toggle(1500);
    });
  });
// $(document).ready(function(){
//     $("#par1").click(function(){
//      $("#design-image").show();
//      $("#par1").hide();
//     });
//     $("#design-image").click(function(){
//       $("#par1").show();
//       $("#design-image").hide();
//     })
//    });
//    $(document).ready(function(){
//      $("#par2").click(function(){
//       $("#development-image").show();
//       $("#par2").hide();
//      });
//      $("#development-image").click(function(){
//        $("#par2").show();
//        $("#development-image").hide();
//      })
//     });
//     $(document).ready(function(){
//      $("#par3").click(function(){
//       $("#product-image").show();
//       $("#par3").hide();
//      });
//      $("#product-image").click(function(){
//        $("#par3").show();
//        $("#product-image").hide();
//      })
//     });
//     $(document).ready(function(){
//      $("#work1").mouseover(function(){
//        $("#dec1").show();
//      }).mouseout(function(){
//        $("#dec1").hide();
//      });
//    });
//    $(document).ready(function(){
//      $("#work2").mouseover(function(){
//        $("#dec2").show();
//      }).mouseout(function(){
//        $("#dec2").hide();
//      });
//    });
//    $(document).ready(function(){
//      $("#work3").mouseover(function(){
//        $("#dec3").show();
//      }).mouseout(function(){
//        $("#dec3").hide();
//      });
//    });
//    $(document).ready(function(){
//      $("#work4").mouseover(function(){
//        $("#dec4").show();
//      }).mouseout(function(){
//        $("#dec4").hide();
//      });
//    });
//    $(document).ready(function(){
//      $("#work5").mouseover(function(){
//        $("#dec5").show();
//      }).mouseout(function(){
//        $("#dec5").hide();
//      });
//      $("#work6").mouseover(function(){
//        $("#dec6").show();
//      }).mouseout(function(){
//        $("#dec6").hide();
//      });
//      $("#work7").mouseover(function(){
//        $("#dec7").show();
//      }).mouseout(function(){
//        $("#dec7").hide();
//      });
//      $("#work8").mouseover(function(){
//        $("#dec8").show();
//      }).mouseout(function(){
//        $("#dec8").hide();
//      });
//    });
//    $(document).ready(function(){
//     $("form#form2").submit(function(event){
//       var name = $("input#name").val();
//       var email = $("input#email").val();
//       var message = $("textarea#comment").val();
//       event.preventDefault();
//       if ($("input#name").val() && $("input#email").val()){
//        alert (name + ", we have received your message. Thank you for contacting us.");
//      }
//      else{
//        alert("please enter your name and email");
//      }
//     });
//    });
