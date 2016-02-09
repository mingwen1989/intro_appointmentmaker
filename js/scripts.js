$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var aptDateInput = $("input#aptDate").val();
    var startTimeInput = $("input#startTime").val();
    var endTimeInput = $("input#endTime").val();

    $(".name").text(nameInput);
    $(".aptDate").text(aptDateInput);
    $(".startTime").text(startTimeInput);
    $(".endTime").text(endTimeInput);

    $("#story").show();

    event.preventDefault();
  });
});
