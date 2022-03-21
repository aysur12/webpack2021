import 'jquery.maskedinput/src/jquery.maskedinput';

class TextField {
  constructor($component) {
    this.$component = $component;
    this.maskedInput();
  }

  maskedInput() {
    this.$component.mask('99.99.9999');
  }
}

export default TextField;
