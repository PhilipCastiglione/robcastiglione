function showOverlay() {
  $(".overlay-wrapper").show();
  $("#overlay-button").show();
  $("#overlay-button").on('click', showOverlay);
}

function hideOverlay() {
  $(".overlay-wrapper").hide();
}

function hideOverlayAndButton() {
  $(".overlay-wrapper").hide();
  $("#overlay-button").hide();
}
