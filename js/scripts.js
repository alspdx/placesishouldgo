function Place(placeName, landmarks, season, special) {
  this.placeName = placeName;
  this.landmarks = landmarks;
  this.season = season;
  this.special = special;
}

$(document).ready(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();

    var inputtedPlaceName = $("#place-name").val();
    var inputtedLandmarks = $("#landmarks").val();
    var inputtedSeason = $("#season").val();
    var inputtedSpecial = $("#special").val();

    var newPlace = new Place(inputtedPlaceName, inputtedLandmarks, inputtedSeason, inputtedSpecial);

    $("#display-list").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");

    $("#place-name").val("");
    $("#landmarks").val("");
    $("#season").val("");
    $("#special").val("");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.placeName);
      $(".new-landmarks").text(newPlace.landmarks);
      $(".best-season").text(newPlace.season);
      $(".special-stuff").text(newPlace.special);
    });

  });
});
