"use strict";
(globalThis["webpackChunktheme_concreta_engenharia"] = globalThis["webpackChunktheme_concreta_engenharia"] || []).push([["blocks/single-case/Galeria"],{

/***/ "./src/blocks/pages/single-case/Galeria/index.tsx"
/*!********************************************************!*\
  !*** ./src/blocks/pages/single-case/Galeria/index.tsx ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SingleCaseGaleria)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! photoswipe/dist/photoswipe.css */ "./node_modules/photoswipe/dist/photoswipe.css");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.scss */ "./src/blocks/pages/single-case/Galeria/style.module.scss");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils */ "./src/utils/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function SingleCaseGaleria({
  images
}) {
  const galleryId = 'galeria-' + (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)().replace(/:/g, '');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.hasItems)(images)) return;
    let lightbox = null;
    __webpack_require__.e(/*! import() */ "vendors-node_modules_photoswipe_dist_photoswipe-lightbox_esm_js").then(__webpack_require__.bind(__webpack_require__, /*! photoswipe/lightbox */ "./node_modules/photoswipe/dist/photoswipe-lightbox.esm.js")).then(({
      default: PhotoSwipeLightbox
    }) => {
      lightbox = new PhotoSwipeLightbox({
        gallery: `#${galleryId}`,
        children: 'a',
        pswpModule: () => __webpack_require__.e(/*! import() */ "vendors-node_modules_photoswipe_dist_photoswipe_esm_js").then(__webpack_require__.bind(__webpack_require__, /*! photoswipe */ "./node_modules/photoswipe/dist/photoswipe.esm.js"))
      });
      lightbox.init();
    });
    return () => {
      lightbox?.destroy();
    };
  }, [galleryId]);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.hasItems)(images)) return null;
  const [first, ...rest] = images;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].galeria,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      id: galleryId,
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].galeria__inner,
      "data-animate": "fade-up",
      children: [first?.image && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
        href: first.image.url,
        "data-pswp-width": first.image.width || 1920,
        "data-pswp-height": first.image.height || 1080,
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].galeria__main,
        "aria-label": first.image.alt || 'Abrir imagem',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
          src: first.image.url,
          alt: first.image.alt || '',
          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].galeria__mainImg,
          loading: "eager",
          decoding: "async"
        })
      }), (0,_utils__WEBPACK_IMPORTED_MODULE_3__.hasItems)(rest) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].galeria__grid,
        children: rest.map((item, i) => item.image ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].galeria__gridItem,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
            href: item.image.url,
            "data-pswp-width": item.image.width || 1920,
            "data-pswp-height": item.image.height || 1080,
            "aria-label": item.image.alt || 'Abrir imagem',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
              src: item.image.url,
              alt: item.image.alt || '',
              className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].galeria__gridImg,
              loading: "lazy",
              decoding: "async"
            })
          })
        }, i) : null)
      })]
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

/***/ "./node_modules/photoswipe/dist/photoswipe.css"
/*!*****************************************************!*\
  !*** ./node_modules/photoswipe/dist/photoswipe.css ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/blocks/pages/single-case/Galeria/style.module.scss"
/*!****************************************************************!*\
  !*** ./src/blocks/pages/single-case/Galeria/style.module.scss ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"galeria":"wX_RHKxVHIgeODycr3GB","galeria__inner":"SXYKez0gQWTCWwe6Go8Q","galeria__main":"i6LQzOXMLv7AHMRcgz_v","galeria__mainImg":"l2oK68BJz8usPQaSKXf5","galeria__grid":"GvU8kzHgjZunZyZr6Qxw","galeria__gridItem":"Z4Pee0SQIisXxAQpqZfJ","galeria__gridImg":"uX0uo8uMMEp2gEOvdZq6"});

/***/ }

}]);
//# sourceMappingURL=Galeria.js.map?ver=0be94dd9db98d4297e36