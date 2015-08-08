// GLOBALS
var numFilms = 0;
var filmsEmbedded = 0;
var width = 0;
var height = 0;

function makeOembedScripts() {
  var videoStartUrl = 'https://www.vimeo.com/';
  var endpoint = 'https://www.vimeo.com/api/oembed.json';
  var callback = 'embedVideo';
  var url;
  var videoEndUrl;
  width = window.innerWidth;
  height = window.innerHeight - $('#nav-main')[0].getBoundingClientRect().bottom - 10;
  $.each($('.film'), function(i, el) {
    numFilms++;
    videoEndUrl = el.id;
    url = endpoint + '?url=' + encodeURIComponent(videoStartUrl + videoEndUrl) + '&callback=' + callback + '&width=' + width +  '&height=' + height;
    var $js = $("<script>");
    $js.attr('type', 'text/javascript');
    $js.attr('src', url);
    $('head').append($js);
  });
}

function embedVideo(video) {
  if (checkPath('/')) {
    $('#'+video.video_id)[0].innerHTML = unescape(video.html);
    filmsEmbedded++;
    if (filmsEmbedded === numFilms) {
      activateFilmsSlick();
    }
  }
}

function playersResize() {
  width = window.innerWidth;
  height = window.innerHeight - $('#nav-main')[0].getBoundingClientRect().bottom - 10;
  $('.film').width(width);
  $('.film').height(height);
}
