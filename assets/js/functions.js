$( document ).ready(function() {

  $("ul > li > a").click(function(e) {
        // Prevent a page reload when a link is pressed
      e.preventDefault();
        // Call the scroll function
      goToByScroll(this.id);
  });

//This sequence of code shows/spawns divs when they are in the viewport
  $(window).on('scroll');

  var status = [];

  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

      /* Check the location of each desired element */
      $('.hideme').each( function(i, el){

          if (status[i] !== 'showing') { // Makes sure that we haven't already done this item

              var bottom_of_object = $(this).position().top + $(this).outerHeight() -100;
              var bottom_of_window = $(window).scrollTop() + $(window).height();

              /* If the object is completely visible in the window, fade it in*/
              if( bottom_of_window > (bottom_of_object) ){

                  $(this).animate({'opacity':'1'},500);
                  status[i] = 'showing';

                  if ($('.hideme').index($(this)) + 1 === $('.hideme').length) {
                      // We've shown them all, stop listening for scroll events!!!
                      $(window).off('scroll');
                  }

              }

          }

      });

  });



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

function goToByScroll(id){
    // Remove "link" from the ID
  id = id.replace("link", "");

  $('.side-list').toggleClass('reveal');
  $('.closenav').removeClass('show');
  $('.hamburger').show();
    // Scroll
  $('html,body').animate({
      scrollTop: $("."+id).offset().top},
      'slow');
}
