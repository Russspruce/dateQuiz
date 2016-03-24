$(document).ready(function() {
  $("form#dateQuiz").submit(function(event) {
    var gender = ($("select#gender").val());
    var genre = ($("select#genreEntertainment").val());

    if (gender === 'female' && genre === 'movie') {
      $(location).attr("href", "img/movieF.jpg")
    }
    else if (gender === 'male' && genre === 'movie') {
      $(location).attr("href", "img/movieM.jpg")
    }
    else if (gender === 'female' && genre === 'music') {
      $(location).attr("href", "img/musicM.jpg")
    }
    else if (gender === 'male' && genre === 'music') {
      $(location).attr("href", "img/musicF.jpg")
    }
    else if (gender === 'female' && genre === 'tele') {
      $(location).attr("href", "img/tvM.jpg")
    }
    else if (gender === 'male' && genre === 'tele') {
      $(location).attr("href", "img/tvF.jpg")
    }
    else if (gender === 'female' && genre === 'internet') {
      $(location).attr("href", "img/internetM.jpg")
    }
    else if (gender === 'male' && genre === 'internet') {
      $(location).attr("href", "img/internetF.jpg")
    }
    else {
      alert("Please select a gender and genre to find your date.");
    }

    event.preventDefault();
  });
});
