/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/arrow/index.js":
/*!***************************************!*\
  !*** ./src/components/arrow/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrow_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow.scss */ "./src/components/arrow/arrow.scss");


/***/ }),

/***/ "./src/components/benefit/index.js":
/*!*****************************************!*\
  !*** ./src/components/benefit/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _benefit_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./benefit.scss */ "./src/components/benefit/benefit.scss");


/***/ }),

/***/ "./src/components/bullet/index.js":
/*!****************************************!*\
  !*** ./src/components/bullet/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bullet_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet.scss */ "./src/components/bullet/bullet.scss");


/***/ }),

/***/ "./src/components/button/index.js":
/*!****************************************!*\
  !*** ./src/components/button/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var material_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! material-icons/iconfont/material-icons.css */ "./node_modules/material-icons/iconfont/material-icons.css");
/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../arrow */ "./src/components/arrow/index.js");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.scss */ "./src/components/button/button.scss");




/***/ }),

/***/ "./src/components/checkbox-list/index.js":
/*!***********************************************!*\
  !*** ./src/components/checkbox-list/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_list_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox-list.scss */ "./src/components/checkbox-list/checkbox-list.scss");


/***/ }),

/***/ "./src/components/checkbox/index.js":
/*!******************************************!*\
  !*** ./src/components/checkbox/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.scss */ "./src/components/checkbox/checkbox.scss");


/***/ }),

/***/ "./src/components/desc-state-input/index.js":
/*!**************************************************!*\
  !*** ./src/components/desc-state-input/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _desc_state_input_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desc-state-input.scss */ "./src/components/desc-state-input/desc-state-input.scss");


/***/ }),

/***/ "./src/components/dropdown-common-value/index.js":
/*!*******************************************************!*\
  !*** ./src/components/dropdown-common-value/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_common_value_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-common-value.scss */ "./src/components/dropdown-common-value/dropdown-common-value.scss");


/***/ }),

/***/ "./src/components/like-button/LikeButton.js":
/*!**************************************************!*\
  !*** ./src/components/like-button/LikeButton.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LikeButton = /*#__PURE__*/function () {
  function LikeButton(button) {
    _classCallCheck(this, LikeButton);

    this.button = button;
    this.bindEventListeners();
  }

  _createClass(LikeButton, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      this.button.addEventListener('click', this.handleLikeButtonClick.bind(this));
    }
  }, {
    key: "handleLikeButtonClick",
    value: function handleLikeButtonClick() {
      this.button.classList.toggle('like-button_active');
      this.button.children[1].classList.toggle('like-button__count_active');
      var number = this.button.children[1].textContent;

      if (this.button.classList.contains('like-button_active')) {
        this.button.children[0].textContent = 'favorite';
        this.button.children[1].textContent = parseInt(number, 10) + 1;
      } else {
        this.button.children[0].textContent = 'favorite_border';
        this.button.children[1].textContent = parseInt(number, 10) - 1;
      }
    }
  }]);

  return LikeButton;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeButton);

/***/ }),

/***/ "./src/components/like-button/index.js":
/*!*********************************************!*\
  !*** ./src/components/like-button/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LikeButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LikeButton */ "./src/components/like-button/LikeButton.js");
/* harmony import */ var _like_button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./like-button.scss */ "./src/components/like-button/like-button.scss");


var likeButtons = document.querySelectorAll('.js-like-button');
likeButtons.forEach(function (button) {
  return new _LikeButton__WEBPACK_IMPORTED_MODULE_0__["default"](button);
});

/***/ }),

/***/ "./src/components/pagination/index.js":
/*!********************************************!*\
  !*** ./src/components/pagination/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button */ "./src/components/button/index.js");
/* harmony import */ var _pagination_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.scss */ "./src/components/pagination/pagination.scss");



/***/ }),

/***/ "./src/components/radio/index.js":
/*!***************************************!*\
  !*** ./src/components/radio/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio.scss */ "./src/components/radio/radio.scss");


/***/ }),

/***/ "./src/components/rate-button/index.js":
/*!*********************************************!*\
  !*** ./src/components/rate-button/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rate_button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rate-button.scss */ "./src/components/rate-button/rate-button.scss");


/***/ }),

/***/ "./src/components/rate/Rate.js":
/*!*************************************!*\
  !*** ./src/components/rate/Rate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rate = /*#__PURE__*/function () {
  function Rate(rateItem, clickedIdx) {
    _classCallCheck(this, Rate);

    this.rateItem = rateItem;
    this.clickedIdx = clickedIdx;
    this.bindEventListeners();
  }

  _createClass(Rate, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      this.rateItem.addEventListener('click', this.handleRateClick.bind(this));
    }
  }, {
    key: "handleRateClick",
    value: function handleRateClick() {
      var _this = this;

      var rateList = document.querySelectorAll('.js-rate');
      rateList.forEach(function (otherRateItem, otherIdx) {
        if (otherIdx <= _this.clickedIdx) {
          otherRateItem.classList.add('rate__item_active');
        } else {
          otherRateItem.classList.remove('rate__item_active');
        }
      });
    }
  }]);

  return Rate;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rate);

/***/ }),

/***/ "./src/components/rate/index.js":
/*!**************************************!*\
  !*** ./src/components/rate/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rate */ "./src/components/rate/Rate.js");
/* harmony import */ var _rate_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rate.scss */ "./src/components/rate/rate.scss");


var rateItems = document.querySelectorAll('ul.rate__list .js-rate');
rateItems.forEach(function (rateItem, clickedIdx) {
  return new _Rate__WEBPACK_IMPORTED_MODULE_0__["default"](rateItem, clickedIdx);
}); // rateStars.forEach((rateStar, clickedIdx) => {
//   rateStar.addEventListener('click', () => {
//     rateStars.forEach((otherRateStar, otherIdx) => {
//       if (otherIdx <= clickedIdx) {
//         otherRateStar.classList.add('rate__item_active');
//       } else {
//        otherRateStar.classList.remove('rate__item_active');
//       } 
//     });
//   });
// });

/***/ }),

/***/ "./src/components/testimonial/index.js":
/*!*********************************************!*\
  !*** ./src/components/testimonial/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testimonial_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testimonial.scss */ "./src/components/testimonial/testimonial.scss");


/***/ }),

/***/ "./src/components/text-field/TextField.js":
/*!************************************************!*\
  !*** ./src/components/text-field/TextField.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery_maskedinput_src_jquery_maskedinput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery.maskedinput/src/jquery.maskedinput */ "./node_modules/jquery.maskedinput/src/jquery.maskedinput.js");
/* harmony import */ var jquery_maskedinput_src_jquery_maskedinput__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_maskedinput_src_jquery_maskedinput__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var TextField = /*#__PURE__*/function () {
  function TextField($component) {
    _classCallCheck(this, TextField);

    this.$component = $component;
    this.maskedInput();
  }

  _createClass(TextField, [{
    key: "maskedInput",
    value: function maskedInput() {
      this.$component.mask('99.99.9999');
    }
  }]);

  return TextField;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextField);

/***/ }),

/***/ "./src/components/text-field/index.js":
/*!********************************************!*\
  !*** ./src/components/text-field/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextField */ "./src/components/text-field/TextField.js");
/* harmony import */ var material_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-icons/iconfont/material-icons.css */ "./node_modules/material-icons/iconfont/material-icons.css");
/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../arrow */ "./src/components/arrow/index.js");
/* harmony import */ var _text_field_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-field.scss */ "./src/components/text-field/text-field.scss");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




$('.js-text-field__input_masked').each(function () {
  var inputMasked = new _TextField__WEBPACK_IMPORTED_MODULE_0__["default"]($(this));
});

/***/ }),

/***/ "./src/components/title-input/index.js":
/*!*********************************************!*\
  !*** ./src/components/title-input/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _title_input_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title-input.scss */ "./src/components/title-input/title-input.scss");


/***/ }),

/***/ "./src/components/toggle/index.js":
/*!****************************************!*\
  !*** ./src/components/toggle/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle.scss */ "./src/components/toggle/toggle.scss");


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");


/***/ }),

/***/ "./src/pages/form-elements/index.js":
/*!******************************************!*\
  !*** ./src/pages/form-elements/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_title_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/title-input */ "./src/components/title-input/index.js");
/* harmony import */ var _components_desc_state_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/desc-state-input */ "./src/components/desc-state-input/index.js");
/* harmony import */ var _components_text_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/text-field */ "./src/components/text-field/index.js");
/* harmony import */ var _components_dropdown_common_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dropdown-common-value */ "./src/components/dropdown-common-value/index.js");
/* harmony import */ var _components_checkbox_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/checkbox-list */ "./src/components/checkbox-list/index.js");
/* harmony import */ var _components_benefit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/benefit */ "./src/components/benefit/index.js");
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/checkbox */ "./src/components/checkbox/index.js");
/* harmony import */ var _components_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/radio */ "./src/components/radio/index.js");
/* harmony import */ var _components_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/toggle */ "./src/components/toggle/index.js");
/* harmony import */ var _components_like_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/like-button */ "./src/components/like-button/index.js");
/* harmony import */ var _components_rate_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/rate-button */ "./src/components/rate-button/index.js");
/* harmony import */ var _components_rate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/rate */ "./src/components/rate/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/pagination */ "./src/components/pagination/index.js");
/* harmony import */ var _components_bullet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/bullet */ "./src/components/bullet/index.js");
/* harmony import */ var _components_testimonial__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/testimonial */ "./src/components/testimonial/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../index */ "./src/index.js");
/* harmony import */ var _form_elements_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./form-elements.scss */ "./src/pages/form-elements/form-elements.scss");



















