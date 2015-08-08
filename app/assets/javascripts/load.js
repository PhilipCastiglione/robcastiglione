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
    $('.overlay-wrapper').on('click', hideOverlay);
  } else if (checkPath('/sounds')) {
    numSounds = 0;
    soundsEmbedded = 0;
    soundcloudWidget(embedSoundcloud);
    $('.overlay-wrapper').on('click', hideOverlay);
  } else if (checkPath('/stills')) {
    activateStillsSlick();
    $('.overlay-wrapper').on('click', hideOverlay);
  } else if (checkPath('/admin')) {
    attachAdminListeners();
  }

  var stickyNavTop = $('#nav-main').offset().top;
   
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
    (scrollTop > stickyNavTop)? $('#nav-main').addClass('sticky') : $('#nav-main').removeClass('sticky');
  };
   
  stickyNav();
   
  $(window).resize(playersResize);
  $(window).scroll(stickyNav);
}
