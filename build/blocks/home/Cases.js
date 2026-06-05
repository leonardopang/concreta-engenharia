"use strict";
(globalThis["webpackChunktheme_concreta_engenharia"] = globalThis["webpackChunktheme_concreta_engenharia"] || []).push([["blocks/home/Cases"],{

/***/ "./src/blocks/pages/home/Cases/index.tsx"
/*!***********************************************!*\
  !*** ./src/blocks/pages/home/Cases/index.tsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cases)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _splidejs_react_splide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @splidejs/react-splide */ "./node_modules/@splidejs/react-splide/dist/js/react-splide.esm.js");
/* harmony import */ var _splidejs_react_splide_css_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @splidejs/react-splide/css/core */ "./node_modules/@splidejs/react-splide/dist/css/splide-core.min.css");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.scss */ "./src/blocks/pages/home/Cases/style.module.scss");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils */ "./src/utils/index.ts");
/* harmony import */ var _components_Eyebrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/Eyebrow */ "./src/components/Eyebrow/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function Cases({
  background,
  eyebrow,
  title,
  description,
  button,
  cases = []
}) {
  const splideRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases,
    children: [(0,_utils__WEBPACK_IMPORTED_MODULE_4__.imgProps)(background) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__bg,
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
        ...(0,_utils__WEBPACK_IMPORTED_MODULE_4__.imgProps)(background),
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__bgImg
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__inner,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__header,
        "data-animate": "fade-up",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__headerText,
          children: [eyebrow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Eyebrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
            text: eyebrow
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__headerBody,
            children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
              className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__title,
              children: title
            }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__description,
              children: description
            })]
          })]
        }), (0,_utils__WEBPACK_IMPORTED_MODULE_4__.linkProps)(button) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
          ...(0,_utils__WEBPACK_IMPORTED_MODULE_4__.linkProps)(button),
          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__headerBtn,
          children: button.label
        })]
      }), (0,_utils__WEBPACK_IMPORTED_MODULE_4__.hasItems)(cases) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          "data-animate": "fade-up",
          "data-animate-delay": "0.15",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_1__.Splide, {
            ref: splideRef,
            hasTrack: false,
            options: {
              type: 'loop',
              perPage: 1,
              gap: '16px',
              arrows: false,
              pagination: false,
              drag: true
            },
            className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__splide,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_1__.SplideTrack, {
              children: cases.map((item, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_1__.SplideSlide, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__slide,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__slideImg,
                    children: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.imgProps)(item.image) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                      ...(0,_utils__WEBPACK_IMPORTED_MODULE_4__.imgProps)(item.image),
                      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__img
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__card,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__cardContent,
                      children: [item.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__cardTitle,
                        children: item.title
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr", {
                        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__divider
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__fields,
                        children: [item.localDaObra && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__field,
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                            className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__fieldLabel,
                            children: "Local da Obra"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                            className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__fieldValue,
                            children: item.localDaObra
                          })]
                        }), item.servicoExecutado && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__field,
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                            className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__fieldLabel,
                            children: "Servi\xE7o Executado"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                            className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__fieldValue,
                            children: item.servicoExecutado
                          })]
                        })]
                      })]
                    }), item.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                      href: item.url,
                      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__cardBtn,
                      children: "Ver case completo"
                    })]
                  })]
                })
              }, i))
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__nav,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__navBtn,
              "aria-label": "Anterior",
              onClick: () => splideRef.current?.splide?.go('<'),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                  d: "M15 18L9 12L15 6",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__navBtn,
              "aria-label": "Pr\xF3ximo",
              onClick: () => splideRef.current?.splide?.go('>'),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                  d: "M9 18L15 12L9 6",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })
              })
            })]
          }), (0,_utils__WEBPACK_IMPORTED_MODULE_4__.linkProps)(button) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
            ...(0,_utils__WEBPACK_IMPORTED_MODULE_4__.linkProps)(button),
            className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cases__mobileBtn,
            children: button.label
          })]
        })
      })]
    })]
  });
}

/***/ },

/***/ "./src/components/Eyebrow/index.tsx"
/*!******************************************!*\
  !*** ./src/components/Eyebrow/index.tsx ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Eyebrow)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.scss */ "./src/components/Eyebrow/style.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Eyebrow({
  text,
  variant = 'green',
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(_style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].eyebrow, _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"][`eyebrow--${variant}`], className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      children: text
    })
  });
}

/***/ },

/***/ "./src/utils/index.ts"
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstDefined: () => (/* binding */ firstDefined),
/* harmony export */   hasItems: () => (/* binding */ hasItems),
/* harmony export */   htmlContent: () => (/* binding */ htmlContent),
/* harmony export */   htmlTitle: () => (/* binding */ htmlTitle),
/* harmony export */   imgProps: () => (/* binding */ imgProps),
/* harmony export */   isAcfImage: () => (/* binding */ isAcfImage),
/* harmony export */   isAcfLink: () => (/* binding */ isAcfLink),
/* harmony export */   linkProps: () => (/* binding */ linkProps)
/* harmony export */ });
// ─── Shapes ACF normalizados (espelham BlockImporter no PHP) ──────────────────

// ─── Guards de tipo ────────────────────────────────────────────────────────────

