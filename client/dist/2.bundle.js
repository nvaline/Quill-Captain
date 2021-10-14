(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./client/src/components/Ratings&Reviews/AddReviewButton.jsx":
/*!*******************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/AddReviewButton.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2;



var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 11rem;\n  background-color: white;\n  height: 3.5rem;\n  border: 1px solid black;\n "])));
var Button_Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: flex;\n    align-items: center;\n    margin-left:2rem;\n "])));

var AddReviewButton = function AddReviewButton(_ref) {
  var toggleModalShown = _ref.toggleModalShown;

  var handleClick = function handleClick() {
    setModalShown(!modalShown);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    submit: "nothing",
    onClick: toggleModalShown
  }, "ADD A REVIEW +"));
};

/* harmony default export */ __webpack_exports__["default"] = (AddReviewButton);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/AdditionalReviewOptions.jsx":
/*!***************************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/AdditionalReviewOptions.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MoreReviewsButton_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoreReviewsButton.jsx */ "./client/src/components/Ratings&Reviews/MoreReviewsButton.jsx");
/* harmony import */ var _AddReviewButton_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddReviewButton.jsx */ "./client/src/components/Ratings&Reviews/AddReviewButton.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;





var ReviewButton_Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n   display:flex;\n   justify-content: space-between;\n"])));

var AdditionalReviewOptions = function AdditionalReviewOptions(_ref) {
  var getNextReviewPage = _ref.getNextReviewPage,
      toggleModalShown = _ref.toggleModalShown;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ReviewButton_Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MoreReviewsButton_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    getNextReviewPage: getNextReviewPage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddReviewButton_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    toggleModalShown: toggleModalShown
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AdditionalReviewOptions);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/AverageDisplay.jsx":
/*!******************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/AverageDisplay.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_StarDisplay_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/StarDisplay.jsx */ "./client/src/components/Shared/StarDisplay.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2;




var Average_display = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: flex;\n    align-items: center;\n    "]))); //margin-left:1rem;

var H1 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    font-size:", ";\n    font-family:", ";\n "])), function (props) {
  return props.font_size;
}, function (props) {
  return props.font;
});

var AverageDisplay = function AverageDisplay(_ref) {
  var ratings = _ref.ratings;
  var totalRatings = 0;
  var totalStars = 0;

  for (var rating in ratings) {
    totalRatings += Number(ratings[rating]);
    totalStars += Number(ratings[rating]) * Number(rating);
  }

  var rating = totalStars / totalRatings;
  var ratingDisplay = rating;

  if (rating !== Math.floor(rating)) {
    ratingDisplay = rating.toFixed(1);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Average_display, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H1, {
    font_size: '3.5rem',
    font: 'system-ui'
  }, ratingDisplay), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "summary-star-display"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_StarDisplay_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    rating: rating
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AverageDisplay);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/BreakdownBar.jsx":
/*!****************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/BreakdownBar.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var BreakdownBar = function BreakdownBar(_ref) {
  var value = _ref.value,
      max = _ref.max;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "235",
    height: "20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M\n        0 5\n        0 15\n        220 15\n        220 5\n      ",
    fill: "lightgray"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M\n          0 5\n          0 15\n          ".concat(220 * value / max, " 15\n          ").concat(220 * value / max, " 5\n        "),
    fill: "green"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BreakdownBar);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/BreakdownBarInactive.jsx":
/*!************************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/BreakdownBarInactive.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var BreakdownBarInactive = function BreakdownBarInactive(_ref) {
  var value = _ref.value,
      max = _ref.max;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "235",
    height: "20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M\n        0 5\n        0 15\n        220 15\n        220 5\n      ",
    fill: "lightgray"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M\n          0 5\n          0 15\n          ".concat(220 * value / max, " 15\n          ").concat(220 * value / max, " 5\n        "),
    fill: "darkGray"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BreakdownBarInactive);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/BreakdownFilterDisplay.jsx":
/*!**************************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/BreakdownFilterDisplay.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;



var BreakdownFilterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n   margin: 1rem 0 0 2rem;\n   cursor: pointer;\n"])));

var BreakdownFilterDisplay = function BreakdownFilterDisplay(_ref) {
  var reviewFilter = _ref.reviewFilter,
      clearReviewFilter = _ref.clearReviewFilter;

  var handleClick = function handleClick() {
    clearReviewFilter();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BreakdownFilterContainer, null, reviewFilter.active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Rating Breakdown") : null, reviewFilter.active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Displaying") : null, reviewFilter.stars[5] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "5 Star Reviews") : null, reviewFilter.stars[4] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "4 Star Reviews") : null, reviewFilter.stars[3] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "3 Star Reviews") : null, reviewFilter.stars[2] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "2 Star Reviews") : null, reviewFilter.stars[1] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "1 Star Reviews") : null, reviewFilter.active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: function onClick() {
      handleClick();
    }
  }, "Remove all filters") : null);
};

/* harmony default export */ __webpack_exports__["default"] = (BreakdownFilterDisplay);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/CharacteristicQuarters.jsx":
/*!**************************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/CharacteristicQuarters.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2, _templateObject3;



var Descriptors = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  justify-content: space-between;\n"])));
var Characteristic_Quarters_Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin: 0rem 0;\n"])));
var Ptags = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: ", ";\n  margin-bottom: ", ";\n"])), function (props) {
  return props.size;
}, function (props) {
  return props.mb;
});

var CharacteristicQuarters = function CharacteristicQuarters(props) {
  var gap = 2.5;
  var position = (props.characteristic.value - 1) * props.width / 4;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Characteristic_Quarters_Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ptags, {
    size: '1.2rem',
    mb: '0.5rem'
  }, props.characteristic.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    id: "",
    width: '100%',
    height: "20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "char",
    d: "M\n            0 0\n            0 8\n            ".concat(props.width * 1 / 4 - gap, " 8\n            ").concat(props.width * 1 / 4 - gap, " 0\n          "),
    fill: "lightgray"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "char",
    d: "M\n            ".concat(props.width * 1 / 4 + gap, " 0\n            ").concat(props.width * 1 / 4 + gap, " 8\n            ").concat(props.width * 2 / 4 - gap, " 8\n            ").concat(props.width * 2 / 4 - gap, " 0\n          "),
    fill: "lightgray"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "char",
    d: "M\n            ".concat(props.width * 2 / 4 + gap, " 0\n            ").concat(props.width * 2 / 4 + gap, " 8\n            ").concat(props.width * 3 / 4 - gap, " 8\n            ").concat(props.width * 3 / 4 - gap, " 0\n          "),
    fill: "lightgray"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "char",
    d: "M\n            ".concat(props.width * 3 / 4 + gap, " 0\n            ").concat(props.width * 3 / 4 + gap, " 8\n            ").concat(props.width * 4 / 4 - gap, " 8\n            ").concat(props.width * 4 / 4 - gap, " 0\n          "),
    fill: "lightgray"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    id: "arrow",
    d: "M\n            ".concat(position, " 15\n            ").concat(position + 7, " 0\n            ").concat(position - 7, " 0\n            ").concat(position, " 15\n          "),
    fill: "green"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Descriptors, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "decriptor low-descriptor"
  }, props.characteristic.low), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "decriptor balanced-descriptor"
  }, props.characteristic.balanced), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "decriptor high-descriptor"
  }, props.characteristic.high)));
};

/* harmony default export */ __webpack_exports__["default"] = (CharacteristicQuarters);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/Characteristics.jsx":
/*!*******************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/Characteristics.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CharacteristicQuarters_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CharacteristicQuarters.jsx */ "./client/src/components/Ratings&Reviews/CharacteristicQuarters.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _templateObject;




var Characteristics_Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n    display: flex;\n    flex-direction: column;\n"]))); // Given the radial buttons and law of averages, must between 1 and 5
// Far left is "1", far right is "5"
// Dead center segment is "3"

var Characteristics = function Characteristics(_ref) {
  var characteristics = _ref.characteristics;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var width = document.getElementById('characteristics-container').offsetWidth;
    setWidth(width);
  });

  if (characteristics.Size) {
    var sizeCharacteristic = {
      id: 14,
      name: 'Size',
      value: Number(characteristics.Size.value),
      low: 'A Size Too Small',
      balanced: 'Perfect',
      high: 'A Size Too Wide'
    };
  }

  if (characteristics.Width) {
    var widthCharacteristic = {
      id: 15,
      name: 'Width',
      value: Number(characteristics.Width.value),
      low: 'Too Narrow',
      balanced: 'Perfect',
      high: 'Too Wide'
    };
  }

  if (characteristics.Comfort) {
    var comfortCharacteristic = {
      id: 16,
      name: 'Comfort',
      value: Number(characteristics.Comfort.value),
      low: 'Uncomfortable',
      balanced: 'Ok',
      high: 'Perfect'
    };
  }

  if (characteristics.Quality) {
    var qualityCharacteristic = {
      id: 17,
      name: 'Quality',
      value: Number(characteristics.Quality.value),
      low: 'Poor',
      balanced: 'What I Expected',
      high: 'Perfect'
    };
  }

  if (characteristics.Length) {
    var lengthCharacteristic = {
      id: 18,
      name: 'Length',
      value: Number(characteristics.Length.value),
      low: 'Runs Short',
      balanced: 'Perfect',
      high: 'Runs Long'
    };
  }

  if (characteristics.Fit) {
    var fitCharacteristic = {
      id: 19,
      name: 'Fit',
      value: Number(characteristics.Fit.value),
      low: 'Runs Tight',
      balanced: 'Perfect',
      high: 'Runs Long'
    };
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Characteristics_Container, {
    id: "characteristics-container"
  }, sizeCharacteristic ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CharacteristicQuarters_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: width,
    characteristic: sizeCharacteristic
  }) : null, widthCharacteristic ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CharacteristicQuarters_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: width,
    characteristic: widthCharacteristic
  }) : null, comfortCharacteristic !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CharacteristicQuarters_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: width,
    characteristic: comfortCharacteristic
  }) : null, qualityCharacteristic !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CharacteristicQuarters_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: width,
    characteristic: qualityCharacteristic
  }) : null, lengthCharacteristic !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CharacteristicQuarters_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: width,
    characteristic: lengthCharacteristic
  }) : null, fitCharacteristic !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CharacteristicQuarters_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: width,
    characteristic: fitCharacteristic
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Characteristics);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/FullImageDisplay.jsx":
/*!********************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/FullImageDisplay.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;



var FullImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].main(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display:grid;\n  grid-row-gap: 0.1rem;\n  padding: 10px;\n  position: fixed;\n  z-index: 200;\n  background: #fff;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  border-radius: 8px;\n"])));

var FullImageDisplay = function FullImageDisplay(_ref) {
  var reviewImgUrl = _ref.reviewImgUrl,
      setReviewImgUrl = _ref.setReviewImgUrl;

  var handleClick = function handleClick() {
    setReviewImgUrl('');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FullImageContainer, {
    onClick: function onClick(e) {
      handleClick(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: reviewImgUrl
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FullImageDisplay);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/Helpfulness.jsx":
/*!***************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/Helpfulness.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



var Helpfulness = function Helpfulness(_ref) {
  var reviewId = _ref.reviewId,
      helpfulness = _ref.helpfulness;

  var handleHelpfulClick = function handleHelpfulClick() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/reviews/".concat(reviewId, "/helpful")); // console.log(`Review id ${reviewId} was helpful`);
  };

  var handleReportClick = function handleReportClick() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/reviews/".concat(reviewId, "/report")); // console.log(`Review id ${reviewId} was hurtful`);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Helpful? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "helpful-anchor",
    onClick: function onClick() {
      handleHelpfulClick();
    }
  }, "Yes"), " (", helpfulness, ") | ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "report-anchor",
    onClick: function onClick() {
      handleReportClick();
    }
  }, "Report"));
};

/* harmony default export */ __webpack_exports__["default"] = (Helpfulness);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/ImageModal.jsx":
/*!**************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/ImageModal.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ProductContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ProductContext.js */ "./client/src/components/contexts/ProductContext.js");
/* harmony import */ var _FullImageDisplay_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FullImageDisplay.jsx */ "./client/src/components/Ratings&Reviews/FullImageDisplay.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;





var ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, .7);\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 100;\n    margin: auto 0;\n"])));

var ImageModal = function ImageModal(_ref) {
  var reviewImgUrl = _ref.reviewImgUrl,
      setReviewImgUrl = _ref.setReviewImgUrl;

  var handleClick = function handleClick() {
    setReviewImgUrl('');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_contexts_ProductContext_js__WEBPACK_IMPORTED_MODULE_2__["default"].Consumer, null, function (_ref2) {
    var reviewMeta = _ref2.reviewMeta,
        product = _ref2.product;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalContainer, {
      onClick: function onClick() {
        return handleClick();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FullImageDisplay_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      reviewMeta: reviewMeta,
      productName: product[0].name,
      reviewImgUrl: reviewImgUrl,
      setReviewImgUrl: setReviewImgUrl
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageModal);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/MoreReviewsButton.jsx":
/*!*********************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/MoreReviewsButton.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;



var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 11rem;\n  background-color: white;\n  height: 3.5rem;\n  border: 1px solid black;\n "])));

var MoreReviewsButton = function MoreReviewsButton(_ref) {
  var getNextReviewPage = _ref.getNextReviewPage;

  var handleClick = function handleClick() {
    getNextReviewPage();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    submit: "nothing",
    onClick: function onClick() {
      return handleClick();
    }
  }, "More Reviews");
};

/* harmony default export */ __webpack_exports__["default"] = (MoreReviewsButton);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/NewReviewForm.jsx":
/*!*****************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/NewReviewForm.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_NewReviewStarDisplay_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/NewReviewStarDisplay.jsx */ "./client/src/components/Shared/NewReviewStarDisplay.jsx");
/* harmony import */ var _ReviewCharacteristics_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReviewCharacteristics.jsx */ "./client/src/components/Ratings&Reviews/ReviewCharacteristics.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;






var ReviewForm = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].main(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  display:grid;\n  grid-row-gap: 0.1rem;\n  padding: 1rem;\n  position: fixed;\n  z-index: 200;\n  background: #fff;\n  width: 70%;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  border-radius: 8px;\n"])));
var Recommend_Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  display:flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 22rem;\n"])));
var UploadPictureContianer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n   display: flex;\n   flex-direction: column;\n"])));
var Rate_Characteristics_Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n    display: grid;\n    grid-row-gap: 0.7rem;\n    margin-bottom:1rem;\n"])));
var Button = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].button(_templateObject5 || (_templateObject5 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  background-color: white;\n  height: 2rem;\n  border: 1px solid black;\n "]))); // Hela's Combat Garb: https://i.imgur.com/Q5kWc7n.jpg
// Samus' Power Suit: https://i.imgur.com/dtjVxno.jpg
// Dragonborn's Iron Helmet: https://i.imgur.com/j3uT1ND.jpg
// Marty McFly's Vest: https://i.imgur.com/VDC9duU.jpg
// Superman's Outfit: https://i.imgur.com/B5kTEPt.jpg

var NewReviewForm = function NewReviewForm(_ref) {
  var reviewMeta = _ref.reviewMeta,
      productName = _ref.productName;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      rating = _useState2[0],
      setRating = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      hoverRating = _useState4[0],
      setHoverRating = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      summary = _useState6[0],
      setSummary = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      body = _useState8[0],
      setBody = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),
      recommend = _useState10[0],
      setRecommend = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState11, 2),
      username = _useState12[0],
      setUsername = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState13, 2),
      email = _useState14[0],
      setEmail = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(['', '', '', '', '']),
      _useState16 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState15, 2),
      photos = _useState16[0],
      setPhotos = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState18 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState17, 2),
      characteristics = _useState18[0],
      setCharacteristics = _useState18[1];

  var handleSummaryChange = function handleSummaryChange(e) {
    setSummary(e.target.value);
  };

  var handleBodyChange = function handleBodyChange(e) {
    setBody(e.target.value);
  };

  var handleRecommendedChange = function handleRecommendedChange(e) {
    setRecommend(e.target.value);
  };

  var handlePictureChange = function handlePictureChange(photoIndex, value) {
    var photoArray = photos.slice();
    photoArray[photoIndex] = value; // console.log('Photo array:');
    // console.log(photoArray);

    setPhotos(photoArray); // console.log(photos);
  };

  var handleUsernameChange = function handleUsernameChange(e) {
    setUsername(e.target.value);
  };

  var handleEmailChange = function handleEmailChange(e) {
    setEmail(e.target.value);
  };

  var characteristicsOptions = [{
    keyName: 'size',
    name: 'Size',
    lowest: 'A size too small',
    low: '½ a size too small',
    mid: 'Perfect',
    high: '½ a size too big',
    highest: 'A size too wide'
  }, {
    keyName: 'width',
    name: 'Width',
    lowest: 'Too narrow',
    low: 'Slightly narrow',
    mid: 'Perfect',
    high: 'Slightly wide',
    highest: 'Too wide'
  }, {
    keyName: 'comfort',
    name: 'Comfort',
    lowest: 'Uncomfortable',
    low: 'Slightly uncomfortable',
    mid: 'Ok',
    high: 'Comfortable',
    highest: 'Perfect'
  }, {
    keyName: 'quality',
    name: 'Quality',
    lowest: 'Below average',
    low: '½ a size too small',
    mid: 'What I expected',
    high: 'Pretty great',
    highest: 'Perfect'
  }, {
    keyName: 'length',
    name: 'Length',
    lowest: 'Runs Short',
    low: 'Runs slightly short',
    mid: 'Perfect',
    high: 'Runs slightly long',
    highest: 'Runs long'
  }, {
    keyName: 'fit',
    name: 'Fit',
    lowest: 'Runs tight',
    low: 'Runs slightly tight',
    mid: 'Perfect',
    high: 'Runs slightly long',
    highest: 'Runs long'
  }];

  var changeCharacteristic = function changeCharacteristic(value, characteristic) {
    var chars = characteristics;
    chars[reviewMeta.characteristics[characteristic].id] = Number(value);
    setCharacteristics(chars);
  };

  var submitNewReview = function submitNewReview() {
    var submissionArray = [];
    photos.forEach(function (photoURL) {
      if (photoURL !== '') {
        submissionArray.push(photoURL);
      }
    });
    var reviewData = {
      product_id: Number(reviewMeta.product_id),
      rating: rating,
      summary: summary,
      body: body,
      recommend: Boolean(recommend),
      name: username,
      email: email,
      photos: submissionArray,
      characteristics: characteristics
    }; // console.log(`You are submitting the data:`);
    // console.log(reviewData);

    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("/reviews/", reviewData).then(function (response) {
      console.log(response);
    })["catch"](function (error) {
      console.log('An error is triggered client side');
      console.error('Error:', error);
    });
  };

  var handleClick = function handleClick(e) {
    e.stopPropagation();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ReviewForm, {
    onClick: function onClick(e) {
      handleClick(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, "Write Your Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", null, "About the ", productName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Shared_NewReviewStarDisplay_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rating: rating,
    hoverRating: hoverRating,
    setRating: setRating,
    setHoverRating: setHoverRating
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "Summary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(e) {
      handleSummaryChange(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "Body"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(e) {
      handleBodyChange(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Recommend_Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Do you recommend this product?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "radio",
    id: "recommend-true",
    name: "recommend",
    value: "true",
    onChange: function onChange(e) {
      handleRecommendedChange(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "recommend-true"
  }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "radio",
    id: "recommend-false",
    name: "recommend",
    value: "false",
    onChange: function onChange(e) {
      handleRecommendedChange(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "recommend-false"
  }, "No")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(UploadPictureContianer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "Upload Up To 5 Pictures of the Product!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "Picture 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(e) {
      return handlePictureChange(0, e.target.value);
    }
  }), photos[0] !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "Picture 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(e) {
      return handlePictureChange(1, e.target.value);
    }
  })) : null, photos[1] !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "Picture 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(e) {
      return handlePictureChange(2, e.target.value);
    }
  })) : null, photos[2] !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "Picture 4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(e) {
      return handlePictureChange(3, e.target.value);
    }
  })) : null, photos[3] !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "Picture 5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(e) {
      return handlePictureChange(4, e.target.value);
    }
  })) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(e) {
      handleUsernameChange(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(e) {
      handleEmailChange(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Rate_Characteristics_Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "Rate These Characteristics"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ReviewCharacteristics_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    characteristics: characteristicsOptions,
    changeCharacteristic: changeCharacteristic,
    reviewMeta: reviewMeta
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    type: "button",
    onClick: function onClick() {
      submitNewReview();
    }
  }, "Submit Review!!"));
};

