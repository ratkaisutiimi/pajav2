(function($) {
  Drupal.behaviors.comment_ajax_login = {
    attach : function(context, settings) {
      if ($('.comment-ajax-login').length > 0) {
    	  var commentAjaxLink = $('.comment-ajax-login');
    	  var comment_ajax_settings = {};
          comment_ajax_settings.submit = {target : '.generic-empty-text-wrapper'};
          comment_ajax_settings.url = commentAjaxLink.attr('href');
          comment_ajax_settings.event = 'click tap';
          var ajax = new Drupal.ajax('.comment-ajax-login', commentAjaxLink, comment_ajax_settings);
          // Make a copy of the original function so we can still call it
          ajax.old_success = ajax.success;
      }
    }
  };
})(jQuery);
