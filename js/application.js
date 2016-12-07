$(function(){
  
  $("input[placeholder], textarea[placeholder]").placeholder();
  $('.main_navigation li:has(ul), .extended_navigation li:has(ul)').doubleTapToGo();
  
  /* upload file fields */
  var fileInput = $('.file_field');
  
  fileInput.change(function(){
	  $this = $(this);
	  var filename_text = $this.val().split("\\").pop();
	  
	  if(filename_text.length > 23) {
		  var current_text = jQuery.trim(filename_text).substring(0, 22).slice(0, -1) + "...";
		  }
	  else {
		  current_text = filename_text
		  }
	  
	  $('.file_field_block').text(current_text);
  })
  
  $('.file_button').click(function(){
	  fileInput.click();
  }).show();
  /* end*/
  
  /* upload photos button */
  $('.add_button a').click(function() {
    $('.add_photo_button').click(); 
  });
  /* end */
  
  /* social popup */
  $('.socials_popup .close_link').on('click', function() {
    $('.socials_overlay').fadeOut(100);
    $('.socials_popup').fadeOut(100);
  });
  /* end */
  
  /* activity add video */
  $('.activity_form a.video_link').on('click', function() {
    var popup = $(this).parents('.activity_form').find('.video_wrapper');
    
    if(popup.is(':hidden')) {
      popup.fadeIn(150);
    }
  });
  
  $('.activity_answer_form a.video_link').on('click', function() {
    var popup = $(this).parents('.activity_answer_form').find('.video_wrapper');
    
    if(popup.is(':hidden')) {
      popup.fadeIn(150);
    }
  });
  
  $('.activity_comment_form a.video_link').on('click', function() {
    var popup = $(this).parents('.activity_comment_form').find('.video_wrapper');
    
    if(popup.is(':hidden')) {
      popup.fadeIn(150);
    }
  });
  
  $('.video_wrapper a.close_popup').on('click', function() {
    $(this).parents('.video_wrapper').fadeOut(150);
  });
  /* end */
  
  /* activity add photo */
  $('.activity_form a.photo_link').on('click', function() {
    var popup = $(this).parents('.activity_form').find('.photo_wrapper');
    
    if(popup.is(':hidden')) {
      popup.fadeIn(150);
    }
  });
  
  $('.activity_answer_form a.photo_link').on('click', function() {
    var popup = $(this).parents('.activity_answer_form').find('.photo_wrapper');
    
    if(popup.is(':hidden')) {
      popup.fadeIn(150);
    }
  });
  
  $('.activity_comment_form a.photo_link').on('click', function() {
    var popup = $(this).parents('.activity_comment_form').find('.photo_wrapper');
    
    if(popup.is(':hidden')) {
      popup.fadeIn(150);
    }
  });
  
  $('.photo_wrapper a.close_popup').on('click', function() {
    $(this).parents('.photo_wrapper').fadeOut(150);
  });
  /* end */
  
});

/* navigation */
$(document).ready(function() {
  var touch_nav = $('.touch_nav');
  var navigation = $('.main_navigation ul');
  
  $(touch_nav).on('click', function(e) {
    e.preventDefault();
    navigation.slideToggle();
    touch_nav.toggleClass('opened');
    
    $('.user_block .not_logined').slideUp();
    $('.user_block .logined').slideUp();
    $('.touch_auth_menu').removeClass('opened');
    $('.touch_user_menu').removeClass('opened');
  });
  
  $(window).resize(function() {
    var window_width = $(document).width();
    
    if(window_width > 1023) {
      navigation.removeAttr('style');
      touch_nav.removeClass('opened');
    }
  });
});
/* end */