/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/arrow/arrow.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/arrow/arrow.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n.arrow {\n  display: inline-block;\n  font: 1.714rem/1.71 \"Material Icons\", sans-serif;\n  text-transform: none;\n}\n.arrow_with-gradient {\n  background-image: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n  background-size: 100%;\n  -webkit-background-clip: text;\n          background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/components/arrow/arrow.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA;ADvBA;EACE,qBAAA;EACA,gDAAA;EACA,oBAAA;AAsDF;AApDE;EACE,mEESe;EFRf,qBAAA;EACA,6BAAA;UAAA,qBAAA;EACA,oCAAA;EACA,iCAAA;AAsDJ","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@use '../../styles/main' as *;\n\n.arrow {\n  display: inline-block;\n  font: 1.714rem/1.71 'Material Icons', sans-serif;\n  text-transform: none;\n\n  &_with-gradient {\n    background-image: $primary-gradient;\n    background-size: 100%;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-text-fill-color: transparent;\n  }\n}\n","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/benefit/benefit.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/benefit/benefit.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n.benefit {\n  display: flex;\n  width: 100%;\n  max-width: 20.143em;\n  padding-bottom: 1em;\n  color: #575871;\n  font: 1rem/1.71 montserrat, arial, sans-serif;\n  border-bottom: 1px solid #e9e9ec;\n}\n.benefit__icon {\n  max-height: 1em;\n  font: 3.429rem \"Material Icons\", sans-serif;\n  background-image: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n  background-size: 100%;\n  -webkit-background-clip: text;\n          background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n}\n.benefit__text-group {\n  display: flex;\n  flex-direction: column;\n}\n.benefit__title {\n  padding: 0.214em 0.714em 0;\n  font-weight: bold;\n}\n.benefit__text {\n  padding: 0 0.714em 0.214em;\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/components/benefit/benefit.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA;ADvBA;EACE,aAAA;EACA,WAAA;EACA,mBAAA;EACA,mBAAA;EGYA,cDbe;ECcf,6CAAA;EHVA,gCAAA;AAsDF;AApDE;EACE,eAAA;EACA,2CAAA;EACA,mEEGe;EFFf,qBAAA;EACA,6BAAA;UAAA,qBAAA;EACA,oCAAA;EACA,iCAAA;AAsDJ;AAnDE;EACE,aAAA;EACA,sBAAA;AAqDJ;AAlDE;EACE,0BAAA;EACA,iBAAA;AAoDJ;AAjDE;EACE,0BAAA;AAmDJ","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@use '../../styles/main' as *;\n\n.benefit {\n  display: flex;\n  width: 100%;\n  max-width: 20.143em;\n  padding-bottom: 1em;\n  @include font-body;\n\n  border-bottom: 1px solid $color-font-a10;\n\n  &__icon {\n    max-height: 1em;\n    font: 3.429rem 'Material Icons', sans-serif;\n    background-image: $primary-gradient;\n    background-size: 100%;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-text-fill-color: transparent;\n  }\n\n  &__text-group {\n    display: flex;\n    flex-direction: column;\n  }\n\n  &__title {\n    padding: 0.214em 0.714em 0;\n    font-weight: bold;\n  }\n\n  &__text {\n    padding: 0 0.714em 0.214em;\n  }\n}\n","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n","@use './vars' as *;\n\n@mixin font-h1 {\n  color: $color-font-a100;\n  font: bold 1.714rem/1.208 $main-font-family;\n}\n\n@mixin font-h2 {\n  color: $color-font-a100;\n  font: bold 1.357rem/1.21 $main-font-family;\n}\n\n@mixin font-h3 {\n  color: $color-font-a100;\n  font: bold 0.857rem/1.25 $main-font-family;\n}\n\n@mixin font-body {\n  color: $color-font-a75;\n  font: 1rem/1.71 $main-font-family;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/bullet/bullet.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/bullet/bullet.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n.bullet {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.bullet__icon {\n  min-width: 0.745em;\n  min-height: 0.714em;\n  background-color: #c7c7d0;\n  -webkit-clip-path: circle(50% at 50% 50%);\n          clip-path: circle(50% at 50% 50%);\n}\n.bullet__text {\n  max-width: 19em;\n  padding: 0 0.745em;\n  color: #575871;\n  font: 1rem/1.71 montserrat, arial, sans-serif;\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/components/bullet/bullet.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA;ADvBA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;AAsDF;AApDE;EACE,kBAAA;EACA,mBAAA;EACA,yBEHa;EFIb,yCAAA;UAAA,iCAAA;AAsDJ;AAnDE;EACE,eAAA;EACA,kBAAA;EGEF,cDbe;ECcf,6CAAA;AHoDF","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@use '../../styles/main' as *;\n\n.bullet {\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  &__icon {\n    min-width: 0.745em;\n    min-height: 0.714em;\n    background-color: $color-font-a25;\n    clip-path: circle(50% at 50% 50%);\n  }\n\n  &__text {\n    max-width: 19em;\n    padding: 0 0.745em;\n    @include font-body;\n  }\n}\n","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n","@use './vars' as *;\n\n@mixin font-h1 {\n  color: $color-font-a100;\n  font: bold 1.714rem/1.208 $main-font-family;\n}\n\n@mixin font-h2 {\n  color: $color-font-a100;\n  font: bold 1.357rem/1.21 $main-font-family;\n}\n\n@mixin font-h3 {\n  color: $color-font-a100;\n  font: bold 0.857rem/1.25 $main-font-family;\n}\n\n@mixin font-body {\n  color: $color-font-a75;\n  font: 1rem/1.71 $main-font-family;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/button/button.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/button/button.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n.btn {\n  display: inline-block;\n  padding: 1.167em 1.61em 1.25em;\n  color: #1f2041;\n  font: bold 0.857rem/1.25 montserrat, arial, sans-serif;\n  color: #fff;\n  text-align: center;\n  text-transform: uppercase;\n  vertical-align: middle;\n  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n  border: none;\n  border-radius: 22px;\n  outline: none;\n  cursor: pointer;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.btn:hover, .btn:focus {\n  opacity: 0.5;\n}\n.btn_hovered {\n  opacity: 0.5;\n}\n.btn_with-border {\n  position: relative;\n  color: #bc9cff;\n  background: #fff;\n}\n.btn_with-border::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 2px;\n  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n  border-radius: 22px;\n  content: \"\";\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n          mask-composite: xor;\n  -webkit-mask-composite: xor;\n          mask-composite: exclude;\n}\n.btn_border-less {\n  padding: 0;\n  color: #bc9cff;\n  background: none;\n  border: none;\n}\n.btn_border-less:hover, .btn_border-less:focus {\n  color: #8f90a0;\n  opacity: 1;\n}\n.btn_border-less-hovered {\n  color: #8f90a0;\n}\n.btn_payment-go {\n  position: relative;\n  width: 100%;\n  max-width: 26.667em;\n  padding: 1.25em 3.667em 1.25em 1.667em;\n}\n.btn_page, .btn_selected-page, .btn_turned-next-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 40px;\n  max-height: 40px;\n}\n.btn_page {\n  color: #8f90a0;\n  font-weight: normal;\n  background: none;\n  border: none;\n}\n.btn_page:hover, .btn_page:focus {\n  color: #fff;\n  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n  opacity: 1;\n}\n.btn_turned-next-page {\n  font-weight: normal;\n  background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n}\n.btn__arrow {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 44px;\n  height: 44px;\n  padding: 3px 0;\n}\n.btn:disabled {\n  color: #8f90a0;\n  background: none;\n  cursor: auto;\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/components/button/button.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA;ADvBA;EACE,qBAAA;EACA,8BAAA;EGSA,cDbgB;ECchB,sDAAA;EHPA,WEQe;EFPf,kBAAA;EACA,yBAAA;EACA,sBAAA;EACA,6DEMiB;EFLjB,YAAA;EACA,mBAAA;EACA,aAAA;EACA,eAAA;EACA,wBAAA;KAAA,qBAAA;UAAA,gBAAA;AAsDF;AApDE;EAEE,YAAA;AAqDJ;AAlDE;EACE,YAAA;AAoDJ;AAjDE;EACE,kBAAA;EACA,cElBe;EFmBf,gBEjBa;AFoEjB;AAjDI;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,6DEtBa;EFuBb,mBAAA;EACA,WAAA;EACA,8EAAA;UAAA,sEAAA;EAEA,2BAAA;UAAA,mBAAA;EACA,2BAAA;UAAA,uBAAA;AAkDN;AA9CE;EACE,UAAA;EACA,cExCe;EFyCf,gBAAA;EACA,YAAA;AAgDJ;AA9CI;EAEE,cEnDW;EFoDX,UAAA;AA+CN;AA3CE;EACE,cEzDa;AFsGjB;AA1CE;EACE,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,sCAAA;AA4CJ;AAzCE;EAGE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,gBAAA;AAyCJ;AAtCE;EACE,cE9Ea;EF+Eb,mBAAA;EACA,gBAAA;EACA,YAAA;AAwCJ;AAtCI;EAEE,WE5EW;EF6EX,6DE3Ea;EF4Eb,UAAA;AAuCN;AAnCE;EACE,mBAAA;EACA,6DEjFiB;AFsHrB;AAlCE;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;AAoCJ;AAjCE;EACE,cE1Ga;EF2Gb,gBAAA;EACA,YAAA;AAmCJ","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@use '../../styles/main' as *;\n\n.btn {\n  display: inline-block;\n  padding: 1.167em 1.61em 1.25em;\n  @include font-h3;\n\n  color: $border-primary;\n  text-align: center;\n  text-transform: uppercase;\n  vertical-align: middle;\n  background: $primary-gradient;\n  border: none;\n  border-radius: 22px;\n  outline: none;\n  cursor: pointer;\n  appearance: none;\n\n  &:hover,\n  &:focus {\n    opacity: 0.5;\n  }\n\n  &_hovered {\n    opacity: 0.5;\n  }\n\n  &_with-border {\n    position: relative;\n    color: $color-primary-bg;\n    background: $color-third-bg;\n\n    &::before {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      padding: 2px;\n      background: $primary-gradient;\n      border-radius: 22px;\n      content: '';\n      mask: linear-gradient($color-third-bg 0 0) content-box,\n        linear-gradient($color-third-bg 0 0);\n      mask-composite: xor;\n      mask-composite: exclude;\n    }\n  }\n\n  &_border-less {\n    padding: 0;\n    color: $color-primary-bg;\n    background: none;\n    border: none;\n\n    &:hover,\n    &:focus {\n      color: $color-font-a50;\n      opacity: 1;\n    }\n  }\n\n  &_border-less-hovered {\n    color: $color-font-a50;\n  }\n\n  &_payment-go {\n    position: relative;\n    width: 100%;\n    max-width: 26.667em;\n    padding: 1.25em 3.667em 1.25em 1.667em;\n  }\n\n  &_page,\n  &_selected-page,\n  &_turned-next-page {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    max-width: 40px;\n    max-height: 40px;\n  }\n\n  &_page {\n    color: $color-font-a50;\n    font-weight: normal;\n    background: none;\n    border: none;\n\n    &:hover,\n    &:focus {\n      color: $border-primary;\n      background: $primary-gradient;\n      opacity: 1;\n    }\n  }\n\n  &_turned-next-page {\n    font-weight: normal;\n    background: $secondary-gradient;\n  }\n\n  &__arrow {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 44px;\n    height: 44px;\n    padding: 3px 0;\n  }\n\n  &:disabled {\n    color: $color-font-a50;\n    background: none;\n    cursor: auto;\n  }\n}\n","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n","@use './vars' as *;\n\n@mixin font-h1 {\n  color: $color-font-a100;\n  font: bold 1.714rem/1.208 $main-font-family;\n}\n\n@mixin font-h2 {\n  color: $color-font-a100;\n  font: bold 1.357rem/1.21 $main-font-family;\n}\n\n@mixin font-h3 {\n  color: $color-font-a100;\n  font: bold 0.857rem/1.25 $main-font-family;\n}\n\n@mixin font-body {\n  color: $color-font-a75;\n  font: 1rem/1.71 $main-font-family;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/checkbox-list/checkbox-list.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/checkbox-list/checkbox-list.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n.checkbox-list {\n  width: 100%;\n  max-width: 19em;\n}\n.checkbox-list__field {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  list-style: none;\n  cursor: pointer;\n}\n.checkbox-list__title {\n  padding: 1.167em 2.5em 1.25em 0;\n  text-transform: uppercase;\n  color: #1f2041;\n  font: bold 0.857rem/1.25 montserrat, arial, sans-serif;\n}\n.checkbox-list__arrow {\n  display: flex;\n  flex-basis: 16.3%;\n  align-items: center;\n  justify-content: center;\n  max-width: 44px;\n  padding: 0;\n  text-align: center;\n}\n.checkbox-list__arrow::before {\n  font: 1.714rem \"Material Icons\", sans-serif;\n  content: \"\\e5cf\";\n}\n.checkbox-list__checkbox-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.714em;\n  padding-top: 0.174em;\n}\n.checkbox-list[open] .checkbox-list__arrow::before {\n  content: \"\\e5ce\";\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/components/checkbox-list/checkbox-list.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA;ADvBA;EACE,WAAA;EACA,eAAA;AAsDF;AApDE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,gBAAA;EACA,eAAA;AAsDJ;AAnDE;EACE,+BAAA;EACA,yBAAA;EGHF,cDbgB;ECchB,sDAAA;AHyDF;AAnDE;EACE,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,UAAA;EACA,kBAAA;AAqDJ;AAnDI;EACE,2CAAA;EACA,gBAAA;AAqDN;AAjDE;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,oBAAA;AAmDJ;AAhDE;EACE,gBAAA;AAkDJ","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@use '../../styles/main' as *;\n\n.checkbox-list {\n  width: 100%;\n  max-width: 19em;\n\n  &__field {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    list-style: none;\n    cursor: pointer;\n  }\n\n  &__title {\n    padding: 1.167em 2.5em 1.25em 0;\n    text-transform: uppercase;\n    @include font-h3;\n  }\n\n  &__arrow {\n    display: flex;\n    flex-basis: 16.3%;\n    align-items: center;\n    justify-content: center;\n    max-width: 44px;\n    padding: 0;\n    text-align: center;\n\n    &::before {\n      font: 1.714rem 'Material Icons', sans-serif;\n      content: '\\e5cf';\n    }\n  }\n\n  &__checkbox-group {\n    display: flex;\n    flex-direction: column;\n    gap: 0.714em;\n    padding-top: 0.174em;\n  }\n\n  &[open] .checkbox-list__arrow::before {\n    content: '\\e5ce';\n  }\n}\n","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n","@use './vars' as *;\n\n@mixin font-h1 {\n  color: $color-font-a100;\n  font: bold 1.714rem/1.208 $main-font-family;\n}\n\n@mixin font-h2 {\n  color: $color-font-a100;\n  font: bold 1.357rem/1.21 $main-font-family;\n}\n\n@mixin font-h3 {\n  color: $color-font-a100;\n  font: bold 0.857rem/1.25 $main-font-family;\n}\n\n@mixin font-body {\n  color: $color-font-a75;\n  font: 1rem/1.71 $main-font-family;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/checkbox/checkbox.scss":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/checkbox/checkbox.scss ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n.checkbox {\n  display: flex;\n  gap: 0.714em;\n  align-items: baseline;\n  width: 100%;\n  max-width: 19em;\n  color: #8f90a0;\n  font: 1rem/1.28 montserrat, arial, sans-serif;\n  cursor: pointer;\n}\n.checkbox__input {\n  display: grid;\n  place-content: center;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  color: currentColor;\n  background-color: #fff;\n  border: 1px solid #c7c7d0;\n  border-radius: 0.286em;\n  outline: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.checkbox__input::before {\n  width: 10px;\n  height: 8px;\n  background-image: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n  transform: scale(0);\n  transform-origin: bottom left;\n  transition: 120ms transform ease-in-out;\n  content: \"\";\n  -webkit-clip-path: polygon(19% 21.3%, 48.6% 60.3%, 84.8% 12.5%, 100% 27%, 48.9% 98.3%, 2.5% 40.5%);\n          clip-path: polygon(19% 21.3%, 48.6% 60.3%, 84.8% 12.5%, 100% 27%, 48.9% 98.3%, 2.5% 40.5%);\n}\n.checkbox__input:focus, .checkbox__input:hover, .checkbox__input:checked {\n  border-color: #bc9cff;\n}\n.checkbox__input:hover {\n  cursor: pointer;\n}\n.checkbox__input:checked::before {\n  transform: scale(1);\n}\n.checkbox__text-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.357em;\n  max-width: 16.143em;\n}\n.checkbox__title {\n  margin: 0;\n  color: #575871;\n  font-weight: bold;\n}\n.checkbox__text {\n  max-width: 13.714em;\n  margin: 0;\n}\n.checkbox__text_rich {\n  margin: 0;\n  font: 0.857rem/1.16 montserrat, arial, sans-serif;\n}\n.checkbox__text_box-small {\n  max-width: 16.083em;\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/components/checkbox/checkbox.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA;ADvBA;EACE,aAAA;EACA,YAAA;EACA,qBAAA;EACA,WAAA;EACA,eAAA;EACA,cEFe;EFGf,6CAAA;EACA,eAAA;AAsDF;AApDE;EACE,aAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,mBAAA;EACA,sBENa;EFOb,yBAAA;EACA,sBAAA;EACA,aAAA;EACA,wBAAA;KAAA,qBAAA;UAAA,gBAAA;AAsDJ;AApDI;EACE,WAAA;EACA,WAAA;EACA,mEEXa;EFYb,mBAAA;EACA,6BAAA;EACA,uCAAA;EACA,WAAA;EACA,kGAAA;UAAA,0FAAA;AAsDN;AA5CI;EAGE,qBEnCa;AF+EnB;AAzCI;EACE,eAAA;AA2CN;AAxCI;EACE,mBAAA;AA0CN;AAtCE;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,mBAAA;AAwCJ;AArCE;EACE,SAAA;EACA,cE9Da;EF+Db,iBAAA;AAuCJ;AApCE;EACE,mBAAA;EACA,SAAA;AAsCJ;AApCI;EACE,SAAA;EACA,iDAAA;AAsCN;AAnCI;EACE,mBAAA;AAqCN","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@use '../../styles/main' as *;\n\n.checkbox {\n  display: flex;\n  gap: 0.714em;\n  align-items: baseline;\n  width: 100%;\n  max-width: 19em;\n  color: $color-font-a50;\n  font: 1rem/1.28 $main-font-family;\n  cursor: pointer;\n\n  &__input {\n    display: grid;\n    place-content: center;\n    width: 20px;\n    height: 20px;\n    margin: 0;\n    color: currentColor;\n    background-color: $color-third-bg;\n    border: 1px solid $color-font-a25;\n    border-radius: 0.286em;\n    outline: none;\n    appearance: none;\n\n    &::before {\n      width: 10px;\n      height: 8px;\n      background-image: $primary-gradient;\n      transform: scale(0);\n      transform-origin: bottom left;\n      transition: 120ms transform ease-in-out;\n      content: '';\n      clip-path: polygon(\n        19% 21.3%,\n        48.6% 60.3%,\n        84.8% 12.5%,\n        100% 27%,\n        48.9% 98.3%,\n        2.5% 40.5%\n      );\n    }\n\n    &:focus,\n    &:hover,\n    &:checked {\n      border-color: $color-primary-bg;\n    }\n\n    &:hover {\n      cursor: pointer;\n    }\n\n    &:checked::before {\n      transform: scale(1);\n    }\n  }\n\n  &__text-group {\n    display: flex;\n    flex-direction: column;\n    gap: 0.357em;\n    max-width: 16.143em;\n  }\n\n  &__title {\n    margin: 0;\n    color: $color-font-a75;\n    font-weight: bold;\n  }\n\n  &__text {\n    max-width: 13.714em;\n    margin: 0;\n\n    &_rich {\n      margin: 0;\n      font: 0.857rem/1.16 $main-font-family;\n    }\n\n    &_box-small {\n      max-width: 16.083em;\n    }\n  }\n}\n","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/desc-state-input/desc-state-input.scss":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/desc-state-input/desc-state-input.scss ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n.desc-state-input {\n  margin: 0;\n  color: #8f90a0;\n  font: 0.857rem/1.25 montserrat, arial, sans-serif;\n  text-transform: uppercase;\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/components/desc-state-input/desc-state-input.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA;ADvBA;EACE,SAAA;EACA,cEEe;EFDf,iDAAA;EACA,yBAAA;AAsDF","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@use '../../styles/main' as *;\n\n.desc-state-input {\n  margin: 0;\n  color: $color-font-a50;\n  font: 0.857rem/1.25 $main-font-family;\n  text-transform: uppercase;\n}\n","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/dropdown-common-value/dropdown-common-value.scss":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/dropdown-common-value/dropdown-common-value.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n.dropdown-common-value {\n  width: 100%;\n  border: 1px solid #c7c7d0;\n  border-radius: 0.286em;\n}\n.dropdown-common-value:focus, .dropdown-common-value:hover {\n  border: 1px solid #8f90a0;\n}\n.dropdown-common-value__field {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  list-style: none;\n  cursor: pointer;\n}\n.dropdown-common-value__text {\n  display: inline-block;\n  padding: 0.786em 1em 0.5em;\n  font: 1rem/1.71 montserrat, arial, sans-serif;\n}\n.dropdown-common-value__arrow {\n  display: flex;\n  flex-basis: 16.3%;\n  align-items: center;\n  justify-content: center;\n  max-width: 44px;\n  padding: 0;\n  font: 1.714rem \"Material Icons\", sans-serif;\n  text-align: center;\n  background-color: transparent;\n  border: none;\n}\n.dropdown-common-value__collapsible-content {\n  width: 93.13%;\n  margin: 0;\n  padding: 0.429em 0.5em 1.357em 1.071em;\n  border-top: 1px solid #c7c7d0;\n}\n.dropdown-common-value__collapsible-item {\n  display: flex;\n  gap: 10.25em;\n  margin-bottom: 0.583em;\n  list-style-type: none;\n}\n.dropdown-common-value__collapsible-item-title {\n  margin: 0;\n  text-transform: uppercase;\n  color: #1f2041;\n  font: bold 0.857rem/1.25 montserrat, arial, sans-serif;\n}\n.dropdown-common-value__count-value {\n  text-transform: uppercase;\n  color: #1f2041;\n  font: bold 0.857rem/1.25 montserrat, arial, sans-serif;\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/components/dropdown-common-value/dropdown-common-value.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA;ADvBA;EACE,WAAA;EACA,yBAAA;EACA,sBAAA;AAsDF;AApDE;EAEE,yBAAA;AAqDJ;AAlDE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,gBAAA;EACA,eAAA;AAoDJ;AAjDE;EACE,qBAAA;EACA,0BAAA;EACA,6CAAA;AAmDJ;AAhDE;EACE,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,UAAA;EACA,2CAAA;EACA,kBAAA;EACA,6BAAA;EACA,YAAA;AAkDJ;AA/CE;EACE,aAAA;EACA,SAAA;EACA,sCAAA;EACA,6BAAA;AAiDJ;AA9CE;EACE,aAAA;EACA,YAAA;EACA,sBAAA;EACA,qBAAA;AAgDJ;AA7CE;EACE,SAAA;EACA,yBAAA;EG1CF,cDbgB;ECchB,sDAAA;AH0FF;AA7CE;EACE,yBAAA;EG/CF,cDbgB;ECchB,sDAAA;AH+FF","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@use '../../styles/main' as *;\n\n.dropdown-common-value {\n  width: 100%;\n  border: 1px solid $color-font-a25;\n  border-radius: 0.286em;\n\n  &:focus,\n  &:hover {\n    border: 1px solid $color-font-a50;\n  }\n\n  &__field {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    list-style: none;\n    cursor: pointer;\n  }\n\n  &__text {\n    display: inline-block;\n    padding: 0.786em 1em 0.5em;\n    font: 1rem/1.71 $main-font-family;\n  }\n\n  &__arrow {\n    display: flex;\n    flex-basis: 16.3%;\n    align-items: center;\n    justify-content: center;\n    max-width: 44px;\n    padding: 0;\n    font: 1.714rem 'Material Icons', sans-serif;\n    text-align: center;\n    background-color: transparent;\n    border: none;\n  }\n\n  &__collapsible-content {\n    width: 93.13%;\n    margin: 0;\n    padding: 0.429em 0.5em 1.357em 1.071em;\n    border-top: 1px solid $color-font-a25;\n  }\n\n  &__collapsible-item {\n    display: flex;\n    gap: 10.25em;\n    margin-bottom: 0.583em;\n    list-style-type: none;\n  }\n\n  &__collapsible-item-title {\n    margin: 0;\n    text-transform: uppercase;\n    @include font-h3;\n  }\n\n  &__count-value {\n    text-transform: uppercase;\n    @include font-h3;\n  }\n}\n","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n","@use './vars' as *;\n\n@mixin font-h1 {\n  color: $color-font-a100;\n  font: bold 1.714rem/1.208 $main-font-family;\n}\n\n@mixin font-h2 {\n  color: $color-font-a100;\n  font: bold 1.357rem/1.21 $main-font-family;\n}\n\n@mixin font-h3 {\n  color: $color-font-a100;\n  font: bold 0.857rem/1.25 $main-font-family;\n}\n\n@mixin font-body {\n  color: $color-font-a75;\n  font: 1rem/1.71 $main-font-family;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/like-button/like-button.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/like-button/like-button.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n.like-button {\n  display: flex;\n  gap: 2px;\n  align-items: center;\n  width: 100%;\n  max-width: 40px;\n  padding: 0;\n  background-color: #fff;\n  border: 1px solid #c7c7d0;\n  border-radius: 0.714em;\n  outline: none;\n}\n.like-button_active {\n  border-color: #bc9cff;\n}\n.like-button:hover {\n  cursor: pointer;\n}\n.like-button__icon {\n  display: inline-block;\n  padding: 4px;\n  font: 0.714rem/1 \"Material Icons\", sans-serif;\n  background-image: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n  background-size: 100%;\n  -webkit-background-clip: text;\n          background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n}\n.like-button__count {\n  display: inline-block;\n  width: 1.986em;\n  color: #c7c7d0;\n  font: 0.714rem/1.8 montserrat, arial, sans-serif;\n  text-align: left;\n}\n.like-button__count_active {\n  color: #bc9cff;\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/components/like-button/like-button.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA;ADvBA;EACE,aAAA;EACA,QAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;EACA,UAAA;EACA,sBEIe;EFHf,yBAAA;EACA,sBAAA;EACA,aAAA;AAsDF;AApDE;EACE,qBEJe;AF0DnB;AAnDE;EACE,eAAA;AAqDJ;AAlDE;EACE,qBAAA;EACA,YAAA;EACA,6CAAA;EACA,mEETe;EFUf,qBAAA;EACA,6BAAA;UAAA,qBAAA;EACA,oCAAA;EACA,iCAAA;AAoDJ;AAjDE;EACE,qBAAA;EACA,cAAA;EACA,cE7Ba;EF8Bb,gDAAA;EACA,gBAAA;AAmDJ;AAjDI;EACE,cE9Ba;AFiFnB","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@use '../../styles/main' as *;\n\n.like-button {\n  display: flex;\n  gap: 2px;\n  align-items: center;\n  width: 100%;\n  max-width: 40px;\n  padding: 0;\n  background-color: $color-third-bg;\n  border: 1px solid $color-font-a25;\n  border-radius: 0.714em;\n  outline: none;\n\n  &_active {\n    border-color: $color-primary-bg;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &__icon {\n    display: inline-block;\n    padding: 4px;\n    font: 0.714rem/1 'Material Icons', sans-serif;\n    background-image: $primary-gradient;\n    background-size: 100%;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-text-fill-color: transparent;\n  }\n\n  &__count {\n    display: inline-block;\n    width: 1.986em;\n    color: $color-font-a25;\n    font: 0.714rem/1.8 $main-font-family;\n    text-align: left;\n\n    &_active {\n      color: $color-primary-bg;\n    }\n  }\n}\n","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pagination/pagination.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pagination/pagination.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n.pagination {\n  max-width: 17.214em;\n}\n.pagination__list {\n  display: flex;\n  margin-bottom: 0.754em;\n}\n.pagination__ellipse {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1.27em;\n  color: #1f2041;\n  font: bold 0.857rem/1.25 montserrat, arial, sans-serif;\n  color: #8f90a0;\n}\n.pagination__text {\n  margin: 0;\n  padding: 0 0.429em;\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/components/pagination/pagination.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA;ADvBA;EACE,mBAAA;AAsDF;AApDE;EACE,aAAA;EACA,sBAAA;AAsDJ;AAnDE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;EGDF,cDbgB;ECchB,sDAAA;EHGE,cEXa;AFgEjB;AAlDE;EACE,SAAA;EACA,kBAAA;AAoDJ","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@use '../../styles/main' as *;\n\n.pagination {\n  max-width: 17.214em;\n\n  &__list {\n    display: flex;\n    margin-bottom: 0.754em;\n  }\n\n  &__ellipse {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 1.27em;\n    @include font-h3;\n\n    color: $color-font-a50;\n  }\n\n  &__text {\n    margin: 0;\n    padding: 0 0.429em;\n  }\n}\n","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n","@use './vars' as *;\n\n@mixin font-h1 {\n  color: $color-font-a100;\n  font: bold 1.714rem/1.208 $main-font-family;\n}\n\n@mixin font-h2 {\n  color: $color-font-a100;\n  font: bold 1.357rem/1.21 $main-font-family;\n}\n\n@mixin font-h3 {\n  color: $color-font-a100;\n  font: bold 0.857rem/1.25 $main-font-family;\n}\n\n@mixin font-body {\n  color: $color-font-a75;\n  font: 1rem/1.71 $main-font-family;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/radio/radio.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/radio/radio.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n.radio {\n  display: flex;\n  gap: 0.714em;\n  width: 100%;\n  max-width: 7.339em;\n  color: #8f90a0;\n  font: 1rem/1.71 montserrat, arial, sans-serif;\n  cursor: pointer;\n}\n.radio:focus, .radio:hover {\n  color: #575871;\n  font: 1rem/1.71 montserrat, arial, sans-serif;\n}\n.radio__input {\n  display: grid;\n  place-content: center;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  color: currentColor;\n  font: inherit;\n  background-color: #fff;\n  border: 1px solid #c7c7d0;\n  border-radius: 50%;\n  outline: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.radio__input::before {\n  width: 0.857em;\n  height: 0.857em;\n  background-image: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  content: \"\";\n  -webkit-clip-path: circle(50% at 50% 50%);\n          clip-path: circle(50% at 50% 50%);\n}\n.radio__input:focus, .radio__input:hover, .radio__input:checked {\n  border-color: #bc9cff;\n}\n.radio__input:hover {\n  cursor: pointer;\n}\n.radio__input:checked::before {\n  transform: scale(1);\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/components/radio/radio.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA;ADvBA;EACE,aAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,cEDe;EFEf,6CAAA;EACA,eAAA;AAsDF;AApDE;EGOA,cDbe;ECcf,6CAAA;AHgDF;AAnDE;EACE,aAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,mBAAA;EACA,aAAA;EACA,sBEXa;EFYb,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,wBAAA;KAAA,qBAAA;UAAA,gBAAA;AAqDJ;AAnDI;EACE,cAAA;EACA,eAAA;EACA,mEEhBa;EFiBb,mBAAA;EACA,uCAAA;EACA,WAAA;EACA,yCAAA;UAAA,iCAAA;AAqDN;AAlDI;EAGE,qBEhCa;AFkFnB;AA/CI;EACE,eAAA;AAiDN;AA9CI;EACE,mBAAA;AAgDN","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@use '../../styles/main' as *;\n\n.radio {\n  display: flex;\n  gap: 0.714em;\n  width: 100%;\n  max-width: 7.339em;\n  color: $color-font-a50;\n  font: 1rem/1.71 $main-font-family;\n  cursor: pointer;\n\n  &:focus,\n  &:hover {\n    @include font-body;\n  }\n\n  &__input {\n    display: grid;\n    place-content: center;\n    width: 20px;\n    height: 20px;\n    margin: 0;\n    color: currentColor;\n    font: inherit;\n    background-color: $color-third-bg;\n    border: 1px solid $color-font-a25;\n    border-radius: 50%;\n    outline: none;\n    appearance: none;\n\n    &::before {\n      width: 0.857em;\n      height: 0.857em;\n      background-image: $primary-gradient;\n      transform: scale(0);\n      transition: 120ms transform ease-in-out;\n      content: '';\n      clip-path: circle(50% at 50% 50%);\n    }\n\n    &:focus,\n    &:hover,\n    &:checked {\n      border-color: $color-primary-bg;\n    }\n\n    &:hover {\n      cursor: pointer;\n    }\n\n    &:checked::before {\n      transform: scale(1);\n    }\n  }\n}\n","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n","@use './vars' as *;\n\n@mixin font-h1 {\n  color: $color-font-a100;\n  font: bold 1.714rem/1.208 $main-font-family;\n}\n\n@mixin font-h2 {\n  color: $color-font-a100;\n  font: bold 1.357rem/1.21 $main-font-family;\n}\n\n@mixin font-h3 {\n  color: $color-font-a100;\n  font: bold 0.857rem/1.25 $main-font-family;\n}\n\n@mixin font-body {\n  color: $color-font-a75;\n  font: 1rem/1.71 $main-font-family;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/rate-button/rate-button.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/rate-button/rate-button.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n.rate-button {\n  display: flex;\n}\n.rate-button__icon {\n  font: 1.714rem \"Material Icons\", sans-serif;\n  background-image: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n  background-size: 100%;\n  -webkit-background-clip: text;\n          background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/components/rate-button/rate-button.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA;ADvBA;EACE,aAAA;AAsDF;AApDE;EACE,2CAAA;EACA,mEEUe;EFTf,qBAAA;EACA,6BAAA;UAAA,qBAAA;EACA,oCAAA;EACA,iCAAA;AAsDJ","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@use '../../styles/main' as *;\n\n.rate-button {\n  display: flex;\n\n  &__icon {\n    font: 1.714rem 'Material Icons', sans-serif;\n    background-image: $primary-gradient;\n    background-size: 100%;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-text-fill-color: transparent;\n  }\n}\n","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/rate/rate.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/rate/rate.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n.rate__list {\n  display: flex;\n  margin: 0;\n  padding: 0;\n}\n.rate:hover .rate__item::before {\n  content: \"\\e838\";\n}\n.rate__item {\n  display: flex;\n  align-items: center;\n  max-height: 24px;\n  margin: 0;\n  list-style-type: none;\n  cursor: pointer;\n}\n.rate__item::before {\n  font: 1.714rem/1.71 \"Material Icons\", sans-serif;\n  background-image: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n  -webkit-background-clip: text;\n          background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n  content: \"\\e83a\";\n}\n.rate__item:hover::before {\n  content: \"\\e838\";\n}\n.rate__item:hover ~ .rate__item::before {\n  content: \"\\e83a\";\n}\n.rate__item_active::before {\n  content: \"\\e838\";\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/components/rate/rate.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA;ADrBE;EACE,aAAA;EACA,SAAA;EACA,UAAA;AAoDJ;AAjDE;EACE,gBAAA;AAmDJ;AAhDE;EACE,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,SAAA;EACA,qBAAA;EACA,eAAA;AAkDJ;AAhDI;EACE,gDAAA;EACA,mEEPa;EFQb,6BAAA;UAAA,qBAAA;EACA,oCAAA;EACA,iCAAA;EACA,gBAAA;AAkDN;AA/CI;EACE,gBAAA;AAiDN;AA9CI;EACE,gBAAA;AAgDN;AA7CI;EACE,gBAAA;AA+CN","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@use '../../styles/main' as *;\r\n\r\n.rate {\r\n\r\n  &__list {\r\n    display: flex;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  &:hover .rate__item::before {\r\n    content: '\\e838';\r\n  } \r\n\r\n  &__item {\r\n    display: flex;\r\n    align-items: center;\r\n    max-height: 24px;\r\n    margin: 0;\r\n    list-style-type: none;\r\n    cursor: pointer;\r\n\r\n    &::before {\r\n      font: 1.714rem/1.71 'Material Icons', sans-serif;\r\n      background-image: $primary-gradient;\r\n      background-clip: text;\r\n      -webkit-text-fill-color: transparent;\r\n      -moz-text-fill-color: transparent;\r\n      content: '\\e83a';\r\n    }\r\n\r\n    &:hover::before{\r\n      content: '\\e838';\r\n    }\r\n\r\n    &:hover ~ .rate__item::before {\r\n      content: '\\e83a'\r\n    }\r\n\r\n    &_active::before {\r\n      content: '\\e838';\r\n    }\r\n  }  \r\n}","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/testimonial/testimonial.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/testimonial/testimonial.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n.testimonial {\n  display: flex;\n  flex-direction: column;\n  gap: 0.714em;\n  width: 100%;\n  max-width: 50.786em;\n  color: #575871;\n  font: 1rem/1.71 montserrat, arial, sans-serif;\n}\n.testimonial__field {\n  display: flex;\n}\n.testimonial__avatar {\n  position: relative;\n  flex: 0 0 48px;\n}\n.testimonial__img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 2px solid #fff;\n  border-radius: 32px;\n  filter: drop-shadow(0 10px 20px rgba(31, 32, 65, 0.1));\n}\n.testimonial__info {\n  padding: 0 0.714em;\n}\n.testimonial__full-name {\n  margin: 0;\n  font-weight: bold;\n}\n.testimonial__writing-time {\n  margin: 0;\n}\n.testimonial__desc-and-btn {\n  display: flex;\n}\n.testimonial__btn {\n  padding: 0 0.286em;\n}\n.testimonial__desc {\n  margin: 0;\n  padding: 0 0.714em;\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/components/testimonial/testimonial.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA;ADvBA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EGWA,cDbe;ECcf,6CAAA;AH4CF;AArDE;EACE,aAAA;AAuDJ;AApDE;EACE,kBAAA;EACA,cAAA;AAsDJ;AAnDE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;EACA,sBAAA;EACA,mBAAA;EACA,sDAAA;AAqDJ;AAlDE;EACE,kBAAA;AAoDJ;AAjDE;EACE,SAAA;EACA,iBAAA;AAmDJ;AAhDE;EACE,SAAA;AAkDJ;AA/CE;EACE,aAAA;AAiDJ;AA9CE;EACE,kBAAA;AAgDJ;AA7CE;EACE,SAAA;EACA,kBAAA;AA+CJ","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@use '../../styles/main' as *;\n\n.testimonial {\n  display: flex;\n  flex-direction: column;\n  gap: 0.714em;\n  width: 100%;\n  max-width: 50.786em;\n  @include font-body;\n\n  &__field {\n    display: flex;\n  }\n\n  &__avatar {\n    position: relative;\n    flex: 0 0 48px;\n  }\n\n  &__img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border: 2px solid $border-primary;\n    border-radius: 32px;\n    filter: drop-shadow(0 10px 20px $color-shadow-primary);\n  }\n\n  &__info {\n    padding: 0 0.714em;\n  }\n\n  &__full-name {\n    margin: 0;\n    font-weight: bold;\n  }\n\n  &__writing-time {\n    margin: 0;\n  }\n\n  &__desc-and-btn {\n    display: flex;\n  }\n\n  &__btn {\n    padding: 0 0.286em;\n  }\n\n  &__desc {\n    margin: 0;\n    padding: 0 0.714em;\n  }\n}\n","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n","@use './vars' as *;\n\n@mixin font-h1 {\n  color: $color-font-a100;\n  font: bold 1.714rem/1.208 $main-font-family;\n}\n\n@mixin font-h2 {\n  color: $color-font-a100;\n  font: bold 1.357rem/1.21 $main-font-family;\n}\n\n@mixin font-h3 {\n  color: $color-font-a100;\n  font: bold 0.857rem/1.25 $main-font-family;\n}\n\n@mixin font-body {\n  color: $color-font-a75;\n  font: 1rem/1.71 $main-font-family;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/text-field/text-field.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/text-field/text-field.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n.text-field {\n  position: relative;\n  display: block;\n}\n.text-field__input {\n  width: 100%;\n  max-width: 22.857em;\n  max-height: 3.143em;\n  padding: 0.929em 1.071em;\n  color: #575871;\n  font: 1rem/1.71 montserrat, arial, sans-serif;\n  border: 1px solid #c7c7d0;\n  border-radius: 0.286em;\n  outline: none;\n}\n.text-field__input:focus, .text-field__input:hover {\n  border-color: #8f90a0;\n}\n.text-field__input_focused {\n  padding: 0.786em 1em 0.5em;\n  border-color: #8f90a0;\n}\n.text-field__input_masked {\n  min-height: 3.143em;\n  padding: 0.786em 1em 0.5em;\n}\n.text-field__input_subscribe {\n  padding: 0.857em 3.143em 0.857em 1.071em;\n}\n.text-field__input::-moz-placeholder {\n  color: #c7c7d0;\n  font: 1rem montserrat, arial, sans-serif;\n  line-height: 1.28;\n}\n.text-field__input:-ms-input-placeholder {\n  color: #c7c7d0;\n  font: 1rem montserrat, arial, sans-serif;\n  line-height: 1.28;\n}\n.text-field__input::placeholder {\n  color: #c7c7d0;\n  font: 1rem montserrat, arial, sans-serif;\n  line-height: 1.28;\n}\n.text-field__btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 44px;\n  min-height: 100%;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/components/text-field/text-field.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA;ADvBA;EACE,kBAAA;EACA,cAAA;AAsDF;AApDE;EACE,WAAA;EACA,mBAAA;EACA,mBAAA;EACA,wBAAA;EACA,cENa;EFOb,6CAAA;EACA,yBAAA;EACA,sBAAA;EACA,aAAA;AAsDJ;AApDI;EAEE,qBEbW;AFkEjB;AAlDI;EACE,0BAAA;EACA,qBElBW;AFsEjB;AAjDI;EACE,mBAAA;EACA,0BAAA;AAmDN;AAhDI;EACE,wCAAA;AAkDN;AA/CI;EACE,cE9BW;EF+BX,wCAAA;EACA,iBAAA;AAiDN;AApDI;EACE,cE9BW;EF+BX,wCAAA;EACA,iBAAA;AAiDN;AApDI;EACE,cE9BW;EF+BX,wCAAA;EACA,iBAAA;AAiDN;AA7CE;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,eAAA;EACA,gBAAA;EACA,UAAA;EACA,6BAAA;EACA,YAAA;EACA,eAAA;AA+CJ","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@use '../../styles/main' as *;\n\n.text-field {\n  position: relative;\n  display: block;\n\n  &__input {\n    width: 100%;\n    max-width: 22.857em;\n    max-height: 3.143em;\n    padding: 0.929em 1.071em;\n    color: $color-font-a75;\n    font: 1rem/1.71 $main-font-family;\n    border: 1px solid $color-font-a25;\n    border-radius: 0.286em;\n    outline: none;\n\n    &:focus,\n    &:hover {\n      border-color: $color-font-a50;\n    }\n\n    &_focused {\n      padding: 0.786em 1em 0.5em;\n      border-color: $color-font-a50;\n    }\n\n    &_masked {\n      min-height: 3.143em;\n      padding: 0.786em 1em 0.5em;\n    }\n\n    &_subscribe {\n      padding: 0.857em 3.143em 0.857em 1.071em;\n    }\n\n    &::placeholder {\n      color: $color-font-a25;\n      font: 1rem $main-font-family;\n      line-height: 1.28;\n    }\n  }\n\n  &__btn {\n    position: absolute;\n    top: 0;\n    right: 0;\n    min-width: 44px;\n    min-height: 100%;\n    padding: 0;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n  }\n}\n","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/title-input/title-input.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/title-input/title-input.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n.title-input {\n  margin: 0;\n  text-transform: uppercase;\n  color: #1f2041;\n  font: bold 0.857rem/1.25 montserrat, arial, sans-serif;\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/components/title-input/title-input.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA;ADvBA;EACE,SAAA;EACA,yBAAA;EGSA,cDbgB;ECchB,sDAAA;AH8CF","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@use '../../styles/main' as *;\n\n.title-input {\n  margin: 0;\n  text-transform: uppercase;\n  @include font-h3;\n}\n","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n","@use './vars' as *;\n\n@mixin font-h1 {\n  color: $color-font-a100;\n  font: bold 1.714rem/1.208 $main-font-family;\n}\n\n@mixin font-h2 {\n  color: $color-font-a100;\n  font: bold 1.357rem/1.21 $main-font-family;\n}\n\n@mixin font-h3 {\n  color: $color-font-a100;\n  font: bold 0.857rem/1.25 $main-font-family;\n}\n\n@mixin font-body {\n  color: $color-font-a75;\n  font: 1rem/1.71 $main-font-family;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/toggle/toggle.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/toggle/toggle.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n.toggle {\n  display: flex;\n  gap: 0.714em;\n  width: 100%;\n  max-width: 18.571em;\n  color: #575871;\n  font: 1rem/1.71 montserrat, arial, sans-serif;\n  cursor: pointer;\n}\n.toggle__input {\n  display: grid;\n  place-content: center left;\n  width: 40px;\n  max-width: 15, 38%;\n  max-height: 20px;\n  margin: 0;\n  padding: 0.286em;\n  color: currentColor;\n  font: inherit;\n  background-color: #fff;\n  border: 1px solid #c7c7d0;\n  border-radius: 0.714em;\n  outline: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.toggle__input:hover {\n  cursor: pointer;\n}\n.toggle__input:focus, .toggle__input:checked {\n  border-color: #bc9cff;\n}\n.toggle__input::before {\n  width: 0.857em;\n  height: 0.857em;\n  background-color: #c7c7d0;\n  transform: translateX(0);\n  transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);\n  content: \"\";\n  -webkit-clip-path: circle(50% at 50% 50%);\n          clip-path: circle(50% at 50% 50%);\n}\n.toggle__input:checked::before {\n  background-image: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n  transform: translateX(calc(100% + 4px));\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/components/toggle/toggle.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA;ADvBA;EACE,aAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EGYA,cDbe;ECcf,6CAAA;EHVA,eAAA;AAsDF;AApDE;EACE,aAAA;EACA,0BAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,gBAAA;EACA,mBAAA;EACA,aAAA;EACA,sBERa;EFSb,yBAAA;EACA,sBAAA;EACA,aAAA;EACA,wBAAA;KAAA,qBAAA;UAAA,gBAAA;AAsDJ;AApDI;EACE,eAAA;AAsDN;AAnDI;EAEE,qBEtBa;AF0EnB;AAjDI;EACE,cAAA;EACA,eAAA;EACA,yBEhCW;EFiCX,wBAAA;EACA,uDAAA;EACA,WAAA;EACA,yCAAA;UAAA,iCAAA;AAmDN;AAhDI;EACE,mEE9Ba;EF+Bb,uCAAA;AAkDN","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@use '../../styles/main' as *;\n\n.toggle {\n  display: flex;\n  gap: 0.714em;\n  width: 100%;\n  max-width: 18.571em;\n  @include font-body;\n\n  cursor: pointer;\n\n  &__input {\n    display: grid;\n    place-content: center left;\n    width: 40px;\n    max-width: 15, 38%;\n    max-height: 20px;\n    margin: 0;\n    padding: 0.286em;\n    color: currentColor;\n    font: inherit;\n    background-color: $color-third-bg;\n    border: 1px solid $color-font-a25;\n    border-radius: 0.714em;\n    outline: none;\n    appearance: none;\n\n    &:hover {\n      cursor: pointer;\n    }\n\n    &:focus,\n    &:checked {\n      border-color: $color-primary-bg;\n    }\n\n    &::before {\n      width: 0.857em;\n      height: 0.857em;\n      background-color: $color-font-a25;\n      transform: translateX(0);\n      transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);\n      content: '';\n      clip-path: circle(50% at 50% 50%);\n    }\n\n    &:checked::before {\n      background-image: $primary-gradient;\n      transform: translateX(calc(100% + 4px));\n    }\n  }\n}\n","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n","@use './vars' as *;\n\n@mixin font-h1 {\n  color: $color-font-a100;\n  font: bold 1.714rem/1.208 $main-font-family;\n}\n\n@mixin font-h2 {\n  color: $color-font-a100;\n  font: bold 1.357rem/1.21 $main-font-family;\n}\n\n@mixin font-h3 {\n  color: $color-font-a100;\n  font: bold 0.857rem/1.25 $main-font-family;\n}\n\n@mixin font-body {\n  color: $color-font-a75;\n  font: 1rem/1.71 $main-font-family;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/form-elements/form-elements.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/form-elements/form-elements.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n.form-elements {\n  width: 100%;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 2.08%;\n}\n.form-elements__grid {\n  display: grid;\n  grid: \"left . center . right\" 1fr \"left . testimonial testimonial testimonial\"/27.63% 10.88% 27.63% 6.22% 27.63%;\n  margin: 4.429em 7.929em 7.214em;\n}\n.form-elements__grid-wrap-left {\n  grid-area: left;\n}\n.form-elements__text-field-heading {\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n  margin-bottom: 0.357em;\n}\n.form-elements__title-input {\n  margin-bottom: 1.143em;\n}\n.form-elements__title-input_without-margin-bottom {\n  margin-bottom: 0;\n}\n.form-elements__title-input_text-field {\n  margin-bottom: 0.357em;\n}\n.form-elements__title-input_dropdown {\n  margin-bottom: 0.357em;\n}\n.form-elements__title-input_padding_top {\n  padding-top: 0.214em;\n}\n.form-elements__desc-state-input__padding_bottom {\n  padding-bottom: 0.214em;\n}\n.form-elements__text-field {\n  margin-bottom: 1.429em;\n}\n.form-elements__text-field_subscribe {\n  max-width: 83.44%;\n  margin-bottom: 7.143em;\n}\n.form-elements__dropdown-common-value {\n  margin-bottom: 1.607em;\n}\n.form-elements__masked-text-field {\n  margin-bottom: 1.429em;\n}\n.form-elements__checkbox-list {\n  margin-bottom: 7.254em;\n}\n.form-elements__checkbox-list_closed {\n  margin-bottom: 1.429em;\n}\n.form-elements__benefit {\n  margin-bottom: 1.214em;\n}\n.form-elements__grid-wrap-center {\n  grid-area: center;\n  padding-top: 3px;\n}\n.form-elements__checkbox-group {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 2.92em;\n}\n.form-elements__radio-group {\n  display: flex;\n  gap: 1.429em;\n  margin-bottom: 2.611em;\n}\n.form-elements__toggle {\n  display: flex;\n  flex-direction: column;\n  gap: 0.714em;\n  margin-bottom: 2.889em;\n}\n.form-elements__like-button-group {\n  display: flex;\n  gap: 0.714em;\n  margin-bottom: 2.857em;\n}\n.form-elements__rate-group {\n  display: flex;\n  gap: 1.429em;\n  margin-bottom: 14em;\n}\n.form-elements__rich-checkbox-group {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 16.643em;\n}\n.form-elements__grid-wrap-right {\n  grid-area: right;\n}\n.form-elements__button-group {\n  display: flex;\n}\n.form-elements__button-group_default {\n  gap: 19px;\n  margin-bottom: 30px;\n}\n.form-elements__button-group_with-border {\n  gap: 20px;\n  margin-bottom: 31px;\n}\n.form-elements__button-group_border-less {\n  gap: 20px;\n  margin-bottom: 30px;\n}\n.form-elements__button {\n  margin-bottom: 40px;\n}\n.form-elements__pagination {\n  margin-bottom: 230px;\n}\n.form-elements__bullet {\n  display: flex;\n  flex-direction: column;\n  gap: 0.714em;\n}\n.form-elements__testimonial {\n  grid-area: testimonial;\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/pages/form-elements/form-elements.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA;ADvBA;EACE,WAAA;EACA,iBAAA;EACA,cAAA;EACA,cAAA;AAsDF;AApDE;EACE,aAAA;EACA,gHACE;EAGF,+BAAA;AAmDJ;AAhDE;EACE,eAAA;AAkDJ;AA/CE;EACE,aAAA;EACA,8BAAA;EACA,eAAA;EACA,sBAAA;AAiDJ;AA9CE;EACE,sBAAA;AAgDJ;AA9CI;EACE,gBAAA;AAgDN;AA7CI;EACE,sBAAA;AA+CN;AA5CI;EACE,sBAAA;AA8CN;AA3CI;EACE,oBAAA;AA6CN;AAxCI;EACE,uBAAA;AA0CN;AAtCE;EACE,sBAAA;AAwCJ;AAtCI;EACE,iBAAA;EACA,sBAAA;AAwCN;AApCE;EACE,sBAAA;AAsCJ;AAnCE;EACE,sBAAA;AAqCJ;AAlCE;EACE,sBAAA;AAoCJ;AAlCI;EACE,sBAAA;AAoCN;AAhCE;EACE,sBAAA;AAkCJ;AA/BE;EACE,iBAAA;EACA,gBAAA;AAiCJ;AA9BE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,qBAAA;AAgCJ;AA7BE;EACE,aAAA;EACA,YAAA;EACA,sBAAA;AA+BJ;AA5BE;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,sBAAA;AA8BJ;AA3BE;EACE,aAAA;EACA,YAAA;EACA,sBAAA;AA6BJ;AA1BE;EACE,aAAA;EACA,YAAA;EACA,mBAAA;AA4BJ;AAzBE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,uBAAA;AA2BJ;AAxBE;EACE,gBAAA;AA0BJ;AAvBE;EACE,aAAA;AAyBJ;AAvBI;EACE,SAAA;EACA,mBAAA;AAyBN;AAtBI;EACE,SAAA;EACA,mBAAA;AAwBN;AArBI;EACE,SAAA;EACA,mBAAA;AAuBN;AAnBE;EACE,mBAAA;AAqBJ;AAlBE;EACE,oBAAA;AAoBJ;AAjBE;EACE,aAAA;EACA,sBAAA;EACA,YAAA;AAmBJ;AAhBE;EACE,sBAAA;AAkBJ","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@use '../../styles/main' as *;\n\n.form-elements {\n  width: 100%;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 2.08%;\n\n  &__grid {\n    display: grid;\n    grid:\n      'left . center . right' 1fr\n      'left . testimonial testimonial testimonial'\n      / 27.63% 10.88% 27.63% 6.22% 27.63%;\n    margin: 4.429em 7.929em 7.214em;\n  }\n\n  &__grid-wrap-left {\n    grid-area: left;\n  }\n\n  &__text-field-heading {\n    display: flex;\n    justify-content: space-between;\n    max-width: 100%;\n    margin-bottom: 0.357em;\n  }\n\n  &__title-input {\n    margin-bottom: 1.143em;\n\n    &_without-margin-bottom {\n      margin-bottom: 0;\n    }\n\n    &_text-field {\n      margin-bottom: 0.357em;\n    }\n\n    &_dropdown {\n      margin-bottom: 0.357em;\n    }\n\n    &_padding_top {\n      padding-top: 0.214em;\n    }\n  }\n\n  &__desc-state-input {\n    &__padding_bottom {\n      padding-bottom: 0.214em;\n    }\n  }\n\n  &__text-field {\n    margin-bottom: 1.429em;\n\n    &_subscribe {\n      max-width: 83.44%;\n      margin-bottom: 7.143em;\n    }\n  }\n\n  &__dropdown-common-value {\n    margin-bottom: 1.607em;\n  }\n\n  &__masked-text-field {\n    margin-bottom: 1.429em;\n  }\n\n  &__checkbox-list {\n    margin-bottom: 7.254em;\n\n    &_closed {\n      margin-bottom: 1.429em;\n    }\n  }\n\n  &__benefit {\n    margin-bottom: 1.214em;\n  }\n\n  &__grid-wrap-center {\n    grid-area: center;\n    padding-top: 3px;\n  }\n\n  &__checkbox-group {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-bottom: 2.92em;\n  }\n\n  &__radio-group {\n    display: flex;\n    gap: 1.429em;\n    margin-bottom: 2.611em;\n  }\n\n  &__toggle {\n    display: flex;\n    flex-direction: column;\n    gap: 0.714em;\n    margin-bottom: 2.889em;\n  }\n\n  &__like-button-group {\n    display: flex;\n    gap: 0.714em;\n    margin-bottom: 2.857em;\n  }\n\n  &__rate-group {\n    display: flex;\n    gap: 1.429em;\n    margin-bottom: 14em;\n  }\n\n  &__rich-checkbox-group {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-bottom: 16.643em;\n  }\n\n  &__grid-wrap-right {\n    grid-area: right;\n  }\n\n  &__button-group {\n    display: flex;\n\n    &_default {\n      gap: 19px;\n      margin-bottom: 30px;\n    }\n\n    &_with-border {\n      gap: 20px;\n      margin-bottom: 31px;\n    }\n\n    &_border-less {\n      gap: 20px;\n      margin-bottom: 30px;\n    }\n  }\n\n  &__button {\n    margin-bottom: 40px;\n  }\n\n  &__pagination {\n    margin-bottom: 230px;\n  }\n\n  &__bullet {\n    display: flex;\n    flex-direction: column;\n    gap: 0.714em;\n  }\n\n  &__testimonial {\n    grid-area: testimonial;\n  }\n}\n","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/montserrat-regular.woff2 */ "./src/assets/fonts/montserrat-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/montserrat-regular.woff */ "./src/assets/fonts/montserrat-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/montserrat-regular.ttf */ "./src/assets/fonts/montserrat-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/montserrat-regular.svg */ "./src/assets/fonts/montserrat-regular.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/montserrat-bold.woff2 */ "./src/assets/fonts/montserrat-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/montserrat-bold.woff */ "./src/assets/fonts/montserrat-bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/montserrat-bold.ttf */ "./src/assets/fonts/montserrat-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/montserrat-bold.svg */ "./src/assets/fonts/montserrat-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/styles/main.scss","webpack://./src/styles/settings.scss","webpack://./src/styles/vars.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yRAAA;ACCF;ADMA;EACE,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sRAAA;ACJF;ACXA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;ADaF;;ACVA;;;EAGE,sBAAA;ADaF;;ACVA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,cCde;EDef,0CAAA;EACA,uBAAA;EACA,uBAAA;ADaF;;ACVA;;;;;;;;;;;;;;;;;GAAA","sourcesContent":["@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Regular'),\n    url('../assets/fonts/montserrat-regular.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-regular.woff') format('woff'),\n    url('../assets/fonts/montserrat-regular.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-regular.svg') format('svg');\n}\n\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local('Montserrat'), local('Montserrat-Bold'),\n    url('../assets/fonts/montserrat-bold.woff2') format('woff2'),\n    url('../assets/fonts/montserrat-bold.woff') format('woff'),\n    url('../assets/fonts/montserrat-bold.ttf') format('truetype'),\n    url('../assets/fonts/montserrat-bold.svg') format('svg');\n}\n","@font-face {\n  font-weight: normal;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Regular\"), url(\"../assets/fonts/montserrat-regular.woff2\") format(\"woff2\"), url(\"../assets/fonts/montserrat-regular.woff\") format(\"woff\"), url(\"../assets/fonts/montserrat-regular.ttf\") format(\"truetype\"), url(\"../assets/fonts/montserrat-regular.svg\") format(\"svg\");\n}\n@font-face {\n  font-weight: bold;\n  font-family: Montserrat;\n  font-style: normal;\n  font-display: swap;\n  src: local(\"Montserrat\"), local(\"Montserrat-Bold\"), url(\"../assets/fonts/montserrat-bold.woff2\") format(\"woff2\"), url(\"../assets/fonts/montserrat-bold.woff\") format(\"woff\"), url(\"../assets/fonts/montserrat-bold.ttf\") format(\"truetype\"), url(\"../assets/fonts/montserrat-bold.svg\") format(\"svg\");\n}\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #575871;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */","@use './vars' as *;\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  font-size: 0.875em;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $color-font-a75;\n  font-family: Montserrat, Arial, sans-serif;\n  background-color: white;\n  scroll-behavior: smooth;\n}\n\n/* body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n}\n\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na { \n  text-decoration: none;\n} */\n","$color-font-a100: #1f2041;\n\n@function tint($dark-blue, $percentage) {\n  @return mix(white, $dark-blue, $percentage);\n}\n$color-font-a75: tint($color-font-a100, 25%);\n$color-font-a50: tint($color-font-a100, 50%);\n$color-font-a25: tint($color-font-a100, 75%);\n$color-font-a10: tint($color-font-a100, 90%);\n$color-font-a5: tint($color-font-a100, 95%);\n\n$color-primary-bg: #bc9cff;\n$color-secondary-bg: #6fcf97;\n$color-third-bg: #fff;\n\n$border-primary: #fff;\n\n$primary-gradient: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);\n$secondary-gradient: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);\n\n$main-font-family: montserrat, arial, sans-serif;\n\n$color-shadow-primary: rgba(31, 32, 65, 10%);\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/arrow/arrow.scss":
/*!*****************************************!*\
  !*** ./src/components/arrow/arrow.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_arrow_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./arrow.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/arrow/arrow.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_arrow_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_arrow_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_arrow_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_arrow_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/benefit/benefit.scss":
/*!*********************************************!*\
  !*** ./src/components/benefit/benefit.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_benefit_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./benefit.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/benefit/benefit.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_benefit_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_benefit_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_benefit_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_benefit_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/bullet/bullet.scss":
/*!*******************************************!*\
  !*** ./src/components/bullet/bullet.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bullet_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./bullet.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/bullet/bullet.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bullet_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bullet_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bullet_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bullet_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/button/button.scss":
/*!*******************************************!*\
  !*** ./src/components/button/button.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./button.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/button/button.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/checkbox-list/checkbox-list.scss":
/*!*********************************************************!*\
  !*** ./src/components/checkbox-list/checkbox-list.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_checkbox_list_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./checkbox-list.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/checkbox-list/checkbox-list.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_checkbox_list_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_checkbox_list_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_checkbox_list_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_checkbox_list_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/checkbox/checkbox.scss":
/*!***********************************************!*\
  !*** ./src/components/checkbox/checkbox.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_checkbox_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./checkbox.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/checkbox/checkbox.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_checkbox_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_checkbox_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_checkbox_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_checkbox_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/desc-state-input/desc-state-input.scss":
/*!***************************************************************!*\
  !*** ./src/components/desc-state-input/desc-state-input.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_desc_state_input_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./desc-state-input.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/desc-state-input/desc-state-input.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_desc_state_input_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_desc_state_input_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_desc_state_input_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_desc_state_input_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/dropdown-common-value/dropdown-common-value.scss":
/*!*************************************************************************!*\
  !*** ./src/components/dropdown-common-value/dropdown-common-value.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dropdown_common_value_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./dropdown-common-value.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/dropdown-common-value/dropdown-common-value.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dropdown_common_value_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dropdown_common_value_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dropdown_common_value_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dropdown_common_value_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/like-button/like-button.scss":
/*!*****************************************************!*\
  !*** ./src/components/like-button/like-button.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_like_button_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./like-button.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/like-button/like-button.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_like_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_like_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_like_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_like_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pagination/pagination.scss":
/*!***************************************************!*\
  !*** ./src/components/pagination/pagination.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_pagination_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./pagination.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pagination/pagination.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_pagination_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_pagination_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_pagination_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_pagination_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/radio/radio.scss":
/*!*****************************************!*\
  !*** ./src/components/radio/radio.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_radio_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./radio.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/radio/radio.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_radio_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_radio_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_radio_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_radio_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/rate-button/rate-button.scss":
/*!*****************************************************!*\
  !*** ./src/components/rate-button/rate-button.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_rate_button_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./rate-button.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/rate-button/rate-button.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_rate_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_rate_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_rate_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_rate_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/rate/rate.scss":
/*!***************************************!*\
  !*** ./src/components/rate/rate.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_rate_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./rate.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/rate/rate.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_rate_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_rate_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_rate_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_rate_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/testimonial/testimonial.scss":
/*!*****************************************************!*\
  !*** ./src/components/testimonial/testimonial.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_testimonial_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./testimonial.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/testimonial/testimonial.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_testimonial_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_testimonial_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_testimonial_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_testimonial_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/text-field/text-field.scss":
/*!***************************************************!*\
  !*** ./src/components/text-field/text-field.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_text_field_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./text-field.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/text-field/text-field.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_text_field_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_text_field_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_text_field_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_text_field_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/title-input/title-input.scss":
/*!*****************************************************!*\
  !*** ./src/components/title-input/title-input.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_title_input_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./title-input.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/title-input/title-input.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_title_input_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_title_input_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_title_input_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_title_input_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/toggle/toggle.scss":
/*!*******************************************!*\
  !*** ./src/components/toggle/toggle.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_toggle_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./toggle.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/toggle/toggle.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_toggle_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_toggle_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_toggle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_toggle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/form-elements/form-elements.scss":
/*!****************************************************!*\
  !*** ./src/pages/form-elements/form-elements.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_elements_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./form-elements.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/form-elements/form-elements.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_elements_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_elements_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_elements_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_elements_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/fonts/montserrat-bold.svg":
/*!**********************************************!*\
  !*** ./src/assets/fonts/montserrat-bold.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/montserrat-bold.svg";

/***/ }),

