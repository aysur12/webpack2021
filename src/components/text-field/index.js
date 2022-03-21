import TextField from './TextField';
import 'material-icons/iconfont/material-icons.css';

import '../arrow';
import './text-field.scss';

jQuery(($) => {
  $('.js-text-field__input_masked').each(function() {
    new TextField($(this));
  });
});