function isAcfImage(value) {
  return typeof value === 'object' && value !== null && typeof value.url === 'string' && value.url.length > 0;
}
function isAcfLink(value) {
  return typeof value === 'object' && value !== null && typeof value.url === 'string' && value.url.length > 0;
}

// ─── Helpers de imagem ─────────────────────────────────────────────────────────

/**
 * Retorna os atributos prontos para usar em um <img>.
 * Omite width/height se forem 0 (campos sem dimensão definida no ACF).
 */
function imgProps(image, overrides = {}) {
  if (!image?.url) return null;
  return {
    src: image.url,
    alt: image.alt,
    ...(image.width > 0 && {
      width: image.width
    }),
    ...(image.height > 0 && {
      height: image.height
    }),
    ...overrides
  };
}

// ─── Helpers de link ───────────────────────────────────────────────────────────

/**
 * Retorna os atributos prontos para usar em um <a>.
 * Adiciona rel="noopener noreferrer" quando target="_blank".
 */
function linkProps(link, overrides = {}) {
  if (!link?.url) return null;
  const isBlank = link.target === '_blank';
  return {
    href: link.url,
    target: link.target || undefined,
    ...(isBlank && {
      rel: 'noopener noreferrer'
    }),
    label: link.label,
    ...overrides
  };
}

// ─── Helpers de array ──────────────────────────────────────────────────────────

/**
 * Garante que o valor é um array não-vazio antes de renderizar.
 * Útil para repeaters: `hasItems(cards) && cards.map(...)`.
 */
function hasItems(list) {
  return Array.isArray(list) && list.length > 0;
}

// ─── Helpers de texto ──────────────────────────────────────────────────────────

/**
 * Retorna o primeiro valor não-vazio dentre os fornecidos.
 * Útil para fallback de campos opcionais: `firstDefined(heading, 'Título padrão')`.
 */
function firstDefined(...values) {
  for (const v of values) {
    if (v != null && v.trim() !== '') return v;
  }
  return '';
}

// ─── Payload HTML seguro ──────────────────────────────────────────────────────

/**
 * Props para renderizar HTML de campo WYSIWYG via dangerouslySetInnerHTML.
 * Use em elementos de bloco como <div> e <p>.
 */
function htmlContent(raw) {
  return {
    dangerouslySetInnerHTML: {
      __html: raw ?? ''
    }
  };
}

/**
 * Props para renderizar HTML inline em títulos e headings (strong, em, span, br, a).
 * Use em <h1>, <h2>, <h3>, <p> quando o campo ACF foi processado com acf_html().
 *
 * Exemplo no render.php:  'title' => acf_html($group['title'])
 * Exemplo no componente:  <h2 {...htmlTitle(title)} className={styles.card__title} />
 */
function htmlTitle(raw) {
  return {
    dangerouslySetInnerHTML: {
      __html: raw ?? ''
    }
  };
}

/***/ },

/***/ "./src/blocks/pages/home/Cases/style.module.scss"
/*!*******************************************************!*\
  !*** ./src/blocks/pages/home/Cases/style.module.scss ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"cases":"ciCZEETMJMvKDt54N6pi","cases__bg":"GzPMgl5v6zQcpc76XRPP","cases__bgImg":"IlVIWTw8b5rXDjqMbcre","cases__inner":"PU0jN2Hbm2zfrqLqFk5t","cases__header":"FlXK5zl0lFobjcaAtNyE","cases__headerText":"GLOgY0esUQpNDddbUjSD","cases__headerBody":"IuH40Y06FITOQ1je14XS","cases__title":"VKGc8hqsd6T4uxGIBrXX","cases__description":"UDDVCmO5cud3InWMz0hO","cases__headerBtn":"QEoWx8WIFp4g2jW5nTVp","cases__mobileBtn":"XTwUypwj3SLYkftnNiK8","cases__splide":"u9TmR8A4bkd8oWh0wRsF","cases__slide":"LkjGFhnUZ5O1E_tw6t0o","cases__slideImg":"RVkF6JBHERJJLRSDHAdG","cases__img":"mnoCsgBoe8iapmXAcLiV","cases__card":"tCBQwbu1WpHm_43E5yYA","cases__cardContent":"NdDe65Ld6FV9bDjlXoN8","cases__cardTitle":"chfoIO__bdpVts166I_9","cases__divider":"f_aqRBLPXz5qytrA6kcD","cases__fields":"sqeOyrEL72L5t_Mtt_TJ","cases__field":"bNvyNOZ3o5nVL0hsuLuy","cases__fieldLabel":"eoKqCs6Ho1C7bPykHuFA","cases__fieldValue":"qXalzlf0w5HYevvoE88x","cases__cardBtn":"MG7skujElbQWboYcAvNb","cases__nav":"jrXtylT9KoBmHqBn8kPo","cases__navBtn":"iRYi8UcsMVhC5x3BYT4W"});

/***/ },

/***/ "./src/components/Eyebrow/style.module.scss"
/*!**************************************************!*\
  !*** ./src/components/Eyebrow/style.module.scss ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"eyebrow":"y35JNoUiPPTjrv1PN9r3","eyebrow--green":"kojS0TZ2_enAXNLJQZjL","eyebrow--white":"JHpC1onif8fWKT5L_QS8"});

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
//# sourceMappingURL=Cases.js.map?ver=883fd214a522c1ca2f6e