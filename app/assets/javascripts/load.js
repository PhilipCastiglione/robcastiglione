$(ready);

function checkPath(path) {
  return window.location.pathname === path;
}

function ready() {
  hideOverlayAndButton();
  if (checkPath('/')) {
    numFilms = 0;
    filmsEmbedded = 0;
    makeOembedScripts();
    initOverlayPage();
  } else if (checkPath('/sounds')) {
    numSounds = 0;
    soundsEmbedded = 0;
    soundcloudWidget(embedSoundcloud);
    initOverlayPage();
  } else if (checkPath('/stills')) {
    activateStillsSlick();
    initOverlayPage();
  } else if (checkPath('/admin')) {
    attachAdminListeners();
  }
  
  var toggleHamburger = function() {
    $(this).toggleClass('open');
    $('#mobile-dropdown').slideToggle();
  }
  $('#hamburger').on('click', toggleHamburger);
   
  $(window).resize(playersResize);
  $(window).scroll(stickyNav);
}
