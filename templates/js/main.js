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


$(document).ready(function() {
  (function(global){
    var svg = !!('createElementNS' in document &&
        document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect)
    
    if (!svg) document.body.className += ' no-svg'
    
    ;(global.updateSVGIMG = function(){
      var i, src, extension = svg ? '.svg' : '.png', 
        elements = document.getElementsByTagName('img')
      for (i=0;i<elements.length;i++)
        if (src = elements[i].getAttribute('data-svg')) {
          elements[i].src = src + extension
          elements[i].removeAttribute('data-svg')
        }
    })()
  })(this)

  //scroll to first pixel to avoid
if( !window.location.hash && window.addEventListener ){
    window.addEventListener( "load",function() {
        setTimeout(function(){
            window.scrollTo(0, 0);
        }, 0);
    });
    window.addEventListener( "orientationchange",function() {
        setTimeout(function(){
            window.scrollTo(0, 0);
        }, 0);
    });
    window.addEventListener( "touchstart",function() {
         setTimeout(function(){
             window.scrollTo(0, 0);
         }, 0);
     });
}



});
