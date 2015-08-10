function showOverlay() {
  $(".overlay-wrapper").removeClass('not-displayed');
  $("#overlay-button").removeClass('not-displayed');
  $(".overlay-wrapper").toggleClass('hidden', $(this).hasClass('hidden'));
  $("#overlay-button").toggleClass('hidden', $(this).hasClass('hidden'));
}

function toggleOverlay() {
  $(".overlay-wrapper").toggleClass('hidden');
}

function hideOverlayAndButton() {
  $(".overlay-wrapper").addClass('not-displayed');
  $("#overlay-button").addClass('not-displayed');
}

function initOverlayPage() {
  $('.overlay-wrapper').on('click', toggleOverlay);
  $('#overlay-button').on('click', toggleOverlay);
}

