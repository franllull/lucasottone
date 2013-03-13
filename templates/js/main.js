//toggle mobile menu
$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');
  
$menulink.click(function() {
  $menulink.toggleClass('active');
  $menu.toggleClass('active');
  return false;
});});


//scroll to first pixel to avoid
/mobile/i.test(navigator.userAgent) && setTimeout(function () {
  window.scrollTo(0, 1);
}, 0001);