/* harmony default export */ __webpack_exports__["default"] = (NewReviewForm);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/NewReviewModal.jsx":
/*!******************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/NewReviewModal.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ProductContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ProductContext.js */ "./client/src/components/contexts/ProductContext.js");
/* harmony import */ var _NewReviewForm_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewReviewForm.jsx */ "./client/src/components/Ratings&Reviews/NewReviewForm.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;





var ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, .7);\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 100;\n    margin: auto 0;\n"])));

var NewReviewModal = function NewReviewModal(_ref) {
  var toggleModalShown = _ref.toggleModalShown;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_contexts_ProductContext_js__WEBPACK_IMPORTED_MODULE_2__["default"].Consumer, null, function (_ref2) {
    var reviewMeta = _ref2.reviewMeta,
        product = _ref2.product;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalContainer, {
      onClick: toggleModalShown
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NewReviewForm_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      reviewMeta: reviewMeta,
      productName: product[0].name
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NewReviewModal);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/PercentRecommended.jsx":
/*!**********************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/PercentRecommended.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;



var Percent_recommended = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h4(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n   font-weight: 400;\n"])));

var PercentRecommended = function PercentRecommended(_ref) {
  var recommended = _ref.recommended;
  var recommendedCount = Number(recommended["true"]);
  var totalReviews = Number(recommended["true"]) + Number(recommended["false"]);
  var percentRecommended = 0;

  if (recommendedCount / totalReviews === 1) {
    percentRecommended = 100;
  } else {
    percentRecommended = (recommendedCount / totalReviews * 100).toFixed(1);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Percent_recommended, null, percentRecommended, "% of reviews recommend this product");
};

/* harmony default export */ __webpack_exports__["default"] = (PercentRecommended);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/Photo.jsx":
/*!*********************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/Photo.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;



var ReviewImg = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  padding-right: 35px;\n"])));

var Photo = function Photo(_ref) {
  var photoUrl = _ref.photoUrl,
      setReviewImgUrl = _ref.setReviewImgUrl;

  var handleClick = function handleClick() {
    setReviewImgUrl(photoUrl);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ReviewImg, {
    src: photoUrl,
    width: "125",
    height: "125",
    alt: "review photo",
    onClick: function onClick() {
      return handleClick();
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Photo);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/PhotoGallery.jsx":
/*!****************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/PhotoGallery.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Photo_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Photo.jsx */ "./client/src/components/Ratings&Reviews/Photo.jsx");



var PhotoGallery = function PhotoGallery(_ref) {
  var photos = _ref.photos,
      setReviewImgUrl = _ref.setReviewImgUrl;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, photos.map(function (photo) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Photo_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: photo.id,
      photoUrl: photo.url,
      setReviewImgUrl: setReviewImgUrl
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PhotoGallery);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/ProductRecommendedRow.jsx":
/*!*************************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/ProductRecommendedRow.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Checkmark_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/Checkmark.jsx */ "./client/src/components/Shared/Checkmark.jsx");



var ProductRecommendedRow = function ProductRecommendedRow(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Checkmark_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), "I recommend this product!");
};

/* harmony default export */ __webpack_exports__["default"] = (ProductRecommendedRow);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/RatingBreakdown.jsx":
/*!*******************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/RatingBreakdown.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RatingCount_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RatingCount.jsx */ "./client/src/components/Ratings&Reviews/RatingCount.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;




var RatingCountContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n   cursor: pointer;\n"])));

var RatingBreakdown = function RatingBreakdown(_ref) {
  var ratings = _ref.ratings,
      reviewFilter = _ref.reviewFilter,
      updateReviewFilter = _ref.updateReviewFilter;
  var totalRatings = 0;

  for (var rating in ratings) {
    totalRatings += Number(ratings[rating]);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RatingCountContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RatingCount_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ratingCount: Number(ratings[5]),
    totalRatings: totalRatings,
    count: 5,
    reviewFilter: reviewFilter,
    updateReviewFilter: updateReviewFilter
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RatingCount_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ratingCount: Number(ratings[4]),
    totalRatings: totalRatings,
    count: 4,
    reviewFilter: reviewFilter,
    updateReviewFilter: updateReviewFilter
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RatingCount_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ratingCount: Number(ratings[3]),
    totalRatings: totalRatings,
    count: 3,
    reviewFilter: reviewFilter,
    updateReviewFilter: updateReviewFilter
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RatingCount_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ratingCount: Number(ratings[2]),
    totalRatings: totalRatings,
    count: 2,
    reviewFilter: reviewFilter,
    updateReviewFilter: updateReviewFilter
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RatingCount_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ratingCount: Number(ratings[1]),
    totalRatings: totalRatings,
    count: 1,
    reviewFilter: reviewFilter,
    updateReviewFilter: updateReviewFilter
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RatingBreakdown);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/RatingCount.jsx":
/*!***************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/RatingCount.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BreakdownBar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BreakdownBar.jsx */ "./client/src/components/Ratings&Reviews/BreakdownBar.jsx");
/* harmony import */ var _BreakdownBarInactive_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BreakdownBarInactive.jsx */ "./client/src/components/Ratings&Reviews/BreakdownBarInactive.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2;





var Rating_count_row = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display:flex;\n  align-items: center;\n"])));
var Rating_value = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n   margin-right:1rem;\n   margin-top: 0;\n   margin-bottom: 0;\n"])));

var RatingCount = function RatingCount(_ref) {
  var ratingCount = _ref.ratingCount,
      totalRatings = _ref.totalRatings,
      count = _ref.count,
      reviewFilter = _ref.reviewFilter,
      updateReviewFilter = _ref.updateReviewFilter;

  var handleClick = function handleClick() {
    console.log("Triggered star breakdown for ".concat(count));
    updateReviewFilter(count);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Rating_count_row, {
    onClick: function onClick() {
      handleClick();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Rating_value, null, count, " stars"), reviewFilter.active && !reviewFilter.stars[count] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BreakdownBarInactive_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "rating-count-bar",
    value: ratingCount,
    max: totalRatings
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BreakdownBar_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "rating-count-bar",
    value: ratingCount,
    max: totalRatings
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "rating-count"
  }, ratingCount));
};

/* harmony default export */ __webpack_exports__["default"] = (RatingCount);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/Ratings&Reviews.jsx":
/*!*******************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/Ratings&Reviews.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Ratings_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ratings.jsx */ "./client/src/components/Ratings&Reviews/Ratings.jsx");
/* harmony import */ var _Reviews_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Reviews.jsx */ "./client/src/components/Ratings&Reviews/Reviews.jsx");
/* harmony import */ var _NewReviewModal_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewReviewModal.jsx */ "./client/src/components/Ratings&Reviews/NewReviewModal.jsx");
/* harmony import */ var _ImageModal_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImageModal.jsx */ "./client/src/components/Ratings&Reviews/ImageModal.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _templateObject, _templateObject2;







var Ratings_and_reviews_container = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  display: flex;\n  background-color: whitesmoke;\n  padding-bottom: 1.25rem;\n  margin-bottom: 0;\n  max-height: 100vh;\n  justify-content: space-between;\n  padding: 0 2rem;\n "])));
var RatingsReviewsSC = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  width: 1280px;\n"])));

var RatingsAndReviews = function RatingsAndReviews() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),
      modalShown = _React$useState2[0],
      setModalShown = _React$useState2[1];

  var toggleModalShown = function toggleModalShown() {
    setModalShown(!modalShown);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    active: false,
    stars: {
      5: false,
      4: false,
      3: false,
      2: false,
      1: false
    }
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      reviewFilter = _useState2[0],
      setReviewFilter = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(JSON.stringify(reviewFilter)),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      filterSignature = _useState4[0],
      setFilterSignature = _useState4[1];

  var updateReviewFilter = function updateReviewFilter(rating) {
    var newFilterSettings = reviewFilter;
    newFilterSettings.stars[rating] = !newFilterSettings.stars[rating];
    newFilterSettings.active = false;

    for (var star in newFilterSettings.stars) {
      if (newFilterSettings.stars[star] === true) {
        newFilterSettings.active = true;
      }
    } // console.log('Obviously updating filter from', reviewFilter);


    setReviewFilter(newFilterSettings);
    setFilterSignature(JSON.stringify(reviewFilter)); // console.log('To', reviewFilter);
  };

  var clearReviewFilter = function clearReviewFilter() {
    var newFilterSettings = {
      active: false,
      stars: {
        5: false,
        4: false,
        3: false,
        2: false,
        1: false
      }
    };
    setReviewFilter(newFilterSettings);
    setFilterSignature(JSON.stringify(reviewFilter));
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      reviewImgUrl = _useState6[0],
      setReviewImgUrl = _useState6[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RatingsReviewsSC, {
    id: "rating-review"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    id: "ratings-and-reviews-title"
  }, "Ratings & Reviews"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Ratings_and_reviews_container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Ratings_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    reviewFilter: reviewFilter,
    updateReviewFilter: updateReviewFilter,
    clearReviewFilter: clearReviewFilter
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Reviews_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    reviewFilter: reviewFilter,
    filterSignature: filterSignature,
    toggleModalShown: toggleModalShown,
    setReviewImgUrl: setReviewImgUrl
  }), modalShown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_NewReviewModal_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    toggleModalShown: toggleModalShown
  }) : null, reviewImgUrl.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ImageModal_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    reviewImgUrl: reviewImgUrl,
    setReviewImgUrl: setReviewImgUrl
  }) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (RatingsAndReviews);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/Ratings.jsx":
/*!***********************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/Ratings.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AverageDisplay_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AverageDisplay.jsx */ "./client/src/components/Ratings&Reviews/AverageDisplay.jsx");
/* harmony import */ var _PercentRecommended_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PercentRecommended.jsx */ "./client/src/components/Ratings&Reviews/PercentRecommended.jsx");
/* harmony import */ var _RatingBreakdown_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RatingBreakdown.jsx */ "./client/src/components/Ratings&Reviews/RatingBreakdown.jsx");
/* harmony import */ var _BreakdownFilterDisplay_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BreakdownFilterDisplay.jsx */ "./client/src/components/Ratings&Reviews/BreakdownFilterDisplay.jsx");
/* harmony import */ var _Characteristics_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Characteristics.jsx */ "./client/src/components/Ratings&Reviews/Characteristics.jsx");
/* harmony import */ var _contexts_ProductContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/ProductContext.js */ "./client/src/components/contexts/ProductContext.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;










var Ratings = function Ratings(_ref) {
  var reviewFilter = _ref.reviewFilter,
      updateReviewFilter = _ref.updateReviewFilter,
      clearReviewFilter = _ref.clearReviewFilter;
  var RatingsContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    padding-right: 32px;\n  "])));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_contexts_ProductContext_js__WEBPACK_IMPORTED_MODULE_7__["default"].Consumer, null, function (_ref2) {
    var reviewMeta = _ref2.reviewMeta;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RatingsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AverageDisplay_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ratings: reviewMeta.ratings
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PercentRecommended_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      recommended: reviewMeta.recommended
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RatingBreakdown_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ratings: reviewMeta.ratings,
      reviewFilter: reviewFilter,
      updateReviewFilter: updateReviewFilter
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BreakdownFilterDisplay_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      reviewFilter: reviewFilter,
      clearReviewFilter: clearReviewFilter
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Characteristics_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      characteristics: reviewMeta.characteristics
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Ratings);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/Review.jsx":
/*!**********************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/Review.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReviewHeader_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReviewHeader.jsx */ "./client/src/components/Ratings&Reviews/ReviewHeader.jsx");
/* harmony import */ var _PhotoGallery_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PhotoGallery.jsx */ "./client/src/components/Ratings&Reviews/PhotoGallery.jsx");
/* harmony import */ var _ProductRecommendedRow_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductRecommendedRow.jsx */ "./client/src/components/Ratings&Reviews/ProductRecommendedRow.jsx");
/* harmony import */ var _Helpfulness_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Helpfulness.jsx */ "./client/src/components/Ratings&Reviews/Helpfulness.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4;







var Review_Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin: 2.5rem 0 2rem 0;\n"])));
var Hr = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].hr(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin-top:3rem;\n"])));
var Img = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].img(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 1rem;\n  height: 1rem;\n  margin-right: 1rem;\n"])));
var Reiview_Recommend = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  align-items: center;\n"])));

var Review = function Review(_ref) {
  var review = _ref.review,
      setReviewImgUrl = _ref.setReviewImgUrl;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Review_Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ReviewHeader_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    rating: review.rating,
    productId: review.id,
    reviewer_name: review.reviewer_name,
    date: review.date
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "review-summary-primary"
  }, review.summary.slice(0, 60)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, review.summary.slice(60)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, review.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PhotoGallery_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    photos: review.photos,
    setReviewImgUrl: setReviewImgUrl
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, review.recommend ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProductRecommendedRow_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, review.response), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Helpfulness_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    helpfulness: review.helpfulness,
    reviewId: review.review_id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Hr, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Review);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/ReviewCharacteristic.jsx":
/*!************************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/ReviewCharacteristic.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2, _templateObject3;



var Label = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  text-align: center;\n  display: flex;\n  justify-content: space-around;\n"])));
var DescriptorContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  text-align: center;\n  display: flex;\n  justify-content: space-around;\n"])));
var CharacteristicContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 15%;\n  text-align: center;\n  justify-content: space-around;\n"])));

var ReviewCharacteristic = function ReviewCharacteristic(props) {
  var handleChange = function handleChange(value) {
    props.changeCharacteristic(value, props.characteristic.name);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, null, props.characteristic.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DescriptorContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CharacteristicContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, props.characteristic.lowest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "radio",
    id: "".concat(props.characteristic.keyName, "-1"),
    value: "1",
    name: props.characteristic.keyName,
    onChange: function onChange(e) {
      handleChange(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CharacteristicContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, props.characteristic.low), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "radio",
    id: "".concat(props.characteristic.keyName, "-2"),
    value: "2",
    name: props.characteristic.keyName,
    onChange: function onChange(e) {
      handleChange(e.target.value, "".concat(props.characteristic.name));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CharacteristicContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, props.characteristic.mid), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "radio",
    id: "".concat(props.characteristic.keyName, "-3"),
    value: "3",
    name: props.characteristic.keyName,
    onChange: function onChange(e) {
      handleChange(e.target.value, "".concat(props.characteristic.name));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CharacteristicContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, props.characteristic.high), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "radio",
    id: "".concat(props.characteristic.keyName, "-4"),
    value: "4",
    name: props.characteristic.keyName,
    onChange: function onChange(e) {
      handleChange(e.target.value, "".concat(props.characteristic.name));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CharacteristicContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, props.characteristic.highest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "radio",
    id: "".concat(props.characteristic.keyName, "-5"),
    value: "5",
    name: props.characteristic.keyName,
    onChange: function onChange(e) {
      handleChange(e.target.value, "".concat(props.characteristic.name));
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ReviewCharacteristic);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/ReviewCharacteristics.jsx":
/*!*************************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/ReviewCharacteristics.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReviewCharacteristic_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewCharacteristic.jsx */ "./client/src/components/Ratings&Reviews/ReviewCharacteristic.jsx");



var ReviewCharacteristics = function ReviewCharacteristics(_ref) {
  var characteristics = _ref.characteristics,
      reviewMeta = _ref.reviewMeta,
      changeCharacteristic = _ref.changeCharacteristic;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, characteristics.map(function (characteristic, i) {
    return reviewMeta.characteristics[characteristic.name] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewCharacteristic_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: i,
      characteristic: characteristic,
      changeCharacteristic: changeCharacteristic
    }) : null;
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ReviewCharacteristics);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/ReviewCountAndSort.jsx":
/*!**********************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/ReviewCountAndSort.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4;



var ReviewCountAndSortSC = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 21px;\n  font-weight: bold;\n  display: flex;\n"])));
var ReviewCountSC = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-weight: bold;\n  display: flex;\n"])));
var SortSelectSC = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].select(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 21px;\n  font-weight: bold;\n  text-decoration: underline;\n  max-width: 340px;\n  display: flex;\n  border: 0;\n  background: rgb(0, 0, 0, 0);\n"])));
var SortOptionSC = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].option(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 21px;\n\n  margin: 8px;\n  height: 50px;\n  width: 150px\n"])));

var ReviewCountAndSort = function ReviewCountAndSort(_ref) {
  var reviewCount = _ref.reviewCount,
      changeSortType = _ref.changeSortType,
      productId = _ref.productId;

  // handle change
  var handleChange = function handleChange(sortType) {
    changeSortType(sortType);
  }; //api call get new sort method, first parge
  // passed down setReviews(new info);


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ReviewCountAndSortSC, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ReviewCountSC, null, reviewCount, " reviews, sorted by"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SortSelectSC, {
    onChange: function onChange(e) {
      return handleChange(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SortOptionSC, {
    value: "relevant"
  }, "Relevant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SortOptionSC, {
    value: "helpful"
  }, "Helpful"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SortOptionSC, {
    value: "newest"
  }, "Newest")));
};

/* harmony default export */ __webpack_exports__["default"] = (ReviewCountAndSort);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/ReviewHeader.jsx":
/*!****************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/ReviewHeader.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_StarDisplay_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/StarDisplay.jsx */ "./client/src/components/Shared/StarDisplay.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2, _templateObject3;





var ReviewHeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: grid;\n"])));
var HeaderStarDisplay = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  grid-column: 1;\n"])));
var ReviewUserAndTimestampContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h3(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  grid-column: 2;\n  text-align: right;\n  padding: 0px;\n  margin: 0px;\n"])));

var ReviewHeader = function ReviewHeader(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ReviewHeaderContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderStarDisplay, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_StarDisplay_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    rating: props.rating,
    productId: props.productId
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ReviewUserAndTimestampContainer, null, "".concat(props.reviewer_name, ", ").concat(moment__WEBPACK_IMPORTED_MODULE_3___default()(props.date).format('LL'))));
};

/* harmony default export */ __webpack_exports__["default"] = (ReviewHeader);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/ReviewList.jsx":
/*!**************************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/ReviewList.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Review_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Review.jsx */ "./client/src/components/Ratings&Reviews/Review.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _templateObject;




var ReviewListContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  overflow: scroll;\n  overflow-x: hidden;\n  max-height: 80vh;\n"])));

var ReviewList = function ReviewList(_ref) {
  var reviews = _ref.reviews,
      reviewFilter = _ref.reviewFilter,
      filterSignature = _ref.filterSignature,
      sortType = _ref.sortType,
      displayCount = _ref.displayCount,
      setReviewImgUrl = _ref.setReviewImgUrl;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(reviews),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      reviewsShown = _useState2[0],
      setReviewsShown = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var filteredReviews = [];
    reviews.forEach(function (review) {
      if (filteredReviews.length < displayCount) {
        if (!reviewFilter.active) {
          filteredReviews.push(review);
        } else {
          if (reviewFilter.stars[review.rating]) {
            filteredReviews.push(review);
          }
        }
      }
    });
    setReviewsShown(filteredReviews);
  }, [sortType, displayCount, filterSignature]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ReviewListContainer, null, reviewsShown.map(function (review) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Review_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: review.review_id,
      review: review,
      setReviewImgUrl: setReviewImgUrl
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ReviewList);

/***/ }),

/***/ "./client/src/components/Ratings&Reviews/Reviews.jsx":
/*!***********************************************************!*\
  !*** ./client/src/components/Ratings&Reviews/Reviews.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ReviewCountAndSort_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReviewCountAndSort.jsx */ "./client/src/components/Ratings&Reviews/ReviewCountAndSort.jsx");
/* harmony import */ var _ReviewList_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReviewList.jsx */ "./client/src/components/Ratings&Reviews/ReviewList.jsx");
/* harmony import */ var _AdditionalReviewOptions_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AdditionalReviewOptions.jsx */ "./client/src/components/Ratings&Reviews/AdditionalReviewOptions.jsx");
/* harmony import */ var _contexts_ProductContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/ProductContext.js */ "./client/src/components/contexts/ProductContext.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _templateObject;








var Reviews_Container = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  margin: 3rem 0 0 0rem;\n  width: 920px;\n"])));