/* usermenu */
$(document).ready(function() {
  var touch_auth = $('.touch_auth_menu');
  var touch_user = $('.touch_user_menu');
  var menu_not_logined = $('.user_block .not_logined');
  var menu_logined = $('.user_block .logined');
  
  $(touch_auth).on('click', function(e) {
    e.preventDefault();
    menu_not_logined.slideToggle();
    touch_auth.toggleClass('opened');
    
    $('.main_navigation ul').slideUp();
    $('.touch_nav').removeClass('opened');
  });
  
  $(touch_user).on('click', function(e) {
    e.preventDefault();
    menu_logined.slideToggle();
    touch_user.toggleClass('opened');
    
    $('.main_navigation ul').slideUp();
    $('.touch_nav').removeClass('opened');
  });
  
  $(window).resize(function() {
    var window_width = $(document).width();
    
    if(window_width > 1023) {
      menu_not_logined.removeAttr('style');
      menu_logined.removeAttr('style');
      touch_auth.removeClass('opened');
    }
  });
});
/* end */

/* footer */
$(window).load(function() {
  var content = $('.content_block');
  var footer = $('.footer');
  var footer_height = footer.innerHeight();
    
  content.css({'padding-bottom' : (footer_height) + 'px'});
  footer.css({'margin-top' : '-' + footer_height + 'px'});
});

$(window).resize(function() {
  var content = $('.content_block');
  var footer = $('.footer');
  var footer_height = footer.innerHeight();
    
  content.css({'padding-bottom' : (footer_height) + 'px'});
  footer.css({'margin-top' : '-' + footer_height + 'px'});
});
/* end */

/* help cloud */
$(document).ready(function() {
  var link = $('.help_link');
  var cloud = $('.help_cloud');
  var close = $('.help_cloud .close_cloud');
  
  $(link).on('click', function(e) {
    e.preventDefault();
    cloud.slideDown();
  });
  
  $(close).on('click', function(e) {
    e.preventDefault();
    cloud.slideUp();
  });
});
/* end */

/* news categories */
$(document).ready(function() {
  var categories = $('.news_header_block .categories_block li');
  var cat_background = $('.news_header_block li .color_bg');
  
  $(categories).on('mouseover', function(e) {
    cat_background.animate({'height': '3px'}, 90);
    $(this).find('.color_bg').animate({'height': '40px'}, 90);
  });
  
  $(categories).on('mouseout', function(e) {
    cat_background.animate({'height': '3px'}, 90);
  });
});
/* end */

/* comments */
$(window).load(function() {
  var window_width = $('body').width();
  var answer_width = $('.comments_list > .comment').width();
  
  if(window_width < 589) {
    $('.comments_list .comment .comment').css({'margin-left' : '-62px', 'width' :  (answer_width) + 'px'});
  }
  else {
    $('.comments_list .comment .comment').css({'margin-left' : '0px', 'width' :  '100%'});
  }
});

$(window).resize(function() {
  var window_width = $('body').width();
  var list_width = $('.comments_list').width();
  
  $('.comments_list > .comment').css({'width' :  (list_width) + 'px'});
  
  if(window_width < 589) {
    $('.comments_list .comment .comment').css({'margin-left' : '-62px', 'width' :  (list_width) + 'px'});
  }
  else {
    $('.comments_list .comment .comment').css({'margin-left' : '0px', 'width' :  '100%'});
  }
});
/* end */

/* posts */
$(window).load(function() {
  var window_width = $('body').width();
  var answer_width = $('.posts_list > .post').width();
  
  if(window_width < 589) {
    $('.posts_list .post .post').css({'margin-left' : '-62px', 'width' :  (answer_width) + 'px'});
  }
  else {
    $('.posts_list .post .post').css({'margin-left' : '0px', 'width' :  '100%'});
  }
});

$(window).resize(function() {
  var window_width = $('body').width();
  var answer_width = $('.posts_list > .post').width();
  
  if(window_width < 589) {
    $('.posts_list .post .post').css({'margin-left' : '-62px', 'width' :  (answer_width) + 'px'});
  }
  else {
    $('.posts_list .post .post').css({'margin-left' : '0px', 'width' :  '100%'});
  }
});
/* end */

