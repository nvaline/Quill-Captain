(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./client/src/components/Q&A/Accordion/Accordion.js":
/*!**********************************************************!*\
  !*** ./client/src/components/Q&A/Accordion/Accordion.js ***!
  \**********************************************************/
/*! exports provided: QuesSection, S, Ans, Ques, Pd, AnwrSection, Aside, Li, Pipe, Span */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuesSection", function() { return QuesSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ans", function() { return Ans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ques", function() { return Ques; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pd", function() { return Pd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnwrSection", function() { return AnwrSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aside", function() { return Aside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Li", function() { return Li; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pipe", function() { return Pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;


var Span = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    text-decoration: underline;\n    margin: 2%;\n"])));
var Pipe = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    margin-left: 2%;\n    margin-right: 3%;\n"])));
var Li = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n    width: 100%;\n"])));
var AnwrSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: flex;\n    flex-flow: column;\n"])));
var Pd = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5 || (_templateObject5 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: flex;\n    flex: 1;\n    max-width: 30%;\n    margin: 1%;\n"])));
var Ques = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6 || (_templateObject6 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n"])));
var QuesSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(_templateObject7 || (_templateObject7 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: flex;\n    flex-flow: column;\n"])));
var S = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject8 || (_templateObject8 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    font-weight: bold;\n    font-size: 1.5rem;\n    margin-right: 3%;\n    margin-left: 2%;\n"])));
var Aside = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside(_templateObject9 || (_templateObject9 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: flex;\n    align-items: center;\n    width: 22%;\n"])));
var Ans = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject10 || (_templateObject10 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    // height: 250px;\n    // overflow: auto;\n"])));


/***/ }),

/***/ "./client/src/components/Q&A/Accordion/Accordion.jsx":
/*!***********************************************************!*\
  !*** ./client/src/components/Q&A/Accordion/Accordion.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Question_Question_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Question/Question.jsx */ "./client/src/components/Q&A/Question/Question.jsx");
/* harmony import */ var _Accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Accordion.js */ "./client/src/components/Q&A/Accordion/Accordion.js");




var Accordion = function Accordion(_ref) {
  var questions = _ref.questions,
      openAnsModal = _ref.openAnsModal,
      openQuesModal = _ref.openQuesModal;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Accordion_js__WEBPACK_IMPORTED_MODULE_2__["QuesSection"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Question_Question_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    questions: questions,
    openQuesModal: openQuesModal,
    openAnsModal: openAnsModal
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./client/src/components/Q&A/AddAnswer/AddAnswer.jsx":
/*!***********************************************************!*\
  !*** ./client/src/components/Q&A/AddAnswer/AddAnswer.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);





var _templateObject, _templateObject2;



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Input = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].input(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3___default()(["\n  width: 65%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n"])));
var P = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].p(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3___default()(["\n  font-family: monospace;\n  color: #d6c9c9;\n  letter-spacing: 0.3px;\n"])));

var AddAnswer = function AddAnswer(_ref) {
  var quesId = _ref.quesId;

  // console.log(quesId);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      uploadFile = _useState2[0],
      setUploadFile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    answer: '',
    nickname: '',
    email: ''
  }),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      formValues = _useState4[0],
      setFormValues = _useState4[1];

  var handleChange = function handleChange(name) {
    return function (e) {
      e.preventDefault();
      setFormValues(_objectSpread(_objectSpread({}, formValues), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, name, e.target.value)));
    };
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    var postData = /*#__PURE__*/function () {
      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //   try {
                //     let newAns = await axios.post(`/qa/questions/${quesId}/answers`, data);
                //   } catch(err) {
                //     console.error(err);
                //   }
                console.log('data ', data);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function postData(_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    postData(formValues);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Submit your Answer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Input, {
    type: "text",
    value: formValues.answer,
    name: formValues.answer,
    maxLength: "1000",
    placeholder: "Your Answer...",
    onChange: handleChange('answer'),
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Input, {
    type: "text",
    value: formValues.nickname,
    name: formValues.nickname,
    maxLength: "60",
    placeholder: "Example: jack543!",
    onChange: handleChange('nickname'),
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(P, null, "For privacy reasons, do not use your full name or email address\u201D.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Input, {
    type: "email",
    value: formValues.email,
    name: formValues.email,
    maxLength: "60",
    placeholder: "Example: jack@email.com",
    onChange: handleChange('email'),
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(P, null, "For authentication reasons, you will not be emailed\u201D.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Upload a photo."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Input, {
    type: "file" // value={uploadFile}
    ,
    onChange: function onChange(e) {
      return setUploadFile(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
    type: "submit"
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (AddAnswer);

/***/ }),

/***/ "./client/src/components/Q&A/AddQuestion/AddQuestion.jsx":
/*!***************************************************************!*\
  !*** ./client/src/components/Q&A/AddQuestion/AddQuestion.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





var _templateObject, _templateObject2;



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Input = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].input(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3___default()(["\n  width: 65%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n"])));
var P = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].p(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3___default()(["\n  font-family: monospace;\n  color: #d6c9c9;\n  letter-spacing: 0.3px;\n"])));

var AddQuestion = function AddQuestion(_ref) {
  var productId = _ref.productId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    body: '',
    name: '',
    email: '',
    product_id: Number(productId)
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      formValues = _useState2[0],
      setFormValues = _useState2[1];

  var handleChange = function handleChange(name) {
    return function (e) {
      e.preventDefault();
      setFormValues(_objectSpread(_objectSpread({}, formValues), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, name, e.target.value)));
    };
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    var postData = /*#__PURE__*/function () {
      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee(data) {
        var newQues;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('/qa/questions', data);

              case 3:
                newQues = _context.sent;
                console.log(newQues);
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function postData(_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    postData(formValues); // console.log('formValues  ',formValues)
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Ask Your Question"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("textarea", {
    type: "text",
    name: "body",
    value: formValues.question,
    placeholder: "Your Question....",
    onChange: handleChange('body'),
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", null, "YOUR NICKNAME:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Input, {
    type: "text",
    name: "name",
    value: formValues.name,
    onChange: handleChange('name'),
    placeholder: "Example: jackson11!",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(P, null, "For privacy reasons, do not use your full name or email address\u201D will appear.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", null, "EMAIL:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Input, {
    type: "text",
    name: "email",
    value: formValues.email,
    onChange: handleChange('email'),
    placeholder: "Why did you like the product or not?",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(P, null, "For authentication reasons, you will not be emailed\u201D will appear.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
    type: "submit"
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (AddQuestion);

/***/ }),

/***/ "./client/src/components/Q&A/Answer/Answer.jsx":
/*!*****************************************************!*\
  !*** ./client/src/components/Q&A/Answer/Answer.jsx ***!
  \*****************************************************/
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Thumbnails_Thumbnails_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Thumbnails/Thumbnails.jsx */ "./client/src/components/Q&A/Thumbnails/Thumbnails.jsx");
/* harmony import */ var _Accordion_Accordion_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Accordion/Accordion.js */ "./client/src/components/Q&A/Accordion/Accordion.js");









var Answer = function Answer(_ref) {
  var quesId = _ref.quesId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      helped = _useState2[0],
      setHelped = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      report = _useState4[0],
      setReported = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      answers = _useState6[0],
      setAnswers = _useState6[1];

  var getAns = /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(question_id) {
      var ans;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/qa/questions/".concat(question_id, "/answers"));

            case 3:
              ans = _context.sent;
              setAnswers(ans.data.results);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function getAns(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleReported = function handleReported(id) {
    if (!report) {
      reporter(id);
      setReported(true);
    } else {
      console.log('You reported me already.');
    }
  };

  var handleHelpful = function handleHelpful(id) {
    if (!helped) {
      helpful(id);
      setHelped(true);
    } else {
      console.log('you touched me already');
    }
  };

  var helpful = /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(id) {
      var help;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.put("/qa/questions/".concat(id, "/helpful"));

            case 3:
              help = _context2.sent;
              _context2.next = 9;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 6]]);
    }));

    return function helpful(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var reporter = /*#__PURE__*/function () {
    var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(id) {
      var _reporter;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.put("/qa/answers/".concat(id, "/report"));

            case 3:
              _reporter = _context3.sent;
              _context3.next = 9;
              break;

            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](0);
              console.error(_context3.t0);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 6]]);
    }));

    return function reporter(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getAns(quesId);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, answers && answers.slice(0, 2).map(function (ans) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Accordion_Accordion_js__WEBPACK_IMPORTED_MODULE_7__["Ans"], {
      key: ans.answer_id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Accordion_Accordion_js__WEBPACK_IMPORTED_MODULE_7__["S"], null, "A:"), " ", ans.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "by User ".concat(ans.answerer_name, ", ").concat(moment__WEBPACK_IMPORTED_MODULE_5___default()().format('MMM Do YY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Accordion_Accordion_js__WEBPACK_IMPORTED_MODULE_7__["Pipe"], null, "|"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      onClick: function onClick() {
        return handleHelpful(ans.answer_id);
      }
    }, "Helpful? Yes (".concat(ans.helpfulness, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Accordion_Accordion_js__WEBPACK_IMPORTED_MODULE_7__["Pipe"], null, "|"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Accordion_Accordion_js__WEBPACK_IMPORTED_MODULE_7__["Span"], {
      onClick: function onClick() {
        return handleReported(ans.answer_id);
      }
    }, "Report")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Thumbnails_Thumbnails_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      photos: ans.photos,
      alt: "thumbnails"
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Answer);

/***/ }),

/***/ "./client/src/components/Q&A/Modal/Modal.js":
/*!**************************************************!*\
  !*** ./client/src/components/Q&A/Modal/Modal.js ***!
  \**************************************************/
/*! exports provided: Overlay, ModalBox, Close, ProduntName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBox", function() { return ModalBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Close", function() { return Close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduntName", function() { return ProduntName; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4;


var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    width: 80%;\n    height: 100%;\n    background: rgba(0, 0, 0, .7);\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    z-index: 100;\n    margin: auto 0;\n"])));
var ModalBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    position: fixed;\n    z-index: 200;\n    background: #fff;\n    width: 70%;\n    margin: auto 40%;\n    top: 50%;\n    text-align: center;\n    transform: translateX(-50%) translateY(-50%);\n"])));
var Close = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    border-radius: 50%;\n    border: dotted;\n    color: #1ad24b;\n    font-size: 20px;\n    text-shadow: 2 0 4 black;\n    text-shadow: 2px 2px 2px #1f1313;\n"])));
var ProduntName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    color: red;\n"])));


/***/ }),

/***/ "./client/src/components/Q&A/Modal/Modal.jsx":
/*!***************************************************!*\
  !*** ./client/src/components/Q&A/Modal/Modal.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.js */ "./client/src/components/Q&A/Modal/Modal.js");



var Modal = function Modal(_ref) {
  var children = _ref.children,
      closeModal = _ref.closeModal,
      product = _ref.product;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_js__WEBPACK_IMPORTED_MODULE_1__["Overlay"], {
    className: "overlay"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_js__WEBPACK_IMPORTED_MODULE_1__["ModalBox"], {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_js__WEBPACK_IMPORTED_MODULE_1__["ProduntName"], null, "\"".concat(product.name, "\""))), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal_js__WEBPACK_IMPORTED_MODULE_1__["Close"], {
    onClick: closeModal
  }, "X"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./client/src/components/Q&A/Q&A.js":
/*!******************************************!*\
  !*** ./client/src/components/Q&A/Q&A.js ***!
  \******************************************/
/*! exports provided: Button, Buttons, ContainerQA, H3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buttons", function() { return Buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerQA", function() { return ContainerQA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return H3; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4;


var ContainerQA = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: flex;\n    flex-flow: column;\n    ", "\n    width: 1280px;\n    margin: 3% auto;\n    background: whitesmoke;\n\n"])), ''
/* padding: 4%; */
);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    border: 1px solid;\n    padding: 2%;\n    margin: 1%;\n    font-size: 14px;\n    font-weight: bold;\n    background: transparent;\n"])));
var Buttons = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: flex;\n"])));
var H3 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    text-align: center;\n"])));


/***/ }),

/***/ "./client/src/components/Q&A/Q&A.jsx":
/*!*******************************************!*\
  !*** ./client/src/components/Q&A/Q&A.jsx ***!
  \*******************************************/
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
/* harmony import */ var _contexts_ProductContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/ProductContext */ "./client/src/components/contexts/ProductContext.js");
/* harmony import */ var _Search_Search_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Search/Search.jsx */ "./client/src/components/Q&A/Search/Search.jsx");
/* harmony import */ var _QuestionsList_QuestionsList_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./QuestionsList/QuestionsList.jsx */ "./client/src/components/Q&A/QuestionsList/QuestionsList.jsx");
/* harmony import */ var _AddQuestion_AddQuestion_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddQuestion/AddQuestion.jsx */ "./client/src/components/Q&A/AddQuestion/AddQuestion.jsx");
/* harmony import */ var _AddAnswer_AddAnswer_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AddAnswer/AddAnswer.jsx */ "./client/src/components/Q&A/AddAnswer/AddAnswer.jsx");
/* harmony import */ var _Modal_Modal_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Modal/Modal.jsx */ "./client/src/components/Q&A/Modal/Modal.jsx");
/* harmony import */ var _Q_A_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Q&A.js */ "./client/src/components/Q&A/Q&A.js");













var QandA = function QandA() {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(_contexts_ProductContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      product = _React$useContext.product;

  var _product = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(product, 1),
      currProduct = _product[0];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      questions = _useState2[0],
      setQues = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      quesId = _useState4[0],
      setQuesId = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    open: false,
    form: {
      addAns: false
    }
  }),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      isOpen = _useState6[0],
      setIsOpen = _useState6[1];

  var openAnsModal = function openAnsModal() {
    var isOpen = {
      open: true,
      form: {
        addAns: true
      }
    };
    setIsOpen(isOpen);
  };

  var openQuesModal = function openQuesModal() {
    var isOpen = {
      open: true,
      form: {
        addAns: false
      }
    };
    setIsOpen(isOpen);
  };

  var closeModal = function closeModal() {
    setIsOpen(false);
  };

  var fetchQues = /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var ques;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/qa/questions/".concat(currProduct.id, "/", 1, "/", 30));

            case 3:
              ques = _context.sent;
              setQues(ques.data.results);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function fetchQues() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchQues();
  }, [product]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, questions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Q_A_js__WEBPACK_IMPORTED_MODULE_11__["ContainerQA"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Q_A_js__WEBPACK_IMPORTED_MODULE_11__["H3"], null, "Questions & Answers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Search_Search_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    questions: questions,
    setQues: setQues,
    fetchQues: fetchQues
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_QuestionsList_QuestionsList_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    questions: questions,
    openAnsModal: openAnsModal,
    openQuesModal: openQuesModal,
    setQuesId: setQuesId
  }), isOpen.open && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Modal_Modal_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
    closeModal: closeModal,
    product: currProduct
  }, isOpen.form.addAns ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_AddAnswer_AddAnswer_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    quesId: quesId
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_AddQuestion_AddQuestion_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    productId: currProduct.id
  }))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (QandA);

