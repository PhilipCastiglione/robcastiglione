$(document).ready(ready);
$(document).on('page:load', ready);

function ready() {
  if (window.location.pathname === '/') {
    numFilms = 0;
    filmsEmbedded = 0;
    makeOembedScripts();
  } else if (window.location.pathname === '/stills') {
    activateStillsSlick();
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
