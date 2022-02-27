import * as jQuery from 'jquery';

import './rate-button.scss';

jQuery(($) => {
  
  /* 2. Action to perform on click */
  $('rate-button__icon').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('rate-button');
    
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('rate-button__icon_selected');
    }
    
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('rate-button__icon_selected');
    }
  });
});