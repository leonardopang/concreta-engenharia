"use strict";
(globalThis["webpackChunktheme_concreta_engenharia"] = globalThis["webpackChunktheme_concreta_engenharia"] || []).push([["blocks/sobre/Capacidade"],{

/***/ "./src/blocks/pages/sobre/Capacidade/index.tsx"
/*!*****************************************************!*\
  !*** ./src/blocks/pages/sobre/Capacidade/index.tsx ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Capacidade)
/* harmony export */ });
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.module.scss */ "./src/blocks/pages/sobre/Capacidade/style.module.scss");
/* harmony import */ var _components_SmartImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/SmartImage */ "./src/components/SmartImage/index.tsx");
/* harmony import */ var _components_Eyebrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/Eyebrow */ "./src/components/Eyebrow/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils */ "./src/utils/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function Capacidade({
  background,
  eyebrow,
  title,
  description,
  imagem,
  items = []
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].cap,
    children: [background?.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].cap__bg,
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_SmartImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
        image: background,
        alt: "",
        loading: "eager",
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].cap__bgImg
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].cap__inner,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].cap__header,
        "data-animate": "fade-up",
        children: [eyebrow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Eyebrow__WEBPACK_IMPORTED_MODULE_2__["default"], {
          text: eyebrow
        }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].cap__title,
          children: title
        }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].cap__desc,
          children: description
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].cap__body,
        children: [imagem?.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].cap__imgWrap,
          "data-animate": "fade-right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_SmartImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
            image: imagem,
            className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].cap__img
          })
        }), (0,_utils__WEBPACK_IMPORTED_MODULE_3__.hasItems)(items) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].cap__list,
          children: items.map((item, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
            className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].cap__item,
            "data-animate": "fade-left",
            "data-animate-delay": String(i * 0.08),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].cap__iconBox,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_SmartImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
                image: item.icone,
                width: 32,
                height: 32,
                className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].cap__icon
              })
            }), item.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].cap__itemTitle,
              children: item.title
            })]
          }, i))
        })]
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

/***/ "./src/components/SmartImage/index.tsx"
/*!*********************************************!*\
  !*** ./src/components/SmartImage/index.tsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SmartImage)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Renderiza uma imagem ACF de forma inteligente:
 * - SVG  → inline via dangerouslySetInnerHTML, com role="img" e aria-label para acessibilidade
 * - Resto → <img> normal via imgProps(), com loading="lazy" e decoding="async" por padrão
 *
 * Uso:
 *   <SmartImage image={icon} className={styles.card__icon} />
 *   <SmartImage image={bg} alt="" loading="eager" />
 */

function SmartImage({
  image,
  className,
  alt,
  width,
  height,
  loading = 'lazy',
  decoding = 'async'
}) {
  if (!image?.url) return null;
  const resolvedAlt = alt !== undefined ? alt : image.alt;
  if (image.svgContent) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      role: "img",
      "aria-label": resolvedAlt || undefined,
      "aria-hidden": resolvedAlt === '' ? true : undefined,
      className: className,
      style: width || height ? {
        display: 'inline-flex',
        width: width ?? undefined,
        height: height ?? undefined
      } : undefined,
      dangerouslySetInnerHTML: {
        __html: image.svgContent
      }
    });
  }
  const props = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.imgProps)(image, {
    ...(alt !== undefined && {
      alt
    }),
    ...(width !== undefined && {
      width
    }),
    ...(height !== undefined && {
      height
    }),
    loading,
    decoding
  });
  if (!props) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
    ...props,
    className: className
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

/***/ "./src/blocks/pages/sobre/Capacidade/style.module.scss"
/*!*************************************************************!*\
  !*** ./src/blocks/pages/sobre/Capacidade/style.module.scss ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"cap":"CNnJzIW25zVFAykoRxSJ","cap__bg":"DmJ4ufctoy2c13Crhgf6","cap__bgImg":"lOPABGuHSI_ZqECoiXo2","cap__inner":"H922hVytmMBG_iFoRJWX","cap__header":"oXkKfgOyT_RnftzmlpNC","cap__title":"LarYFmklrDUnP_pulKxh","cap__desc":"xD7j13MTuRMHFuMwcWFB","cap__body":"NDvqONEPZJBD3RRwcGLb","cap__imgWrap":"YvXY2CaRXDxFqX_K7kRe","cap__img":"N3lapJ7voXeVFVmXAl6L","cap__list":"MebmWLj3wtr50Rjjk_hF","cap__item":"fz_n6n8O6m59PRzvprYn","cap__iconBox":"flH7Z4_nIETRJqnbuL3Z","cap__icon":"COuapDqkMpfWAYgvDdrv","cap__itemTitle":"LJRBzTws92_flKJYTmYr"});

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
//# sourceMappingURL=Capacidade.js.map?ver=39f4e3bedb0d53723576