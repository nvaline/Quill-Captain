(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./client/src/components/Related_Items_Comparison/Modal/Modal.jsx":
/*!************************************************************************!*\
  !*** ./client/src/components/Related_Items_Comparison/Modal/Modal.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.js */ "./client/src/components/Related_Items_Comparison/Modal/styles.js");
/* harmony import */ var _contexts_ProductContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/ProductContext.js */ "./client/src/components/contexts/ProductContext.js");




/* eslint-disable indent */



var comparisons = ['100% cotton', '100% degradeable', 'denim', 'Crease resistance', 'Colorfastness'];
var checkmarkURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Check_mark_9x9.svg/1200px-Check_mark_9x9.svg.png';


var Modal = function Modal(_ref) {
  var productCardId = _ref.productCardId;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_ProductContext_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
      _useContext$product = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useContext.product, 1),
      product = _useContext$product[0];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      relatedProducts = _useState2[0],
      setProduct = _useState2[1];

  var compare = function compare(arr1, arr2) {
    if (arr2) {
      return arr1.filter(function (_ref2) {
        var feature = _ref2.feature;
        return !arr2.every(function (_ref3) {
          var feature2 = _ref3.feature;
          feature === feature2;
        });
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/products/".concat(productCardId));

              case 3:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                setProduct(data);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));
      return _fetchData.apply(this, arguments);
    }

    fetchData();
  }, [product]);
  var features = product.features;
  var relatedFeatures = relatedProducts.features;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_5__["ModalContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "COMPARING"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_5__["NameBar"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", null, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", null, relatedProducts.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, compare(features, relatedFeatures) ? compare(features, relatedFeatures).map(function (_ref4, idx) {
    var feature = _ref4.feature,
        value = _ref4.value;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_5__["Modal_Main"], {
      key: idx
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_5__["CheckMark"], {
      src: checkmarkURL
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, feature + ' : ' + value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_5__["CheckMark"], {
      src: checkmarkURL
    })));
  }) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./client/src/components/Related_Items_Comparison/Modal/styles.js":
/*!************************************************************************!*\
  !*** ./client/src/components/Related_Items_Comparison/Modal/styles.js ***!
  \************************************************************************/
/*! exports provided: ModalContainer, NameBar, CheckMark, Modal_Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainer", function() { return ModalContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameBar", function() { return NameBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckMark", function() { return CheckMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal_Main", function() { return Modal_Main; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4;


var ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    background-color: ghostwhite;\n    border: 0.18rem solid gray;\n    padding: 1rem;\n    position: absolute;\n    // top: 109rem;\n    height: 25rem;\n    width: 30rem;\n    // left: 33%;\n"])));
var NameBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: flex;\n    justify-content: space-between;\n"])));
var CheckMark = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    height: 1rem;\n    width: 1rem;\n"])));
var Modal_Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: grid;\n    grid-template-columns: 1rem 10rem 1rem;\n    justify-content: space-around;\n    align-items: center;\n    text-align: center;\n"])));


/***/ }),

/***/ "./client/src/components/Related_Items_Comparison/OutfitCard/OutFitContainer.jsx":
/*!***************************************************************************************!*\
  !*** ./client/src/components/Related_Items_Comparison/OutfitCard/OutFitContainer.jsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.js */ "./client/src/components/Related_Items_Comparison/OutfitCard/styles.js");
/* harmony import */ var _OutfitCard_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OutfitCard.jsx */ "./client/src/components/Related_Items_Comparison/OutfitCard/OutfitCard.jsx");





var OutFitContainer = function OutFitContainer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      isOutFit = _useState4[0],
      addOutFit = _useState4[1];

  var clickOutFit = function clickOutFit() {
    setCount(count += 1);
    addOutFit(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__["RelatedProducts"], null, isOutFit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__["RelatedProducts"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__["PlusSign"], {
    onClick: function onClick() {
      return clickOutFit();
    }
  }, "+")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_OutfitCard_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    count: count
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__["RelatedProducts"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__["PlusSign"], {
    onClick: function onClick() {
      return clickOutFit();
    }
  }, "+"))));
};

/* harmony default export */ __webpack_exports__["default"] = (OutFitContainer);

/***/ }),

/***/ "./client/src/components/Related_Items_Comparison/OutfitCard/OutfitCard.jsx":
/*!**********************************************************************************!*\
  !*** ./client/src/components/Related_Items_Comparison/OutfitCard/OutfitCard.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ProductCard_Thumbnails_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ProductCard/Thumbnails.jsx */ "./client/src/components/Related_Items_Comparison/ProductCard/Thumbnails.jsx");
/* harmony import */ var _Modal_Modal_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Modal/Modal.jsx */ "./client/src/components/Related_Items_Comparison/Modal/Modal.jsx");
/* harmony import */ var _Shared_StarAverageRating_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Shared/StarAverageRating.jsx */ "./client/src/components/Shared/StarAverageRating.jsx");
/* harmony import */ var _contexts_ProductContext_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/ProductContext.js */ "./client/src/components/contexts/ProductContext.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.js */ "./client/src/components/Related_Items_Comparison/OutfitCard/styles.js");











