$(document).ready(function(){
    $("#design-paragraph").click(function(){
     $("#design-img").show();
     $("#design-paragraph").hide();
    });
    $("#design-img").click(function(){
      $("#design-paragraph").show();
      $("#design-img").hide();
    })
   });
   $(document).ready(function(){
     $("#development-paragraph").click(function(){
      $("#development-img").show();
      $("#development-paragraph").hide();
     });
     $("#development-img").click(function(){
       $("#development-paragraph").show();
       $("#development-img").hide();
     })
    });
    $(document).ready(function(){
     $("#product-paragraph").click(function(){
      $("#product-img").show();
      $("#product-paragraph").hide();
     });
     $("#product-img").click(function(){
       $("#product-paragraph").show();
       $("#product-img").hide();
     })
    });
    $(document).ready(function(){
     $("#work1").mouseover(function(){
       $("#dec1").show();
     }).mouseout(function(){
       $("#dec1").hide();
     });
   });
   $(document).ready(function(){
     $("#work2").mouseover(function(){
       $("#dec2").show();
     }).mouseout(function(){
       $("#dec2").hide();
     });
   });
   $(document).ready(function(){
     $("#work3").mouseover(function(){
       $("#dec3").show();
     }).mouseout(function(){
       $("#dec3").hide();
     });
   });
   $(document).ready(function(){
     $("#work4").mouseover(function(){
       $("#dec4").show();
     }).mouseout(function(){
       $("#dec4").hide();
     });
   });
   $(document).ready(function(){
     $("#work5").mouseover(function(){
       $("#dec5").show();
     }).mouseout(function(){
       $("#dec5").hide();
     });
     $("#work6").mouseover(function(){
       $("#dec6").show();
     }).mouseout(function(){
       $("#dec6").hide();
     });
     $("#work7").mouseover(function(){
       $("#dec7").show();
     }).mouseout(function(){
       $("#dec7").hide();
     });
     $("#work8").mouseover(function(){
       $("#dec8").show();
     }).mouseout(function(){
       $("#dec8").hide();
     });
   });
   $(document).ready(function(){
    $("form#form2").submit(function(event){
      var name = $("input#yourname").val();
      var email = $("input#youremail").val();
      var message = $("textarea#comment").val();
      event.preventDefault();
      if ($("input#yourname").val() && $("input#youremail").val()){
       alert (name + ", we have received your message. Thank you for contacting us.");
     }
     else{
       alert("please enter your name and email");
     }
    });
   });

    