var Reviews = function Reviews(_ref) {
  var reviewFilter = _ref.reviewFilter,
      filterSignature = _ref.filterSignature,
      toggleModalShown = _ref.toggleModalShown,
      setReviewImgUrl = _ref.setReviewImgUrl;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('relevant'),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      sortType = _useState2[0],
      setSortType = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(2),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      displayCount = _useState4[0],
      setDisplayCount = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      filter = _useState6[0],
      setReviewFilter = _useState6[1]; // useEffect(() => {
  //   console.log('Change detected');
  // }, [filter, reviewFilter]);


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_contexts_ProductContext_js__WEBPACK_IMPORTED_MODULE_6__["default"].Consumer, null, function (_ref2) {
    var reviews = _ref2.reviews,
        setReviews = _ref2.setReviews,
        reviewMeta = _ref2.reviewMeta;
    var reviewCount = 0;

    for (var rating in reviewMeta.ratings) {
      reviewCount += Number(reviewMeta.ratings[rating]);
    }

    var getNextReviewPage = function getNextReviewPage() {
      var newDisplayLimit = displayCount + 2;
      setDisplayCount(newDisplayLimit);
    };

    var changeSortType = function changeSortType(sortType) {
      var updatedReviews = reviews;
      updatedReviews.results = [];
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/reviews/".concat(reviews.product, "/").concat(sortType, "/1/").concat(reviewCount)).then(function (_ref3) {
        var data = _ref3.data;
        setReviews(data);
        setSortType(sortType);
        setDisplayCount(2);
      });
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Reviews_Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ReviewCountAndSort_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      reviewCount: reviewCount,
      changeSortType: changeSortType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ReviewList_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      reviews: reviews.results,
      reviewFilter: reviewFilter,
      filterSignature: filterSignature,
      sortType: sortType,
      displayCount: displayCount,
      setReviewImgUrl: setReviewImgUrl
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_AdditionalReviewOptions_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      getNextReviewPage: getNextReviewPage,
      toggleModalShown: toggleModalShown
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Reviews);

/***/ }),

/***/ "./client/src/components/Shared/Checkmark.jsx":
/*!****************************************************!*\
  !*** ./client/src/components/Shared/Checkmark.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Checkmark = function Checkmark(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    x: "0px",
    y: "0px",
    viewBox: "0 0 50 50",
    width: "15",
    height: "15",
    style: {
      bottom: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M17.561,42.8c0-3.95-16.823-12.335-16.823-12.335l5.128-5.717 l11.361,7.406L45.262,5l3.935,3.95C49.196,8.95,17.561,36.875,17.561,42.8",
    fill: "green",
    stroke: "black",
    strokeWidth: "1"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Checkmark);

/***/ }),

/***/ "./client/src/components/Shared/NewReviewStar.jsx":
/*!********************************************************!*\
  !*** ./client/src/components/Shared/NewReviewStar.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // Do NOT use this component to display your ratings
// Non-Ratings and Reviews Widgets should use <StarAverageRating/> !!!

function NewReviewStar(props) {
  var degToRad = function degToRad(deg) {
    return deg * 0.0174533;
  };

  var radius = 10;
  var strokeWidth = 0.5;

  var findStarPoints = function findStarPoints(r) {
    var pointAngles = [];

    for (var angleNum = 0; angleNum < 12; angleNum++) {
      pointAngles.push(90 + angleNum * 36);
    }

    pointAngles.forEach(function (angle, i) {
      if (i % 2 === 0) {
        points.push([Math.cos(degToRad(angle)) * -r + r + strokeWidth, Math.sin(degToRad(angle)) * -r + r + strokeWidth]);
      } else if (i % 2 !== 0) {
        points.push([Math.cos(degToRad(angle)) * -r * 1.91 / 5 + r + strokeWidth, Math.sin(degToRad(angle)) * -r * 1.91 / 5 + r + strokeWidth]);
      }
    });
  };

  var points = [];
  findStarPoints(radius);
  var ratingRounding = Math.floor(props.stars / .25) / 4;
  var starFill = 1;

  if (ratingRounding >= 1) {
    starFill = 1;
  } else if (ratingRounding >= .75) {
    starFill = .65;
  } else if (ratingRounding >= .5) {
    starFill = .5;
  } else if (ratingRounding >= .25) {
    starFill = .35;
  } else {
    starFill = 0;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 ".concat(2 * (radius + strokeWidth), " ").concat(2 * (radius + strokeWidth)),
    width: 2 * (radius + strokeWidth),
    height: 2 * (radius + strokeWidth),
    className: "rating-star",
    onMouseEnter: function onMouseEnter() {
      props.setHoverRating(props.starNumber);
    },
    onMouseLeave: function onMouseLeave() {
      props.setHoverRating(0);
    },
    onClick: function onClick() {
      props.setRating(props.starNumber);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "clip-".concat(props.starId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M\n            ".concat(2 * (radius + strokeWidth), " 0\n            ").concat(2 * (radius + strokeWidth), " ").concat(2 * (radius + strokeWidth), "\n            ").concat(2 * (radius + strokeWidth) * starFill, " ").concat(2 * (radius + strokeWidth), "\n            ").concat(2 * (radius + strokeWidth) * starFill, " 0\n          ")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "".concat(props.starId),
    d: "\n        M ".concat(points[0][0], " ").concat(points[0][1], "\n        ").concat(points[1][0], " ").concat(points[1][1], "\n        ").concat(points[2][0], " ").concat(points[2][1], "\n        ").concat(points[3][0], " ").concat(points[3][1], "\n        ").concat(points[4][0], " ").concat(points[4][1], "\n        ").concat(points[5][0], " ").concat(points[5][1], "\n        ").concat(points[6][0], " ").concat(points[6][1], "\n        ").concat(points[7][0], " ").concat(points[7][1], "\n        ").concat(points[8][0], " ").concat(points[8][1], "\n        ").concat(points[9][0], " ").concat(points[9][1], "\n        ").concat(points[10][0], " ").concat(points[10][1], "\n        ").concat(points[11][0], " ").concat(points[11][1], "\n        "),
    stroke: "black",
    strokeWidth: strokeWidth,
    fill: "lightgrey"
  }), props.hoverStars > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "\n          M ".concat(points[0][0], " ").concat(points[0][1], "\n          ").concat(points[1][0], " ").concat(points[1][1], "\n          ").concat(points[2][0], " ").concat(points[2][1], "\n          ").concat(points[3][0], " ").concat(points[3][1], "\n          ").concat(points[4][0], " ").concat(points[4][1], "\n          ").concat(points[5][0], " ").concat(points[5][1], "\n          ").concat(points[6][0], " ").concat(points[6][1], "\n          ").concat(points[7][0], " ").concat(points[7][1], "\n          ").concat(points[8][0], " ").concat(points[8][1], "\n          ").concat(points[9][0], " ").concat(points[9][1], "\n          ").concat(points[10][0], " ").concat(points[10][1], "\n          ").concat(points[11][0], " ").concat(points[11][1], "\n          "),
    fill: "green",
    stroke: "black",
    strokeWidth: strokeWidth * 5
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "\n        M ".concat(points[0][0], " ").concat(points[0][1], "\n        ").concat(points[1][0], " ").concat(points[1][1], "\n        ").concat(points[2][0], " ").concat(points[2][1], "\n        ").concat(points[3][0], " ").concat(points[3][1], "\n        ").concat(points[4][0], " ").concat(points[4][1], "\n        ").concat(points[5][0], " ").concat(points[5][1], "\n        ").concat(points[6][0], " ").concat(points[6][1], "\n        ").concat(points[7][0], " ").concat(points[7][1], "\n        ").concat(points[8][0], " ").concat(points[8][1], "\n        ").concat(points[9][0], " ").concat(points[9][1], "\n        ").concat(points[10][0], " ").concat(points[10][1], "\n        ").concat(points[11][0], " ").concat(points[11][1], "\n        "),
    fill: "green",
    stroke: "black",
    strokeWidth: strokeWidth
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    clipPath: "url(#clip-".concat(props.starId, ")"),
    href: "#".concat(props.starId)
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (NewReviewStar);

/***/ }),

/***/ "./client/src/components/Shared/NewReviewStarDisplay.jsx":
/*!***************************************************************!*\
  !*** ./client/src/components/Shared/NewReviewStarDisplay.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NewReviewStar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewReviewStar.jsx */ "./client/src/components/Shared/NewReviewStar.jsx");