/* photos info */
$(window).load(function() {
  if(!('ontouchstart' in window) && !navigator.msMaxTouchPoints && !navigator.userAgent.toLowerCase().match( /windows phone os 7/i )) {
    return false;
  }
    
  var info_block = $('.photos .photo .photo_info');
  var bottom_block = $('.photos .photo .bottom_block, .videos .video .bottom_block');
  
  info_block.css({'display': 'block'});
  bottom_block.css({'display': 'block'});
});

$(function() {
  $('.photos .photo, .videos .video').hover(function() {
    if(('ontouchstart' in window) || navigator.msMaxTouchPoints || navigator.userAgent.toLowerCase().match( /windows phone os 7/i )) {
      return false;
    }
    
    $(this).find('.photo_info').slideToggle('fast');
    $(this).find('.bottom_block').slideToggle('fast');
  });
});
/* end */

/* photo popup */
$(window).load(function() {
  var window_width = $('body').width();
  var window_height = $('body').height();
  var photo_height = $('.main_photo_container .photo img').height();
  var photo_width = $('.main_photo_container .photo img').width();
  
  var photo_block = $('.main_photo_container .photo_block');
  
  if(window_width > 1024) {
    photo_block.css({'height' : (window_height - 143) + 'px'});
  }
  else if(window_width >= 768) {
    photo_block.css({'height' : (window_height - 108) + 'px'});
  }
  else {
    if(photo_height > window_height) {
      photo_block.css({'height' : window_height + 'px'});
    }
    else {
      photo_block.css({'height' : 'auto'});
    }
  }
  
  $('.main_photo_container .prev_photo').css({'height' : photo_block.height() + 'px'});
  $('.main_photo_container .next_photo').css({'height' : photo_block.height() + 'px'});
});

$(window).load(function() {
  var photo_width = $('.main_photo_container .photo img').width();
  
  $('.color_themes').css({'width' : photo_width + 'px', 'margin-left' : '-' + (photo_width / 2) + 'px'});
});

$(window).resize(function() {
  var window_width = $('body').width();
  var window_height = $('body').height();
  var photo_height = $('.main_photo_container .photo img').height();
  var photo_width = $('.main_photo_container .photo img').width();
  
  var photo_block = $('.main_photo_container .photo_block');
  
  if(window_width > 1024) {
    photo_block.css({'height' : (window_height - 143) + 'px'});
  }
  else if(window_width >= 768) {
    photo_block.css({'height' : (window_height - 108) + 'px'});
  }
  else {
    if(photo_height > window_height) {
      photo_block.css({'height' : window_height + 'px'});
    }
    else {
      photo_block.css({'height' : 'auto'});
    }
  }
  
  $('.main_photo_container .prev_photo').css({'height' : photo_block.height() + 'px'});
  $('.main_photo_container .next_photo').css({'height' : photo_block.height() + 'px'});
  
  $('.color_themes').css({'width' : photo_width + 'px', 'margin-left' : '-' + (photo_width / 2) + 'px'});
});

$(function() {
  $('.color_themes span').click(function() {
    var picked_color = $(this).css('background-color');
    
    $('.main_photo_container').css({'background-color' : picked_color});
  });
});
/* end */

/* authentication popup */
$(window).load(function() {
  $('.auth_popup').css({'margin-top': '-' + ($('.auth_popup').innerHeight() / 2) + 'px', 'top' : '50%'});
  $('.auth_popup').css({'margin-left': '-' + ($('.auth_popup').innerWidth() / 2) + 'px', 'left' : '50%'});
});

$(window).resize(function() {
  $('.auth_popup').css({'margin-top': '-' + ($('.auth_popup').innerHeight() / 2) + 'px', 'top' : '50%'});
  $('.auth_popup').css({'margin-left': '-' + ($('.auth_popup').innerWidth() / 2) + 'px', 'left' : '50%'});
});

$(function(){
  $('.auth_popup .close_link').on('click', function() {
    $('.auth_overlay').fadeOut(100);
    $('.auth_popup').fadeOut(100);
  });
});
/* end */