var OutFitCard = function OutFitCard(_ref) {
  var idx = _ref.count;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_ProductContext_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
      _useContext$product = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useContext.product, 1),
      product = _useContext$product[0],
      ratings = _useContext.reviewMeta.ratings;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      relatedProducts = _useState2[0],
      setProduct = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      count = _useState4[0],
      setCount = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      isToggled = _useState6[0],
      setToggle = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      isShown = _useState8[0],
      setIsShown = _useState8[1];

  var category = product.category; // console.log(relatedProducts.slice(0,idx));

  relatedProducts = relatedProducts.slice(0, idx);
  var carouselProducts = relatedProducts.length === 2 ? relatedProducts : relatedProducts.slice(count, count + 3).length < 3 ? relatedProducts.slice(count - 1, count + 3) : relatedProducts.slice(count, count + 3);

  var remove = function remove(element) {
    var selectEl = element.parentNode.parentNode.parentNode;
    selectEl.remove();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/products/".concat(product.id, "/styles"));

              case 2:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                setProduct(data.results);
                return _context.abrupt("return", data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchData.apply(this, arguments);
    }

    fetchData();
  }, [product]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_9__["RelatedProducts"], {
    id: 1
  }, count !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_9__["Img"], {
    onClick: function onClick() {
      return count > 0 ? setCount(count -= 1) : null;
    },
    height: '4rem',
    width: '3rem',
    src: "https://cdn4.iconfinder.com/data/icons/arrows-249/24/small_chevron_arrow_left-512.png"
  }) : null, carouselProducts.map(function (_ref2, idx) {
    var style_id = _ref2.style_id,
        name = _ref2.name,
        original_price = _ref2.original_price,
        photos = _ref2.photos;
    var url = photos[0].url;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_9__["Card"], {
      key: style_id,
      onMouseEnter: function onMouseEnter() {
        return setIsShown(true);
      },
      onMouseLeave: function onMouseLeave() {
        return setIsShown(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_9__["Image_container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_9__["StarContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_9__["Stars"], {
      onClick: function onClick(e) {
        return remove(e.target);
      },
      pos: 'absolute',
      bottom: '16.5rem',
      margin: '0.5rem 0rem 0 0',
      z_index: 100,
      src: "http://cdn.onlinewebfonts.com/svg/img_524275.png"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_9__["Img"], {
      onClick: function onClick(e) {
        return console.log(e.target);
      },
      id: idx,
      height: '25rem',
      width: '16rem',
      src: url
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ProductCard_Thumbnails_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      photos: photos,
      isShown: isShown
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_9__["CardText"], {
      font_size: '1.4rem',
      color: 'steelblue'
    }, category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_9__["CardText"], {
      font_size: '1.5rem'
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_9__["CardText"], {
      font_size: '1rem'
    }, "$", original_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_9__["StarsContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Shared_StarAverageRating_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
      ratings: ratings
    })));
  }), isToggled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Modal_Modal_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null) : null, count !== 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_9__["Img"], {
    onClick: function onClick() {
      return count < 3 ? setCount(count += 1) : setCount(3);
    },
    height: '4rem',
    width: '3rem',
    src: "https://cdn4.iconfinder.com/data/icons/arrows-249/24/small_chevron_arrow_right-512.png"
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (OutFitCard);

/***/ }),

/***/ "./client/src/components/Related_Items_Comparison/OutfitCard/styles.js":
/*!*****************************************************************************!*\
  !*** ./client/src/components/Related_Items_Comparison/OutfitCard/styles.js ***!
  \*****************************************************************************/
/*! exports provided: RelatedProducts, Image_container, Img, Card, CardText, Stars, StarContainer, ThumbnailContainer, Thumbnail_Image_Container, Thumbnail_arrow, StarsContainer, ExitContainer, ExitImg, PlusSign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedProducts", function() { return RelatedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image_container", function() { return Image_container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardText", function() { return CardText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stars", function() { return Stars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarContainer", function() { return StarContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailContainer", function() { return ThumbnailContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thumbnail_Image_Container", function() { return Thumbnail_Image_Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thumbnail_arrow", function() { return Thumbnail_arrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarsContainer", function() { return StarsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitContainer", function() { return ExitContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitImg", function() { return ExitImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusSign", function() { return PlusSign; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;


var RelatedProducts = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display:flex;\n  color: ", ";\n  background-color: whitesmoke;\n  justify-content: center;\n  align-items: center;\n "])), function (props) {
  return props.color;
});
var Image_container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: 25rem;\n"])));
var Img = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: ", ";\n  width: ", ";\n"])), function (props) {
  return props.height;
}, function (props) {
  return props.width;
});
var Card = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n   margin: 1rem;\n   border: 0.25rem solid gray;\n"])));
var CardText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject5 || (_templateObject5 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin-left: 0.5rem;\n  font-size: ", ";\n  color: ", ";\n"])), function (props) {
  return props.font_size;
}, function (props) {
  return props.color;
});
var ExitContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6 || (_templateObject6 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  justify-content: flex-end;\n"])));
var ExitImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject7 || (_templateObject7 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: absolute;\n  height: 2rem;\n  border-radius: 3rem;\n"])));
var PlusSign = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject8 || (_templateObject8 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 3rem;\n  height: 31rem;\n  width: 16rem;\n "]))); // OutFitCards

var StarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject9 || (_templateObject9 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 0.5rem;\n"])));
var StarsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject10 || (_templateObject10 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n display: flex;\n justify-content: center;\n margin-bottom:0.5rem;\n"])));
var Stars = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject11 || (_templateObject11 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n margin : ", ";\n height: 1.3rem;\n position:", ";\n z-index:", ";\n background-color: white;\n border-radius: 1rem;\n"])), function (props) {
  return props.margin;
}, function (props) {
  return props.pos;
}, function (props) {
  return props.z_index;
});
var ThumbnailContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject12 || (_templateObject12 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n   display:flex;\n   justify-content: space-around;\n   align-items: center;\n   width: 16rem;\n   position: relative;\n   bottom: 3rem;\n"])));
var Thumbnail_Image_Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject13 || (_templateObject13 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    // position: relative;\n    // bottom: 0.25rem;\n"])));
var Thumbnail_arrow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject14 || (_templateObject14 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n   margin-right:1.3rem;\n"])));


/***/ }),

/***/ "./client/src/components/Related_Items_Comparison/ProductCard/ProductCard.jsx":
/*!************************************************************************************!*\
  !*** ./client/src/components/Related_Items_Comparison/ProductCard/ProductCard.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Thumbnails_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Thumbnails.jsx */ "./client/src/components/Related_Items_Comparison/ProductCard/Thumbnails.jsx");
/* harmony import */ var _Modal_Modal_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Modal/Modal.jsx */ "./client/src/components/Related_Items_Comparison/Modal/Modal.jsx");
/* harmony import */ var _Shared_StarAverageRating_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Shared/StarAverageRating.jsx */ "./client/src/components/Shared/StarAverageRating.jsx");
/* harmony import */ var _contexts_ProductContext_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../contexts/ProductContext.js */ "./client/src/components/contexts/ProductContext.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.js */ "./client/src/components/Related_Items_Comparison/ProductCard/styles.js");












var ProductCard = function ProductCard(_ref) {
  var relatedProductClicked = _ref.relatedProductClicked;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_contexts_ProductContext_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
      _useContext$product = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useContext.product, 1),
      product = _useContext$product[0],
      ratings = _useContext.reviewMeta.ratings;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      relatedProducts = _useState2[0],
      setProduct = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      isToggled = _useState4[0],
      setToggle = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      isShown = _useState6[0],
      setIsShown = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState7, 2),
      photoUrl = _useState8[0],
      setPhotos = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState9, 2),
      productCardId = _useState10[0],
      setProductCardId = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState11, 2),
      count = _useState12[0],
      setCount = _useState12[1];

  var id = product.id,
      category = product.category;
  var carouselProducts = relatedProducts.length === 4 ? relatedProducts : relatedProducts.slice(count, count + 4).length < 4 ? relatedProducts.slice(count - 1, count + 4) : relatedProducts.slice(count, count + 4);

  var getProductStyles = /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(id) {
      var _yield$axios$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("/products/".concat(id, "/styles"));

            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              return _context.abrupt("return", data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getProductStyles(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var photosArr = carouselProducts.map(function (_ref3) {
    var _ref3$results = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref3.results, 1),
        _ref3$results$0$photo = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref3$results[0].photos, 1),
        photos = _ref3$results$0$photo[0];

    return photos;
  });

  var thumbnailClicked = function thumbnailClicked(url, idx) {
    photosArr[idx].url = url;
    setPhotos(photosArr);
  };

  var clickStar = function clickStar(id) {
    setToggle(!isToggled);
    setProductCardId(id);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
        var _yield$axios$get2, data, newData, productStylesArr, i, products;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("/products/".concat(id, "/related"));

              case 3:
                _yield$axios$get2 = _context2.sent;
                data = _yield$axios$get2.data;
                newData = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(new Set(data));
                productStylesArr = [];
                i = 0;

              case 8:
                if (!(i < newData.length)) {
                  _context2.next = 16;
                  break;
                }

                _context2.next = 11;
                return getProductStyles(newData[i]);

              case 11:
                products = _context2.sent;
                productStylesArr.push(products);

              case 13:
                i++;
                _context2.next = 8;
                break;

              case 16:
                setProduct(productStylesArr);
                _context2.next = 22;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 19]]);
      }));
      return _fetchData.apply(this, arguments);
    }

    fetchData();
  }, [product]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_10__["RelatedProducts"], {
    id: 1
  }, count !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_10__["Img"], {
    onClick: function onClick() {
      return count > 0 ? setCount(count -= 1) : null;
    },
    height: '4rem',
    width: '3rem',
    src: "https://cdn4.iconfinder.com/data/icons/arrows-249/24/small_chevron_arrow_left-512.png"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_10__["Arrow_space_filler"], {
    mr: '3rem'
  }), carouselProducts.map(function (_ref4, idx) {
    var product_id = _ref4.product_id,
        results = _ref4.results;

    var _results = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(results, 1),
        _results$ = _results[0],
        name = _results$.name,
        original_price = _results$.original_price;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_10__["Card"], {
      key: idx,
      onMouseEnter: function onMouseEnter() {
        return setIsShown(true);
      },
      onMouseLeave: function onMouseLeave() {
        return setIsShown(false);
      } // onMouseEnter={() => onHover()}

    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_10__["Image_container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_10__["StarContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_10__["Stars"], {
      alt: "star",
      onClick: function onClick() {
        return clickStar(product_id);
      },
      pos: 'absolute',
      bottom: '16.5rem',
      margin: '0.5rem 0rem 0 0',
      z_index: 100,
      src: "https://cdn.onlinewebfonts.com/svg/img_325911.png"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_10__["Img"], {
      alt: "product image",
      onClick: function onClick() {
        return relatedProductClicked(product_id);
      },
      id: idx,
      height: '25rem',
      width: '16rem',
      src: photoUrl ? photoUrl[idx].url : photosArr[idx].url
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Thumbnails_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      photos: photosArr,
      isShown: isShown,
      thumbnailClicked: thumbnailClicked
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_10__["CardText"], {
      font_size: '1.4rem',
      color: 'black'
    }, category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_10__["CardText"], {
      font_size: '1.5rem'
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_10__["CardText"], {
      font_size: '1rem'
    }, "$", original_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_10__["StarsContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Shared_StarAverageRating_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
      ratings: ratings
    })));
  }), isToggled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Modal_Modal_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    productCardId: productCardId
  }) : null, count !== 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_10__["Img"], {
    alt: "arrow right",
    onClick: function onClick() {
      return count < 3 ? setCount(count += 1) : setCount(3);
    },
    height: '4rem',
    width: '3rem',
    src: "https://cdn4.iconfinder.com/data/icons/arrows-249/24/small_chevron_arrow_right-512.png"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_10__["Arrow_space_filler"], {
    mr: '3rem'
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ }),

