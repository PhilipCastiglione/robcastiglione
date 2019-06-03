window.films = [
  {
    id: "150999934",
    title: "",
    thumbnail: "",
    featured: false,
  },
  {
    id: "151095375",
    title: "",
    thumbnail: "",
    featured: false,
  },
  {
    id: "151217659",
    title: "",
    thumbnail: "",
    featured: false,
  },
  {
    id: "61446944",
    title: "",
    thumbnail: "",
    featured: false,
  },
  {
    id: "61985633",
    title: "",
    thumbnail: "",
    featured: false,
  },
  {
    id: "61781930",
    title: "",
    thumbnail: "",
    featured: false,
  },
  {
    id: "21737556",
    title: "",
    thumbnail: "",
    featured: false,
  },
  {
    id: "61693236",
    title: "",
    thumbnail: "",
    featured: false,
  },
  {
    id: "240324102",
    title: "Together Like This",
    thumbnail: "https://i.vimeocdn.com/video/663581762_1280x534.jpg",
    featured: true,
  },
  {
    id: "240327612",
    title: "Beauty Index 8 September",
    thumbnail: "https://i.vimeocdn.com/video/663585840_1280x534.jpg",
    featured: true,
  },
  {
    id: "240330666",
    title: "The Beauty Index",
    thumbnail: "https://i.vimeocdn.com/video/663588259_1280x540.jpg",
    featured: true,
  },
  {
    id: "240332798",
    title: "Annette Carmichal",
    thumbnail: "https://i.vimeocdn.com/video/663590133_1280x534.jpg",
    featured: true,
  },
  {
    id: "240333665",
    title: "Funk The Big Red Chicken",
    thumbnail: "https://i.vimeocdn.com/video/663595160_1280x534.jpg",
    featured: true,
  },
  {
    id: "241265227",
    title: "Festival of Voice 2015",
    thumbnail: "https://i.vimeocdn.com/video/664825173_1280x720.jpg",
    featured: true,
  },
  {
    id: "241280992",
    title: "Festival of Voice 2016",
    thumbnail: "https://i.vimeocdn.com/video/664825148_1280x720.jpg",
    featured: true,
  },
  {
    id: "241267612",
    title: "Festival of Voice 2017",
    thumbnail: "https://i.vimeocdn.com/video/664808160_1280x534.jpg",
    featured: true,
  },
  {
    id: "184482796",
    title: "The Singer",
    thumbnail: "https://i.vimeocdn.com/video/593944682_1280x533.jpg",
    featured: true,
  },
  {
    id: "208229820",
    title: "Naomi’s Revenge",
    thumbnail: "https://i.vimeocdn.com/video/623511289_1280x535.jpg",
    featured: true,
  },
  {
    id: "207977174",
    title: "Setonaikai Dream",
    thumbnail: "https://i.vimeocdn.com/video/623196807_1280x535.jpg",
    featured: true,
  },
  {
    id: "271027871",
    title: "Let the sun shine on your face",
    thumbnail: "http://i.vimeocdn.com/video/702205193_1200x500.jpg",
    featured: true,
  },
  {
    id: "282093133",
    title: "Forest Guardians",
    thumbnail: "https://i.vimeocdn.com/video/716030131.jpg",
    featured: true,
  },
];

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
