import jQuery from 'jquery';
import 'jquery.maskedinput/src/jquery.maskedinput';
import 'material-icons/iconfont/material-icons.css';

import '../arrow';
import './text-field.scss';

jQuery(($) => {
  $('.text-field__input_masked').mask('99.99.9999');
});


/*
const $inputMasked = $('.text-field__input_masked');
$inputMasked.mask('99.99.9999');

js-text-field__input_masked
*/