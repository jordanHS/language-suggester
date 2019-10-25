$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var ans1 = parseInt($("input:radio[name=subject]:checked").val())
    var ans2 = parseInt($("input:radio[name=pets]:checked").val())
    var ans3 = parseInt($("input:radio[name=subject]:checked").val())
    var ans4 = parseInt($("input:radio[name=season]:checked").val())

    var total = ans1 + ans2 + ans4

    if (tot)
  });
});
