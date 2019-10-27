$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var ans1 = parseInt($("input:radio[name=subject]:checked").val());
    var ans2 = parseInt($("input:radio[name=pets]:checked").val());
    var ans3 = parseInt($("input:radio[name=music]:checked").val());
    var ans4 = parseInt($("input:radio[name=season]:checked").val());

    var total = ans1 + ans2 + ans3 + ans4

    if (total >= 4 && total <= 6) {
      $('#resultOne').show();
    }
    // } else if (total >= 6 && total <= 8) {
    //   $("#resultTwo").show();
    // } else if (total >= 8 && total <= 10) {
    //   $("#resultThree").show();
    // } else if (total >= 10 && total <= 12) {
    //   $("#resultFour").show();
    // }

    $(".name").text(name);

      
  });
});