/***/ }),

/***/ "./client/src/components/Q&A/Question/Question.jsx":
/*!*********************************************************!*\
  !*** ./client/src/components/Q&A/Question/Question.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Answer_Answer_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Answer/Answer.jsx */ "./client/src/components/Q&A/Answer/Answer.jsx");
/* harmony import */ var _Q_A__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Q&A */ "./client/src/components/Q&A/Q&A.js");
/* harmony import */ var _Accordion_Accordion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Accordion/Accordion.js */ "./client/src/components/Q&A/Accordion/Accordion.js");






var Question = function Question(_ref) {
  var questions = _ref.questions,
      openAnsModal = _ref.openAnsModal,
      openQuesModal = _ref.openQuesModal;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(4),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      idx = _useState2[0],
      setIdx = _useState2[1];

  var moreQues = function moreQues() {
    setIdx(function (idx) {
      return idx + 2;
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, questions.slice(0, idx).map(function (ques) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Accordion_Accordion_js__WEBPACK_IMPORTED_MODULE_4__["Li"], {
      key: ques.question_id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Accordion_Accordion_js__WEBPACK_IMPORTED_MODULE_4__["Ques"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Accordion_Accordion_js__WEBPACK_IMPORTED_MODULE_4__["Pd"], null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Accordion_Accordion_js__WEBPACK_IMPORTED_MODULE_4__["S"], null, "Q:"), ques.question_body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Accordion_Accordion_js__WEBPACK_IMPORTED_MODULE_4__["Aside"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Helpful?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Accordion_Accordion_js__WEBPACK_IMPORTED_MODULE_4__["Span"], null, "Yes (".concat(ques.question_helpfulness, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Accordion_Accordion_js__WEBPACK_IMPORTED_MODULE_4__["Pipe"], null, "|"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      onClick: openAnsModal
    }, "Add Answer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: function onClick() {
        openAnsModal();
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Answer_Answer_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      quesId: ques.question_id
    }));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "LOAD MORE ANSWERERS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Q_A__WEBPACK_IMPORTED_MODULE_3__["Buttons"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Q_A__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: function onClick() {
      return moreQues();
    }
  }, "MORE ANSWERED QUESTIONS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Q_A__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: openQuesModal
  }, "ADD A QUESTION  +"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ }),

