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

  $(window).resize(playersResize);
}