/***/ "./src/assets/fonts/montserrat-bold.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/montserrat-bold.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/montserrat-bold.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat-bold.woff":
/*!***********************************************!*\
  !*** ./src/assets/fonts/montserrat-bold.woff ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/montserrat-bold.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat-bold.woff2":
/*!************************************************!*\
  !*** ./src/assets/fonts/montserrat-bold.woff2 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/montserrat-bold.woff2";

/***/ }),

/***/ "./src/assets/fonts/montserrat-regular.svg":
/*!*************************************************!*\
  !*** ./src/assets/fonts/montserrat-regular.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/montserrat-regular.svg";

/***/ }),

/***/ "./src/assets/fonts/montserrat-regular.ttf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/montserrat-regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/montserrat-regular.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat-regular.woff":
/*!**************************************************!*\
  !*** ./src/assets/fonts/montserrat-regular.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/montserrat-regular.woff";

/***/ }),

/***/ "./src/assets/fonts/montserrat-regular.woff2":
/*!***************************************************!*\
  !*** ./src/assets/fonts/montserrat-regular.woff2 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/montserrat-regular.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"form-elements": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_maskedinput_src_jquery_maskedinput_js-node_modules_material-icons-94c659"], () => (__webpack_require__("./src/pages/form-elements/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=form-elements.js.map