/***/ "./client/src/components/Q&A/QuestionsList/QuestionsList.jsx":
/*!*******************************************************************!*\
  !*** ./client/src/components/Q&A/QuestionsList/QuestionsList.jsx ***!
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
/* harmony import */ var _Accordion_Accordion_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Accordion/Accordion.jsx */ "./client/src/components/Q&A/Accordion/Accordion.jsx");


var _templateObject;




var Main = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].main(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    font-family: Fira Sans;\n    display: flex;\n    flex-flow: column;\n"])));

var QuestionsList = function QuestionsList(_ref) {
  var questions = _ref.questions,
      openAnsModal = _ref.openAnsModal,
      openQuesModal = _ref.openQuesModal,
      setQuesId = _ref.setQuesId;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Main, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Accordion_Accordion_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    questions: questions,
    openQuesModal: openQuesModal,
    openAnsModal: openAnsModal,
    setQuesId: setQuesId
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (QuestionsList);

/***/ }),

/***/ "./client/src/components/Q&A/Search/Search.js":
/*!****************************************************!*\
  !*** ./client/src/components/Q&A/Search/Search.js ***!
  \****************************************************/
/*! exports provided: Input, Form, SearchBtn, Image, Search_Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBtn", function() { return SearchBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search_Container", function() { return Search_Container; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;


var Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    border: none;\n    height: 50px;\n    font-size: 20px;\n    width: 90%;\n    margin: 8px 0;\n    outline: none;\n    padding: 8px;\n    box-sizing: border-box;\n    transition: 0.3s;\n    padding-left: 50px;\n    cursor: pointer;\n\n    &:focus {\n    border-color: dodgerBlue;\n    box-shadow: 0 0 8px 0 dodgerBlue;\n    }\n\n    :focus + .left-icon{\n    svg{\n        fill: dodgerBlue;\n    }\n    }\n"])));
var Form = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  border: 1px solid;\n"])));
var SearchBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\nwidth: 12%;\nbackground: transparent;\nborder: none;\nmargin: 0% -2% 0% 1%;\n"])));
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\nwidth: 37%;\n"])));
var Search_Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5 || (_templateObject5 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin: 2rem;\n"])));


/***/ }),

/***/ "./client/src/components/Q&A/Search/Search.jsx":
/*!*****************************************************!*\
  !*** ./client/src/components/Q&A/Search/Search.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search.js */ "./client/src/components/Q&A/Search/Search.js");



var searchIcon = 'https://cdn.onlinewebfonts.com/svg/img_168154.png';

var Search = function Search(_ref) {
  var questions = _ref.questions,
      setQues = _ref.setQues,
      fetchQues = _ref.fetchQues;

  // console.log(questions);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      searchInput = _useState2[0],
      setSearch = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (searchInput.length >= 3) {
      var list = questions.filter(function (ques) {
        return ques.question_body.toLowerCase().includes(searchInput.toLowerCase());
      });
      setQues(list);
    } else if (searchInput.length < 3) {
      // setQues(questions);
      fetchQues();
    }
  }, [searchInput]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Search_js__WEBPACK_IMPORTED_MODULE_2__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Search_js__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "HAVE A QUESTION? SEARCH FOR ANSWERS...",
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    type: "text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Search_js__WEBPACK_IMPORTED_MODULE_2__["SearchBtn"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Search_js__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: searchIcon,
    alt: "search"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./client/src/components/Q&A/Thumbnails/Thumbnails.js":
/*!************************************************************!*\
  !*** ./client/src/components/Q&A/Thumbnails/Thumbnails.js ***!
  \************************************************************/
