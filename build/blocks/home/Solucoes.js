"use strict";
(globalThis["webpackChunktheme_concreta_engenharia"] = globalThis["webpackChunktheme_concreta_engenharia"] || []).push([["blocks/home/Solucoes"],{

/***/ "./src/blocks/pages/home/Solucoes/index.tsx"
/*!**************************************************!*\
  !*** ./src/blocks/pages/home/Solucoes/index.tsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Solucoes)
/* harmony export */ });
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.module.scss */ "./src/blocks/pages/home/Solucoes/style.module.scss");
/* harmony import */ var _components_SmartImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/SmartImage */ "./src/components/SmartImage/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils */ "./src/utils/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function Solucoes({
  background,
  title,
  description,
  cards = []
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].solucoes,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].solucoes__card,
      children: [(0,_utils__WEBPACK_IMPORTED_MODULE_2__.imgProps)(background) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].solucoes__bg,
        "aria-hidden": "true",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          ...(0,_utils__WEBPACK_IMPORTED_MODULE_2__.imgProps)(background),
          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].solucoes__bgImg
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].solucoes__bg,
        "aria-hidden": "true"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].solucoes__header,
        "data-animate": "fade-up",
        children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].solucoes__title,
          children: title
        }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].solucoes__description,
          children: description
        })]
      }), (0,_utils__WEBPACK_IMPORTED_MODULE_2__.hasItems)(cards) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].solucoes__grid,
        children: cards.map((card, i) => {
          const btnProps = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.linkProps)(card.button);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("article", {
            className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].solucoes__item,
            "data-animate": "fade-up",
            "data-animate-delay": String(i * 0.1),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].solucoes__iconWrap,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_SmartImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
                image: card.icone,
                width: 32,
                height: 32,
                className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].solucoes__icon
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].solucoes__body,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].solucoes__itemText,
                children: [card.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                  className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].solucoes__itemTitle,
                  children: card.title
                }), card.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].solucoes__itemDesc,
                  children: card.description
                })]
              }), btnProps && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                ...btnProps,
                className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].solucoes__button,
                children: btnProps.label
              })]
            })]
          }, i);
        })
      })]
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

/***/ "./src/blocks/pages/home/Solucoes/style.module.scss"
/*!**********************************************************!*\
  !*** ./src/blocks/pages/home/Solucoes/style.module.scss ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"solucoes":"nbbjE01CrFKlmIIQMUwe","solucoes__card":"A3UcJT94lcEOLmLNvWHt","solucoes__bg":"gzvD8JzjafZRi4qxugT6","solucoes__bgImg":"PEbqjRS191LM6sGIYfUM","solucoes__header":"oCR0v7XotHCbAGQfB0jQ","solucoes__title":"irOeZlbzOzcD61w50_Sw","solucoes__description":"cSnVgIyBGkX_aZA2ucIP","solucoes__grid":"gCHQuAqF8oOYR4mATewg","solucoes__item":"FpCyX704fKyOI6Tjpcbd","solucoes__iconWrap":"vr68oMZC3ljkYFJWu1P2","solucoes__icon":"xMlxz7c2IsdFbjz1Dulq","solucoes__body":"fb4RypdSeQYaB9d_Rl1r","solucoes__itemText":"cTrEbPdHhbteqiUNU3UU","solucoes__itemTitle":"xUz2Ja350FavlN6waj4Z","solucoes__itemDesc":"IpTiwEW10UZkNOpD6avg","solucoes__button":"Mkq1x8TGo3332T9SHvoG"});

/***/ }

}]);
//# sourceMappingURL=Solucoes.js.map?ver=1b175ebb738f0b104dda