$(document).ready(function() {
  var stickyNavTop = $('#nav-main').offset().top;
   
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
          
    if (scrollTop > stickyNavTop) { 
        $('#nav-main').addClass('sticky');
    } else {
        $('#nav-main').removeClass('sticky'); 
    }
  };
   
  stickyNav();
   
  $(window).scroll(function() {
    stickyNav();
  });
});