/***/ "./client/src/components/Related_Items_Comparison/ProductCard/Thumbnails.jsx":
/*!***********************************************************************************!*\
  !*** ./client/src/components/Related_Items_Comparison/ProductCard/Thumbnails.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.js */ "./client/src/components/Related_Items_Comparison/ProductCard/styles.js");




var Thumbnails = function Thumbnails(_ref) {
  var photos = _ref.photos,
      isShown = _ref.isShown,
      thumbnailClicked = _ref.thumbnailClicked;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var carouselProducts = photos.slice(count, count + 4).length < 4 ? photos.slice(count - 1, count + 4) : photos.slice(count, count + 4);
  return isShown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__["ThumbnailContainer"], null, count !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__["Img"], {
    alt: "arrow left",
    onClick: function onClick() {
      return count > 0 ? setCount(count -= 1) : null;
    },
    height: '2rem',
    width: '2rem',
    src: "https://cdn4.iconfinder.com/data/icons/arrows-249/24/small_chevron_arrow_left-512.png"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__["Arrow_space_filler"], {
    mr: '1.5rem'
  }), carouselProducts.map(function (_ref2, idx) {
    var thumbnail_url = _ref2.thumbnail_url;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__["Thumbnail_Image_Container"], {
      key: idx
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__["Img"], {
      alt: "related item thumbnail",
      onClick: function onClick() {
        return thumbnailClicked(thumbnail_url, idx);
      },
      height: '2rem',
      width: '2rem',
      src: thumbnail_url
    }));
  }), count !== 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__["Img"], {
    alt: "arrow right",
    onClick: function onClick() {
      return count < 3 ? setCount(count += 1) : setCount(3);
    },
    height: '2rem',
    width: '2rem',
    src: "https://cdn4.iconfinder.com/data/icons/arrows-249/24/small_chevron_arrow_right-512.png"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__["Arrow_space_filler"], {
    mr: '1.5rem'
  })) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Thumbnails);

/***/ }),

/***/ "./client/src/components/Related_Items_Comparison/ProductCard/styles.js":
/*!******************************************************************************!*\
  !*** ./client/src/components/Related_Items_Comparison/ProductCard/styles.js ***!
  \******************************************************************************/
/*! exports provided: RelatedProducts, Image_container, Img, Card, CardText, Stars, StarContainer, ThumbnailContainer, Thumbnail_Image_Container, Arrow_space_filler, StarsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedProducts", function() { return RelatedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image_container", function() { return Image_container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardText", function() { return CardText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stars", function() { return Stars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarContainer", function() { return StarContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailContainer", function() { return ThumbnailContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thumbnail_Image_Container", function() { return Thumbnail_Image_Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrow_space_filler", function() { return Arrow_space_filler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarsContainer", function() { return StarsContainer; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;


var RelatedProducts = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  color: ", ";\n  background-color: whitesmoke;\n "])), function (props) {
  return props.color;
});
var Image_container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: 18rem;\n  width: 16rem;\n  overflow: hidden;\n  deisplay: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var Img = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: ", ";\n  ", "\n  width: auto;\n  transition-duration:1s ease;\n  transform:scale(1)\n"])), function (props) {
  return props.height;
}, ''
/* width: ${props => props.width}; */
);
var Card = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n   margin: 1rem;\n   border: 0.25rem solid gray;\n"])));
var CardText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject5 || (_templateObject5 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin-left: 0.5rem;\n  font-size: ", ";\n  color: ", ";\n"])), function (props) {
  return props.font_size;
}, function (props) {
  return props.color;
});
var StarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6 || (_templateObject6 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 0.5rem;\n"])));
var StarsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject7 || (_templateObject7 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  justify-content: center;\n  margin-bottom:0.5rem;\n\n"])));
var Stars = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject8 || (_templateObject8 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin : ", ";\n  height: 1.3rem;\n  position:", ";\n  z-index:", ";\n  background-color: white;\n  border-radius: 1rem;\n"])), function (props) {
  return props.margin;
}, function (props) {
  return props.pos;
}, function (props) {
  return props.z_index;
}); // ThumbnailContainer

var ThumbnailContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject9 || (_templateObject9 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n   display:flex;\n   justify-content: space-around;\n   align-items: center;\n   width: 16rem;\n   position: relative;\n   bottom: 3rem;\n\n"])));
var Thumbnail_Image_Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject10 || (_templateObject10 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    // position: relative;\n    // bottom: 0.25rem;\n"])));
var Arrow_space_filler = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject11 || (_templateObject11 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n   margin-right:", ";\n\n"])), function (props) {
  return props.mr;
});


/***/ }),

/***/ "./client/src/components/Related_Items_Comparison/Related_Items_Comparison.jsx":
/*!*************************************************************************************!*\
  !*** ./client/src/components/Related_Items_Comparison/Related_Items_Comparison.jsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductCard_ProductCard_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard/ProductCard.jsx */ "./client/src/components/Related_Items_Comparison/ProductCard/ProductCard.jsx");
/* harmony import */ var _OutfitCard_OutFitContainer_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OutfitCard/OutFitContainer.jsx */ "./client/src/components/Related_Items_Comparison/OutfitCard/OutFitContainer.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2;





var H1 = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n   margin: 2rem 0 1rem 1rem;\n"])));
var RPContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 1280px;\n"])));

