$( document ).ready(function() {
  // Get started!



  //Show and hide navbar
  $('.hamburger').click(function(){
    $('.closenav').addClass('show');
    $(this).hide();
    $('.side-list').toggleClass('reveal');
  });
  $('.closenav').click(function(){
    $('.side-list').toggleClass('reveal');
    $(this).removeClass('show');
    $('.hamburger').show();

  });
});
