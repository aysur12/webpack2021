import * as jQuery from 'jquery';
import 'jquery.maskedinput/src/jquery.maskedinput';
import 'material-icons/iconfont/material-icons.css';

import '../../components/arrow';
import './text-field.scss';

jQuery(function($) {
  $(".text-field__input_masked").mask("99.99.9999");
}); 