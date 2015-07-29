$(document).ready(ready);
$(document).on('page:load', ready);

function ready() {
  if (window.location.pathname === '/') {
    console.log('yo');
    numFilms = 0;
    filmsEmbedded = 0;
    makeOembedScripts();
  } else if (window.location.pathname === '/stills') {
    activateStillsSlick();
  }
}
