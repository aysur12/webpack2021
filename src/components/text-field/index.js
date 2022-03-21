import TextField from './TextField';
import 'material-icons/iconfont/material-icons.css';

import '../arrow';
import './text-field.scss';

$('.js-text-field__input_masked').each(function () {
  const inputMasked = new TextField($(this));
});
