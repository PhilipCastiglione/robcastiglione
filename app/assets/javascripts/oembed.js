// GLOBALS
var numFilms = 0;
var filmsEmbedded = 0;
var width = 0;
var height = 0;
  
function makeOembedScripts() {
  numFilms++;
  var videoStartUrl = 'http://www.vimeo.com/';
  var endpoint = 'http://www.vimeo.com/api/oembed.json';
  var callback = 'embedVideo';
  var url;
  var videoEndUrl;
  width = window.innerWidth;
  height = window.innerHeight - $('.films-carousel')[0].getBoundingClientRect().top - 10;
  $.each($('.film'), function(i, el) {
    videoEndUrl = el.id;
    url = endpoint + '?url=' + encodeURIComponent(videoStartUrl + videoEndUrl) + '&callback=' + callback + '&width=' + width +  '&height=' + height;
    var $js = $("<script>");
    $js.attr('type', 'text/javascript');
    $js.attr('src', url);
    $('head').append($js);
  });
}

function embedVideo(video) {
  $('#'+video.video_id)[0].innerHTML = unescape(video.html);
  filmsEmbedded++;
  if (filmsEmbedded === numFilms) {
    activateFilmsSlick();
  }
}

function playersResize() {
  console.log('yo');
  width = window.innerWidth;
  height = window.innerHeight - $('.films-carousel')[0].getBoundingClientRect().top - 10;
  $('.film').width(width);
  $('.film').height(height);
}
