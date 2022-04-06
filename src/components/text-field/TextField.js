import 'jquery.maskedinput/src/jquery.maskedinput';

const typeMask = '99.99.9999';
class TextField {
  constructor($component) {
    this.$component = $component;
    this.maskedInput();
  }

  maskedInput() {
    const { $component } = this;

    $component.mask(`${typeMask}`);
  }
}

export default TextField;
