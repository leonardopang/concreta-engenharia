"use strict";
(globalThis["webpackChunktheme_concreta_engenharia"] = globalThis["webpackChunktheme_concreta_engenharia"] || []).push([["blocks/global/ExampleHero"],{

/***/ "./src/blocks/global/ExampleHero/index.tsx"
/*!*************************************************!*\
  !*** ./src/blocks/global/ExampleHero/index.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExampleHero)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.scss */ "./src/blocks/global/ExampleHero/style.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function ExampleHero({
  heading,
  subheading,
  ctaLabel,
  ctaUrl,
  variant = 'default'
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(_style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].hero, variant !== 'default' && _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"][`hero--${variant}`]),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].hero__inner,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].hero__heading,
        children: heading
      }), subheading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].hero__subheading,
        children: subheading
      }), ctaLabel && ctaUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        href: ctaUrl,
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].hero__cta,
        children: ctaLabel
      })]
    })
  });
}

/***/ },

/***/ "./src/blocks/global/ExampleHero/style.module.scss"
/*!*********************************************************!*\
  !*** ./src/blocks/global/ExampleHero/style.module.scss ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"hero":"hpsGSv29nX4Q0B2UXkfM","hero--dark":"nI09g68dZPyubUqJq0zu","hero--brand":"CVNDALjvMqFmIUETwD7s","hero__inner":"_2H9DACNZpZN2Ithhx5S","hero__heading":"_KaMmouv3blRQw8QmRV1","hero__subheading":"FdSyRBiVJT560gmFVDsI","hero__cta":"CHw1zxbReNgtix_RX6Vs"});

/***/ },

/***/ "./node_modules/clsx/dist/clsx.mjs"
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }

}]);
//# sourceMappingURL=ExampleHero.js.map?ver=2c173b475dd255b80f6f