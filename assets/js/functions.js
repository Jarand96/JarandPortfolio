$( document ).ready(function() {
  // Get started!



  //Show and hide navbar
  $('.hamburger').click(function(){
    $('.side-list').css({'width':'400','opacity':'1'});
    $('.site-nav > ul').addClass('show');
  });
  $('.closenav > i').click(function(){
    $('.site-nav').css('width','0');
    $('.site-nav > ul').removeClass('show');

  });
});
