import TextField from './TextField';
import '../arrow';
import './text-field.scss';

$('.js-text-field__input_masked').each(function () {
  const inputMasked = new TextField($(this));
});