/*! exports provided: ImgDiv, ImgSection, Img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgDiv", function() { return ImgDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgSection", function() { return ImgSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2, _templateObject3;


var ImgSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: flex;\n    width: 20%;\n"])));
var ImgDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    flex: 1;\n    margin: 1%;\n    display: flex;\n"])));
var Img = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    margin: 3%;\n    width: 100%\n"])));


/***/ }),

/***/ "./client/src/components/Q&A/Thumbnails/Thumbnails.jsx":
/*!*************************************************************!*\
  !*** ./client/src/components/Q&A/Thumbnails/Thumbnails.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Thumbnails_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Thumbnails.js */ "./client/src/components/Q&A/Thumbnails/Thumbnails.js");


var stock = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1JQ3OQNW5aWpNsb26trekQVLmwkZz7ZiHA&usqp=CAU', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', 'https://www.fedex.com/content/dam/fedex/us-united-states/FedEx-Office/images/2021/q4/Custom-Promotional-Products-727x463.jpg'];

var Thumbnails = function Thumbnails(_ref) {
  var _ref$photos = _ref.photos,
      photos = _ref$photos === void 0 ? stock : _ref$photos;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Yes, as you can see in these photos."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Thumbnails_js__WEBPACK_IMPORTED_MODULE_1__["ImgSection"], null, photos.map(function (photo, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Thumbnails_js__WEBPACK_IMPORTED_MODULE_1__["ImgDiv"], {
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Thumbnails_js__WEBPACK_IMPORTED_MODULE_1__["Img"], {
      src: photo.url,
      alt: "photo"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Thumbnails_js__WEBPACK_IMPORTED_MODULE_1__["Img"], {
      src: stock[id],
      alt: "photo"
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Thumbnails);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUSZBL0FjY29yZGlvbi9BY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1EmQS9BY2NvcmRpb24vQWNjb3JkaW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUSZBL0FkZEFuc3dlci9BZGRBbnN3ZXIuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9RJkEvQWRkUXVlc3Rpb24vQWRkUXVlc3Rpb24uanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9RJkEvQW5zd2VyL0Fuc3dlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1EmQS9Nb2RhbC9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUSZBL01vZGFsL01vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUSZBL1EmQS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUSZBL1EmQS5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1EmQS9RdWVzdGlvbi9RdWVzdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1EmQS9RdWVzdGlvbnNMaXN0L1F1ZXN0aW9uc0xpc3QuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9RJkEvU2VhcmNoL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUSZBL1NlYXJjaC9TZWFyY2guanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9RJkEvVGh1bWJuYWlscy9UaHVtYm5haWxzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9RJkEvVGh1bWJuYWlscy9UaHVtYm5haWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiXSwibmFtZXMiOlsiU3BhbiIsInN0eWxlZCIsInNwYW4iLCJQaXBlIiwiTGkiLCJsaSIsIkFud3JTZWN0aW9uIiwic2VjdGlvbiIsIlBkIiwiZGl2IiwiUXVlcyIsIlF1ZXNTZWN0aW9uIiwidWwiLCJTIiwiQXNpZGUiLCJhc2lkZSIsIkFucyIsIkFjY29yZGlvbiIsInF1ZXN0aW9ucyIsIm9wZW5BbnNNb2RhbCIsIm9wZW5RdWVzTW9kYWwiLCJJbnB1dCIsImlucHV0IiwiUCIsInAiLCJBZGRBbnN3ZXIiLCJxdWVzSWQiLCJ1c2VTdGF0ZSIsInVwbG9hZEZpbGUiLCJzZXRVcGxvYWRGaWxlIiwiYW5zd2VyIiwibmlja25hbWUiLCJlbWFpbCIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicG9zdERhdGEiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIkFkZFF1ZXN0aW9uIiwicHJvZHVjdElkIiwiYm9keSIsInByb2R1Y3RfaWQiLCJOdW1iZXIiLCJheGlvcyIsInBvc3QiLCJuZXdRdWVzIiwiZXJyb3IiLCJxdWVzdGlvbiIsIkFuc3dlciIsImhlbHBlZCIsInNldEhlbHBlZCIsInJlcG9ydCIsInNldFJlcG9ydGVkIiwiYW5zd2VycyIsInNldEFuc3dlcnMiLCJnZXRBbnMiLCJxdWVzdGlvbl9pZCIsImdldCIsImFucyIsInJlc3VsdHMiLCJoYW5kbGVSZXBvcnRlZCIsImlkIiwicmVwb3J0ZXIiLCJoYW5kbGVIZWxwZnVsIiwiaGVscGZ1bCIsInB1dCIsImhlbHAiLCJ1c2VFZmZlY3QiLCJzbGljZSIsIm1hcCIsImFuc3dlcl9pZCIsImFuc3dlcmVyX25hbWUiLCJtb21lbnQiLCJmb3JtYXQiLCJoZWxwZnVsbmVzcyIsInBob3RvcyIsIk92ZXJsYXkiLCJNb2RhbEJveCIsIm1haW4iLCJDbG9zZSIsImJ1dHRvbiIsIlByb2R1bnROYW1lIiwiaDIiLCJNb2RhbCIsImNoaWxkcmVuIiwiY2xvc2VNb2RhbCIsInByb2R1Y3QiLCJDb250YWluZXJRQSIsIkJ1dHRvbiIsIkJ1dHRvbnMiLCJIMyIsImgzIiwiUWFuZEEiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJQcm9kdWN0Q29udGV4dCIsImN1cnJQcm9kdWN0Iiwic2V0UXVlcyIsInNldFF1ZXNJZCIsIm9wZW4iLCJmb3JtIiwiYWRkQW5zIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiZmV0Y2hRdWVzIiwicXVlcyIsIlF1ZXN0aW9uIiwiaWR4Iiwic2V0SWR4IiwibW9yZVF1ZXMiLCJxdWVzdGlvbl9ib2R5IiwicXVlc3Rpb25faGVscGZ1bG5lc3MiLCJNYWluIiwiUXVlc3Rpb25zTGlzdCIsIkZvcm0iLCJTZWFyY2hCdG4iLCJJbWFnZSIsImltZyIsIlNlYXJjaF9Db250YWluZXIiLCJzZWFyY2hJY29uIiwiU2VhcmNoIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2giLCJsZW5ndGgiLCJsaXN0IiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIkltZ1NlY3Rpb24iLCJJbWdEaXYiLCJJbWciLCJzdG9jayIsIlRodW1ibmFpbHMiLCJwaG90byIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWLHNMQUFWO0FBS0EsSUFBTUMsSUFBSSxHQUFHRix5REFBTSxDQUFDQyxJQUFWLG1MQUFWO0FBS0EsSUFBTUUsRUFBRSxHQUFHSCx5REFBTSxDQUFDSSxFQUFWLHlPQUFSO0FBT0EsSUFBTUMsV0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkUiLCJmaWxlIjoiMy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU3BhbiA9IHN0eWxlZC5zcGFuYFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIG1hcmdpbjogMiU7XG5gO1xuXG5jb25zdCBQaXBlID0gc3R5bGVkLnNwYW5gXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG5gO1xuXG5jb25zdCBMaSA9IHN0eWxlZC5saWBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEFud3JTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbmA7XG5cbmNvbnN0IFBkID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgbWFyZ2luOiAxJTtcbmA7XG5cbmNvbnN0IFF1ZXMgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5jb25zdCBRdWVzU2VjdGlvbiA9IHN0eWxlZC51bGBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuYDtcblxuY29uc3QgUyA9IHN0eWxlZC5zcGFuYFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuYDtcblxuY29uc3QgQXNpZGUgPSBzdHlsZWQuYXNpZGVgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAyMiU7XG5gO1xuXG5jb25zdCBBbnMgPSAgc3R5bGVkLmRpdmBcbiAgICAvLyBoZWlnaHQ6IDI1MHB4O1xuICAgIC8vIG92ZXJmbG93OiBhdXRvO1xuYDtcblxuZXhwb3J0IHsgUXVlc1NlY3Rpb24sIFMsIEFucywgUXVlcywgUGQsIEFud3JTZWN0aW9uLCBBc2lkZSwgTGksIFBpcGUsIFNwYW4gfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi4vUXVlc3Rpb24vUXVlc3Rpb24uanN4JztcbmltcG9ydCAge1F1ZXNTZWN0aW9ufSBmcm9tICcuL0FjY29yZGlvbi5qcyc7XG5cbmNvbnN0IEFjY29yZGlvbiA9ICh7IHF1ZXN0aW9ucywgb3BlbkFuc01vZGFsLCAgb3BlblF1ZXNNb2RhbCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFF1ZXNTZWN0aW9uPlxuICAgICAgPFF1ZXN0aW9uXG4gICAgICAgIHF1ZXN0aW9ucz17cXVlc3Rpb25zfVxuICAgICAgICBvcGVuUXVlc01vZGFsPXtvcGVuUXVlc01vZGFsfVxuICAgICAgICBvcGVuQW5zTW9kYWw9e29wZW5BbnNNb2RhbH1cbiAgICAgIC8+XG4gICAgPC9RdWVzU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgd2lkdGg6IDY1JTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuYDtcblxuY29uc3QgUCA9IHN0eWxlZC5wYFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBjb2xvcjogI2Q2YzljOTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuYDtcblxuY29uc3QgQWRkQW5zd2VyID0gKHsgcXVlc0lkIH0pID0+IHtcblxuICAvLyBjb25zb2xlLmxvZyhxdWVzSWQpO1xuXG4gIGNvbnN0IFt1cGxvYWRGaWxlLCBzZXRVcGxvYWRGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IFtmb3JtVmFsdWVzLCBzZXRGb3JtVmFsdWVzXSA9IHVzZVN0YXRlKHtcbiAgICBhbnN3ZXI6ICcnLFxuICAgIG5pY2tuYW1lOiAnJyxcbiAgICBlbWFpbDogJydcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0Rm9ybVZhbHVlcyh7Li4uZm9ybVZhbHVlcywgW25hbWVdOiBlLnRhcmdldC52YWx1ZX0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHBvc3REYXRhID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICAvLyAgIHRyeSB7XG4gICAgLy8gICAgIGxldCBuZXdBbnMgPSBhd2FpdCBheGlvcy5wb3N0KGAvcWEvcXVlc3Rpb25zLyR7cXVlc0lkfS9hbnN3ZXJzYCwgZGF0YSk7XG4gICAgLy8gICB9IGNhdGNoKGVycikge1xuICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgLy8gICB9XG4gICAgICBjb25zb2xlLmxvZygnZGF0YSAnLGRhdGEpO1xuICAgIH07XG5cblxuICAgIHBvc3REYXRhKGZvcm1WYWx1ZXMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5TdWJtaXQgeW91ciBBbnN3ZXI8L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy5hbnN3ZXJ9XG4gICAgICAgICAgICBuYW1lPXtmb3JtVmFsdWVzLmFuc3dlcn1cbiAgICAgICAgICAgIG1heExlbmd0aD0nMTAwMCdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdZb3VyIEFuc3dlci4uLidcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2Fuc3dlcicpfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMubmlja25hbWV9XG4gICAgICAgICAgICBuYW1lPXtmb3JtVmFsdWVzLm5pY2tuYW1lfVxuICAgICAgICAgICAgbWF4TGVuZ3RoPSc2MCdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFeGFtcGxlOiBqYWNrNTQzISdcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ25pY2tuYW1lJyl9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFA+Rm9yIHByaXZhY3kgcmVhc29ucywgZG8gbm90IHVzZSB5b3VyIGZ1bGwgbmFtZSBvciBlbWFpbCBhZGRyZXNz4oCdLjwvUD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMuZW1haWx9XG4gICAgICAgICAgICBuYW1lPXtmb3JtVmFsdWVzLmVtYWlsfVxuICAgICAgICAgICAgbWF4TGVuZ3RoPSc2MCdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFeGFtcGxlOiBqYWNrQGVtYWlsLmNvbSdcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFA+Rm9yIGF1dGhlbnRpY2F0aW9uIHJlYXNvbnMsIHlvdSB3aWxsIG5vdCBiZSBlbWFpbGVk4oCdLjwvUD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD5VcGxvYWQgYSBwaG90by48L3A+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB0eXBlPSdmaWxlJ1xuICAgICAgICAgICAgLy8gdmFsdWU9e3VwbG9hZEZpbGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRVcGxvYWRGaWxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEFuc3dlcjtcbiIsIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgd2lkdGg6IDY1JTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuYDtcblxuY29uc3QgUCA9IHN0eWxlZC5wYFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBjb2xvcjogI2Q2YzljOTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuYDtcblxuY29uc3QgQWRkUXVlc3Rpb24gPSAoe3Byb2R1Y3RJZH0pID0+IHtcbiAgY29uc3QgW2Zvcm1WYWx1ZXMsIHNldEZvcm1WYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgIGJvZHk6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwcm9kdWN0X2lkOiBOdW1iZXIocHJvZHVjdElkKVxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRGb3JtVmFsdWVzKHsuLi5mb3JtVmFsdWVzLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcG9zdERhdGEgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IG5ld1F1ZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvcWEvcXVlc3Rpb25zJywgZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1F1ZXMpXG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHBvc3REYXRhKGZvcm1WYWx1ZXMpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdmb3JtVmFsdWVzICAnLGZvcm1WYWx1ZXMpXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkFzayBZb3VyIFF1ZXN0aW9uPC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIG5hbWU9J2JvZHknXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy5xdWVzdGlvbn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdZb3VyIFF1ZXN0aW9uLi4uLidcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgaGFuZGxlQ2hhbmdlKCdib2R5Jyl9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsPllPVVIgTklDS05BTUU6PC9sYWJlbD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICBuYW1lPSduYW1lJ1xuICAgICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMubmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgaGFuZGxlQ2hhbmdlKCduYW1lJyl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRXhhbXBsZTogamFja3NvbjExISdcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UD5Gb3IgcHJpdmFjeSByZWFzb25zLCBkbyBub3QgdXNlIHlvdXIgZnVsbCBuYW1lIG9yIGVtYWlsIGFkZHJlc3PigJ0gd2lsbCBhcHBlYXIuPC9QPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5FTUFJTDo8L2xhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMuZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17IGhhbmRsZUNoYW5nZSgnZW1haWwnKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdXaHkgZGlkIHlvdSBsaWtlIHRoZSBwcm9kdWN0IG9yIG5vdD8nXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFA+Rm9yIGF1dGhlbnRpY2F0aW9uIHJlYXNvbnMsIHlvdSB3aWxsIG5vdCBiZSBlbWFpbGVk4oCdIHdpbGwgYXBwZWFyLjwvUD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRRdWVzdGlvbjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBUaHVtYm5haWxzIGZyb20gJy4uL1RodW1ibmFpbHMvVGh1bWJuYWlscy5qc3gnO1xuXG5pbXBvcnQgIHsgUGlwZSwgU3BhbiwgUywgQW5zIH0gZnJvbSAnLi4vQWNjb3JkaW9uL0FjY29yZGlvbi5qcyc7XG5cbmNvbnN0IEFuc3dlciA9ICh7IHF1ZXNJZCB9KSA9PiB7XG4gIGNvbnN0IFtoZWxwZWQsIHNldEhlbHBlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXBvcnQsIHNldFJlcG9ydGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Fuc3dlcnMsIHNldEFuc3dlcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGdldEFucyA9IGFzeW5jIChxdWVzdGlvbl9pZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgYW5zID0gYXdhaXQgYXhpb3MuZ2V0KGAvcWEvcXVlc3Rpb25zLyR7cXVlc3Rpb25faWR9L2Fuc3dlcnNgKTtcbiAgICAgIHNldEFuc3dlcnMoYW5zLmRhdGEucmVzdWx0cyk7XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVwb3J0ZWQgPSAoaWQpID0+IHtcbiAgICBpZiAoIXJlcG9ydCkge1xuICAgICAgcmVwb3J0ZXIoaWQpO1xuICAgICAgc2V0UmVwb3J0ZWQodHJ1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ1lvdSByZXBvcnRlZCBtZSBhbHJlYWR5LicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVIZWxwZnVsID0gKGlkKSA9PiB7XG4gICAgaWYgKCFoZWxwZWQpIHtcbiAgICAgIGhlbHBmdWwoaWQpO1xuICAgICAgc2V0SGVscGVkKHRydWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCd5b3UgdG91Y2hlZCBtZSBhbHJlYWR5Jyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhlbHBmdWwgPSBhc3luYyAoaWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IGhlbHAgPSBhd2FpdCBheGlvcy5wdXQoYC9xYS9xdWVzdGlvbnMvJHtpZH0vaGVscGZ1bGApO1xuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlcG9ydGVyID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXBvcnRlciA9IGF3YWl0IGF4aW9zLnB1dChgL3FhL2Fuc3dlcnMvJHtpZH0vcmVwb3J0YCk7XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgZ2V0QW5zKHF1ZXNJZCk7XG4gIH0sIFtdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHthbnN3ZXJzICYmIGFuc3dlcnMuc2xpY2UoMCwgMikubWFwKGFucyA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEFucyBrZXk9e2Fucy5hbnN3ZXJfaWR9PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxTPkE6PC9TPiB7YW5zLmJvZHl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge2BieSBVc2VyICR7YW5zLmFuc3dlcmVyX25hbWV9LCAke21vbWVudCgpLmZvcm1hdCgnTU1NIERvIFlZJyl9YH1cbiAgICAgICAgICAgICAgPFBpcGU+fDwvUGlwZT5cbiAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlSGVscGZ1bChhbnMuYW5zd2VyX2lkKX0+e2BIZWxwZnVsPyBZZXMgKCR7YW5zLmhlbHBmdWxuZXNzfSlgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPFBpcGU+fDwvUGlwZT5cbiAgICAgICAgICAgICAgPFNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlUmVwb3J0ZWQoYW5zLmFuc3dlcl9pZCl9PlJlcG9ydDwvU3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxUaHVtYm5haWxzIHBob3Rvcz17YW5zLnBob3Rvc30gYWx0PVwidGh1bWJuYWlsc1wiLz5cbiAgICAgICAgICA8L0Fucz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5zd2VyO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjcpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBtYXJnaW46IGF1dG8gMDtcbmA7XG5cbmNvbnN0IE1vZGFsQm94ID0gc3R5bGVkLm1haW5gXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDIwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiBhdXRvIDQwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG5gO1xuXG5jb25zdCBDbG9zZSA9IHN0eWxlZC5idXR0b25gXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogZG90dGVkO1xuICAgIGNvbG9yOiAjMWFkMjRiO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LXNoYWRvdzogMiAwIDQgYmxhY2s7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMxZjEzMTM7XG5gO1xuXG5jb25zdCBQcm9kdW50TmFtZSA9IHN0eWxlZC5oMmBcbiAgICBjb2xvcjogcmVkO1xuYDtcblxuZXhwb3J0IHsgT3ZlcmxheSwgTW9kYWxCb3gsIENsb3NlLCBQcm9kdW50TmFtZSB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE92ZXJsYXksIE1vZGFsQm94LCBDbG9zZSwgUHJvZHVudE5hbWUgfSBmcm9tICcuL01vZGFsLmpzJztcblxuY29uc3QgTW9kYWwgPSAoeyBjaGlsZHJlbiwgY2xvc2VNb2RhbCwgcHJvZHVjdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxPdmVybGF5IGNsYXNzTmFtZT0nb3ZlcmxheSc+PC9PdmVybGF5PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsJz5cblxuICAgICAgICA8TW9kYWxCb3ggY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPFByb2R1bnROYW1lPntgXCIke3Byb2R1Y3QubmFtZX1cImB9PC9Qcm9kdW50TmFtZT5cbiAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPENsb3NlIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9Plg8L0Nsb3NlPlxuICAgICAgICA8L01vZGFsQm94PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBDb250YWluZXJRQSA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAkeycnIC8qIHBhZGRpbmc6IDQlOyAqL31cbiAgICB3aWR0aDogMTI4MHB4O1xuICAgIG1hcmdpbjogMyUgYXV0bztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuXG5gO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIG1hcmdpbjogMSU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuYDtcblxuY29uc3QgQnV0dG9ucyA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEgzID0gc3R5bGVkLmgzYFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCB7IEJ1dHRvbiwgQnV0dG9ucywgQ29udGFpbmVyUUEsIEgzIH07IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlICx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFByb2R1Y3RDb250ZXh0IGZyb20gJy4uL2NvbnRleHRzL1Byb2R1Y3RDb250ZXh0JztcblxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaC9TZWFyY2guanN4JztcbmltcG9ydCBRdWVzdGlvbnNMaXN0IGZyb20gJy4vUXVlc3Rpb25zTGlzdC9RdWVzdGlvbnNMaXN0LmpzeCc7XG5pbXBvcnQgQWRkUXVlc3Rpb24gZnJvbSAnLi9BZGRRdWVzdGlvbi9BZGRRdWVzdGlvbi5qc3gnO1xuaW1wb3J0IEFkZEFuc3dlciBmcm9tICcuL0FkZEFuc3dlci9BZGRBbnN3ZXIuanN4JztcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsL01vZGFsLmpzeCc7XG5cbmltcG9ydCB7IENvbnRhaW5lclFBLCBIMyB9IGZyb20gJy4vUSZBLmpzJztcblxuY29uc3QgUWFuZEEgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcHJvZHVjdCB9ID0gUmVhY3QudXNlQ29udGV4dChQcm9kdWN0Q29udGV4dCk7XG4gIGNvbnN0IFtjdXJyUHJvZHVjdF0gPSBwcm9kdWN0O1xuICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3F1ZXNJZCwgc2V0UXVlc0lkXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZSh7b3BlbjogZmFsc2UsIGZvcm06IHtcbiAgICBhZGRBbnM6IGZhbHNlLFxuICB9IH0pO1xuXG4gIGNvbnN0IG9wZW5BbnNNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBpc09wZW4gPSB7b3BlbjogdHJ1ZSwgZm9ybToge1xuICAgICAgYWRkQW5zOiB0cnVlLFxuICAgIH19O1xuICAgIHNldElzT3Blbihpc09wZW4pO1xuICB9O1xuXG4gIGNvbnN0IG9wZW5RdWVzTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgaXNPcGVuID0ge29wZW46IHRydWUsIGZvcm06IHtcbiAgICAgIGFkZEFuczogZmFsc2UsXG4gICAgfX07XG4gICAgc2V0SXNPcGVuKGlzT3Blbik7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGZldGNoUXVlcyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcXVlcyA9IGF3YWl0IGF4aW9zLmdldChgL3FhL3F1ZXN0aW9ucy8ke2N1cnJQcm9kdWN0LmlkfS8kezF9LyR7MzB9YCk7XG4gICAgICBzZXRRdWVzKHF1ZXMuZGF0YS5yZXN1bHRzKTtcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoUXVlcygpO1xuICB9LCBbcHJvZHVjdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsgcXVlc3Rpb25zID9cbiAgICAgICAgPENvbnRhaW5lclFBPlxuICAgICAgICAgIDxIMz5RdWVzdGlvbnMgJiBBbnN3ZXJzPC9IMz5cbiAgICAgICAgICA8U2VhcmNoXG4gICAgICAgICAgICBxdWVzdGlvbnM9e3F1ZXN0aW9uc31cbiAgICAgICAgICAgIHNldFF1ZXM9e3NldFF1ZXN9XG4gICAgICAgICAgICBmZXRjaFF1ZXM9e2ZldGNoUXVlc31cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPFF1ZXN0aW9uc0xpc3RcbiAgICAgICAgICAgIHF1ZXN0aW9ucz17cXVlc3Rpb25zfVxuICAgICAgICAgICAgb3BlbkFuc01vZGFsPXtvcGVuQW5zTW9kYWx9XG4gICAgICAgICAgICBvcGVuUXVlc01vZGFsPXtvcGVuUXVlc01vZGFsfVxuICAgICAgICAgICAgc2V0UXVlc0lkPXtzZXRRdWVzSWR9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIHtpc09wZW4ub3BlbiAmJlxuICAgICAgICAgICAgPE1vZGFsIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9IHByb2R1Y3Q9e2N1cnJQcm9kdWN0fT5cbiAgICAgICAgICAgICAge2lzT3Blbi5mb3JtLmFkZEFucyA/ICA8QWRkQW5zd2VyIHF1ZXNJZD17cXVlc0lkfSAgLz4gOiAgPEFkZFF1ZXN0aW9uIHByb2R1Y3RJZD17Y3VyclByb2R1Y3QuaWR9IC8+fVxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICB9XG4gICAgICAgIDwvQ29udGFpbmVyUUE+XG4gICAgICAgIDpcbiAgICAgICAgbnVsbFxuICAgICAgfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUWFuZEE7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW5zd2VyIGZyb20gJy4uL0Fuc3dlci9BbnN3ZXIuanN4JztcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9ucyB9IGZyb20gJy4uL1EmQSc7XG5cbmltcG9ydCAge1xuICBQZCxcbiAgUyxcbiAgTGksXG4gIFBpcGUsXG4gIFNwYW4sXG4gIFF1ZXMsXG4gIEFzaWRlXG59IGZyb20gJy4uL0FjY29yZGlvbi9BY2NvcmRpb24uanMnO1xuXG5jb25zdCBRdWVzdGlvbiA9ICh7IHF1ZXN0aW9ucywgb3BlbkFuc01vZGFsLCBvcGVuUXVlc01vZGFsfSkgPT4ge1xuICBjb25zdCBbaWR4LCBzZXRJZHhdID0gdXNlU3RhdGUoNCk7XG5cbiAgY29uc3QgbW9yZVF1ZXMgPSAoKSA9PiB7XG4gICAgc2V0SWR4KGlkeCA9PiBpZHgrMik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3F1ZXN0aW9ucy5zbGljZSgwLCBpZHgpLm1hcChxdWVzID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGkga2V5PXtxdWVzLnF1ZXN0aW9uX2lkfT5cbiAgICAgICAgICAgIDxRdWVzPlxuICAgICAgICAgICAgICA8UGQ+IDxTPlE6PC9TPntxdWVzLnF1ZXN0aW9uX2JvZHl9PC9QZD5cbiAgICAgICAgICAgICAgPEFzaWRlPlxuICAgICAgICAgICAgICAgIDxzcGFuID5IZWxwZnVsPzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8U3Bhbj57YFllcyAoJHtxdWVzLnF1ZXN0aW9uX2hlbHBmdWxuZXNzIH0pYH08L1NwYW4+XG4gICAgICAgICAgICAgICAgPFBpcGU+fDwvUGlwZT5cbiAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXtvcGVuQW5zTW9kYWx9PkFkZCBBbnN3ZXI8L3A+XG4gICAgICAgICAgICAgIDwvQXNpZGU+XG4gICAgICAgICAgICA8L1F1ZXM+XG5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIG9wZW5BbnNNb2RhbCgpO1xuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8QW5zd2VyIHF1ZXNJZD17cXVlcy5xdWVzdGlvbl9pZH0vPlxuICAgICAgICAgIDwvTGk+XG4gICAgICAgICk7XG4gICAgICB9KX1cblxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+TE9BRCBNT1JFIEFOU1dFUkVSUzwvcD5cbiAgICAgICAgPEJ1dHRvbnM+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBtb3JlUXVlcygpfT5NT1JFIEFOU1dFUkVEIFFVRVNUSU9OUzwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b3BlblF1ZXNNb2RhbH0+QUREIEEgUVVFU1RJT04gICs8L0J1dHRvbj5cbiAgICAgICAgPC9CdXR0b25zPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi4vQWNjb3JkaW9uL0FjY29yZGlvbi5qc3gnO1xuXG5jb25zdCBNYWluID0gc3R5bGVkLm1haW5gXG4gICAgZm9udC1mYW1pbHk6IEZpcmEgU2FucztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuYDtcblxuY29uc3QgUXVlc3Rpb25zTGlzdCA9ICh7cXVlc3Rpb25zLCBvcGVuQW5zTW9kYWwsIG9wZW5RdWVzTW9kYWwsIHNldFF1ZXNJZCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1haW4+XG4gICAgICA8QWNjb3JkaW9uXG4gICAgICAgIHF1ZXN0aW9ucz17cXVlc3Rpb25zfVxuICAgICAgICBvcGVuUXVlc01vZGFsPXtvcGVuUXVlc01vZGFsfVxuICAgICAgICBvcGVuQW5zTW9kYWw9e29wZW5BbnNNb2RhbH1cbiAgICAgICAgc2V0UXVlc0lkPXtzZXRRdWVzSWR9XG4gICAgICAvPlxuICAgIDwvTWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uc0xpc3Q7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogZG9kZ2VyQmx1ZTtcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgZG9kZ2VyQmx1ZTtcbiAgICB9XG5cbiAgICA6Zm9jdXMgKyAubGVmdC1pY29ue1xuICAgIHN2Z3tcbiAgICAgICAgZmlsbDogZG9kZ2VyQmx1ZTtcbiAgICB9XG4gICAgfVxuYDtcblxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbmA7XG5cbmNvbnN0IFNlYXJjaEJ0biA9IHN0eWxlZC5idXR0b25gXG53aWR0aDogMTIlO1xuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5ib3JkZXI6IG5vbmU7XG5tYXJnaW46IDAlIC0yJSAwJSAxJTtcbmA7XG5cbmNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcbndpZHRoOiAzNyU7XG5gO1xuXG5jb25zdCBTZWFyY2hfQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAycmVtO1xuYDtcblxuZXhwb3J0IHsgSW5wdXQsIEZvcm0sIFNlYXJjaEJ0biwgSW1hZ2UsIFNlYXJjaF9Db250YWluZXIgIH07IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCwgRm9ybSwgU2VhcmNoQnRuLCBJbWFnZSB9IGZyb20gJy4vU2VhcmNoLmpzJztcbmNvbnN0IHNlYXJjaEljb24gPSAnaHR0cHM6Ly9jZG4ub25saW5ld2ViZm9udHMuY29tL3N2Zy9pbWdfMTY4MTU0LnBuZyc7XG5cblxuY29uc3QgU2VhcmNoID0gKHsgcXVlc3Rpb25zLCBzZXRRdWVzLCBmZXRjaFF1ZXMgfSkgPT4ge1xuXG4gIC8vIGNvbnNvbGUubG9nKHF1ZXN0aW9ucyk7XG5cbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBpZiAoc2VhcmNoSW5wdXQubGVuZ3RoID49IDMpIHtcblxuICAgICAgbGV0IGxpc3QgPSBxdWVzdGlvbnMuZmlsdGVyKHF1ZXMgPT5cbiAgICAgICAgcXVlcy5xdWVzdGlvbl9ib2R5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoSW5wdXQudG9Mb3dlckNhc2UoKSlcbiAgICAgICk7XG5cbiAgICAgIHNldFF1ZXMobGlzdCk7XG4gICAgfVxuICAgIGVsc2UgaWYoc2VhcmNoSW5wdXQubGVuZ3RoIDwgMykge1xuICAgICAgLy8gc2V0UXVlcyhxdWVzdGlvbnMpO1xuICAgICAgZmV0Y2hRdWVzKCk7XG4gICAgfVxuXG4gIH0sIFtzZWFyY2hJbnB1dF0pO1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxGb3JtPlxuICAgICAgPElucHV0XG4gICAgICAgIHBsYWNlaG9sZGVyPSdIQVZFIEEgUVVFU1RJT04/IFNFQVJDSCBGT1IgQU5TV0VSUy4uLidcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgIC8+XG4gICAgICA8U2VhcmNoQnRuPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtzZWFyY2hJY29ufSBhbHQ9XCJzZWFyY2hcIi8+XG4gICAgICA8L1NlYXJjaEJ0bj5cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgSW1nU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDIwJTtcbmA7XG5cbmNvbnN0IEltZ0RpdiA9IHN0eWxlZC5kaXZgXG4gICAgZmxleDogMTtcbiAgICBtYXJnaW46IDElO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxuICAgIG1hcmdpbjogMyU7XG4gICAgd2lkdGg6IDEwMCVcbmA7XG5cbmV4cG9ydCB7IEltZ0RpdiwgSW1nU2VjdGlvbiwgSW1nIH07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEltZ0RpdiwgSW1nU2VjdGlvbiwgSW1nIH0gZnJvbSAnLi9UaHVtYm5haWxzLmpzJztcblxuY29uc3Qgc3RvY2sgPSBbXG4gICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NRYTFKUTNPUU5XNWFXcE5zYjI2dHJla1FWTG13a1p6N1ppSEEmdXNxcD1DQVUnLFxuICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDU3NDA0MjA5MjgtNWU1NjBjMDZkMzBlP2l4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TW54OGNISnZaSFZqZEh4bGJud3dmSHd3Zkh3JTNEJml4bGliPXJiLTEuMi4xJnc9MTAwMCZxPTgwJyxcbiAgJ2h0dHBzOi8vd3d3LmZlZGV4LmNvbS9jb250ZW50L2RhbS9mZWRleC91cy11bml0ZWQtc3RhdGVzL0ZlZEV4LU9mZmljZS9pbWFnZXMvMjAyMS9xNC9DdXN0b20tUHJvbW90aW9uYWwtUHJvZHVjdHMtNzI3eDQ2My5qcGcnXG5dO1xuXG5jb25zdCBUaHVtYm5haWxzID0gKHsgcGhvdG9zID0gc3RvY2sgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+WWVzLCBhcyB5b3UgY2FuIHNlZSBpbiB0aGVzZSBwaG90b3MuPC9oMj5cbiAgICAgIDxJbWdTZWN0aW9uPlxuICAgICAgICB7cGhvdG9zLm1hcCgocGhvdG8sIGlkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuICg8SW1nRGl2IGtleT17aWR9PlxuICAgICAgICAgICAgPEltZyBzcmM9e3Bob3RvLnVybH0gYWx0PVwicGhvdG9cIi8+XG4gICAgICAgICAgICA8SW1nIHNyYz17c3RvY2tbaWRdfSBhbHQ9XCJwaG90b1wiLz5cblxuICAgICAgICAgIDwvSW1nRGl2Pik7XG4gICAgICAgIH0pfVxuICAgICAgPC9JbWdTZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGh1bWJuYWlsczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4tYmRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLWJkLmpzXCIsXG5cdFwiLi9ibi1iZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4tYmQuanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taW4uanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1zZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VuLXNnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1zZy5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLW14XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1teC5qc1wiLFxuXHRcIi4vZXMtbXguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLW14LmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZpbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1kZXZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWRldmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9vYy1sbmNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vb2MtbG5jLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtbW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC1tby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtbW8uanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiXSwic291cmNlUm9vdCI6IiJ9