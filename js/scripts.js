$(document).ready(function() {
  $("form#dateQuiz").submit(function(event)) {
    var gender = ($("input#gender").val());
    var genre = ($("select#genreEntertainment").val());

    event.preventDefault();
  });
});
