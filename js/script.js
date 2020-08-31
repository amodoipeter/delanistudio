$(document).ready(function(){
  $("#development-image").click(function(){
    $("#development-image").slideDown('1500').hide('1000');
    $("#development").show('1500');
  });
  $("#development").click(function(){
    $("#development").slideUp('1500');
    $("#development-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").slideDown('1500').hide('1000');
    $("#design").show('1500');
  });
  $("#design").click(function(){
    $("#design").slideUp('1500');
    $("#design-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#product-image").click(function(){
    $("#product-image").slideDown('1500').hide('1000');
    $("#product").show('1500');
  });
  $("#product").click(function(){
    $("#product").slideUp('1500');
    $("#product-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#work1").mouseover(function(){
    $("#one").show();
  }).mouseout(function(){
    $("#one").hide();
  });
});
$(document).ready(function(){
  $("#work2").mouseover(function(){
    $("#two").show();
  }).mouseout(function(){
    $("#two").hide();
  });
});
$(document).ready(function(){
  $("#work3").mouseover(function(){
    $("#three").show();
  }).mouseout(function(){
    $("#three").hide();
  });
});
$(document).ready(function(){
  $("#work4").mouseover(function(){
    $("#four").show();
  }).mouseout(function(){
    $("#four").hide();
  });
});

$(document).ready(function(){
  $("#work5").mouseover(function(){
    $("#five").show();
  }).mouseout(function(){
    $("#five").hide();
  });
  $("#work6").mouseover(function(){
    $("#six").show();
  }).mouseout(function(){
    $("#six").hide();
  });
  $("#work7").mouseover(function(){
    $("#seven").show();
  }).mouseout(function(){
    $("#seven").hide();
  });
  $("#work8").mouseover(function(){
    $("#eight").show();
  }).mouseout(function(){
    $("#eight").hide();
  });
});

$("form#form").on('submit',function(event){
    event.preventDefault();
    let name = $("input#name").val();
    let email = $("input#email").val();
    let message = $("textarea#message").val();

    if ($("input#name").val() && $("input#email").val()){
        alert ("Hi " + name + ", Thanks for reaching out, we'll get back to you shortly.");
    }
    else {
        alert("Please provide your correct name and email!");
    }

});
