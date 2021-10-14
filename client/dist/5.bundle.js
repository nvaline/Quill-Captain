(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./client/src/components/Overview/imageGallery/DisplayImage.jsx":
/*!**********************************************************************!*\
  !*** ./client/src/components/Overview/imageGallery/DisplayImage.jsx ***!
  \**********************************************************************/
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _contexts_StylesContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/StylesContext.js */ "./client/src/components/contexts/StylesContext.js");



var _templateObject, _templateObject2;




var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  height: 750px;\n  width: 850px;\n  overflow: hidden;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  z-index: 10;\n  background-color: grey;\n  transition-timing-function: ease-in;\n  transition: .3s;\n"])));
var Image = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  height: 100%;\n    :hover{\n      cursor: ", ";\n    }\n"])), function (prop) {
  return prop.expand ? 'zoom-out' : 'zoom-in';
});

var DisplayImage = function DisplayImage() {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(_contexts_StylesContext_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
      _React$useContext$cur = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useContext.currStyle, 1),
      style = _React$useContext$cur[0],
      _React$useContext$img = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useContext.imgIndex, 1),
      currIdx = _React$useContext$img[0],
      _React$useContext$exp = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useContext.expanded, 2),
      expand = _React$useContext$exp[0],
      setExpand = _React$useContext$exp[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var container = document.getElementById('display-img-container');

    if (expand) {
      container.style.width = '1280px';
      container.style.height = '800px';
    } else {
      container.style.width = '850px';
      container.style.height = '750px';
    }
  }, [expand]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageContainer, {
    id: "display-img-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Image, {
    id: "display-img",
    alt: style.name,
    expand: expand,
    src: style.photos[currIdx].url,
    onClick: function onClick() {
      return setExpand(!expand);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DisplayImage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvT3ZlcnZpZXcvaW1hZ2VHYWxsZXJ5L0Rpc3BsYXlJbWFnZS5qc3giXSwibmFtZXMiOlsiSW1hZ2VDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJJbWFnZSIsImltZyIsInByb3AiLCJleHBhbmQiLCJEaXNwbGF5SW1hZ2UiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJTdHlsZXNDb250ZXh0IiwiY3VyclN0eWxlIiwic3R5bGUiLCJpbWdJbmRleCIsImN1cnJJZHgiLCJleHBhbmRlZCIsInNldEV4cGFuZCIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsIm5hbWUiLCJwaG90b3MiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLGNBQWMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBViwyV0FBcEI7QUFhQSxJQUFNQyxLQUFLLEdBQUdGLHlEQUFNLENBQUNHLEdBQVYsaU1BR00sVUFBQUMsSUFBSTtBQUFBLFNBQUlBLElBQUksQ0FBQ0MsTUFBTCxHQUFjLFVBQWQsR0FBMkIsU0FBL0I7QUFBQSxDQUhWLENBQVg7O0FBT0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUV6QiwwQkFJSUMsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMsa0VBQWpCLENBSko7QUFBQSw0SEFDRUMsU0FERjtBQUFBLE1BQ2NDLEtBRGQ7QUFBQSw0SEFFRUMsUUFGRjtBQUFBLE1BRWNDLE9BRmQ7QUFBQSw0SEFHRUMsUUFIRjtBQUFBLE1BR2NULE1BSGQ7QUFBQSxNQUdzQlUsU0FIdEI7O0FBTUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLHVCQUF4QixDQUFsQjs7QUFFQSxRQUFJZCxNQUFKLEVBQVk7QUFDVlksZUFBUyxDQUFDTixLQUFWLENBQWdCUyxLQUFoQixHQUF3QixRQUF4QjtBQUNBSCxlQUFTLENBQUNOLEtBQVYsQ0FBZ0JVLE1BQWhCLEdBQXlCLE9BQXpCO0FBQ0QsS0FIRCxNQUdPO0FBQ0xKLGVBQVMsQ0FBQ04sS0FBVixDQUFnQlMsS0FBaEIsR0FBd0IsT0FBeEI7QUFDQUgsZUFBUyxDQUFDTixLQUFWLENBQWdCVSxNQUFoQixHQUF5QixPQUF6QjtBQUNEO0FBQ0YsR0FWUSxFQVVOLENBQUNoQixNQUFELENBVk0sQ0FBVDtBQVlBLHNCQUNFLDJEQUFDLGNBQUQ7QUFBZ0IsTUFBRSxFQUFDO0FBQW5CLGtCQUNFLDJEQUFDLEtBQUQ7QUFDRSxNQUFFLEVBQUMsYUFETDtBQUVFLE9BQUcsRUFBR00sS0FBSyxDQUFDVyxJQUZkO0FBR0UsVUFBTSxFQUFHakIsTUFIWDtBQUlFLE9BQUcsRUFBR00sS0FBSyxDQUFDWSxNQUFOLENBQWFWLE9BQWIsRUFBc0JXLEdBSjlCO0FBS0UsV0FBTyxFQUFHO0FBQUEsYUFBTVQsU0FBUyxDQUFDLENBQUNWLE1BQUYsQ0FBZjtBQUFBO0FBTFosSUFERixDQURGO0FBV0QsQ0EvQkQ7O0FBaUNlQywyRUFBZixFIiwiZmlsZSI6IjUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgU3R5bGVzQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0cy9TdHlsZXNDb250ZXh0LmpzJztcblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDc1MHB4O1xuICB3aWR0aDogODUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogLjNzO1xuYDtcblxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBoZWlnaHQ6IDEwMCU7XG4gICAgOmhvdmVye1xuICAgICAgY3Vyc29yOiAkeyBwcm9wID0+IHByb3AuZXhwYW5kID8gJ3pvb20tb3V0JyA6ICd6b29tLWluJyB9O1xuICAgIH1cbmA7XG5cbmNvbnN0IERpc3BsYXlJbWFnZSA9ICgpID0+IHtcblxuICBjb25zdCB7XG4gICAgY3VyclN0eWxlOiBbc3R5bGVdLFxuICAgIGltZ0luZGV4OiAgW2N1cnJJZHhdLFxuICAgIGV4cGFuZGVkOiAgW2V4cGFuZCwgc2V0RXhwYW5kXVxuICB9ID0gUmVhY3QudXNlQ29udGV4dChTdHlsZXNDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5LWltZy1jb250YWluZXInKTtcblxuICAgIGlmIChleHBhbmQpIHtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMjgwcHgnO1xuICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICc4MDBweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICc4NTBweCc7XG4gICAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzc1MHB4JztcbiAgICB9XG4gIH0sIFtleHBhbmRdKTtcblxuICByZXR1cm4gKFxuICAgIDxJbWFnZUNvbnRhaW5lciBpZD0nZGlzcGxheS1pbWctY29udGFpbmVyJz5cbiAgICAgIDxJbWFnZVxuICAgICAgICBpZD0nZGlzcGxheS1pbWcnXG4gICAgICAgIGFsdD17IHN0eWxlLm5hbWUgfVxuICAgICAgICBleHBhbmQ9eyBleHBhbmQgfVxuICAgICAgICBzcmM9eyBzdHlsZS5waG90b3NbY3VycklkeF0udXJsfVxuICAgICAgICBvbkNsaWNrPXsgKCkgPT4gc2V0RXhwYW5kKCFleHBhbmQpIH1cbiAgICAgIC8+XG4gICAgPC9JbWFnZUNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlJbWFnZTsiXSwic291cmNlUm9vdCI6IiJ9