var NewReviewStarDisplay = function NewReviewStarDisplay(_ref) {
  var rating = _ref.rating,
      hoverRating = _ref.hoverRating,
      setRating = _ref.setRating,
      setHoverRating = _ref.setHoverRating;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewReviewStar_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    starNumber: 1,
    stars: rating,
    hoverStars: hoverRating,
    setRating: setRating,
    setHoverRating: setHoverRating,
    starId: Math.random()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewReviewStar_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    starNumber: 2,
    stars: rating - 1,
    hoverStars: hoverRating - 1,
    setRating: setRating,
    setHoverRating: setHoverRating,
    starId: Math.random()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewReviewStar_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    starNumber: 3,
    stars: rating - 2,
    hoverStars: hoverRating - 2,
    setRating: setRating,
    setHoverRating: setHoverRating,
    starId: Math.random()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewReviewStar_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    starNumber: 4,
    stars: rating - 3,
    hoverStars: hoverRating - 3,
    setRating: setRating,
    setHoverRating: setHoverRating,
    starId: Math.random()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewReviewStar_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    starNumber: 5,
    stars: rating - 4,
    hoverStars: hoverRating - 4,
    setRating: setRating,
    setHoverRating: setHoverRating,
    starId: Math.random()
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NewReviewStarDisplay);

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUmF0aW5ncyZSZXZpZXdzL0FkZFJldmlld0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1JhdGluZ3MmUmV2aWV3cy9BZGRpdGlvbmFsUmV2aWV3T3B0aW9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1JhdGluZ3MmUmV2aWV3cy9BdmVyYWdlRGlzcGxheS5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1JhdGluZ3MmUmV2aWV3cy9CcmVha2Rvd25CYXIuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SYXRpbmdzJlJldmlld3MvQnJlYWtkb3duQmFySW5hY3RpdmUuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SYXRpbmdzJlJldmlld3MvQnJlYWtkb3duRmlsdGVyRGlzcGxheS5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1JhdGluZ3MmUmV2aWV3cy9DaGFyYWN0ZXJpc3RpY1F1YXJ0ZXJzLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUmF0aW5ncyZSZXZpZXdzL0NoYXJhY3RlcmlzdGljcy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1JhdGluZ3MmUmV2aWV3cy9GdWxsSW1hZ2VEaXNwbGF5LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUmF0aW5ncyZSZXZpZXdzL0hlbHBmdWxuZXNzLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUmF0aW5ncyZSZXZpZXdzL0ltYWdlTW9kYWwuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SYXRpbmdzJlJldmlld3MvTW9yZVJldmlld3NCdXR0b24uanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SYXRpbmdzJlJldmlld3MvTmV3UmV2aWV3Rm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1JhdGluZ3MmUmV2aWV3cy9OZXdSZXZpZXdNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1JhdGluZ3MmUmV2aWV3cy9QZXJjZW50UmVjb21tZW5kZWQuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SYXRpbmdzJlJldmlld3MvUGhvdG8uanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SYXRpbmdzJlJldmlld3MvUGhvdG9HYWxsZXJ5LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUmF0aW5ncyZSZXZpZXdzL1Byb2R1Y3RSZWNvbW1lbmRlZFJvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1JhdGluZ3MmUmV2aWV3cy9SYXRpbmdCcmVha2Rvd24uanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SYXRpbmdzJlJldmlld3MvUmF0aW5nQ291bnQuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SYXRpbmdzJlJldmlld3MvUmF0aW5ncyZSZXZpZXdzLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUmF0aW5ncyZSZXZpZXdzL1JhdGluZ3MuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SYXRpbmdzJlJldmlld3MvUmV2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUmF0aW5ncyZSZXZpZXdzL1Jldmlld0NoYXJhY3RlcmlzdGljLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUmF0aW5ncyZSZXZpZXdzL1Jldmlld0NoYXJhY3RlcmlzdGljcy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1JhdGluZ3MmUmV2aWV3cy9SZXZpZXdDb3VudEFuZFNvcnQuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SYXRpbmdzJlJldmlld3MvUmV2aWV3SGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUmF0aW5ncyZSZXZpZXdzL1Jldmlld0xpc3QuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SYXRpbmdzJlJldmlld3MvUmV2aWV3cy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1NoYXJlZC9DaGVja21hcmsuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TaGFyZWQvTmV3UmV2aWV3U3Rhci5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1NoYXJlZC9OZXdSZXZpZXdTdGFyRGlzcGxheS5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsIkJ1dHRvbl9Db250YWluZXIiLCJkaXYiLCJBZGRSZXZpZXdCdXR0b24iLCJ0b2dnbGVNb2RhbFNob3duIiwiaGFuZGxlQ2xpY2siLCJzZXRNb2RhbFNob3duIiwibW9kYWxTaG93biIsIlJldmlld0J1dHRvbl9Db250YWluZXIiLCJBZGRpdGlvbmFsUmV2aWV3T3B0aW9ucyIsImdldE5leHRSZXZpZXdQYWdlIiwiQXZlcmFnZV9kaXNwbGF5IiwiSDEiLCJoMSIsInByb3BzIiwiZm9udF9zaXplIiwiZm9udCIsIkF2ZXJhZ2VEaXNwbGF5IiwicmF0aW5ncyIsInRvdGFsUmF0aW5ncyIsInRvdGFsU3RhcnMiLCJyYXRpbmciLCJOdW1iZXIiLCJyYXRpbmdEaXNwbGF5IiwiTWF0aCIsImZsb29yIiwidG9GaXhlZCIsIkJyZWFrZG93bkJhciIsInZhbHVlIiwibWF4IiwiQnJlYWtkb3duQmFySW5hY3RpdmUiLCJCcmVha2Rvd25GaWx0ZXJDb250YWluZXIiLCJCcmVha2Rvd25GaWx0ZXJEaXNwbGF5IiwicmV2aWV3RmlsdGVyIiwiY2xlYXJSZXZpZXdGaWx0ZXIiLCJhY3RpdmUiLCJzdGFycyIsIkRlc2NyaXB0b3JzIiwiQ2hhcmFjdGVyaXN0aWNfUXVhcnRlcnNfQ29udGFpbmVyIiwiUHRhZ3MiLCJwIiwic2l6ZSIsIm1iIiwiQ2hhcmFjdGVyaXN0aWNRdWFydGVycyIsImdhcCIsInBvc2l0aW9uIiwiY2hhcmFjdGVyaXN0aWMiLCJ3aWR0aCIsIm5hbWUiLCJsb3ciLCJiYWxhbmNlZCIsImhpZ2giLCJDaGFyYWN0ZXJpc3RpY3NfQ29udGFpbmVyIiwiQ2hhcmFjdGVyaXN0aWNzIiwiY2hhcmFjdGVyaXN0aWNzIiwidXNlU3RhdGUiLCJzZXRXaWR0aCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRXaWR0aCIsIlNpemUiLCJzaXplQ2hhcmFjdGVyaXN0aWMiLCJpZCIsIldpZHRoIiwid2lkdGhDaGFyYWN0ZXJpc3RpYyIsIkNvbWZvcnQiLCJjb21mb3J0Q2hhcmFjdGVyaXN0aWMiLCJRdWFsaXR5IiwicXVhbGl0eUNoYXJhY3RlcmlzdGljIiwiTGVuZ3RoIiwibGVuZ3RoQ2hhcmFjdGVyaXN0aWMiLCJGaXQiLCJmaXRDaGFyYWN0ZXJpc3RpYyIsInVuZGVmaW5lZCIsIkZ1bGxJbWFnZUNvbnRhaW5lciIsIm1haW4iLCJGdWxsSW1hZ2VEaXNwbGF5IiwicmV2aWV3SW1nVXJsIiwic2V0UmV2aWV3SW1nVXJsIiwiZSIsIkhlbHBmdWxuZXNzIiwicmV2aWV3SWQiLCJoZWxwZnVsbmVzcyIsImhhbmRsZUhlbHBmdWxDbGljayIsImF4aW9zIiwicHV0IiwiaGFuZGxlUmVwb3J0Q2xpY2siLCJNb2RhbENvbnRhaW5lciIsIkltYWdlTW9kYWwiLCJyZXZpZXdNZXRhIiwicHJvZHVjdCIsIk1vcmVSZXZpZXdzQnV0dG9uIiwiUmV2aWV3Rm9ybSIsIlJlY29tbWVuZF9Db250YWluZXIiLCJVcGxvYWRQaWN0dXJlQ29udGlhbmVyIiwiUmF0ZV9DaGFyYWN0ZXJpc3RpY3NfQ29udGFpbmVyIiwiTmV3UmV2aWV3Rm9ybSIsInByb2R1Y3ROYW1lIiwic2V0UmF0aW5nIiwiaG92ZXJSYXRpbmciLCJzZXRIb3ZlclJhdGluZyIsInN1bW1hcnkiLCJzZXRTdW1tYXJ5IiwiYm9keSIsInNldEJvZHkiLCJyZWNvbW1lbmQiLCJzZXRSZWNvbW1lbmQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBob3RvcyIsInNldFBob3RvcyIsInNldENoYXJhY3RlcmlzdGljcyIsImhhbmRsZVN1bW1hcnlDaGFuZ2UiLCJ0YXJnZXQiLCJoYW5kbGVCb2R5Q2hhbmdlIiwiaGFuZGxlUmVjb21tZW5kZWRDaGFuZ2UiLCJoYW5kbGVQaWN0dXJlQ2hhbmdlIiwicGhvdG9JbmRleCIsInBob3RvQXJyYXkiLCJzbGljZSIsImhhbmRsZVVzZXJuYW1lQ2hhbmdlIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJjaGFyYWN0ZXJpc3RpY3NPcHRpb25zIiwia2V5TmFtZSIsImxvd2VzdCIsIm1pZCIsImhpZ2hlc3QiLCJjaGFuZ2VDaGFyYWN0ZXJpc3RpYyIsImNoYXJzIiwic3VibWl0TmV3UmV2aWV3Iiwic3VibWlzc2lvbkFycmF5IiwiZm9yRWFjaCIsInBob3RvVVJMIiwicHVzaCIsInJldmlld0RhdGEiLCJwcm9kdWN0X2lkIiwiQm9vbGVhbiIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzdG9wUHJvcGFnYXRpb24iLCJOZXdSZXZpZXdNb2RhbCIsIlBlcmNlbnRfcmVjb21tZW5kZWQiLCJoNCIsIlBlcmNlbnRSZWNvbW1lbmRlZCIsInJlY29tbWVuZGVkIiwicmVjb21tZW5kZWRDb3VudCIsInRvdGFsUmV2aWV3cyIsInBlcmNlbnRSZWNvbW1lbmRlZCIsIlJldmlld0ltZyIsImltZyIsIlBob3RvIiwicGhvdG9VcmwiLCJQaG90b0dhbGxlcnkiLCJtYXAiLCJwaG90byIsInVybCIsIlByb2R1Y3RSZWNvbW1lbmRlZFJvdyIsIlJhdGluZ0NvdW50Q29udGFpbmVyIiwiUmF0aW5nQnJlYWtkb3duIiwidXBkYXRlUmV2aWV3RmlsdGVyIiwiUmF0aW5nX2NvdW50X3JvdyIsIlJhdGluZ192YWx1ZSIsIlJhdGluZ0NvdW50IiwicmF0aW5nQ291bnQiLCJjb3VudCIsIlJhdGluZ3NfYW5kX3Jldmlld3NfY29udGFpbmVyIiwiUmF0aW5nc1Jldmlld3NTQyIsIlJhdGluZ3NBbmRSZXZpZXdzIiwiUmVhY3QiLCJzZXRSZXZpZXdGaWx0ZXIiLCJKU09OIiwic3RyaW5naWZ5IiwiZmlsdGVyU2lnbmF0dXJlIiwic2V0RmlsdGVyU2lnbmF0dXJlIiwibmV3RmlsdGVyU2V0dGluZ3MiLCJzdGFyIiwibGVuZ3RoIiwiUmF0aW5ncyIsIlJhdGluZ3NDb250YWluZXIiLCJSZXZpZXdfQ29udGFpbmVyIiwiSHIiLCJociIsIkltZyIsIlJlaXZpZXdfUmVjb21tZW5kIiwiUmV2aWV3IiwicmV2aWV3IiwicmV2aWV3ZXJfbmFtZSIsImRhdGUiLCJyZXZpZXdfaWQiLCJMYWJlbCIsImxhYmVsIiwiRGVzY3JpcHRvckNvbnRhaW5lciIsIkNoYXJhY3RlcmlzdGljQ29udGFpbmVyIiwiUmV2aWV3Q2hhcmFjdGVyaXN0aWMiLCJoYW5kbGVDaGFuZ2UiLCJSZXZpZXdDaGFyYWN0ZXJpc3RpY3MiLCJpIiwiUmV2aWV3Q291bnRBbmRTb3J0U0MiLCJSZXZpZXdDb3VudFNDIiwiU29ydFNlbGVjdFNDIiwic2VsZWN0IiwiU29ydE9wdGlvblNDIiwib3B0aW9uIiwiUmV2aWV3Q291bnRBbmRTb3J0IiwicmV2aWV3Q291bnQiLCJjaGFuZ2VTb3J0VHlwZSIsInByb2R1Y3RJZCIsInNvcnRUeXBlIiwiUmV2aWV3SGVhZGVyQ29udGFpbmVyIiwiSGVhZGVyU3RhckRpc3BsYXkiLCJSZXZpZXdVc2VyQW5kVGltZXN0YW1wQ29udGFpbmVyIiwiaDMiLCJSZXZpZXdIZWFkZXIiLCJtb21lbnQiLCJmb3JtYXQiLCJSZXZpZXdMaXN0Q29udGFpbmVyIiwiUmV2aWV3TGlzdCIsInJldmlld3MiLCJkaXNwbGF5Q291bnQiLCJyZXZpZXdzU2hvd24iLCJzZXRSZXZpZXdzU2hvd24iLCJmaWx0ZXJlZFJldmlld3MiLCJSZXZpZXdzX0NvbnRhaW5lciIsIlJldmlld3MiLCJzZXRTb3J0VHlwZSIsInNldERpc3BsYXlDb3VudCIsImZpbHRlciIsInNldFJldmlld3MiLCJuZXdEaXNwbGF5TGltaXQiLCJ1cGRhdGVkUmV2aWV3cyIsInJlc3VsdHMiLCJnZXQiLCJkYXRhIiwiQ2hlY2ttYXJrIiwiYm90dG9tIiwiTmV3UmV2aWV3U3RhciIsImRlZ1RvUmFkIiwiZGVnIiwicmFkaXVzIiwic3Ryb2tlV2lkdGgiLCJmaW5kU3RhclBvaW50cyIsInIiLCJwb2ludEFuZ2xlcyIsImFuZ2xlTnVtIiwiYW5nbGUiLCJwb2ludHMiLCJjb3MiLCJzaW4iLCJyYXRpbmdSb3VuZGluZyIsInN0YXJGaWxsIiwic3Rhck51bWJlciIsInN0YXJJZCIsImhvdmVyU3RhcnMiLCJOZXdSZXZpZXdTdGFyRGlzcGxheSIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyx5REFBTSxDQUFDQyxNQUFWLGlPQUFaO0FBTUEsSUFBTUMsZ0JBQWdCLEdBQUdGLHlEQUFNLENBQUNHLEdBQVYsNE1BQXRCOztBQU1BLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBeUI7QUFBQSxNQUF0QkMsZ0JBQXNCLFFBQXRCQSxnQkFBc0I7O0FBRS9DLE1BQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJDLGlCQUFhLENBQUMsQ0FBQ0Ms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QUNFLGFBQVMsRUFBRUQsU0FEYjtBQUN3QixrQkFBYyxFQUFFRSxjQUR4QztBQUN3RCxVQUFNLEVBQUU3RSxJQUFJLENBQUM2TyxNQUFMO0FBRGhFLElBVEYsQ0FERjtBQWNELENBZkQ7O0FBaUJlRCxtRkFBZixFOzs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkUiLCJmaWxlIjoiMi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgd2lkdGg6IDExcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAzLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuIGA7XG5jb25zdCBCdXR0b25fQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6MnJlbTtcbiBgO1xuXG5jb25zdCBBZGRSZXZpZXdCdXR0b24gPSAoeyB0b2dnbGVNb2RhbFNob3dufSkgPT4ge1xuXG4gIHZhciBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRNb2RhbFNob3duKCFtb2RhbFNob3duKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QnV0dG9uIHN1Ym1pdD1cIm5vdGhpbmdcIiBvbkNsaWNrPXt0b2dnbGVNb2RhbFNob3dufT5cbiAgICAgICAgQUREIEEgUkVWSUVXICtcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFJldmlld0J1dHRvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vcmVSZXZpZXdzQnV0dG9uIGZyb20gJy4vTW9yZVJldmlld3NCdXR0b24uanN4JztcbmltcG9ydCBBZGRSZXZpZXdCdXR0b24gZnJvbSAnLi9BZGRSZXZpZXdCdXR0b24uanN4JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBSZXZpZXdCdXR0b25fQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgIGRpc3BsYXk6ZmxleDtcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmNvbnN0IEFkZGl0aW9uYWxSZXZpZXdPcHRpb25zID0gKHsgZ2V0TmV4dFJldmlld1BhZ2UsIHRvZ2dsZU1vZGFsU2hvd259KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJldmlld0J1dHRvbl9Db250YWluZXI+XG4gICAgICA8TW9yZVJldmlld3NCdXR0b24gZ2V0TmV4dFJldmlld1BhZ2U9e2dldE5leHRSZXZpZXdQYWdlfS8+XG4gICAgICA8QWRkUmV2aWV3QnV0dG9uIHRvZ2dsZU1vZGFsU2hvd249e3RvZ2dsZU1vZGFsU2hvd259Lz5cbiAgICA8L1Jldmlld0J1dHRvbl9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRpdGlvbmFsUmV2aWV3T3B0aW9uczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0YXJEaXNwbGF5IGZyb20gJy4uL1NoYXJlZC9TdGFyRGlzcGxheS5qc3gnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEF2ZXJhZ2VfZGlzcGxheSA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGA7XG4gICAgLy9tYXJnaW4tbGVmdDoxcmVtO1xuXG4gICAgY29uc3QgSDEgPSBzdHlsZWQuaDFgXG4gICAgZm9udC1zaXplOiR7cHJvcHMgPT4gcHJvcHMuZm9udF9zaXplfTtcbiAgICBmb250LWZhbWlseToke3Byb3BzID0+IHByb3BzLmZvbnR9O1xuIGA7XG5cbmNvbnN0IEF2ZXJhZ2VEaXNwbGF5ID0gKHtyYXRpbmdzfSkgPT4ge1xuICB2YXIgdG90YWxSYXRpbmdzID0gMDtcbiAgdmFyIHRvdGFsU3RhcnMgPSAwO1xuICBmb3IgKHZhciByYXRpbmcgaW4gcmF0aW5ncykge1xuICAgIHRvdGFsUmF0aW5ncyArPSBOdW1iZXIocmF0aW5nc1tyYXRpbmddKTtcbiAgICB0b3RhbFN0YXJzICs9IE51bWJlcihyYXRpbmdzW3JhdGluZ10pICogTnVtYmVyKHJhdGluZyk7XG4gIH1cbiAgdmFyIHJhdGluZyA9IHRvdGFsU3RhcnMgLyB0b3RhbFJhdGluZ3M7XG4gIHZhciByYXRpbmdEaXNwbGF5ID0gcmF0aW5nO1xuICBpZiAocmF0aW5nICE9PSBNYXRoLmZsb29yKHJhdGluZykpIHtcbiAgICByYXRpbmdEaXNwbGF5ID0gcmF0aW5nLnRvRml4ZWQoMSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8QXZlcmFnZV9kaXNwbGF5PlxuICAgICAgPEgxIGZvbnRfc2l6ZT17JzMuNXJlbSd9IGZvbnQ9eyAnc3lzdGVtLXVpJ30+e3JhdGluZ0Rpc3BsYXl9PC9IMT5cbiAgICAgIDxkaXYgaWQ9XCJzdW1tYXJ5LXN0YXItZGlzcGxheVwiPlxuICAgICAgICA8U3RhckRpc3BsYXkgcmF0aW5nPXtyYXRpbmd9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQXZlcmFnZV9kaXNwbGF5PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXZlcmFnZURpc3BsYXk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQnJlYWtkb3duQmFyID0gKHt2YWx1ZSwgbWF4fSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9XCIyMzVcIiBoZWlnaHQ9XCIyMFwiPlxuICAgICAgPHBhdGggZD17YE1cbiAgICAgICAgMCA1XG4gICAgICAgIDAgMTVcbiAgICAgICAgMjIwIDE1XG4gICAgICAgIDIyMCA1XG4gICAgICBgfVxuICAgICAgZmlsbD1cImxpZ2h0Z3JheVwiXG4gICAgICAvPlxuICAgICAgPHBhdGggZD17YE1cbiAgICAgICAgICAwIDVcbiAgICAgICAgICAwIDE1XG4gICAgICAgICAgJHsyMjAgKiB2YWx1ZSAvIG1heH0gMTVcbiAgICAgICAgICAkezIyMCAqIHZhbHVlIC8gbWF4fSA1XG4gICAgICAgIGB9XG4gICAgICAgIGZpbGw9XCJncmVlblwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnJlYWtkb3duQmFyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEJyZWFrZG93bkJhckluYWN0aXZlID0gKHsgdmFsdWUsIG1heCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD1cIjIzNVwiIGhlaWdodD1cIjIwXCI+XG4gICAgICA8cGF0aCBkPXtgTVxuICAgICAgICAwIDVcbiAgICAgICAgMCAxNVxuICAgICAgICAyMjAgMTVcbiAgICAgICAgMjIwIDVcbiAgICAgIGB9XG4gICAgICAgIGZpbGw9XCJsaWdodGdyYXlcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoIGQ9e2BNXG4gICAgICAgICAgMCA1XG4gICAgICAgICAgMCAxNVxuICAgICAgICAgICR7MjIwICogdmFsdWUgLyBtYXh9IDE1XG4gICAgICAgICAgJHsyMjAgKiB2YWx1ZSAvIG1heH0gNVxuICAgICAgICBgfVxuICAgICAgICBmaWxsPVwiZGFya0dyYXlcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFrZG93bkJhckluYWN0aXZlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQnJlYWtkb3duRmlsdGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgIG1hcmdpbjogMXJlbSAwIDAgMnJlbTtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IEJyZWFrZG93bkZpbHRlckRpc3BsYXkgPSAoe3Jldmlld0ZpbHRlciwgY2xlYXJSZXZpZXdGaWx0ZXJ9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGNsZWFyUmV2aWV3RmlsdGVyKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QnJlYWtkb3duRmlsdGVyQ29udGFpbmVyPlxuICAgICAge3Jldmlld0ZpbHRlci5hY3RpdmUgPyA8ZGl2PlJhdGluZyBCcmVha2Rvd248L2Rpdj4gOiBudWxsfVxuICAgICAge3Jldmlld0ZpbHRlci5hY3RpdmUgPyA8ZGl2PkRpc3BsYXlpbmc8L2Rpdj4gOiBudWxsfVxuICAgICAge3Jldmlld0ZpbHRlci5zdGFyc1s1XSA/IDxkaXY+NSBTdGFyIFJldmlld3M8L2Rpdj4gOiBudWxsfVxuICAgICAge3Jldmlld0ZpbHRlci5zdGFyc1s0XSA/IDxkaXY+NCBTdGFyIFJldmlld3M8L2Rpdj4gOiBudWxsfVxuICAgICAge3Jldmlld0ZpbHRlci5zdGFyc1szXSA/IDxkaXY+MyBTdGFyIFJldmlld3M8L2Rpdj4gOiBudWxsfVxuICAgICAge3Jldmlld0ZpbHRlci5zdGFyc1syXSA/IDxkaXY+MiBTdGFyIFJldmlld3M8L2Rpdj4gOiBudWxsfVxuICAgICAge3Jldmlld0ZpbHRlci5zdGFyc1sxXSA/IDxkaXY+MSBTdGFyIFJldmlld3M8L2Rpdj4gOiBudWxsfVxuICAgICAge3Jldmlld0ZpbHRlci5hY3RpdmUgPyA8ZGl2IG9uQ2xpY2s9eygpID0+IHtoYW5kbGVDbGljaygpfX0+UmVtb3ZlIGFsbCBmaWx0ZXJzPC9kaXY+IDogbnVsbH1cbiAgICA8L0JyZWFrZG93bkZpbHRlckNvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWtkb3duRmlsdGVyRGlzcGxheTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IERlc2NyaXB0b3JzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcbmNvbnN0IENoYXJhY3RlcmlzdGljX1F1YXJ0ZXJzX0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMHJlbSAwO1xuYDtcblxuY29uc3QgUHRhZ3MgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnNpemV9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLm1ifTtcbmA7XG5cblxuY29uc3QgQ2hhcmFjdGVyaXN0aWNRdWFydGVycyA9IChwcm9wcykgPT4ge1xuICB2YXIgZ2FwID0gMi41O1xuICB2YXIgcG9zaXRpb24gPSAocHJvcHMuY2hhcmFjdGVyaXN0aWMudmFsdWUgLSAxKSAqIHByb3BzLndpZHRoIC8gNDtcbiAgcmV0dXJuIChcbiAgICA8Q2hhcmFjdGVyaXN0aWNfUXVhcnRlcnNfQ29udGFpbmVyPlxuICAgICAgPFB0YWdzIHNpemU9eycxLjJyZW0nfSBtYj17JzAuNXJlbSd9PlxuICAgICAgICB7cHJvcHMuY2hhcmFjdGVyaXN0aWMubmFtZX1cbiAgICAgIDwvUHRhZ3M+XG4gICAgICA8c3ZnIGlkPVwiXCIgd2lkdGg9eycxMDAlJ30gaGVpZ2h0PVwiMjBcIj5cbiAgICAgICAgPHBhdGggaWQ9XCJjaGFyXCJcbiAgICAgICAgICBkPXtgTVxuICAgICAgICAgICAgMCAwXG4gICAgICAgICAgICAwIDhcbiAgICAgICAgICAgICR7cHJvcHMud2lkdGggKiAxIC8gNCAtIGdhcH0gOFxuICAgICAgICAgICAgJHtwcm9wcy53aWR0aCAqIDEgLyA0IC0gZ2FwfSAwXG4gICAgICAgICAgYH1cbiAgICAgICAgICBmaWxsPVwibGlnaHRncmF5XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGggaWQ9XCJjaGFyXCJcbiAgICAgICAgICBkPXtgTVxuICAgICAgICAgICAgJHtwcm9wcy53aWR0aCAqIDEgLyA0ICsgZ2FwfSAwXG4gICAgICAgICAgICAke3Byb3BzLndpZHRoICogMSAvIDQgKyBnYXB9IDhcbiAgICAgICAgICAgICR7cHJvcHMud2lkdGggKiAyIC8gNCAtIGdhcH0gOFxuICAgICAgICAgICAgJHtwcm9wcy53aWR0aCAqIDIgLyA0IC0gZ2FwfSAwXG4gICAgICAgICAgYH1cbiAgICAgICAgICBmaWxsPVwibGlnaHRncmF5XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGggaWQ9XCJjaGFyXCJcbiAgICAgICAgICBkPXtgTVxuICAgICAgICAgICAgJHtwcm9wcy53aWR0aCAqIDIgLyA0ICsgZ2FwfSAwXG4gICAgICAgICAgICAke3Byb3BzLndpZHRoICogMiAvIDQgKyBnYXB9IDhcbiAgICAgICAgICAgICR7cHJvcHMud2lkdGggKiAzIC8gNCAtIGdhcH0gOFxuICAgICAgICAgICAgJHtwcm9wcy53aWR0aCAqIDMgLyA0IC0gZ2FwfSAwXG4gICAgICAgICAgYH1cbiAgICAgICAgICBmaWxsPVwibGlnaHRncmF5XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGggaWQ9XCJjaGFyXCJcbiAgICAgICAgICBkPXtgTVxuICAgICAgICAgICAgJHtwcm9wcy53aWR0aCAqIDMgLyA0ICsgZ2FwfSAwXG4gICAgICAgICAgICAke3Byb3BzLndpZHRoICogMyAvIDQgKyBnYXB9IDhcbiAgICAgICAgICAgICR7cHJvcHMud2lkdGggKiA0IC8gNCAtIGdhcH0gOFxuICAgICAgICAgICAgJHtwcm9wcy53aWR0aCAqIDQgLyA0IC0gZ2FwfSAwXG4gICAgICAgICAgYH1cbiAgICAgICAgICBmaWxsPVwibGlnaHRncmF5XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGggaWQ9XCJhcnJvd1wiXG4gICAgICAgICAgZD17YE1cbiAgICAgICAgICAgICR7cG9zaXRpb259IDE1XG4gICAgICAgICAgICAke3Bvc2l0aW9uICsgN30gMFxuICAgICAgICAgICAgJHtwb3NpdGlvbiAtIDd9IDBcbiAgICAgICAgICAgICR7cG9zaXRpb259IDE1XG4gICAgICAgICAgYH1cbiAgICAgICAgICBmaWxsPVwiZ3JlZW5cIlxuICAgICAgICAvPlxuICAgICAgPC9zdmc+XG4gICAgICA8RGVzY3JpcHRvcnM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVjcmlwdG9yIGxvdy1kZXNjcmlwdG9yXCI+e3Byb3BzLmNoYXJhY3RlcmlzdGljLmxvd308L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWNyaXB0b3IgYmFsYW5jZWQtZGVzY3JpcHRvclwiPntwcm9wcy5jaGFyYWN0ZXJpc3RpYy5iYWxhbmNlZH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWNyaXB0b3IgaGlnaC1kZXNjcmlwdG9yXCI+e3Byb3BzLmNoYXJhY3RlcmlzdGljLmhpZ2h9PC9kaXY+XG4gICAgICA8L0Rlc2NyaXB0b3JzPlxuICAgIDwvQ2hhcmFjdGVyaXN0aWNfUXVhcnRlcnNfQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcmlzdGljUXVhcnRlcnM7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2hhcmFjdGVyaXN0aWNRdWFydGVycyBmcm9tICcuL0NoYXJhY3RlcmlzdGljUXVhcnRlcnMuanN4JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBDaGFyYWN0ZXJpc3RpY3NfQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gO1xuXG4vLyBHaXZlbiB0aGUgcmFkaWFsIGJ1dHRvbnMgYW5kIGxhdyBvZiBhdmVyYWdlcywgbXVzdCBiZXR3ZWVuIDEgYW5kIDVcbi8vIEZhciBsZWZ0IGlzIFwiMVwiLCBmYXIgcmlnaHQgaXMgXCI1XCJcbi8vIERlYWQgY2VudGVyIHNlZ21lbnQgaXMgXCIzXCJcblxuY29uc3QgQ2hhcmFjdGVyaXN0aWNzID0gKHtjaGFyYWN0ZXJpc3RpY3N9KSA9PiB7XG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoMCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJhY3RlcmlzdGljcy1jb250YWluZXInKS5vZmZzZXRXaWR0aDtcbiAgICBzZXRXaWR0aCh3aWR0aCk7XG4gIH0pO1xuXG4gIGlmIChjaGFyYWN0ZXJpc3RpY3MuU2l6ZSkge1xuICAgIHZhciBzaXplQ2hhcmFjdGVyaXN0aWMgPSB7XG4gICAgICBpZDogMTQsXG4gICAgICBuYW1lOiAnU2l6ZScsXG4gICAgICB2YWx1ZTogTnVtYmVyKGNoYXJhY3RlcmlzdGljcy5TaXplLnZhbHVlKSxcbiAgICAgIGxvdzogJ0EgU2l6ZSBUb28gU21hbGwnLFxuICAgICAgYmFsYW5jZWQ6ICdQZXJmZWN0JyxcbiAgICAgIGhpZ2g6ICdBIFNpemUgVG9vIFdpZGUnXG4gICAgfTtcbiAgfVxuXG4gIGlmIChjaGFyYWN0ZXJpc3RpY3MuV2lkdGgpIHtcbiAgICB2YXIgd2lkdGhDaGFyYWN0ZXJpc3RpYyA9IHtcbiAgICAgIGlkOiAxNSxcbiAgICAgIG5hbWU6ICdXaWR0aCcsXG4gICAgICB2YWx1ZTogTnVtYmVyKGNoYXJhY3RlcmlzdGljcy5XaWR0aC52YWx1ZSksXG4gICAgICBsb3c6ICdUb28gTmFycm93JyxcbiAgICAgIGJhbGFuY2VkOiAnUGVyZmVjdCcsXG4gICAgICBoaWdoOiAnVG9vIFdpZGUnXG4gICAgfTtcbiAgfVxuXG4gIGlmIChjaGFyYWN0ZXJpc3RpY3MuQ29tZm9ydCkge1xuICAgIHZhciBjb21mb3J0Q2hhcmFjdGVyaXN0aWMgPSB7XG4gICAgICBpZDogMTYsXG4gICAgICBuYW1lOiAnQ29tZm9ydCcsXG4gICAgICB2YWx1ZTogTnVtYmVyKGNoYXJhY3RlcmlzdGljcy5Db21mb3J0LnZhbHVlKSxcbiAgICAgIGxvdzogJ1VuY29tZm9ydGFibGUnLFxuICAgICAgYmFsYW5jZWQ6ICdPaycsXG4gICAgICBoaWdoOiAnUGVyZmVjdCdcbiAgICB9O1xuICB9XG5cbiAgaWYgKGNoYXJhY3RlcmlzdGljcy5RdWFsaXR5KSB7XG4gICAgdmFyIHF1YWxpdHlDaGFyYWN0ZXJpc3RpYyA9IHtcbiAgICAgIGlkOiAxNyxcbiAgICAgIG5hbWU6ICdRdWFsaXR5JyxcbiAgICAgIHZhbHVlOiBOdW1iZXIoY2hhcmFjdGVyaXN0aWNzLlF1YWxpdHkudmFsdWUpLFxuICAgICAgbG93OiAnUG9vcicsXG4gICAgICBiYWxhbmNlZDogJ1doYXQgSSBFeHBlY3RlZCcsXG4gICAgICBoaWdoOiAnUGVyZmVjdCdcbiAgICB9O1xuICB9XG5cbiAgaWYgKGNoYXJhY3RlcmlzdGljcy5MZW5ndGgpIHtcbiAgICB2YXIgbGVuZ3RoQ2hhcmFjdGVyaXN0aWMgPSB7XG4gICAgICBpZDogMTgsXG4gICAgICBuYW1lOiAnTGVuZ3RoJyxcbiAgICAgIHZhbHVlOiBOdW1iZXIoY2hhcmFjdGVyaXN0aWNzLkxlbmd0aC52YWx1ZSksXG4gICAgICBsb3c6ICdSdW5zIFNob3J0JyxcbiAgICAgIGJhbGFuY2VkOiAnUGVyZmVjdCcsXG4gICAgICBoaWdoOiAnUnVucyBMb25nJ1xuICAgIH07XG4gIH1cblxuICBpZiAoY2hhcmFjdGVyaXN0aWNzLkZpdCkge1xuICAgIHZhciBmaXRDaGFyYWN0ZXJpc3RpYyA9IHtcbiAgICAgIGlkOiAxOSxcbiAgICAgIG5hbWU6ICdGaXQnLFxuICAgICAgdmFsdWU6IE51bWJlcihjaGFyYWN0ZXJpc3RpY3MuRml0LnZhbHVlKSxcbiAgICAgIGxvdzogJ1J1bnMgVGlnaHQnLFxuICAgICAgYmFsYW5jZWQ6ICdQZXJmZWN0JyxcbiAgICAgIGhpZ2g6ICdSdW5zIExvbmcnXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENoYXJhY3RlcmlzdGljc19Db250YWluZXIgaWQ9XCJjaGFyYWN0ZXJpc3RpY3MtY29udGFpbmVyXCI+XG4gICAgICB7XG4gICAgICAgIHNpemVDaGFyYWN0ZXJpc3RpY1xuICAgICAgICAgID9cbiAgICAgICAgPENoYXJhY3RlcmlzdGljUXVhcnRlcnMgd2lkdGg9e3dpZHRofSBjaGFyYWN0ZXJpc3RpYz17c2l6ZUNoYXJhY3RlcmlzdGljfS8+XG4gICAgICAgICAgOlxuICAgICAgICBudWxsXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIHdpZHRoQ2hhcmFjdGVyaXN0aWNcbiAgICAgICAgICA/XG4gICAgICAgIDxDaGFyYWN0ZXJpc3RpY1F1YXJ0ZXJzIHdpZHRoPXt3aWR0aH0gY2hhcmFjdGVyaXN0aWM9e3dpZHRoQ2hhcmFjdGVyaXN0aWN9IC8+XG4gICAgICAgICAgOlxuICAgICAgICBudWxsXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGNvbWZvcnRDaGFyYWN0ZXJpc3RpYyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgP1xuICAgICAgICAgIDxDaGFyYWN0ZXJpc3RpY1F1YXJ0ZXJzIHdpZHRoPXt3aWR0aH0gY2hhcmFjdGVyaXN0aWM9e2NvbWZvcnRDaGFyYWN0ZXJpc3RpY30gLz5cbiAgICAgICAgICA6XG4gICAgICAgIG51bGxcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgcXVhbGl0eUNoYXJhY3RlcmlzdGljICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/XG4gICAgICAgICAgPENoYXJhY3RlcmlzdGljUXVhcnRlcnMgd2lkdGg9e3dpZHRofSBjaGFyYWN0ZXJpc3RpYz17cXVhbGl0eUNoYXJhY3RlcmlzdGljfSAvPlxuICAgICAgICAgIDpcbiAgICAgICAgbnVsbFxuICAgICAgfVxuICAgICAge1xuICAgICAgICBsZW5ndGhDaGFyYWN0ZXJpc3RpYyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgP1xuICAgICAgICAgIDxDaGFyYWN0ZXJpc3RpY1F1YXJ0ZXJzIHdpZHRoPXt3aWR0aH0gY2hhcmFjdGVyaXN0aWM9e2xlbmd0aENoYXJhY3RlcmlzdGljfSAvPlxuICAgICAgICAgIDpcbiAgICAgICAgbnVsbFxuICAgICAgfVxuICAgICAge1xuICAgICAgICBmaXRDaGFyYWN0ZXJpc3RpYyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgP1xuICAgICAgICAgIDxDaGFyYWN0ZXJpc3RpY1F1YXJ0ZXJzIHdpZHRoPXt3aWR0aH0gY2hhcmFjdGVyaXN0aWM9e2ZpdENoYXJhY3RlcmlzdGljfSAvPlxuICAgICAgICAgIDpcbiAgICAgICAgbnVsbFxuICAgICAgfVxuICAgIDwvQ2hhcmFjdGVyaXN0aWNzX0NvbnRhaW5lciA+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJpc3RpY3M7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgRnVsbEltYWdlQ29udGFpbmVyID0gc3R5bGVkLm1haW5gXG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1yb3ctZ2FwOiAwLjFyZW07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuYDtcblxuY29uc3QgRnVsbEltYWdlRGlzcGxheSA9ICh7IHJldmlld0ltZ1VybCwgc2V0UmV2aWV3SW1nVXJsfSkgPT4ge1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRSZXZpZXdJbWdVcmwoJycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZ1bGxJbWFnZUNvbnRhaW5lciBvbkNsaWNrPXsoZSkgPT4ge2hhbmRsZUNsaWNrKGUpfX0+XG4gICAgICA8aW1nIHNyYz17cmV2aWV3SW1nVXJsfSAvPlxuICAgIDwvRnVsbEltYWdlQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRnVsbEltYWdlRGlzcGxheTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgSGVscGZ1bG5lc3MgPSAoe3Jldmlld0lkLCBoZWxwZnVsbmVzc30pID0+IHtcbiAgdmFyIGhhbmRsZUhlbHBmdWxDbGljayA9ICgpID0+IHtcbiAgICBheGlvcy5wdXQoYC9yZXZpZXdzLyR7cmV2aWV3SWR9L2hlbHBmdWxgKTtcbiAgICAvLyBjb25zb2xlLmxvZyhgUmV2aWV3IGlkICR7cmV2aWV3SWR9IHdhcyBoZWxwZnVsYCk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZVJlcG9ydENsaWNrID0gKCkgPT4ge1xuICAgIGF4aW9zLnB1dChgL3Jldmlld3MvJHtyZXZpZXdJZH0vcmVwb3J0YCk7XG4gICAgLy8gY29uc29sZS5sb2coYFJldmlldyBpZCAke3Jldmlld0lkfSB3YXMgaHVydGZ1bGApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIEhlbHBmdWw/IDxhIGNsYXNzTmFtZT1cImhlbHBmdWwtYW5jaG9yXCIgb25DbGljaz17KCkgPT4geyBoYW5kbGVIZWxwZnVsQ2xpY2soKSB9fT5ZZXM8L2E+ICh7aGVscGZ1bG5lc3N9KSB8IDxhIGNsYXNzTmFtZT1cInJlcG9ydC1hbmNob3JcIiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZVJlcG9ydENsaWNrKCl9fT5SZXBvcnQ8L2E+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwZnVsbmVzczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb2R1Y3RDb250ZXh0IGZyb20gJy4uL2NvbnRleHRzL1Byb2R1Y3RDb250ZXh0LmpzJztcbmltcG9ydCBGdWxsSW1hZ2VEaXNwbGF5IGZyb20gJy4vRnVsbEltYWdlRGlzcGxheS5qc3gnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IE1vZGFsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNyk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgbWFyZ2luOiBhdXRvIDA7XG5gO1xuXG5jb25zdCBJbWFnZU1vZGFsID0gKHtyZXZpZXdJbWdVcmwsIHNldFJldmlld0ltZ1VybH0pID0+IHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0UmV2aWV3SW1nVXJsKCcnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQcm9kdWN0Q29udGV4dC5Db25zdW1lcj5cbiAgICAgIHsoe3Jldmlld01ldGEsIHByb2R1Y3R9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1vZGFsQ29udGFpbmVyIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9PlxuICAgICAgICAgICAgPEZ1bGxJbWFnZURpc3BsYXkgcmV2aWV3TWV0YT17cmV2aWV3TWV0YX1cbiAgICAgICAgICAgICAgcHJvZHVjdE5hbWU9e3Byb2R1Y3RbMF0ubmFtZX1cbiAgICAgICAgICAgICAgcmV2aWV3SW1nVXJsPXtyZXZpZXdJbWdVcmx9XG4gICAgICAgICAgICAgIHNldFJldmlld0ltZ1VybD17c2V0UmV2aWV3SW1nVXJsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L01vZGFsQ29udGFpbmVyPlxuICAgICAgICApXG4gICAgICB9fVxuICAgIDwvUHJvZHVjdENvbnRleHQuQ29uc3VtZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZU1vZGFsOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHdpZHRoOiAxMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMy41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiBgO1xuXG5jb25zdCBNb3JlUmV2aWV3c0J1dHRvbiA9ICh7Z2V0TmV4dFJldmlld1BhZ2V9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGdldE5leHRSZXZpZXdQYWdlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIHN1Ym1pdD1cIm5vdGhpbmdcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygpfT5cbiAgICAgICBNb3JlIFJldmlld3NcbiAgICA8L0J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3JlUmV2aWV3c0J1dHRvbjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmV3UmV2aWV3U3RhckRpc3BsYXkgZnJvbSAnLi4vU2hhcmVkL05ld1Jldmlld1N0YXJEaXNwbGF5LmpzeCc7XG5pbXBvcnQgUmV2aWV3Q2hhcmFjdGVyaXN0aWNzIGZyb20gJy4vUmV2aWV3Q2hhcmFjdGVyaXN0aWNzLmpzeCc7XG5cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBSZXZpZXdGb3JtID0gc3R5bGVkLm1haW5gXG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1yb3ctZ2FwOiAwLjFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogNzAlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuYDtcblxuY29uc3QgUmVjb21tZW5kX0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjJyZW07XG5gO1xuXG5jb25zdCBVcGxvYWRQaWN0dXJlQ29udGlhbmVyID0gc3R5bGVkLmRpdmBcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuY29uc3QgUmF0ZV9DaGFyYWN0ZXJpc3RpY3NfQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtcm93LWdhcDogMC43cmVtO1xuICAgIG1hcmdpbi1ib3R0b206MXJlbTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuIGA7XG5cblxuLy8gSGVsYSdzIENvbWJhdCBHYXJiOiBodHRwczovL2kuaW1ndXIuY29tL1E1a1djN24uanBnXG4vLyBTYW11cycgUG93ZXIgU3VpdDogaHR0cHM6Ly9pLmltZ3VyLmNvbS9kdGpWeG5vLmpwZ1xuLy8gRHJhZ29uYm9ybidzIElyb24gSGVsbWV0OiBodHRwczovL2kuaW1ndXIuY29tL2ozdVQxTkQuanBnXG4vLyBNYXJ0eSBNY0ZseSdzIFZlc3Q6IGh0dHBzOi8vaS5pbWd1ci5jb20vVkRDOWR1VS5qcGdcbi8vIFN1cGVybWFuJ3MgT3V0Zml0OiBodHRwczovL2kuaW1ndXIuY29tL0I1a1RFUHQuanBnXG5cbmNvbnN0IE5ld1Jldmlld0Zvcm0gPSAoe3Jldmlld01ldGEsIHByb2R1Y3ROYW1lfSkgPT4ge1xuICBjb25zdCBbcmF0aW5nLCBzZXRSYXRpbmddID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtob3ZlclJhdGluZywgc2V0SG92ZXJSYXRpbmddID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzdW1tYXJ5LCBzZXRTdW1tYXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2JvZHksIHNldEJvZHldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcmVjb21tZW5kLCBzZXRSZWNvbW1lbmRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bob3Rvcywgc2V0UGhvdG9zXSA9IHVzZVN0YXRlKFsnJywgJycsICcnLCAnJywgJyddKTtcbiAgY29uc3QgW2NoYXJhY3RlcmlzdGljcywgc2V0Q2hhcmFjdGVyaXN0aWNzXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBoYW5kbGVTdW1tYXJ5Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRTdW1tYXJ5KGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVCb2R5Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRCb2R5KGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZWNvbW1lbmRlZENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0UmVjb21tZW5kKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQaWN0dXJlQ2hhbmdlID0gKHBob3RvSW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgdmFyIHBob3RvQXJyYXkgPSBwaG90b3Muc2xpY2UoKTtcbiAgICBwaG90b0FycmF5W3Bob3RvSW5kZXhdID0gdmFsdWU7XG4gICAgLy8gY29uc29sZS5sb2coJ1Bob3RvIGFycmF5OicpO1xuICAgIC8vIGNvbnNvbGUubG9nKHBob3RvQXJyYXkpO1xuICAgIHNldFBob3RvcyhwaG90b0FycmF5KTtcbiAgICAvLyBjb25zb2xlLmxvZyhwaG90b3MpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlVXNlcm5hbWVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFbWFpbENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHZhciBjaGFyYWN0ZXJpc3RpY3NPcHRpb25zID0gW3tcbiAgICBrZXlOYW1lOiAnc2l6ZScsXG4gICAgbmFtZTogJ1NpemUnLFxuICAgIGxvd2VzdDogJ0Egc2l6ZSB0b28gc21hbGwnLFxuICAgIGxvdzogJ8K9IGEgc2l6ZSB0b28gc21hbGwnLFxuICAgIG1pZDogJ1BlcmZlY3QnLFxuICAgIGhpZ2g6ICfCvSBhIHNpemUgdG9vIGJpZycsXG4gICAgaGlnaGVzdDogJ0Egc2l6ZSB0b28gd2lkZSdcbiAgfSxcbiAge1xuICAgIGtleU5hbWU6ICd3aWR0aCcsXG4gICAgbmFtZTogJ1dpZHRoJyxcbiAgICBsb3dlc3Q6ICdUb28gbmFycm93JyxcbiAgICBsb3c6ICdTbGlnaHRseSBuYXJyb3cnLFxuICAgIG1pZDogJ1BlcmZlY3QnLFxuICAgIGhpZ2g6ICdTbGlnaHRseSB3aWRlJyxcbiAgICBoaWdoZXN0OiAnVG9vIHdpZGUnXG4gIH0sXG4gIHtcbiAgICBrZXlOYW1lOiAnY29tZm9ydCcsXG4gICAgbmFtZTogJ0NvbWZvcnQnLFxuICAgIGxvd2VzdDogJ1VuY29tZm9ydGFibGUnLFxuICAgIGxvdzogJ1NsaWdodGx5IHVuY29tZm9ydGFibGUnLFxuICAgIG1pZDogJ09rJyxcbiAgICBoaWdoOiAnQ29tZm9ydGFibGUnLFxuICAgIGhpZ2hlc3Q6ICdQZXJmZWN0J1xuICB9LFxuICB7XG4gICAga2V5TmFtZTogJ3F1YWxpdHknLFxuICAgIG5hbWU6ICdRdWFsaXR5JyxcbiAgICBsb3dlc3Q6ICdCZWxvdyBhdmVyYWdlJyxcbiAgICBsb3c6ICfCvSBhIHNpemUgdG9vIHNtYWxsJyxcbiAgICBtaWQ6ICdXaGF0IEkgZXhwZWN0ZWQnLFxuICAgIGhpZ2g6ICdQcmV0dHkgZ3JlYXQnLFxuICAgIGhpZ2hlc3Q6ICdQZXJmZWN0J1xuICB9LFxuICB7XG4gICAga2V5TmFtZTogJ2xlbmd0aCcsXG4gICAgbmFtZTogJ0xlbmd0aCcsXG4gICAgbG93ZXN0OiAnUnVucyBTaG9ydCcsXG4gICAgbG93OiAnUnVucyBzbGlnaHRseSBzaG9ydCcsXG4gICAgbWlkOiAnUGVyZmVjdCcsXG4gICAgaGlnaDogJ1J1bnMgc2xpZ2h0bHkgbG9uZycsXG4gICAgaGlnaGVzdDogJ1J1bnMgbG9uZydcbiAgfSxcbiAge1xuICAgIGtleU5hbWU6ICdmaXQnLFxuICAgIG5hbWU6ICdGaXQnLFxuICAgIGxvd2VzdDogJ1J1bnMgdGlnaHQnLFxuICAgIGxvdzogJ1J1bnMgc2xpZ2h0bHkgdGlnaHQnLFxuICAgIG1pZDogJ1BlcmZlY3QnLFxuICAgIGhpZ2g6ICdSdW5zIHNsaWdodGx5IGxvbmcnLFxuICAgIGhpZ2hlc3Q6ICdSdW5zIGxvbmcnXG4gIH1dO1xuXG4gIGNvbnN0IGNoYW5nZUNoYXJhY3RlcmlzdGljID0gKHZhbHVlLCBjaGFyYWN0ZXJpc3RpYykgPT4ge1xuICAgIHZhciBjaGFycyA9IGNoYXJhY3RlcmlzdGljcztcbiAgICBjaGFyc1tyZXZpZXdNZXRhLmNoYXJhY3RlcmlzdGljc1tjaGFyYWN0ZXJpc3RpY10uaWRdID0gTnVtYmVyKHZhbHVlKTtcbiAgICBzZXRDaGFyYWN0ZXJpc3RpY3MoY2hhcnMpO1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdE5ld1JldmlldyA9ICgpID0+IHtcbiAgICB2YXIgc3VibWlzc2lvbkFycmF5ID0gW107XG4gICAgcGhvdG9zLmZvckVhY2gocGhvdG9VUkwgPT4ge1xuICAgICAgaWYgKHBob3RvVVJMICE9PSAnJykge1xuICAgICAgICBzdWJtaXNzaW9uQXJyYXkucHVzaChwaG90b1VSTCk7XG4gICAgICB9XG4gICAgfSlcbiAgICB2YXIgcmV2aWV3RGF0YSA9IHtcbiAgICAgIHByb2R1Y3RfaWQ6IE51bWJlcihyZXZpZXdNZXRhLnByb2R1Y3RfaWQpLFxuICAgICAgcmF0aW5nOiByYXRpbmcsXG4gICAgICBzdW1tYXJ5OiBzdW1tYXJ5LFxuICAgICAgYm9keTogYm9keSxcbiAgICAgIHJlY29tbWVuZDogQm9vbGVhbihyZWNvbW1lbmQpLFxuICAgICAgbmFtZTogdXNlcm5hbWUsXG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgICBwaG90b3M6IHN1Ym1pc3Npb25BcnJheSxcbiAgICAgIGNoYXJhY3RlcmlzdGljczogY2hhcmFjdGVyaXN0aWNzXG4gICAgfTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGBZb3UgYXJlIHN1Ym1pdHRpbmcgdGhlIGRhdGE6YCk7XG4gICAgLy8gY29uc29sZS5sb2cocmV2aWV3RGF0YSk7XG5cbiAgICBheGlvcy5wb3N0KGAvcmV2aWV3cy9gLCByZXZpZXdEYXRhKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQW4gZXJyb3IgaXMgdHJpZ2dlcmVkIGNsaWVudCBzaWRlJyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAgIH0pO1xuXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmV2aWV3Rm9ybSBvbkNsaWNrPXsoZSkgPT4ge2hhbmRsZUNsaWNrKGUpfX0+XG5cbiAgICAgIDxoMz5Xcml0ZSBZb3VyIFJldmlldzwvaDM+XG4gICAgICA8aDQ+QWJvdXQgdGhlIHtwcm9kdWN0TmFtZX08L2g0PlxuICAgICAgPE5ld1Jldmlld1N0YXJEaXNwbGF5IHJhdGluZz17cmF0aW5nfSBob3ZlclJhdGluZz17aG92ZXJSYXRpbmd9XG4gICAgICAgIHNldFJhdGluZz17c2V0UmF0aW5nfSBzZXRIb3ZlclJhdGluZz17c2V0SG92ZXJSYXRpbmd9Lz5cbiAgICAgIDxsYWJlbD5TdW1tYXJ5PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4ge2hhbmRsZVN1bW1hcnlDaGFuZ2UoZSl9fS8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxsYWJlbD5Cb2R5PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4geyBoYW5kbGVCb2R5Q2hhbmdlKGUpIH19IC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxSZWNvbW1lbmRfQ29udGFpbmVyPlxuICAgICAgICA8cD5EbyB5b3UgcmVjb21tZW5kIHRoaXMgcHJvZHVjdD88L3A+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInJlY29tbWVuZC10cnVlXCIgbmFtZT1cInJlY29tbWVuZFwiIHZhbHVlPVwidHJ1ZVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVSZWNvbW1lbmRlZENoYW5nZShlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlY29tbWVuZC10cnVlXCI+WWVzPC9sYWJlbD5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJyZWNvbW1lbmQtZmFsc2VcIiBuYW1lPVwicmVjb21tZW5kXCIgdmFsdWU9XCJmYWxzZVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVSZWNvbW1lbmRlZENoYW5nZShlKTtcbiAgICAgICAgICB9fS8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVjb21tZW5kLWZhbHNlXCI+Tm88L2xhYmVsPlxuICAgICAgPC9SZWNvbW1lbmRfQ29udGFpbmVyPlxuICAgICAgPGJyIC8+XG4gICAgICA8VXBsb2FkUGljdHVyZUNvbnRpYW5lcj5cbiAgICAgICAgPGRpdj5VcGxvYWQgVXAgVG8gNSBQaWN0dXJlcyBvZiB0aGUgUHJvZHVjdCE8L2Rpdj5cbiAgICAgICAgPGxhYmVsPlBpY3R1cmUgMTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlUGljdHVyZUNoYW5nZSgwLCBlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAge1xuICAgICAgICAgIHBob3Rvc1swXSAhPT0gJydcbiAgICAgICAgICAgID9cbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPGxhYmVsPlBpY3R1cmUgMjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlUGljdHVyZUNoYW5nZSgxLCBlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICBudWxsXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIHBob3Rvc1sxXSAhPT0gJydcbiAgICAgICAgICAgID9cbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPGxhYmVsPlBpY3R1cmUgMzwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlUGljdHVyZUNoYW5nZSgyLCBlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBwaG90b3NbMl0gIT09ICcnXG4gICAgICAgICAgICA/XG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxsYWJlbD5QaWN0dXJlIDQ8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVBpY3R1cmVDaGFuZ2UoMywgZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBwaG90b3NbM10gIT09ICcnXG4gICAgICAgICAgICA/XG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxsYWJlbD5QaWN0dXJlIDU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVBpY3R1cmVDaGFuZ2UoNCwgZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgfVxuICAgICAgPC9VcGxvYWRQaWN0dXJlQ29udGlhbmVyPlxuICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiB7IGhhbmRsZVVzZXJuYW1lQ2hhbmdlKGUpIH19IC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IHsgaGFuZGxlRW1haWxDaGFuZ2UoZSkgfX0gLz5cbiAgICAgIDxSYXRlX0NoYXJhY3RlcmlzdGljc19Db250YWluZXI+XG4gICAgICAgIDxkaXY+UmF0ZSBUaGVzZSBDaGFyYWN0ZXJpc3RpY3M8L2Rpdj5cbiAgICAgICAgPFJldmlld0NoYXJhY3RlcmlzdGljcyBjaGFyYWN0ZXJpc3RpY3M9e2NoYXJhY3RlcmlzdGljc09wdGlvbnN9XG4gICAgICAgICAgY2hhbmdlQ2hhcmFjdGVyaXN0aWM9e2NoYW5nZUNoYXJhY3RlcmlzdGljfVxuICAgICAgICAgIHJldmlld01ldGE9e3Jldmlld01ldGF9XG4gICAgICAgIC8+XG4gICAgICA8L1JhdGVfQ2hhcmFjdGVyaXN0aWNzX0NvbnRhaW5lcj5cbiAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgc3VibWl0TmV3UmV2aWV3KCk7XG4gICAgICB9fSA+U3VibWl0IFJldmlldyEhPC9CdXR0b24+XG4gICAgPC9SZXZpZXdGb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3UmV2aWV3Rm9ybTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb2R1Y3RDb250ZXh0IGZyb20gJy4uL2NvbnRleHRzL1Byb2R1Y3RDb250ZXh0LmpzJztcbmltcG9ydCBOZXdSZXZpZXdGb3JtIGZyb20gJy4vTmV3UmV2aWV3Rm9ybS5qc3gnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IE1vZGFsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNyk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgbWFyZ2luOiBhdXRvIDA7XG5gO1xuXG5jb25zdCBOZXdSZXZpZXdNb2RhbCA9ICh7dG9nZ2xlTW9kYWxTaG93bn0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxQcm9kdWN0Q29udGV4dC5Db25zdW1lcj5cbiAgICAgIHsoe3Jldmlld01ldGEsIHByb2R1Y3R9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1vZGFsQ29udGFpbmVyIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsU2hvd259PlxuICAgICAgICAgICAgPE5ld1Jldmlld0Zvcm0gcmV2aWV3TWV0YT17cmV2aWV3TWV0YX0gcHJvZHVjdE5hbWU9e3Byb2R1Y3RbMF0ubmFtZX0vPlxuICAgICAgICAgIDwvTW9kYWxDb250YWluZXI+XG4gICAgICAgIClcbiAgICAgIH19XG4gICAgPC9Qcm9kdWN0Q29udGV4dC5Db25zdW1lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1Jldmlld01vZGFsOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUGVyY2VudF9yZWNvbW1lbmRlZCA9IHN0eWxlZC5oNGBcbiAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5gO1xuXG5jb25zdCBQZXJjZW50UmVjb21tZW5kZWQgPSAoe3JlY29tbWVuZGVkfSkgPT4ge1xuICB2YXIgcmVjb21tZW5kZWRDb3VudCA9IE51bWJlcihyZWNvbW1lbmRlZC50cnVlKTtcbiAgdmFyIHRvdGFsUmV2aWV3cyA9IE51bWJlcihyZWNvbW1lbmRlZC50cnVlKSArIE51bWJlcihyZWNvbW1lbmRlZC5mYWxzZSk7XG4gIHZhciBwZXJjZW50UmVjb21tZW5kZWQgPSAwO1xuICBpZiAocmVjb21tZW5kZWRDb3VudCAvIHRvdGFsUmV2aWV3cyA9PT0gMSkge1xuICAgIHBlcmNlbnRSZWNvbW1lbmRlZCA9IDEwMDtcbiAgfSBlbHNlIHtcbiAgICBwZXJjZW50UmVjb21tZW5kZWQgPSAocmVjb21tZW5kZWRDb3VudCAvIHRvdGFsUmV2aWV3cyAqIDEwMCkudG9GaXhlZCgxKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBlcmNlbnRfcmVjb21tZW5kZWQ+XG4gICAgICB7cGVyY2VudFJlY29tbWVuZGVkfSUgb2YgcmV2aWV3cyByZWNvbW1lbmQgdGhpcyBwcm9kdWN0XG4gICAgPC9QZXJjZW50X3JlY29tbWVuZGVkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGVyY2VudFJlY29tbWVuZGVkOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUmV2aWV3SW1nID0gc3R5bGVkLmltZ2BcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbmA7XG5cblxuY29uc3QgUGhvdG8gPSAoeyBwaG90b1VybCwgc2V0UmV2aWV3SW1nVXJsfSkgPT4ge1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRSZXZpZXdJbWdVcmwocGhvdG9VcmwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJldmlld0ltZyBzcmM9e3Bob3RvVXJsfSB3aWR0aD1cIjEyNVwiIGhlaWdodD1cIjEyNVwiIGFsdD1cInJldmlldyBwaG90b1wiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBob3RvOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGhvdG8gZnJvbSAnLi9QaG90by5qc3gnO1xuXG5jb25zdCBQaG90b0dhbGxlcnkgPSAoeyBwaG90b3MsIHNldFJldmlld0ltZ1VybH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge1xuICAgICAgICBwaG90b3MubWFwKHBob3RvID0+XG4gICAgICAgICAgPFBob3RvIGtleT17cGhvdG8uaWR9IHBob3RvVXJsPXtwaG90by51cmx9IHNldFJldmlld0ltZ1VybD17c2V0UmV2aWV3SW1nVXJsfS8+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBob3RvR2FsbGVyeTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoZWNrbWFyayBmcm9tICcuLi9TaGFyZWQvQ2hlY2ttYXJrLmpzeCc7XG5cbmNvbnN0IFByb2R1Y3RSZWNvbW1lbmRlZFJvdyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q2hlY2ttYXJrLz5cbiAgICAgIEkgcmVjb21tZW5kIHRoaXMgcHJvZHVjdCFcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UmVjb21tZW5kZWRSb3c7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSYXRpbmdDb3VudCBmcm9tICcuL1JhdGluZ0NvdW50LmpzeCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUmF0aW5nQ291bnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgUmF0aW5nQnJlYWtkb3duID0gKHtyYXRpbmdzLCByZXZpZXdGaWx0ZXIsIHVwZGF0ZVJldmlld0ZpbHRlcn0pPT4ge1xuICB2YXIgdG90YWxSYXRpbmdzID0gMDtcbiAgZm9yICh2YXIgcmF0aW5nIGluIHJhdGluZ3MpIHtcbiAgICB0b3RhbFJhdGluZ3MgKz0gTnVtYmVyKHJhdGluZ3NbcmF0aW5nXSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSYXRpbmdDb3VudENvbnRhaW5lcj5cbiAgICAgIDxSYXRpbmdDb3VudCByYXRpbmdDb3VudD17TnVtYmVyKHJhdGluZ3NbNV0pfVxuICAgICAgICB0b3RhbFJhdGluZ3M9e3RvdGFsUmF0aW5nc31cbiAgICAgICAgY291bnQ9ezV9XG4gICAgICAgIHJldmlld0ZpbHRlcj17cmV2aWV3RmlsdGVyfVxuICAgICAgICB1cGRhdGVSZXZpZXdGaWx0ZXI9e3VwZGF0ZVJldmlld0ZpbHRlcn1cbiAgICAgIC8+XG4gICAgICA8UmF0aW5nQ291bnQgcmF0aW5nQ291bnQ9e051bWJlcihyYXRpbmdzWzRdKX1cbiAgICAgICAgdG90YWxSYXRpbmdzPXt0b3RhbFJhdGluZ3N9XG4gICAgICAgIGNvdW50PXs0fVxuICAgICAgICByZXZpZXdGaWx0ZXI9e3Jldmlld0ZpbHRlcn1cbiAgICAgICAgdXBkYXRlUmV2aWV3RmlsdGVyPXt1cGRhdGVSZXZpZXdGaWx0ZXJ9XG4gICAgICAvPlxuICAgICAgPFJhdGluZ0NvdW50IHJhdGluZ0NvdW50PXtOdW1iZXIocmF0aW5nc1szXSl9XG4gICAgICAgIHRvdGFsUmF0aW5ncz17dG90YWxSYXRpbmdzfVxuICAgICAgICBjb3VudD17M31cbiAgICAgICAgcmV2aWV3RmlsdGVyPXtyZXZpZXdGaWx0ZXJ9XG4gICAgICAgIHVwZGF0ZVJldmlld0ZpbHRlcj17dXBkYXRlUmV2aWV3RmlsdGVyfVxuICAgICAgLz5cbiAgICAgIDxSYXRpbmdDb3VudCByYXRpbmdDb3VudD17TnVtYmVyKHJhdGluZ3NbMl0pfVxuICAgICAgICB0b3RhbFJhdGluZ3M9e3RvdGFsUmF0aW5nc31cbiAgICAgICAgY291bnQ9ezJ9XG4gICAgICAgIHJldmlld0ZpbHRlcj17cmV2aWV3RmlsdGVyfVxuICAgICAgICB1cGRhdGVSZXZpZXdGaWx0ZXI9e3VwZGF0ZVJldmlld0ZpbHRlcn1cbiAgICAgIC8+XG4gICAgICA8UmF0aW5nQ291bnQgcmF0aW5nQ291bnQ9e051bWJlcihyYXRpbmdzWzFdKX1cbiAgICAgICAgdG90YWxSYXRpbmdzPXt0b3RhbFJhdGluZ3N9XG4gICAgICAgIGNvdW50PXsxfVxuICAgICAgICByZXZpZXdGaWx0ZXI9e3Jldmlld0ZpbHRlcn1cbiAgICAgICAgdXBkYXRlUmV2aWV3RmlsdGVyPXt1cGRhdGVSZXZpZXdGaWx0ZXJ9XG4gICAgICAvPlxuICAgIDwvUmF0aW5nQ291bnRDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmdCcmVha2Rvd247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCcmVha2Rvd25CYXIgZnJvbSAnLi9CcmVha2Rvd25CYXIuanN4JztcbmltcG9ydCBCcmVha2Rvd25CYXJJbmFjdGl2ZSBmcm9tICcuL0JyZWFrZG93bkJhckluYWN0aXZlLmpzeCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUmF0aW5nX2NvdW50X3JvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFJhdGluZ192YWx1ZSA9IHN0eWxlZC5wYFxuICAgbWFyZ2luLXJpZ2h0OjFyZW07XG4gICBtYXJnaW4tdG9wOiAwO1xuICAgbWFyZ2luLWJvdHRvbTogMDtcbmA7XG5cbmNvbnN0IFJhdGluZ0NvdW50ID0gKHtcbiAgICByYXRpbmdDb3VudCxcbiAgICB0b3RhbFJhdGluZ3MsXG4gICAgY291bnQsXG4gICAgcmV2aWV3RmlsdGVyLFxuICAgIHVwZGF0ZVJldmlld0ZpbHRlclxuICB9KSA9PiB7XG4gIHZhciBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgVHJpZ2dlcmVkIHN0YXIgYnJlYWtkb3duIGZvciAke2NvdW50fWApXG4gICAgdXBkYXRlUmV2aWV3RmlsdGVyKGNvdW50KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSYXRpbmdfY291bnRfcm93IG9uQ2xpY2s9eygpID0+IHtoYW5kbGVDbGljaygpfX0+XG4gICAgICA8UmF0aW5nX3ZhbHVlPntjb3VudH0gc3RhcnM8L1JhdGluZ192YWx1ZT5cbiAgICAgIHtcbiAgICAgICAgcmV2aWV3RmlsdGVyLmFjdGl2ZSAmJiAhcmV2aWV3RmlsdGVyLnN0YXJzW2NvdW50XVxuICAgICAgICAgID9cbiAgICAgICAgPEJyZWFrZG93bkJhckluYWN0aXZlIGNsYXNzTmFtZT1cInJhdGluZy1jb3VudC1iYXJcIlxuICAgICAgICAgIHZhbHVlPXtyYXRpbmdDb3VudH0gbWF4PXt0b3RhbFJhdGluZ3N9XG4gICAgICAgIC8+XG4gICAgICAgICAgOlxuICAgICAgICA8QnJlYWtkb3duQmFyIGNsYXNzTmFtZT1cInJhdGluZy1jb3VudC1iYXJcIlxuICAgICAgICAgIHZhbHVlPXtyYXRpbmdDb3VudH0gbWF4PXt0b3RhbFJhdGluZ3N9XG4gICAgICAgIC8+XG5cbiAgICAgIH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWNvdW50XCI+e3JhdGluZ0NvdW50fTwvZGl2PlxuICAgIDwvUmF0aW5nX2NvdW50X3Jvdz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZ0NvdW50OyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSYXRpbmdzIGZyb20gJy4vUmF0aW5ncy5qc3gnO1xuaW1wb3J0IFJldmlld3MgZnJvbSAnLi9SZXZpZXdzLmpzeCc7XG5pbXBvcnQgTmV3UmV2aWV3TW9kYWwgZnJvbSAnLi9OZXdSZXZpZXdNb2RhbC5qc3gnO1xuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSAnLi9JbWFnZU1vZGFsLmpzeCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUmF0aW5nc19hbmRfcmV2aWV3c19jb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCAycmVtO1xuIGA7XG5cbmNvbnN0IFJhdGluZ3NSZXZpZXdzU0MgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTI4MHB4O1xuYDtcblxuY29uc3QgUmF0aW5nc0FuZFJldmlld3MgPSAoKSA9PiB7XG4gIGNvbnN0IFttb2RhbFNob3duLCBzZXRNb2RhbFNob3duXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlTW9kYWxTaG93biA9ICgpID0+IHtcbiAgICBzZXRNb2RhbFNob3duKCFtb2RhbFNob3duKTtcbiAgfTtcblxuICBjb25zdCBbcmV2aWV3RmlsdGVyLCBzZXRSZXZpZXdGaWx0ZXJdID0gdXNlU3RhdGUoe1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgc3RhcnM6IHtcbiAgICAgIDU6IGZhbHNlLFxuICAgICAgNDogZmFsc2UsXG4gICAgICAzOiBmYWxzZSxcbiAgICAgIDI6IGZhbHNlLFxuICAgICAgMTogZmFsc2VcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IFtmaWx0ZXJTaWduYXR1cmUsIHNldEZpbHRlclNpZ25hdHVyZV0gPSB1c2VTdGF0ZShKU09OLnN0cmluZ2lmeShyZXZpZXdGaWx0ZXIpKTtcblxuICB2YXIgdXBkYXRlUmV2aWV3RmlsdGVyID0gKHJhdGluZykgPT4ge1xuICAgIHZhciBuZXdGaWx0ZXJTZXR0aW5ncyA9IHJldmlld0ZpbHRlcjtcbiAgICBuZXdGaWx0ZXJTZXR0aW5ncy5zdGFyc1tyYXRpbmddID0gIW5ld0ZpbHRlclNldHRpbmdzLnN0YXJzW3JhdGluZ107XG4gICAgbmV3RmlsdGVyU2V0dGluZ3MuYWN0aXZlID0gZmFsc2U7XG4gICAgZm9yICh2YXIgc3RhciBpbiBuZXdGaWx0ZXJTZXR0aW5ncy5zdGFycykge1xuICAgICAgaWYgKG5ld0ZpbHRlclNldHRpbmdzLnN0YXJzW3N0YXJdID09PSB0cnVlKSB7XG4gICAgICAgIG5ld0ZpbHRlclNldHRpbmdzLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdPYnZpb3VzbHkgdXBkYXRpbmcgZmlsdGVyIGZyb20nLCByZXZpZXdGaWx0ZXIpO1xuICAgIHNldFJldmlld0ZpbHRlcihuZXdGaWx0ZXJTZXR0aW5ncyk7XG4gICAgc2V0RmlsdGVyU2lnbmF0dXJlKEpTT04uc3RyaW5naWZ5KHJldmlld0ZpbHRlcikpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdUbycsIHJldmlld0ZpbHRlcik7XG4gIH07XG5cbiAgdmFyIGNsZWFyUmV2aWV3RmlsdGVyID0gKCkgPT4ge1xuICAgIHZhciBuZXdGaWx0ZXJTZXR0aW5ncyA9IHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBzdGFyczoge1xuICAgICAgICA1OiBmYWxzZSxcbiAgICAgICAgNDogZmFsc2UsXG4gICAgICAgIDM6IGZhbHNlLFxuICAgICAgICAyOiBmYWxzZSxcbiAgICAgICAgMTogZmFsc2VcbiAgICAgIH1cbiAgICB9O1xuICAgIHNldFJldmlld0ZpbHRlcihuZXdGaWx0ZXJTZXR0aW5ncyk7XG4gICAgc2V0RmlsdGVyU2lnbmF0dXJlKEpTT04uc3RyaW5naWZ5KHJldmlld0ZpbHRlcikpO1xuXG4gIH07XG5cbiAgY29uc3QgW3Jldmlld0ltZ1VybCwgc2V0UmV2aWV3SW1nVXJsXSA9IHVzZVN0YXRlKCcnKTtcblxuICByZXR1cm4gKFxuICAgIDxSYXRpbmdzUmV2aWV3c1NDIGlkPVwicmF0aW5nLXJldmlld1wiPlxuICAgICAgPGgxIGlkPVwicmF0aW5ncy1hbmQtcmV2aWV3cy10aXRsZVwiPlJhdGluZ3MgJiBSZXZpZXdzPC9oMT5cbiAgICAgIDxSYXRpbmdzX2FuZF9yZXZpZXdzX2NvbnRhaW5lcj5cbiAgICAgICAgPFJhdGluZ3MgIHJldmlld0ZpbHRlcj17cmV2aWV3RmlsdGVyfSB1cGRhdGVSZXZpZXdGaWx0ZXI9e3VwZGF0ZVJldmlld0ZpbHRlcn1cbiAgICAgICAgICBjbGVhclJldmlld0ZpbHRlcj17Y2xlYXJSZXZpZXdGaWx0ZXJ9Lz5cbiAgICAgICAgPFJldmlld3MgcmV2aWV3RmlsdGVyPXtyZXZpZXdGaWx0ZXJ9XG4gICAgICAgICAgZmlsdGVyU2lnbmF0dXJlPXtmaWx0ZXJTaWduYXR1cmV9XG4gICAgICAgICAgdG9nZ2xlTW9kYWxTaG93bj17dG9nZ2xlTW9kYWxTaG93bn1cbiAgICAgICAgICBzZXRSZXZpZXdJbWdVcmw9e3NldFJldmlld0ltZ1VybH1cbiAgICAgICAgLz5cbiAgICAgICAge1xuICAgICAgICAgIG1vZGFsU2hvd25cbiAgICAgICAgICAgID9cbiAgICAgICAgICAgIDxOZXdSZXZpZXdNb2RhbCB0b2dnbGVNb2RhbFNob3duPXt0b2dnbGVNb2RhbFNob3dufS8+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICBudWxsXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIHJldmlld0ltZ1VybC5sZW5ndGggPiAwXG4gICAgICAgICAgICA/XG4gICAgICAgICAgICA8SW1hZ2VNb2RhbCByZXZpZXdJbWdVcmw9e3Jldmlld0ltZ1VybH1cbiAgICAgICAgICAgICAgc2V0UmV2aWV3SW1nVXJsPXtzZXRSZXZpZXdJbWdVcmx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgbnVsbFxuICAgICAgICB9XG4gICAgICA8L1JhdGluZ3NfYW5kX3Jldmlld3NfY29udGFpbmVyPlxuICAgIDwvUmF0aW5nc1Jldmlld3NTQz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZ3NBbmRSZXZpZXdzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXZlcmFnZURpc3BsYXkgZnJvbSAnLi9BdmVyYWdlRGlzcGxheS5qc3gnO1xuaW1wb3J0IFBlcmNlbnRSZWNvbW1lbmRlZCBmcm9tICcuL1BlcmNlbnRSZWNvbW1lbmRlZC5qc3gnO1xuaW1wb3J0IFJhdGluZ0JyZWFrZG93biBmcm9tICcuL1JhdGluZ0JyZWFrZG93bi5qc3gnO1xuaW1wb3J0IEJyZWFrZG93bkZpbHRlckRpc3BsYXkgZnJvbSAnLi9CcmVha2Rvd25GaWx0ZXJEaXNwbGF5LmpzeCc7XG5pbXBvcnQgQ2hhcmFjdGVyaXN0aWNzIGZyb20gJy4vQ2hhcmFjdGVyaXN0aWNzLmpzeCc7XG5cbmltcG9ydCBQcm9kdWN0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0cy9Qcm9kdWN0Q29udGV4dC5qcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUmF0aW5ncyA9ICh7cmV2aWV3RmlsdGVyLCB1cGRhdGVSZXZpZXdGaWx0ZXIsIGNsZWFyUmV2aWV3RmlsdGVyfSkgPT4ge1xuICBjb25zdCBSYXRpbmdzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICBgO1xuXG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgeyh7cmV2aWV3TWV0YX0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmF0aW5nc0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxBdmVyYWdlRGlzcGxheVxuICAgICAgICAgICAgICByYXRpbmdzPXtyZXZpZXdNZXRhLnJhdGluZ3N9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFBlcmNlbnRSZWNvbW1lbmRlZFxuICAgICAgICAgICAgICByZWNvbW1lbmRlZD17cmV2aWV3TWV0YS5yZWNvbW1lbmRlZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UmF0aW5nQnJlYWtkb3duIHJhdGluZ3M9e3Jldmlld01ldGEucmF0aW5nc31cbiAgICAgICAgICAgICAgcmV2aWV3RmlsdGVyPXtyZXZpZXdGaWx0ZXJ9XG4gICAgICAgICAgICAgIHVwZGF0ZVJldmlld0ZpbHRlcj17dXBkYXRlUmV2aWV3RmlsdGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCcmVha2Rvd25GaWx0ZXJEaXNwbGF5IHJldmlld0ZpbHRlcj17cmV2aWV3RmlsdGVyfVxuICAgICAgICAgICAgICBjbGVhclJldmlld0ZpbHRlcj17Y2xlYXJSZXZpZXdGaWx0ZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENoYXJhY3RlcmlzdGljcyBjaGFyYWN0ZXJpc3RpY3M9e3Jldmlld01ldGEuY2hhcmFjdGVyaXN0aWNzfS8+XG4gICAgICAgICAgPC9SYXRpbmdzQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgICAgfX1cbiAgICA8L1Byb2R1Y3RDb250ZXh0LkNvbnN1bWVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJldmlld0hlYWRlciBmcm9tICcuL1Jldmlld0hlYWRlci5qc3gnO1xuaW1wb3J0IFBob3RvR2FsbGVyeSBmcm9tICcuL1Bob3RvR2FsbGVyeS5qc3gnO1xuaW1wb3J0IFByb2R1Y3RSZWNvbW1lbmRlZFJvdyBmcm9tICcuL1Byb2R1Y3RSZWNvbW1lbmRlZFJvdy5qc3gnO1xuaW1wb3J0IEhlbHBmdWxuZXNzIGZyb20gJy4vSGVscGZ1bG5lc3MuanN4JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBSZXZpZXdfQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAyLjVyZW0gMCAycmVtIDA7XG5gO1xuXG5jb25zdCBIciA9IHN0eWxlZC5ocmBcbiAgbWFyZ2luLXRvcDozcmVtO1xuYDtcblxuY29uc3QgSW1nID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuYDtcblxuY29uc3QgUmVpdmlld19SZWNvbW1lbmQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuXG5cbmNvbnN0IFJldmlldyA9ICh7IHJldmlldywgc2V0UmV2aWV3SW1nVXJsfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZXZpZXdfQ29udGFpbmVyPlxuICAgICAgPFJldmlld0hlYWRlciByYXRpbmc9e3Jldmlldy5yYXRpbmd9XG4gICAgICAgIHByb2R1Y3RJZD17cmV2aWV3LmlkfVxuICAgICAgICByZXZpZXdlcl9uYW1lPXtyZXZpZXcucmV2aWV3ZXJfbmFtZX1cbiAgICAgICAgZGF0ZT17cmV2aWV3LmRhdGV9XG4gICAgICAvPlxuICAgICAgPHAgY2xhc3NOYW1lPVwicmV2aWV3LXN1bW1hcnktcHJpbWFyeVwiPntyZXZpZXcuc3VtbWFyeS5zbGljZSgwLCA2MCl9PC9wPlxuICAgICAgPHA+e3Jldmlldy5zdW1tYXJ5LnNsaWNlKDYwKX08L3A+XG4gICAgICA8cD57cmV2aWV3LmJvZHl9PC9wPlxuICAgICAgPFBob3RvR2FsbGVyeSBwaG90b3M9e3Jldmlldy5waG90b3N9XG4gICAgICAgIHNldFJldmlld0ltZ1VybD17c2V0UmV2aWV3SW1nVXJsfVxuICAgICAgLz5cbiAgICAgIDxkaXY+e3Jldmlldy5yZWNvbW1lbmQgPyA8UHJvZHVjdFJlY29tbWVuZGVkUm93Lz4gOiBudWxsfTwvZGl2PlxuICAgICAgPHA+e3Jldmlldy5yZXNwb25zZX08L3A+XG4gICAgICA8SGVscGZ1bG5lc3MgaGVscGZ1bG5lc3M9e3Jldmlldy5oZWxwZnVsbmVzc30gcmV2aWV3SWQ9e3Jldmlldy5yZXZpZXdfaWR9Lz5cbiAgICAgIDxIcj48L0hyPlxuICAgIDwvUmV2aWV3X0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlldzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuYDtcblxuY29uc3QgRGVzY3JpcHRvckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5gO1xuXG5jb25zdCBDaGFyYWN0ZXJpc3RpY0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5gO1xuXG5cbmNvbnN0IFJldmlld0NoYXJhY3RlcmlzdGljID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHByb3BzLmNoYW5nZUNoYXJhY3RlcmlzdGljKHZhbHVlLCBwcm9wcy5jaGFyYWN0ZXJpc3RpYy5uYW1lKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TGFiZWw+e3Byb3BzLmNoYXJhY3RlcmlzdGljLm5hbWV9PC9MYWJlbD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxEZXNjcmlwdG9yQ29udGFpbmVyPlxuICAgICAgICAgIDxDaGFyYWN0ZXJpc3RpY0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxkaXY+e3Byb3BzLmNoYXJhY3RlcmlzdGljLmxvd2VzdH08L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD17YCR7cHJvcHMuY2hhcmFjdGVyaXN0aWMua2V5TmFtZX0tMWB9XG4gICAgICAgICAgICAgIHZhbHVlPVwiMVwiIG5hbWU9e3Byb3BzLmNoYXJhY3RlcmlzdGljLmtleU5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ2hhcmFjdGVyaXN0aWNDb250YWluZXI+XG4gICAgICAgICAgPENoYXJhY3RlcmlzdGljQ29udGFpbmVyPlxuICAgICAgICAgICAgPGRpdj57cHJvcHMuY2hhcmFjdGVyaXN0aWMubG93fTwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9e2Ake3Byb3BzLmNoYXJhY3RlcmlzdGljLmtleU5hbWV9LTJgfVxuICAgICAgICAgICAgdmFsdWU9XCIyXCIgbmFtZT17cHJvcHMuY2hhcmFjdGVyaXN0aWMua2V5TmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoZS50YXJnZXQudmFsdWUsIGAke3Byb3BzLmNoYXJhY3RlcmlzdGljLm5hbWV9YCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPC9DaGFyYWN0ZXJpc3RpY0NvbnRhaW5lcj5cbiAgICAgICAgICA8Q2hhcmFjdGVyaXN0aWNDb250YWluZXI+XG4gICAgICAgICAgICA8ZGl2Pntwcm9wcy5jaGFyYWN0ZXJpc3RpYy5taWR9PC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9e2Ake3Byb3BzLmNoYXJhY3RlcmlzdGljLmtleU5hbWV9LTNgfVxuICAgICAgICAgICAgICB2YWx1ZT1cIjNcIiBuYW1lPXtwcm9wcy5jaGFyYWN0ZXJpc3RpYy5rZXlOYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoZS50YXJnZXQudmFsdWUsIGAke3Byb3BzLmNoYXJhY3RlcmlzdGljLm5hbWV9YCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ2hhcmFjdGVyaXN0aWNDb250YWluZXI+XG4gICAgICAgICAgPENoYXJhY3RlcmlzdGljQ29udGFpbmVyPlxuICAgICAgICAgICAgPGRpdj57cHJvcHMuY2hhcmFjdGVyaXN0aWMuaGlnaH08L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD17YCR7cHJvcHMuY2hhcmFjdGVyaXN0aWMua2V5TmFtZX0tNGB9XG4gICAgICAgICAgICAgIHZhbHVlPVwiNFwiIG5hbWU9e3Byb3BzLmNoYXJhY3RlcmlzdGljLmtleU5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShlLnRhcmdldC52YWx1ZSwgYCR7cHJvcHMuY2hhcmFjdGVyaXN0aWMubmFtZX1gKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9DaGFyYWN0ZXJpc3RpY0NvbnRhaW5lcj5cbiAgICAgICAgICA8Q2hhcmFjdGVyaXN0aWNDb250YWluZXI+XG4gICAgICAgICAgICA8ZGl2Pntwcm9wcy5jaGFyYWN0ZXJpc3RpYy5oaWdoZXN0fTwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPXtgJHtwcm9wcy5jaGFyYWN0ZXJpc3RpYy5rZXlOYW1lfS01YH1cbiAgICAgICAgICAgICAgdmFsdWU9XCI1XCIgbmFtZT17cHJvcHMuY2hhcmFjdGVyaXN0aWMua2V5TmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlLCBgJHtwcm9wcy5jaGFyYWN0ZXJpc3RpYy5uYW1lfWApO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NoYXJhY3RlcmlzdGljQ29udGFpbmVyPlxuICAgICAgICA8L0Rlc2NyaXB0b3JDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3Q2hhcmFjdGVyaXN0aWM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXZpZXdDaGFyYWN0ZXJpc3RpYyBmcm9tICcuL1Jldmlld0NoYXJhY3RlcmlzdGljLmpzeCc7XG5cbmNvbnN0IFJldmlld0NoYXJhY3RlcmlzdGljcyA9ICh7IGNoYXJhY3RlcmlzdGljcywgcmV2aWV3TWV0YSwgY2hhbmdlQ2hhcmFjdGVyaXN0aWN9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtcbiAgICAgICAgY2hhcmFjdGVyaXN0aWNzLm1hcCgoY2hhcmFjdGVyaXN0aWMsIGkpID0+XG4gICAgICAgICAgcmV2aWV3TWV0YS5jaGFyYWN0ZXJpc3RpY3NbY2hhcmFjdGVyaXN0aWMubmFtZV1cbiAgICAgICAgICAgID9cbiAgICAgICAgICA8UmV2aWV3Q2hhcmFjdGVyaXN0aWMga2V5PXtpfSBjaGFyYWN0ZXJpc3RpYz17Y2hhcmFjdGVyaXN0aWN9IGNoYW5nZUNoYXJhY3RlcmlzdGljPXtjaGFuZ2VDaGFyYWN0ZXJpc3RpY30gLz5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICBudWxsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlld0NoYXJhY3RlcmlzdGljczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFJldmlld0NvdW50QW5kU29ydFNDID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IFJldmlld0NvdW50U0MgPSBzdHlsZWQuZGl2YFxuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IFNvcnRTZWxlY3RTQyA9IHN0eWxlZC5zZWxlY3RgXG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBtYXgtd2lkdGg6IDM0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwLCAwKTtcbmA7XG5cbmNvbnN0IFNvcnRPcHRpb25TQyA9IHN0eWxlZC5vcHRpb25gXG4gIGZvbnQtc2l6ZTogMjFweDtcblxuICBtYXJnaW46IDhweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTUwcHhcbmA7XG5cbmNvbnN0IFJldmlld0NvdW50QW5kU29ydCA9ICh7cmV2aWV3Q291bnQsIGNoYW5nZVNvcnRUeXBlLCBwcm9kdWN0SWR9KSA9PiB7XG4gIC8vIGhhbmRsZSBjaGFuZ2VcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHNvcnRUeXBlKSA9PiB7XG4gICAgY2hhbmdlU29ydFR5cGUoc29ydFR5cGUpO1xuICB9XG4gICAgLy9hcGkgY2FsbCBnZXQgbmV3IHNvcnQgbWV0aG9kLCBmaXJzdCBwYXJnZVxuICAvLyBwYXNzZWQgZG93biBzZXRSZXZpZXdzKG5ldyBpbmZvKTtcbiAgcmV0dXJuIChcbiAgICA8UmV2aWV3Q291bnRBbmRTb3J0U0M+XG4gICAgICA8UmV2aWV3Q291bnRTQz57cmV2aWV3Q291bnR9IHJldmlld3MsIHNvcnRlZCBieTwvUmV2aWV3Q291bnRTQz5cbiAgICAgIDxTb3J0U2VsZWN0U0Mgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgPFNvcnRPcHRpb25TQyB2YWx1ZT1cInJlbGV2YW50XCI+UmVsZXZhbnQ8L1NvcnRPcHRpb25TQz5cbiAgICAgICAgPFNvcnRPcHRpb25TQyB2YWx1ZT1cImhlbHBmdWxcIj5IZWxwZnVsPC9Tb3J0T3B0aW9uU0M+XG4gICAgICAgIDxTb3J0T3B0aW9uU0MgdmFsdWU9XCJuZXdlc3RcIj5OZXdlc3Q8L1NvcnRPcHRpb25TQz5cbiAgICAgIDwvU29ydFNlbGVjdFNDPlxuICAgIDwvUmV2aWV3Q291bnRBbmRTb3J0U0M+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdDb3VudEFuZFNvcnQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdGFyRGlzcGxheSBmcm9tICcuLi9TaGFyZWQvU3RhckRpc3BsYXkuanN4JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBSZXZpZXdIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuYDtcblxuY29uc3QgSGVhZGVyU3RhckRpc3BsYXkgPSBzdHlsZWQuZGl2YFxuICBncmlkLWNvbHVtbjogMTtcbmA7XG5cbmNvbnN0IFJldmlld1VzZXJBbmRUaW1lc3RhbXBDb250YWluZXIgPSBzdHlsZWQuaDNgXG4gIGdyaWQtY29sdW1uOiAyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbmA7XG5cbmNvbnN0IFJldmlld0hlYWRlciA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZXZpZXdIZWFkZXJDb250YWluZXI+XG4gICAgICA8SGVhZGVyU3RhckRpc3BsYXk+XG4gICAgICAgIDxTdGFyRGlzcGxheSByYXRpbmc9e3Byb3BzLnJhdGluZ30gcHJvZHVjdElkPXtwcm9wcy5wcm9kdWN0SWR9Lz5cbiAgICAgIDwvSGVhZGVyU3RhckRpc3BsYXk+XG4gICAgICA8UmV2aWV3VXNlckFuZFRpbWVzdGFtcENvbnRhaW5lcj5cbiAgICAgICAge2Ake3Byb3BzLnJldmlld2VyX25hbWV9LCAke21vbWVudChwcm9wcy5kYXRlKS5mb3JtYXQoJ0xMJyl9YH1cbiAgICAgIDwvUmV2aWV3VXNlckFuZFRpbWVzdGFtcENvbnRhaW5lcj5cbiAgICA8L1Jldmlld0hlYWRlckNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlld0hlYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9SZXZpZXcuanN4JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBSZXZpZXdMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuYDtcblxuY29uc3QgUmV2aWV3TGlzdCA9ICh7IHJldmlld3MsIHJldmlld0ZpbHRlciwgZmlsdGVyU2lnbmF0dXJlLCBzb3J0VHlwZSwgZGlzcGxheUNvdW50LCBzZXRSZXZpZXdJbWdVcmx9KSA9PiB7XG4gIGNvbnN0IFtyZXZpZXdzU2hvd24sIHNldFJldmlld3NTaG93bl0gPSB1c2VTdGF0ZShyZXZpZXdzKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciBmaWx0ZXJlZFJldmlld3MgPSBbXTtcbiAgICByZXZpZXdzLmZvckVhY2gocmV2aWV3ID0+IHtcbiAgICAgIGlmIChmaWx0ZXJlZFJldmlld3MubGVuZ3RoIDwgZGlzcGxheUNvdW50KSB7XG4gICAgICAgIGlmICghcmV2aWV3RmlsdGVyLmFjdGl2ZSkge1xuICAgICAgICAgIGZpbHRlcmVkUmV2aWV3cy5wdXNoKHJldmlldyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHJldmlld0ZpbHRlci5zdGFyc1tyZXZpZXcucmF0aW5nXSkge1xuICAgICAgICAgICAgZmlsdGVyZWRSZXZpZXdzLnB1c2gocmV2aWV3KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRSZXZpZXdzU2hvd24oZmlsdGVyZWRSZXZpZXdzKTtcbiAgfSwgW3NvcnRUeXBlLCBkaXNwbGF5Q291bnQsIGZpbHRlclNpZ25hdHVyZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJldmlld0xpc3RDb250YWluZXI+XG4gICAgICB7XG4gICAgICAgIHJldmlld3NTaG93bi5tYXAocmV2aWV3ID0+IHtcbiAgICAgICAgICByZXR1cm4gPFJldmlld1xuICAgICAgICAgICAga2V5PXtyZXZpZXcucmV2aWV3X2lkfVxuICAgICAgICAgICAgcmV2aWV3PXtyZXZpZXd9XG4gICAgICAgICAgICBzZXRSZXZpZXdJbWdVcmw9e3NldFJldmlld0ltZ1VybH1cbiAgICAgICAgICAvPjtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L1Jldmlld0xpc3RDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdMaXN0OyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXZpZXdDb3VudEFuZFNvcnQgZnJvbSAnLi9SZXZpZXdDb3VudEFuZFNvcnQuanN4JztcbmltcG9ydCBSZXZpZXdMaXN0IGZyb20gJy4vUmV2aWV3TGlzdC5qc3gnO1xuaW1wb3J0IEFkZGl0aW9uYWxSZXZpZXdPcHRpb25zIGZyb20gJy4vQWRkaXRpb25hbFJldmlld09wdGlvbnMuanN4JztcbmltcG9ydCBQcm9kdWN0Q29udGV4dCwgeyByZXZpZXdzLCByZXZpZXdNZXRhIH0gZnJvbSAnLi4vY29udGV4dHMvUHJvZHVjdENvbnRleHQuanMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBSZXZpZXdzX0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogM3JlbSAwIDAgMHJlbTtcbiAgd2lkdGg6IDkyMHB4O1xuYDtcblxuY29uc3QgUmV2aWV3cyA9ICh7IHJldmlld0ZpbHRlciwgZmlsdGVyU2lnbmF0dXJlLCB0b2dnbGVNb2RhbFNob3duLCBzZXRSZXZpZXdJbWdVcmx9KSA9PiB7XG4gIGNvbnN0IFtzb3J0VHlwZSwgc2V0U29ydFR5cGVdID0gdXNlU3RhdGUoJ3JlbGV2YW50Jyk7XG4gIGNvbnN0IFtkaXNwbGF5Q291bnQsIHNldERpc3BsYXlDb3VudF0gPSB1c2VTdGF0ZSgyKTtcbiAgY29uc3QgW2ZpbHRlciwgc2V0UmV2aWV3RmlsdGVyXSA9IHVzZVN0YXRlKHt9KTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKCdDaGFuZ2UgZGV0ZWN0ZWQnKTtcbiAgLy8gfSwgW2ZpbHRlciwgcmV2aWV3RmlsdGVyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvZHVjdENvbnRleHQuQ29uc3VtZXI+XG4gICAgICB7KHtyZXZpZXdzLCBzZXRSZXZpZXdzLCByZXZpZXdNZXRhfSkgPT4ge1xuICAgICAgICB2YXIgcmV2aWV3Q291bnQgPSAwO1xuICAgICAgICBmb3IgKHZhciByYXRpbmcgaW4gcmV2aWV3TWV0YS5yYXRpbmdzKSB7XG4gICAgICAgICAgcmV2aWV3Q291bnQgKz0gTnVtYmVyKHJldmlld01ldGEucmF0aW5nc1tyYXRpbmddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBnZXROZXh0UmV2aWV3UGFnZSA9ICgpID0+IHtcbiAgICAgICAgICB2YXIgbmV3RGlzcGxheUxpbWl0ID0gZGlzcGxheUNvdW50ICsgMjtcbiAgICAgICAgICBzZXREaXNwbGF5Q291bnQobmV3RGlzcGxheUxpbWl0KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgY2hhbmdlU29ydFR5cGUgPSAoc29ydFR5cGUpID0+IHtcbiAgICAgICAgICB2YXIgdXBkYXRlZFJldmlld3MgPSByZXZpZXdzO1xuICAgICAgICAgIHVwZGF0ZWRSZXZpZXdzLnJlc3VsdHMgPSBbXTtcblxuICAgICAgICAgIGF4aW9zLmdldChgL3Jldmlld3MvJHtyZXZpZXdzLnByb2R1Y3R9LyR7c29ydFR5cGV9LzEvJHtyZXZpZXdDb3VudH1gKVxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICAgIHNldFJldmlld3MoZGF0YSk7XG4gICAgICAgICAgICAgIHNldFNvcnRUeXBlKHNvcnRUeXBlKTtcbiAgICAgICAgICAgICAgc2V0RGlzcGxheUNvdW50KDIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmV2aWV3c19Db250YWluZXI+XG4gICAgICAgICAgICA8UmV2aWV3Q291bnRBbmRTb3J0IHJldmlld0NvdW50PXtyZXZpZXdDb3VudH1cbiAgICAgICAgICAgICAgY2hhbmdlU29ydFR5cGU9e2NoYW5nZVNvcnRUeXBlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxSZXZpZXdMaXN0IHJldmlld3M9e3Jldmlld3MucmVzdWx0c31cbiAgICAgICAgICAgICAgcmV2aWV3RmlsdGVyPXtyZXZpZXdGaWx0ZXJ9XG4gICAgICAgICAgICAgIGZpbHRlclNpZ25hdHVyZT17ZmlsdGVyU2lnbmF0dXJlfVxuICAgICAgICAgICAgICBzb3J0VHlwZT17c29ydFR5cGV9XG4gICAgICAgICAgICAgIGRpc3BsYXlDb3VudD17ZGlzcGxheUNvdW50fVxuICAgICAgICAgICAgICBzZXRSZXZpZXdJbWdVcmw9e3NldFJldmlld0ltZ1VybH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QWRkaXRpb25hbFJldmlld09wdGlvbnMgZ2V0TmV4dFJldmlld1BhZ2U9e2dldE5leHRSZXZpZXdQYWdlfVxuICAgICAgICAgICAgICB0b2dnbGVNb2RhbFNob3duPXt0b2dnbGVNb2RhbFNob3dufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1Jldmlld3NfQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgICAgfX1cbiAgICA8L1Byb2R1Y3RDb250ZXh0LkNvbnN1bWVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3czsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDaGVja21hcmsgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA1MCA1MFwiIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIxNVwiIHN0eWxlPXt7Ym90dG9tOiAwfX0+XG4gICAgICA8cGF0aCBkPVwiTTE3LjU2MSw0Mi44YzAtMy45NS0xNi44MjMtMTIuMzM1LTE2LjgyMy0xMi4zMzVsNS4xMjgtNS43MTdcblx0bDExLjM2MSw3LjQwNkw0NS4yNjIsNWwzLjkzNSwzLjk1QzQ5LjE5Niw4Ljk1LDE3LjU2MSwzNi44NzUsMTcuNTYxLDQyLjhcIlxuICAgICAgICBmaWxsPVwiZ3JlZW5cIlxuICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2ttYXJrOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIERvIE5PVCB1c2UgdGhpcyBjb21wb25lbnQgdG8gZGlzcGxheSB5b3VyIHJhdGluZ3Ncbi8vIE5vbi1SYXRpbmdzIGFuZCBSZXZpZXdzIFdpZGdldHMgc2hvdWxkIHVzZSA8U3RhckF2ZXJhZ2VSYXRpbmcvPiAhISFcblxuZnVuY3Rpb24gTmV3UmV2aWV3U3Rhcihwcm9wcykge1xuICB2YXIgZGVnVG9SYWQgPSAoZGVnKSA9PiB7XG4gICAgcmV0dXJuIGRlZyAqIDAuMDE3NDUzMztcbiAgfVxuICB2YXIgcmFkaXVzID0gMTA7XG4gIHZhciBzdHJva2VXaWR0aCA9IDAuNTtcbiAgdmFyIGZpbmRTdGFyUG9pbnRzID0gKHIpID0+IHtcbiAgICB2YXIgcG9pbnRBbmdsZXMgPSBbXTtcbiAgICBmb3IgKHZhciBhbmdsZU51bSA9IDA7IGFuZ2xlTnVtIDwgMTI7IGFuZ2xlTnVtKyspIHtcbiAgICAgIHBvaW50QW5nbGVzLnB1c2goOTAgKyBhbmdsZU51bSAqIDM2KTtcbiAgICB9XG4gICAgcG9pbnRBbmdsZXMuZm9yRWFjaCgoYW5nbGUsIGkpID0+IHtcbiAgICAgIGlmIChpICUgMiA9PT0gMCkge1xuICAgICAgICBwb2ludHMucHVzaChbKE1hdGguY29zKGRlZ1RvUmFkKGFuZ2xlKSkgKiAtcikgKyByICsgc3Ryb2tlV2lkdGgsIChNYXRoLnNpbihkZWdUb1JhZChhbmdsZSkpICogLXIpICsgciArIHN0cm9rZVdpZHRoXSk7XG4gICAgICB9IGVsc2UgaWYgKGkgJSAyICE9PSAwKSB7XG4gICAgICAgIHBvaW50cy5wdXNoKFsoTWF0aC5jb3MoZGVnVG9SYWQoYW5nbGUpKSAqIC1yICogMS45MSAvIDUpICsgciArIHN0cm9rZVdpZHRoLCAoTWF0aC5zaW4oZGVnVG9SYWQoYW5nbGUpKSAqIC1yICogMS45MSAvIDUpICsgciArIHN0cm9rZVdpZHRoXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIHZhciBwb2ludHMgPSBbXTtcbiAgZmluZFN0YXJQb2ludHMocmFkaXVzKTtcblxuICB2YXIgcmF0aW5nUm91bmRpbmcgPSBNYXRoLmZsb29yKHByb3BzLnN0YXJzIC8gLjI1KSAvIDQ7XG4gIHZhciBzdGFyRmlsbCA9IDE7XG4gIGlmIChyYXRpbmdSb3VuZGluZyA+PSAxKSB7XG4gICAgc3RhckZpbGwgPSAxO1xuICB9IGVsc2UgaWYgKHJhdGluZ1JvdW5kaW5nID49IC43NSkge1xuICAgIHN0YXJGaWxsID0gLjY1O1xuICB9IGVsc2UgaWYgKHJhdGluZ1JvdW5kaW5nID49IC41KSB7XG4gICAgc3RhckZpbGwgPSAuNTtcbiAgfSBlbHNlIGlmIChyYXRpbmdSb3VuZGluZyA+PSAuMjUpIHtcbiAgICBzdGFyRmlsbCA9IC4zNTtcbiAgfSBlbHNlIHtcbiAgICBzdGFyRmlsbCA9IDA7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzdmcgdmlld0JveD17YDAgMCAkezIgKiAocmFkaXVzICsgc3Ryb2tlV2lkdGgpfSAkezIgKiAocmFkaXVzICsgc3Ryb2tlV2lkdGgpfWB9XG4gICAgICB3aWR0aD17MiAqIChyYWRpdXMgKyBzdHJva2VXaWR0aCl9IGhlaWdodD17MiAqIChyYWRpdXMgKyBzdHJva2VXaWR0aCl9IGNsYXNzTmFtZT1cInJhdGluZy1zdGFyXCJcbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICBwcm9wcy5zZXRIb3ZlclJhdGluZyhwcm9wcy5zdGFyTnVtYmVyKTtcbiAgICAgIH19XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcbiAgICAgICAgcHJvcHMuc2V0SG92ZXJSYXRpbmcoMCk7XG4gICAgICB9fVxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBwcm9wcy5zZXRSYXRpbmcocHJvcHMuc3Rhck51bWJlcik7XG4gICAgICB9fVxuICAgICAgPlxuXG5cbiAgICAgIDxjbGlwUGF0aCBpZD17YGNsaXAtJHtwcm9wcy5zdGFySWR9YH0+XG4gICAgICAgIDxwYXRoIGQ9e2BNXG4gICAgICAgICAgICAkezIgKiAocmFkaXVzICsgc3Ryb2tlV2lkdGgpfSAwXG4gICAgICAgICAgICAkezIgKiAocmFkaXVzICsgc3Ryb2tlV2lkdGgpfSAkezIgKiAocmFkaXVzICsgc3Ryb2tlV2lkdGgpfVxuICAgICAgICAgICAgJHsyICogKHJhZGl1cyArIHN0cm9rZVdpZHRoKSAqIHN0YXJGaWxsfSAkezIgKiAocmFkaXVzICsgc3Ryb2tlV2lkdGgpfVxuICAgICAgICAgICAgJHsyICogKHJhZGl1cyArIHN0cm9rZVdpZHRoKSAqIHN0YXJGaWxsfSAwXG4gICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgIDwvY2xpcFBhdGg+XG5cbiAgICAgIDxwYXRoIGlkPXtgJHtwcm9wcy5zdGFySWR9YH0gZD17YFxuICAgICAgICBNICR7cG9pbnRzWzBdWzBdfSAke3BvaW50c1swXVsxXX1cbiAgICAgICAgJHtwb2ludHNbMV1bMF19ICR7cG9pbnRzWzFdWzFdfVxuICAgICAgICAke3BvaW50c1syXVswXX0gJHtwb2ludHNbMl1bMV19XG4gICAgICAgICR7cG9pbnRzWzNdWzBdfSAke3BvaW50c1szXVsxXX1cbiAgICAgICAgJHtwb2ludHNbNF1bMF19ICR7cG9pbnRzWzRdWzFdfVxuICAgICAgICAke3BvaW50c1s1XVswXX0gJHtwb2ludHNbNV1bMV19XG4gICAgICAgICR7cG9pbnRzWzZdWzBdfSAke3BvaW50c1s2XVsxXX1cbiAgICAgICAgJHtwb2ludHNbN11bMF19ICR7cG9pbnRzWzddWzFdfVxuICAgICAgICAke3BvaW50c1s4XVswXX0gJHtwb2ludHNbOF1bMV19XG4gICAgICAgICR7cG9pbnRzWzldWzBdfSAke3BvaW50c1s5XVsxXX1cbiAgICAgICAgJHtwb2ludHNbMTBdWzBdfSAke3BvaW50c1sxMF1bMV19XG4gICAgICAgICR7cG9pbnRzWzExXVswXX0gJHtwb2ludHNbMTFdWzFdfVxuICAgICAgICBgfSBzdHJva2U9XCJibGFja1wiIHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cbiAgICAgICAgZmlsbD1cImxpZ2h0Z3JleVwiXG4gICAgICAvPlxuXG4gICAgICB7XG4gICAgICAgIHByb3BzLmhvdmVyU3RhcnMgPiAwXG4gICAgICAgICAgP1xuICAgICAgICA8cGF0aCBkPXtgXG4gICAgICAgICAgTSAke3BvaW50c1swXVswXX0gJHtwb2ludHNbMF1bMV19XG4gICAgICAgICAgJHtwb2ludHNbMV1bMF19ICR7cG9pbnRzWzFdWzFdfVxuICAgICAgICAgICR7cG9pbnRzWzJdWzBdfSAke3BvaW50c1syXVsxXX1cbiAgICAgICAgICAke3BvaW50c1szXVswXX0gJHtwb2ludHNbM11bMV19XG4gICAgICAgICAgJHtwb2ludHNbNF1bMF19ICR7cG9pbnRzWzRdWzFdfVxuICAgICAgICAgICR7cG9pbnRzWzVdWzBdfSAke3BvaW50c1s1XVsxXX1cbiAgICAgICAgICAke3BvaW50c1s2XVswXX0gJHtwb2ludHNbNl1bMV19XG4gICAgICAgICAgJHtwb2ludHNbN11bMF19ICR7cG9pbnRzWzddWzFdfVxuICAgICAgICAgICR7cG9pbnRzWzhdWzBdfSAke3BvaW50c1s4XVsxXX1cbiAgICAgICAgICAke3BvaW50c1s5XVswXX0gJHtwb2ludHNbOV1bMV19XG4gICAgICAgICAgJHtwb2ludHNbMTBdWzBdfSAke3BvaW50c1sxMF1bMV19XG4gICAgICAgICAgJHtwb2ludHNbMTFdWzBdfSAke3BvaW50c1sxMV1bMV19XG4gICAgICAgICAgYH0gZmlsbD1cImdyZWVuXCJcbiAgICAgICAgICBzdHJva2U9XCJibGFja1wiIHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aCAqNX1cbiAgICAgICAgLz5cbiAgICAgICAgICA6XG4gICAgICAgIG51bGxcbiAgICAgIH1cblxuICAgICAgPHBhdGggZD17YFxuICAgICAgICBNICR7cG9pbnRzWzBdWzBdfSAke3BvaW50c1swXVsxXX1cbiAgICAgICAgJHtwb2ludHNbMV1bMF19ICR7cG9pbnRzWzFdWzFdfVxuICAgICAgICAke3BvaW50c1syXVswXX0gJHtwb2ludHNbMl1bMV19XG4gICAgICAgICR7cG9pbnRzWzNdWzBdfSAke3BvaW50c1szXVsxXX1cbiAgICAgICAgJHtwb2ludHNbNF1bMF19ICR7cG9pbnRzWzRdWzFdfVxuICAgICAgICAke3BvaW50c1s1XVswXX0gJHtwb2ludHNbNV1bMV19XG4gICAgICAgICR7cG9pbnRzWzZdWzBdfSAke3BvaW50c1s2XVsxXX1cbiAgICAgICAgJHtwb2ludHNbN11bMF19ICR7cG9pbnRzWzddWzFdfVxuICAgICAgICAke3BvaW50c1s4XVswXX0gJHtwb2ludHNbOF1bMV19XG4gICAgICAgICR7cG9pbnRzWzldWzBdfSAke3BvaW50c1s5XVsxXX1cbiAgICAgICAgJHtwb2ludHNbMTBdWzBdfSAke3BvaW50c1sxMF1bMV19XG4gICAgICAgICR7cG9pbnRzWzExXVswXX0gJHtwb2ludHNbMTFdWzFdfVxuICAgICAgICBgfSBmaWxsPVwiZ3JlZW5cIlxuICAgICAgICBzdHJva2U9XCJibGFja1wiIHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cbiAgICAgIC8+XG5cbiAgICAgIDx1c2UgY2xpcFBhdGg9e2B1cmwoI2NsaXAtJHtwcm9wcy5zdGFySWR9KWB9IGhyZWY9e2AjJHtwcm9wcy5zdGFySWR9YH0gLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdSZXZpZXdTdGFyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmV3UmV2aWV3U3RhciBmcm9tICcuL05ld1Jldmlld1N0YXIuanN4JztcblxuY29uc3QgTmV3UmV2aWV3U3RhckRpc3BsYXkgPSAoe3JhdGluZywgaG92ZXJSYXRpbmcsIHNldFJhdGluZywgc2V0SG92ZXJSYXRpbmd9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxOZXdSZXZpZXdTdGFyIHN0YXJOdW1iZXI9ezF9IHN0YXJzPXtyYXRpbmd9IGhvdmVyU3RhcnM9e2hvdmVyUmF0aW5nfVxuICAgICAgICBzZXRSYXRpbmc9e3NldFJhdGluZ30gc2V0SG92ZXJSYXRpbmc9e3NldEhvdmVyUmF0aW5nfSBzdGFySWQ9e01hdGgucmFuZG9tKCl9Lz5cbiAgICAgIDxOZXdSZXZpZXdTdGFyIHN0YXJOdW1iZXI9ezJ9IHN0YXJzPXtyYXRpbmcgLSAxfSBob3ZlclN0YXJzPXtob3ZlclJhdGluZyAtIDF9XG4gICAgICAgIHNldFJhdGluZz17c2V0UmF0aW5nfSBzZXRIb3ZlclJhdGluZz17c2V0SG92ZXJSYXRpbmd9IHN0YXJJZD17TWF0aC5yYW5kb20oKX0vPlxuICAgICAgPE5ld1Jldmlld1N0YXIgc3Rhck51bWJlcj17M30gc3RhcnM9e3JhdGluZyAtIDJ9IGhvdmVyU3RhcnM9e2hvdmVyUmF0aW5nIC0gMn1cbiAgICAgICAgc2V0UmF0aW5nPXtzZXRSYXRpbmd9IHNldEhvdmVyUmF0aW5nPXtzZXRIb3ZlclJhdGluZ30gc3RhcklkPXtNYXRoLnJhbmRvbSgpfS8+XG4gICAgICA8TmV3UmV2aWV3U3RhciBzdGFyTnVtYmVyPXs0fSBzdGFycz17cmF0aW5nIC0gM30gaG92ZXJTdGFycz17aG92ZXJSYXRpbmcgLSAzfVxuICAgICAgICBzZXRSYXRpbmc9e3NldFJhdGluZ30gc2V0SG92ZXJSYXRpbmc9e3NldEhvdmVyUmF0aW5nfSBzdGFySWQ9e01hdGgucmFuZG9tKCl9Lz5cbiAgICAgIDxOZXdSZXZpZXdTdGFyIHN0YXJOdW1iZXI9ezV9IHN0YXJzPXtyYXRpbmcgLSA0fSBob3ZlclN0YXJzPXtob3ZlclJhdGluZyAtIDR9XG4gICAgICAgIHNldFJhdGluZz17c2V0UmF0aW5nfSBzZXRIb3ZlclJhdGluZz17c2V0SG92ZXJSYXRpbmd9IHN0YXJJZD17TWF0aC5yYW5kb20oKX0vPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1Jldmlld1N0YXJEaXNwbGF5OyIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLWJkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi1iZC5qc1wiLFxuXHRcIi4vYm4tYmQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLWJkLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4taW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tc2dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lbi1zZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1teFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtbXguanNcIixcblx0XCIuL2VzLW14LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1teC5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9maWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpbC5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tZGV2YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWRldmEuanNcIixcblx0XCIuL2dvbS1kZXZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vb2MtbG5jXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL29jLWxuYy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvb2MtbG5jLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RrLmpzXCIsXG5cdFwiLi90ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLW1vXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtbW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==