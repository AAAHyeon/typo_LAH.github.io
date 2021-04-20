
$( document ).ready( function() {

    $(".bt1").mousedown(function() {

            $(".con_1").slideToggle(500)
            $(".drop").slideToggle(300)


          });
    $(".bt2").mousedown(function() {
          $(".con_2").slideToggle(500);
          $(".drop").slideToggle(300)
          // $(".background").slideToggle(300)
        });

    $(".bt3").mousedown(function() {
          $(".con_3").slideToggle(500);
          $(".drop").slideToggle(300)
              // $(".background").slideToggle(300)
        });


});

// $(".view_bt2").mousedown( function() {
// $("body").css("background-color","yellow");
// });
