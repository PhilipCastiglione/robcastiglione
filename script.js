let numFilms = 0;
let filmsEmbedded = 0;

function makeOembedScripts() {
  const videoStartUrl = 'https://www.vimeo.com/';
  const endpoint = 'https://vimeo.com/api/oembed.json';
  const callback = 'embedVideo';
  width = window.innerWidth;
  height = window.innerHeight - $('#nav')[0].getBoundingClientRect().bottom - 10;
  $.each($('.film'), function(i, el) {
    numFilms++;
    const videoEndUrl = el.id;
    const url = endpoint + '?url=' + encodeURIComponent(videoStartUrl + videoEndUrl) + '&callback=' + callback + '&width=' + width +  '&height=' + height;
    $.getScript(url);
  });
}

function embedVideo(video) {
  $(`#${video.video_id}`)[0].innerHTML = unescape(video.html);
  filmsEmbedded++;
  if (filmsEmbedded === numFilms) {
    activateFilmsSlick();
  }
}

function playersResize() {
  width = window.innerWidth;
  height = window.innerHeight - $('#nav')[0].getBoundingClientRect().bottom - 10;
  $('.film').width(width);
  $('.film').height(height);
}

$(() => {
  if ($('.film').length > 0) {
    makeOembedScripts();
    $(window).resize(playersResize);
  }
  
  const toggleHamburger = function() {
    $(this).toggleClass('open');
    $('#mobile-dropdown').slideToggle();
  }
  $('#hamburger').on('click', toggleHamburger);
});

