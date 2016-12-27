$( document ).ready(function() {
  // Get started!
  $('.toggle').click(function(){
    $('.site-nav').css('width','200');
  });
  $('.closenav > i').click(function(){
    $('.site-nav').css('width','0');
  });
});