var Related_Items_Comparison = function Related_Items_Comparison(_ref) {
  var relatedProductClicked = _ref.relatedProductClicked;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RPContainer, {
    className: "Related_Products"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H1, null, "Related Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProductCard_ProductCard_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    relatedProductClicked: relatedProductClicked
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H1, null, "Your Outfit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_OutfitCard_OutFitContainer_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Related_Items_Comparison);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUmVsYXRlZF9JdGVtc19Db21wYXJpc29uL01vZGFsL01vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUmVsYXRlZF9JdGVtc19Db21wYXJpc29uL01vZGFsL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUmVsYXRlZF9JdGVtc19Db21wYXJpc29uL091dGZpdENhcmQvT3V0Rml0Q29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUmVsYXRlZF9JdGVtc19Db21wYXJpc29uL091dGZpdENhcmQvT3V0Zml0Q2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1JlbGF0ZWRfSXRlbXNfQ29tcGFyaXNvbi9PdXRmaXRDYXJkL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUmVsYXRlZF9JdGVtc19Db21wYXJpc29uL1Byb2R1Y3RDYXJkL1Byb2R1Y3RDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUmVsYXRlZF9JdGVtc19Db21wYXJpc29uL1Byb2R1Y3RDYXJkL1RodW1ibmFpbHMuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZWxhdGVkX0l0ZW1zX0NvbXBhcmlzb24vUHJvZHVjdENhcmQvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZWxhdGVkX0l0ZW1zX0NvbXBhcmlzb24vUmVsYXRlZF9JdGVtc19Db21wYXJpc29uLmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiXSwibmFtZXMiOlsiY29tcGFyaXNvbnMiLCJjaGVja21hcmtVUkwiLCJNb2RhbCIsInByb2R1Y3RDYXJkSWQiLCJ1c2VDb250ZXh0IiwiUHJvZHVjdENvbnRleHQiLCJwcm9kdWN0IiwidXNlU3RhdGUiLCJyZWxhdGVkUHJvZHVjdHMiLCJzZXRQcm9kdWN0IiwiY29tcGFyZSIsImFycjEiLCJhcnIyIiwiZmlsdGVyIiwiZmVhdHVyZSIsImV2ZXJ5IiwiZmVhdHVyZTIiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJheGlvcyIsImdldCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmVhdHVyZXMiLCJyZWxhdGVkRmVhdHVyZXMiLCJuYW1lIiwibWFwIiwiaWR4IiwidmFsdWUiLCJNb2RhbENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIk5hbWVCYXIiLCJDaGVja01hcmsiLCJpbWciLCJNb2RhbF9NYWluIiwiT3V0Rml0Q29udGFpbmVyIiwiY291bnQiLCJzZXRDb3VudCIsImlzT3V0Rml0IiwiYWRkT3V0Rml0IiwiY2xpY2tPdXRGaXQiLCJPdXRGaXRDYXJkIiwicmF0aW5ncyIsInJldmlld01ldGEiLCJpc1RvZ2dsZWQiLCJzZXRUb2dnbGUiLCJpc1Nob3duIiwic2V0SXNTaG93biIsImNhdGVnb3J5Iiwic2xpY2UiLCJjYXJvdXNlbFByb2R1Y3RzIiwibGVuZ3RoIiwicmVtb3ZlIiwiZWxlbWVudCIsInNlbGVjdEVsIiwicGFyZW50Tm9kZSIsImlkIiwicmVzdWx0cyIsInN0eWxlX2lkIiwib3JpZ2luYWxfcHJpY2UiLCJwaG90b3MiLCJ1cmwiLCJlIiwidGFyZ2V0IiwiUmVsYXRlZFByb2R1Y3RzIiwicHJvcHMiLCJjb2xvciIsIkltYWdlX2NvbnRhaW5lciIsIkltZyIsImhlaWdodCIsIndpZHRoIiwiQ2FyZCIsIkNhcmRUZXh0IiwicCIsImZvbnRfc2l6ZSIsIkV4aXRDb250YWluZXIiLCJFeGl0SW1nIiwiUGx1c1NpZ24iLCJTdGFyQ29udGFpbmVyIiwiU3RhcnNDb250YWluZXIiLCJTdGFycyIsIm1hcmdpbiIsInBvcyIsInpfaW5kZXgiLCJUaHVtYm5haWxDb250YWluZXIiLCJUaHVtYm5haWxfSW1hZ2VfQ29udGFpbmVyIiwiVGh1bWJuYWlsX2Fycm93IiwiUHJvZHVjdENhcmQiLCJyZWxhdGVkUHJvZHVjdENsaWNrZWQiLCJwaG90b1VybCIsInNldFBob3RvcyIsInNldFByb2R1Y3RDYXJkSWQiLCJnZXRQcm9kdWN0U3R5bGVzIiwicGhvdG9zQXJyIiwidGh1bWJuYWlsQ2xpY2tlZCIsImNsaWNrU3RhciIsIm5ld0RhdGEiLCJTZXQiLCJwcm9kdWN0U3R5bGVzQXJyIiwiaSIsInByb2R1Y3RzIiwicHVzaCIsInByb2R1Y3RfaWQiLCJUaHVtYm5haWxzIiwidGh1bWJuYWlsX3VybCIsIkFycm93X3NwYWNlX2ZpbGxlciIsIm1yIiwiSDEiLCJoMSIsIlJQQ29udGFpbmVyIiwiUmVsYXRlZF9JdGVtc19Db21wYXJpc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFdBQVcsR0FBRyxDQUFDLGFBQUQsRUFBZ0Isa0JBQWhCLEVBQW1DLE9BQW5DLEVBQTJDLG1CQUEzQyxFQUErRCxlQUEvRCxDQUFwQjtBQUNBLElBQU1DLFlBQVksR0FBRyw0R0FBckI7QUFFQTs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFxQjtBQUFBLE1BQW5CQyxhQUFtQixRQUFuQkEsYUFBbUI7O0FBQ2pDLG9CQUE0QkMsd0RBQVUsQ0FBQ0MsbUVBQUQsQ0FBdEM7QUFBQSxvSEFBT0MsT0FB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bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge01vZGFsQ29udGFpbmVyLCBOYW1lQmFyLCBDaGVja01hcmssIE1vZGFsX01haW59IGZyb20gJy4vc3R5bGVzLmpzJztcbmNvbnN0IGNvbXBhcmlzb25zID0gWycxMDAlIGNvdHRvbicsICcxMDAlIGRlZ3JhZGVhYmxlJywnZGVuaW0nLCdDcmVhc2UgcmVzaXN0YW5jZScsJ0NvbG9yZmFzdG5lc3MnXTtcbmNvbnN0IGNoZWNrbWFya1VSTCA9ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzgvODIvQ2hlY2tfbWFya185eDkuc3ZnLzEyMDBweC1DaGVja19tYXJrXzl4OS5zdmcucG5nJztcblxuaW1wb3J0IFByb2R1Y3RDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHRzL1Byb2R1Y3RDb250ZXh0LmpzJztcblxuY29uc3QgTW9kYWwgPSAoe3Byb2R1Y3RDYXJkSWR9KSA9PiB7XG4gIGNvbnN0IHtwcm9kdWN0Oltwcm9kdWN0XX0gPSB1c2VDb250ZXh0KFByb2R1Y3RDb250ZXh0KTtcbiAgY29uc3QgW3JlbGF0ZWRQcm9kdWN0cywgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGNvbXBhcmUgPSAoYXJyMSxhcnIyKSA9PiB7XG4gICAgaWYoYXJyMil7XG4gICAgIHJldHVybiBhcnIxLmZpbHRlciggKHtmZWF0dXJlfSkgPT4gIWFycjIuZXZlcnkoKHtmZWF0dXJlOmZlYXR1cmUyfSkgPT57XG4gICAgICAgIGZlYXR1cmUgPT09IGZlYXR1cmUyO1xuICAgICB9KSk7XG4gICAgfVxuICAgfTtcblxudXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCl7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoYC9wcm9kdWN0cy8ke3Byb2R1Y3RDYXJkSWR9YCk7XG4gICAgICAgIHNldFByb2R1Y3QoZGF0YSk7XG4gICAgICB9XG4gICAgICBjYXRjaChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaERhdGEoKTtcbiAgfSxbcHJvZHVjdF0pO1xuICBjb25zdCB7ZmVhdHVyZXN9ID0gcHJvZHVjdDtcbiAgY29uc3Qge2ZlYXR1cmVzOnJlbGF0ZWRGZWF0dXJlc30gPSByZWxhdGVkUHJvZHVjdHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsQ29udGFpbmVyPlxuICAgICAgICAgICAgPHA+Q09NUEFSSU5HPC9wPlxuICAgICAgICAgICAgPE5hbWVCYXI+XG4gICAgICAgICAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICA8aDM+e3JlbGF0ZWRQcm9kdWN0cy5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8L05hbWVCYXI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbXBhcmUoZmVhdHVyZXMscmVsYXRlZEZlYXR1cmVzKT9cbiAgICAgICAgICAgICAgY29tcGFyZShmZWF0dXJlcyxyZWxhdGVkRmVhdHVyZXMpLm1hcCggKHtmZWF0dXJlLHZhbHVlfSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICA8TW9kYWxfTWFpbiBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2PjxDaGVja01hcmsgc3JjPXtjaGVja21hcmtVUkx9Lz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHA+e2ZlYXR1cmUgKyAnIDogJyArIHZhbHVlfTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXY+PENoZWNrTWFyayBzcmM9e2NoZWNrbWFya1VSTH0vPjwvZGl2PlxuICAgICAgICAgICAgICAgICA8L01vZGFsX01haW4+XG4gICAgICAgICAgICAgICk7fSk6bnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWxDb250YWluZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuY29uc3QgTW9kYWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XG4gICAgYm9yZGVyOiAwLjE4cmVtIHNvbGlkIGdyYXk7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gdG9wOiAxMDlyZW07XG4gICAgaGVpZ2h0OiAyNXJlbTtcbiAgICB3aWR0aDogMzByZW07XG4gICAgLy8gbGVmdDogMzMlO1xuYDtcblxuY29uc3QgTmFtZUJhciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5jb25zdCBDaGVja01hcmsgPSBzdHlsZWQuaW1nYFxuICAgIGhlaWdodDogMXJlbTtcbiAgICB3aWR0aDogMXJlbTtcbmA7XG5cbmNvbnN0IE1vZGFsX01haW4gPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxcmVtIDEwcmVtIDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgeyBNb2RhbENvbnRhaW5lciwgTmFtZUJhciwgQ2hlY2tNYXJrLCBNb2RhbF9NYWluIH07IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSZWxhdGVkUHJvZHVjdHMsIENhcmQsIFBsdXNTaWdufSBmcm9tICcuL3N0eWxlcy5qcyc7XG5pbXBvcnQgT3V0Zml0Q2FyZCBmcm9tICcuL091dGZpdENhcmQuanN4JztcblxuY29uc3QgT3V0Rml0Q29udGFpbmVyID0gKCkgPT4ge1xuICBsZXQgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzT3V0Rml0LCBhZGRPdXRGaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjbGlja091dEZpdCA9ICgpID0+IHtcbiAgICBzZXRDb3VudChjb3VudCs9MSk7XG4gICAgYWRkT3V0Rml0KHRydWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxSZWxhdGVkUHJvZHVjdHM+XG4gICAgICB7XG4gICAgICAgIGlzT3V0Rml0P1xuICAgICAgICAgIDxSZWxhdGVkUHJvZHVjdHM+XG4gICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgPFBsdXNTaWduIG9uQ2xpY2s9eygpID0+IGNsaWNrT3V0Rml0KCkgfT4rPC9QbHVzU2lnbj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDxPdXRmaXRDYXJkIGNvdW50PXtjb3VudH0vPlxuICAgICAgICAgIDwvUmVsYXRlZFByb2R1Y3RzPlxuICAgICAgICAgIDpcbiAgICAgICAgICA8UmVsYXRlZFByb2R1Y3RzPlxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxQbHVzU2lnbiBvbkNsaWNrPXsoKSA9PiBjbGlja091dEZpdCgpIH0+KzwvUGx1c1NpZ24+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9SZWxhdGVkUHJvZHVjdHM+XG4gICAgICB9XG4gICAgPC9SZWxhdGVkUHJvZHVjdHM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPdXRGaXRDb250YWluZXI7IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBUaHVtYm5haWxzIGZyb20gJy4uL1Byb2R1Y3RDYXJkL1RodW1ibmFpbHMuanN4JztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbC9Nb2RhbC5qc3gnO1xuaW1wb3J0IFN0YXJBdmVyYWdlUmF0aW5nIGZyb20gJy4uLy4uL1NoYXJlZC9TdGFyQXZlcmFnZVJhdGluZy5qc3gnO1xuaW1wb3J0IFByb2R1Y3RDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHRzL1Byb2R1Y3RDb250ZXh0LmpzJztcbmltcG9ydCB7UmVsYXRlZFByb2R1Y3RzLCBJbWFnZV9jb250YWluZXIsIEltZywgQ2FyZCwgQ2FyZFRleHQsIFN0YXJzLCBTdGFyQ29udGFpbmVyLCBTdGFyc0NvbnRhaW5lcn0gZnJvbSAnLi9zdHlsZXMuanMnO1xuXG5cbmNvbnN0IE91dEZpdENhcmQgPSAoe2NvdW50OmlkeH0pID0+IHtcbiAgY29uc3Qge3Byb2R1Y3Q6W3Byb2R1Y3RdLHJldmlld01ldGE6e3JhdGluZ3N9fSA9IHVzZUNvbnRleHQoUHJvZHVjdENvbnRleHQpO1xuICBsZXQgW3JlbGF0ZWRQcm9kdWN0cywgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGxldCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNUb2dnbGVkLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNTaG93biwgc2V0SXNTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHtjYXRlZ29yeX0gPSBwcm9kdWN0O1xuICAvLyBjb25zb2xlLmxvZyhyZWxhdGVkUHJvZHVjdHMuc2xpY2UoMCxpZHgpKTtcbiAgcmVsYXRlZFByb2R1Y3RzID0gcmVsYXRlZFByb2R1Y3RzLnNsaWNlKDAsaWR4KTtcbiAgbGV0IGNhcm91c2VsUHJvZHVjdHMgPSByZWxhdGVkUHJvZHVjdHMubGVuZ3RoID09PSAyID9cbiAgICByZWxhdGVkUHJvZHVjdHMgOlxuICAgIHJlbGF0ZWRQcm9kdWN0cy5zbGljZShjb3VudCxjb3VudCArIDMpLmxlbmd0aCA8IDMgP1xuICAgICAgcmVsYXRlZFByb2R1Y3RzLnNsaWNlKGNvdW50LTEsIGNvdW50ICsgMyk6XG4gICAgICByZWxhdGVkUHJvZHVjdHMuc2xpY2UoY291bnQsIGNvdW50ICsgMyk7XG5cbiAgY29uc3QgcmVtb3ZlID0gZWxlbWVudCA9PiB7XG4gICAgY29uc3Qgc2VsZWN0RWwgPSBlbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIHNlbGVjdEVsLnJlbW92ZSgpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpe1xuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvcHJvZHVjdHMvJHtwcm9kdWN0LmlkfS9zdHlsZXNgKTtcbiAgICAgIHNldFByb2R1Y3QoZGF0YS5yZXN1bHRzKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBmZXRjaERhdGEoKTtcbiAgfSxbcHJvZHVjdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlbGF0ZWRQcm9kdWN0cyBpZD17MX0+XG4gICAgICB7Y291bnQgIT09IDAgP1xuICAgICAgICA8SW1nXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY291bnQgPiAwID8gc2V0Q291bnQoY291bnQtPTEpOm51bGx9XG4gICAgICAgICAgaGVpZ2h0PXsnNHJlbSd9XG4gICAgICAgICAgd2lkdGg9eyczcmVtJ31cbiAgICAgICAgICBzcmM9J2h0dHBzOi8vY2RuNC5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL2Fycm93cy0yNDkvMjQvc21hbGxfY2hldnJvbl9hcnJvd19sZWZ0LTUxMi5wbmcnXG4gICAgICAgIC8+IDogbnVsbFxuICAgICAgfVxuICAgICAge1xuXG4gICAgICAgIGNhcm91c2VsUHJvZHVjdHMubWFwKCAoe3N0eWxlX2lkLG5hbWUsb3JpZ2luYWxfcHJpY2UscGhvdG9zfSxpZHgpID0+IHtcbiAgICAgICAgICBsZXQgdXJsID0gcGhvdG9zWzBdLnVybDtcbiAgICAgICAgICByZXR1cm4gIChcbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIGtleT17c3R5bGVfaWR9XG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNTaG93bih0cnVlKX1cbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc1Nob3duKGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEltYWdlX2NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8U3RhckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxTdGFyc1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gcmVtb3ZlKGUudGFyZ2V0KX1cbiAgICAgICAgICAgICAgICAgICAgcG9zPXsnYWJzb2x1dGUnfVxuICAgICAgICAgICAgICAgICAgICBib3R0b209eycxNi41cmVtJ31cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXsnMC41cmVtIDByZW0gMCAwJ31cbiAgICAgICAgICAgICAgICAgICAgel9pbmRleD17MTAwfVxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwOi8vY2RuLm9ubGluZXdlYmZvbnRzLmNvbS9zdmcvaW1nXzUyNDI3NS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvU3RhckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8SW1nXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQpfVxuICAgICAgICAgICAgICAgICAgaWQ9e2lkeH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17JzI1cmVtJ31cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsnMTZyZW0nfVxuICAgICAgICAgICAgICAgICAgc3JjPXt1cmx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGh1bWJuYWlscyBwaG90b3M9e3Bob3Rvc30gaXNTaG93bj17aXNTaG93bn0vPlxuICAgICAgICAgICAgICA8L0ltYWdlX2NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPENhcmRUZXh0IGZvbnRfc2l6ZT17JzEuNHJlbSd9IGNvbG9yPXsnc3RlZWxibHVlJ30+e2NhdGVnb3J5fTwvQ2FyZFRleHQ+XG4gICAgICAgICAgICAgIDxDYXJkVGV4dCBmb250X3NpemU9eycxLjVyZW0nfT57bmFtZX08L0NhcmRUZXh0PlxuICAgICAgICAgICAgICA8Q2FyZFRleHQgZm9udF9zaXplPXsnMXJlbSd9ID4ke29yaWdpbmFsX3ByaWNlfTwvQ2FyZFRleHQ+XG4gICAgICAgICAgICAgIDxTdGFyc0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8U3RhckF2ZXJhZ2VSYXRpbmcgcmF0aW5ncz17cmF0aW5nc30gLz5cbiAgICAgICAgICAgICAgPC9TdGFyc0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgICkgfVxuICAgICAgeyBpc1RvZ2dsZWQ/IDxNb2RhbCAvPiA6IG51bGx9XG4gICAgICB7Y291bnQgIT09IDM/XG4gICAgICAgIDxJbWdcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb3VudCA8IDM/IHNldENvdW50KGNvdW50Kz0xKTogc2V0Q291bnQoMyl9XG4gICAgICAgICAgaGVpZ2h0PXsnNHJlbSd9XG4gICAgICAgICAgd2lkdGg9eyczcmVtJ31cbiAgICAgICAgICBzcmM9J2h0dHBzOi8vY2RuNC5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL2Fycm93cy0yNDkvMjQvc21hbGxfY2hldnJvbl9hcnJvd19yaWdodC01MTIucG5nJy8+IDogbnVsbFxuICAgICAgfVxuICAgIDwvUmVsYXRlZFByb2R1Y3RzPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3V0Rml0Q2FyZDsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUmVsYXRlZFByb2R1Y3RzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTpmbGV4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuIGA7XG5cbmNvbnN0IEltYWdlX2NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMjVyZW07XG5gO1xuXG5jb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xuYDtcblxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gICBtYXJnaW46IDFyZW07XG4gICBib3JkZXI6IDAuMjVyZW0gc29saWQgZ3JheTtcbmA7XG5cbmNvbnN0IENhcmRUZXh0ID0gc3R5bGVkLnBgXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy5mb250X3NpemV9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07XG5gO1xuXG5jb25zdCBFeGl0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmA7XG5cbmNvbnN0IEV4aXRJbWcgPSBzdHlsZWQuaW1nYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbmA7XG5cbmNvbnN0IFBsdXNTaWduID0gc3R5bGVkLnBgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDNyZW07XG4gIGhlaWdodDogMzFyZW07XG4gIHdpZHRoOiAxNnJlbTtcbiBgO1xuXG5cbiAvLyBPdXRGaXRDYXJkc1xuXG4gY29uc3QgU3RhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuYDtcblxuIGNvbnN0IFN0YXJzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiBkaXNwbGF5OiBmbGV4O1xuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuIG1hcmdpbi1ib3R0b206MC41cmVtO1xuYDtcblxuY29uc3QgU3RhcnMgPSBzdHlsZWQuaW1nYFxuIG1hcmdpbiA6ICR7cHJvcHMgPT4gcHJvcHMubWFyZ2lufTtcbiBoZWlnaHQ6IDEuM3JlbTtcbiBwb3NpdGlvbjoke3Byb3BzID0+IHByb3BzLnBvc307XG4gei1pbmRleDoke3Byb3BzID0+IHByb3BzLnpfaW5kZXh9O1xuIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuIGJvcmRlci1yYWRpdXM6IDFyZW07XG5gO1xuXG5cbmNvbnN0IFRodW1ibmFpbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICBkaXNwbGF5OmZsZXg7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICB3aWR0aDogMTZyZW07XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBib3R0b206IDNyZW07XG5gO1xuXG5jb25zdCBUaHVtYm5haWxfSW1hZ2VfQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gYm90dG9tOiAwLjI1cmVtO1xuYDtcblxuY29uc3QgVGh1bWJuYWlsX2Fycm93ID0gc3R5bGVkLmRpdmBcbiAgIG1hcmdpbi1yaWdodDoxLjNyZW07XG5gO1xuXG5leHBvcnQgIHtSZWxhdGVkUHJvZHVjdHMsIEltYWdlX2NvbnRhaW5lciwgSW1nLCBDYXJkLCBDYXJkVGV4dCwgU3RhcnMsIFN0YXJDb250YWluZXIsIFRodW1ibmFpbENvbnRhaW5lcixUaHVtYm5haWxfSW1hZ2VfQ29udGFpbmVyLFRodW1ibmFpbF9hcnJvdywgU3RhcnNDb250YWluZXIsRXhpdENvbnRhaW5lciwgRXhpdEltZywgUGx1c1NpZ259O1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBUaHVtYm5haWxzIGZyb20gJy4vVGh1bWJuYWlscy5qc3gnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsL01vZGFsLmpzeCc7XG5pbXBvcnQgU3RhckF2ZXJhZ2VSYXRpbmcgZnJvbSAnLi4vLi4vU2hhcmVkL1N0YXJBdmVyYWdlUmF0aW5nLmpzeCc7XG5pbXBvcnQgUHJvZHVjdENvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dHMvUHJvZHVjdENvbnRleHQuanMnO1xuaW1wb3J0IHtSZWxhdGVkUHJvZHVjdHMsIEltYWdlX2NvbnRhaW5lciwgSW1nLCBDYXJkLCBDYXJkVGV4dCwgU3RhcnMsIFN0YXJDb250YWluZXIsIFN0YXJzQ29udGFpbmVyLCBBcnJvd19zcGFjZV9maWxsZXJ9IGZyb20gJy4vc3R5bGVzLmpzJztcblxuXG5jb25zdCBQcm9kdWN0Q2FyZCA9ICh7cmVsYXRlZFByb2R1Y3RDbGlja2VkfSkgPT4ge1xuICBjb25zdCB7cHJvZHVjdDpbcHJvZHVjdF0scmV2aWV3TWV0YTp7cmF0aW5nc319ID0gdXNlQ29udGV4dChQcm9kdWN0Q29udGV4dCk7XG4gIGNvbnN0IFtyZWxhdGVkUHJvZHVjdHMsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNUb2dnbGVkLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNTaG93biwgc2V0SXNTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwaG90b1VybCxzZXRQaG90b3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHJvZHVjdENhcmRJZCxzZXRQcm9kdWN0Q2FyZElkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gIGxldCB7aWQsIGNhdGVnb3J5fSA9IHByb2R1Y3Q7XG4gIGxldCBjYXJvdXNlbFByb2R1Y3RzID0gcmVsYXRlZFByb2R1Y3RzLmxlbmd0aCA9PT0gNCA/XG4gICAgcmVsYXRlZFByb2R1Y3RzIDpcbiAgICByZWxhdGVkUHJvZHVjdHMuc2xpY2UoY291bnQsY291bnQgKyA0KS5sZW5ndGggPCA0ID9cbiAgICAgIHJlbGF0ZWRQcm9kdWN0cy5zbGljZShjb3VudC0xLCBjb3VudCArIDQpOlxuICAgICAgcmVsYXRlZFByb2R1Y3RzLnNsaWNlKGNvdW50LCBjb3VudCArIDQpO1xuXG4gIGNvbnN0IGdldFByb2R1Y3RTdHlsZXMgPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoYC9wcm9kdWN0cy8ke2lkfS9zdHlsZXNgKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBsZXQgcGhvdG9zQXJyID0gY2Fyb3VzZWxQcm9kdWN0cy5tYXAoKHtyZXN1bHRzOlt7cGhvdG9zOltwaG90b3NdfV19KSA9PiBwaG90b3MpO1xuICBjb25zdCB0aHVtYm5haWxDbGlja2VkID0gKHVybCxpZHgpID0+IHtcbiAgICBwaG90b3NBcnJbaWR4XS51cmwgPSB1cmw7XG4gICAgc2V0UGhvdG9zKHBob3Rvc0Fycik7XG4gIH07XG5cbiAgY29uc3QgY2xpY2tTdGFyID0gaWQgPT4ge1xuICAgIHNldFRvZ2dsZSghaXNUb2dnbGVkKTtcbiAgICBzZXRQcm9kdWN0Q2FyZElkKGlkKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKXtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChgL3Byb2R1Y3RzLyR7aWR9L3JlbGF0ZWRgKTtcbiAgICAgICAgbGV0IG5ld0RhdGEgPSBbLi4ubmV3IFNldChkYXRhKV07XG4gICAgICAgIGxldCBwcm9kdWN0U3R5bGVzQXJyID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuZXdEYXRhLmxlbmd0aDtpKyspe1xuICAgICAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZ2V0UHJvZHVjdFN0eWxlcyhuZXdEYXRhW2ldKTtcbiAgICAgICAgICBwcm9kdWN0U3R5bGVzQXJyLnB1c2gocHJvZHVjdHMpO1xuICAgICAgICB9XG4gICAgICAgIHNldFByb2R1Y3QocHJvZHVjdFN0eWxlc0Fycik7XG4gICAgICB9XG4gICAgICBjYXRjaChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaERhdGEoKTtcbiAgfSxbcHJvZHVjdF0pO1xuICByZXR1cm4gKFxuICAgIDxSZWxhdGVkUHJvZHVjdHMgaWQ9ezF9PlxuICAgICAge2NvdW50ICE9PSAwID9cbiAgICAgICAgPEltZ1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvdW50ID4gMCA/IHNldENvdW50KGNvdW50LT0xKTpudWxsfVxuICAgICAgICAgIGhlaWdodD17JzRyZW0nfVxuICAgICAgICAgIHdpZHRoPXsnM3JlbSd9XG4gICAgICAgICAgc3JjPSdodHRwczovL2NkbjQuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9hcnJvd3MtMjQ5LzI0L3NtYWxsX2NoZXZyb25fYXJyb3dfbGVmdC01MTIucG5nJ1xuICAgICAgICAvPiA6IDxBcnJvd19zcGFjZV9maWxsZXIgbXI9eyczcmVtJ30gLz5cbiAgICAgIH1cbiAgICAgIHtcblxuICAgICAgICBjYXJvdXNlbFByb2R1Y3RzLm1hcCgoe3Byb2R1Y3RfaWQscmVzdWx0c30saWR4KSA9PlxuICAgICAgICB7XG4gICAgICAgICAgY29uc3QgW3tuYW1lLG9yaWdpbmFsX3ByaWNlLH1dID0gcmVzdWx0cztcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNTaG93bih0cnVlKX1cbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc1Nob3duKGZhbHNlKX1cbiAgICAgICAgICAgICAgLy8gb25Nb3VzZUVudGVyPXsoKSA9PiBvbkhvdmVyKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbWFnZV9jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFN0YXJDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8U3RhcnNcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwic3RhclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsaWNrU3Rhcihwcm9kdWN0X2lkKX1cbiAgICAgICAgICAgICAgICAgICAgcG9zPXsnYWJzb2x1dGUnfVxuICAgICAgICAgICAgICAgICAgICBib3R0b209eycxNi41cmVtJ31cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXsnMC41cmVtIDByZW0gMCAwJ31cbiAgICAgICAgICAgICAgICAgICAgel9pbmRleD17MTAwfVxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5vbmxpbmV3ZWJmb250cy5jb20vc3ZnL2ltZ18zMjU5MTEucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L1N0YXJDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPEltZ1xuICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdCBpbWFnZVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZWxhdGVkUHJvZHVjdENsaWNrZWQocHJvZHVjdF9pZCl9XG4gICAgICAgICAgICAgICAgICBpZD17aWR4fVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsnMjVyZW0nfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9eycxNnJlbSd9XG4gICAgICAgICAgICAgICAgICBzcmM9e3Bob3RvVXJsP3Bob3RvVXJsW2lkeF0udXJsOnBob3Rvc0FycltpZHhdLnVybH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUaHVtYm5haWxzXG4gICAgICAgICAgICAgICAgICBwaG90b3M9e3Bob3Rvc0Fycn1cbiAgICAgICAgICAgICAgICAgIGlzU2hvd249e2lzU2hvd259XG4gICAgICAgICAgICAgICAgICB0aHVtYm5haWxDbGlja2VkPXt0aHVtYm5haWxDbGlja2VkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvSW1hZ2VfY29udGFpbmVyPlxuICAgICAgICAgICAgICA8Q2FyZFRleHQgZm9udF9zaXplPXsnMS40cmVtJ30gY29sb3I9eydibGFjayd9PntjYXRlZ29yeX08L0NhcmRUZXh0PlxuICAgICAgICAgICAgICA8Q2FyZFRleHQgZm9udF9zaXplPXsnMS41cmVtJ30+e25hbWV9PC9DYXJkVGV4dD5cbiAgICAgICAgICAgICAgPENhcmRUZXh0IGZvbnRfc2l6ZT17JzFyZW0nfSA+JHtvcmlnaW5hbF9wcmljZX08L0NhcmRUZXh0PlxuICAgICAgICAgICAgICA8U3RhcnNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFN0YXJBdmVyYWdlUmF0aW5nIHJhdGluZ3M9e3JhdGluZ3N9IC8+XG4gICAgICAgICAgICAgIDwvU3RhcnNDb250YWluZXI+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKSA7XG4gICAgICAgIH1cbiAgICAgICAgKX1cbiAgICAgIHsgaXNUb2dnbGVkPyA8TW9kYWwgcHJvZHVjdENhcmRJZD17cHJvZHVjdENhcmRJZH0vPiA6IG51bGx9XG4gICAgICB7Y291bnQgIT09IDM/XG4gICAgICAgIDxJbWdcbiAgICAgICAgICBhbHQ9XCJhcnJvdyByaWdodFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY291bnQgPCAzPyBzZXRDb3VudChjb3VudCs9MSk6IHNldENvdW50KDMpfVxuICAgICAgICAgIGhlaWdodD17JzRyZW0nfVxuICAgICAgICAgIHdpZHRoPXsnM3JlbSd9XG4gICAgICAgICAgc3JjPSdodHRwczovL2NkbjQuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9hcnJvd3MtMjQ5LzI0L3NtYWxsX2NoZXZyb25fYXJyb3dfcmlnaHQtNTEyLnBuZycvPiA6IDxBcnJvd19zcGFjZV9maWxsZXIgbXI9eyczcmVtJ30gLz5cbiAgICAgIH1cbiAgICA8L1JlbGF0ZWRQcm9kdWN0cz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkOyIsIlxuaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSZWxhdGVkUHJvZHVjdHMsIEltYWdlX2NvbnRhaW5lciwgSW1nLCBDYXJkLCBTdGFyQ29udGFpbmVyLFRodW1ibmFpbENvbnRhaW5lcixUaHVtYm5haWxfSW1hZ2VfQ29udGFpbmVyLEFycm93X3NwYWNlX2ZpbGxlcn0gZnJvbSAnLi9zdHlsZXMuanMnO1xuXG5cbmNvbnN0IFRodW1ibmFpbHMgPSAoe3Bob3Rvcyxpc1Nob3duLHRodW1ibmFpbENsaWNrZWQgfSkgPT4ge1xuICBsZXQgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgbGV0IGNhcm91c2VsUHJvZHVjdHMgPSBwaG90b3Muc2xpY2UoY291bnQsY291bnQgKyA0KS5sZW5ndGggPCA0P1xuICAgIHBob3Rvcy5zbGljZShjb3VudC0xLGNvdW50ICsgNCk6XG4gICAgcGhvdG9zLnNsaWNlKGNvdW50LGNvdW50ICsgNCk7XG4gIHJldHVybiBpc1Nob3duPyAoXG4gICAgPFRodW1ibmFpbENvbnRhaW5lcj5cblxuICAgICAge2NvdW50ICE9PSAwID9cbiAgICAgICAgPEltZ1xuICAgICAgICAgIGFsdD1cImFycm93IGxlZnRcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvdW50ID4gMCA/IHNldENvdW50KGNvdW50LT0xKTpudWxsfVxuICAgICAgICAgIGhlaWdodD17JzJyZW0nfVxuICAgICAgICAgIHdpZHRoPXsnMnJlbSd9XG4gICAgICAgICAgc3JjPSdodHRwczovL2NkbjQuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9hcnJvd3MtMjQ5LzI0L3NtYWxsX2NoZXZyb25fYXJyb3dfbGVmdC01MTIucG5nJ1xuICAgICAgICAvPiA6IDxBcnJvd19zcGFjZV9maWxsZXIgbXI9eycxLjVyZW0nfS8+XG5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgY2Fyb3VzZWxQcm9kdWN0cy5tYXAoICh7dGh1bWJuYWlsX3VybH0saWR4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuICAoXG4gICAgICAgICAgICA8VGh1bWJuYWlsX0ltYWdlX0NvbnRhaW5lciBrZXk9e2lkeH0+XG5cbiAgICAgICAgICAgICAgPEltZ1xuICAgICAgICAgICAgICAgIGFsdD1cInJlbGF0ZWQgaXRlbSB0aHVtYm5haWxcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRodW1ibmFpbENsaWNrZWQodGh1bWJuYWlsX3VybCxpZHgpIH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9eycycmVtJ31cbiAgICAgICAgICAgICAgICB3aWR0aD17JzJyZW0nfVxuICAgICAgICAgICAgICAgIHNyYz17dGh1bWJuYWlsX3VybH1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPC9UaHVtYm5haWxfSW1hZ2VfQ29udGFpbmVyPlxuICAgICAgICAgICkgO1xuICAgICAgICB9XG4gICAgICAgICl9XG4gICAgICB7Y291bnQgIT09IDM/XG4gICAgICAgIDxJbWdcbiAgICAgICAgICBhbHQ9XCJhcnJvdyByaWdodFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY291bnQgPCAzPyBzZXRDb3VudChjb3VudCs9MSk6IHNldENvdW50KDMpfVxuICAgICAgICAgIGhlaWdodD17JzJyZW0nfVxuICAgICAgICAgIHdpZHRoPXsnMnJlbSd9XG4gICAgICAgICAgc3JjPSdodHRwczovL2NkbjQuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9hcnJvd3MtMjQ5LzI0L3NtYWxsX2NoZXZyb25fYXJyb3dfcmlnaHQtNTEyLnBuZycvPiA6IDxBcnJvd19zcGFjZV9maWxsZXIgbXI9eycxLjVyZW0nfS8+XG5cbiAgICAgIH1cbiAgICA8L1RodW1ibmFpbENvbnRhaW5lcj5cbiAgKTogbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRodW1ibmFpbHM7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFJlbGF0ZWRQcm9kdWN0cyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiBgO1xuXG5jb25zdCBJbWFnZV9jb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDE4cmVtO1xuICB3aWR0aDogMTZyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRlaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9O1xuICAkeycnIC8qIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTsgKi99XG4gIHdpZHRoOiBhdXRvO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOjFzIGVhc2U7XG4gIHRyYW5zZm9ybTpzY2FsZSgxKVxuYDtcblxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gICBtYXJnaW46IDFyZW07XG4gICBib3JkZXI6IDAuMjVyZW0gc29saWQgZ3JheTtcbmA7XG5cbmNvbnN0IENhcmRUZXh0ID0gc3R5bGVkLnBgXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy5mb250X3NpemV9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07XG5gO1xuXG5jb25zdCBTdGFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG5gO1xuXG5jb25zdCBTdGFyc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOjAuNXJlbTtcblxuYDtcblxuY29uc3QgU3RhcnMgPSBzdHlsZWQuaW1nYFxuICBtYXJnaW4gOiAke3Byb3BzID0+IHByb3BzLm1hcmdpbn07XG4gIGhlaWdodDogMS4zcmVtO1xuICBwb3NpdGlvbjoke3Byb3BzID0+IHByb3BzLnBvc307XG4gIHotaW5kZXg6JHtwcm9wcyA9PiBwcm9wcy56X2luZGV4fTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG5gO1xuXG4vLyBUaHVtYm5haWxDb250YWluZXJcbmNvbnN0IFRodW1ibmFpbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICBkaXNwbGF5OmZsZXg7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICB3aWR0aDogMTZyZW07XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBib3R0b206IDNyZW07XG5cbmA7XG5cbmNvbnN0IFRodW1ibmFpbF9JbWFnZV9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyBib3R0b206IDAuMjVyZW07XG5gO1xuXG5jb25zdCBBcnJvd19zcGFjZV9maWxsZXIgPSBzdHlsZWQuZGl2YFxuICAgbWFyZ2luLXJpZ2h0OiR7cHJvcHMgPT4gcHJvcHMubXJ9O1xuXG5gO1xuXG5leHBvcnQgIHtSZWxhdGVkUHJvZHVjdHMsIEltYWdlX2NvbnRhaW5lciwgSW1nLCBDYXJkLCBDYXJkVGV4dCwgU3RhcnMsIFN0YXJDb250YWluZXIsIFRodW1ibmFpbENvbnRhaW5lcixUaHVtYm5haWxfSW1hZ2VfQ29udGFpbmVyLEFycm93X3NwYWNlX2ZpbGxlciwgU3RhcnNDb250YWluZXJ9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnLi9Qcm9kdWN0Q2FyZC9Qcm9kdWN0Q2FyZC5qc3gnO1xuaW1wb3J0IE91dEZpdENvbnRhaW5lciBmcm9tICcuL091dGZpdENhcmQvT3V0Rml0Q29udGFpbmVyLmpzeCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmNvbnN0IEgxID0gc3R5bGVkLmgxYFxuICAgbWFyZ2luOiAycmVtIDAgMXJlbSAxcmVtO1xuYDtcbmNvbnN0IFJQQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEyODBweDtcbmA7XG5cbmNvbnN0IFJlbGF0ZWRfSXRlbXNfQ29tcGFyaXNvbiA9ICh7cmVsYXRlZFByb2R1Y3RDbGlja2VkfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSUENvbnRhaW5lciBjbGFzc05hbWU9XCJSZWxhdGVkX1Byb2R1Y3RzXCI+XG4gICAgICA8SDE+UmVsYXRlZCBQcm9kdWN0czwvSDE+XG4gICAgICA8UHJvZHVjdENhcmQgcmVsYXRlZFByb2R1Y3RDbGlja2VkPXtyZWxhdGVkUHJvZHVjdENsaWNrZWR9Lz5cbiAgICAgIDxIMT5Zb3VyIE91dGZpdDwvSDE+XG4gICAgICA8T3V0Rml0Q29udGFpbmVyIC8+XG4gICAgPC9SUENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGF0ZWRfSXRlbXNfQ29tcGFyaXNvbjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=