$(ready);

function checkPath(path) {
  return window.location.pathname === path;
}

function ready() {
  if (checkPath('/')) {
    numFilms = 0;
    filmsEmbedded = 0;
    makeOembedScripts();
  } else if (checkPath('/sound')) {
    numSounds = 0;
    soundsEmbedded = 0;
    soundcloudWidget(embedSoundcloud);
  } else if (checkPath('/stills')) {
    activateStillsSlick();
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
