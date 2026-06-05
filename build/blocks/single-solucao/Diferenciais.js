"use strict";
(globalThis["webpackChunktheme_concreta_engenharia"] = globalThis["webpackChunktheme_concreta_engenharia"] || []).push([["blocks/single-solucao/Diferenciais"],{

/***/ "./src/blocks/pages/single-solucao/Diferenciais/index.tsx"
/*!****************************************************************!*\
  !*** ./src/blocks/pages/single-solucao/Diferenciais/index.tsx ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SingleSolucaoDiferenciais)
/* harmony export */ });
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.module.scss */ "./src/blocks/pages/single-solucao/Diferenciais/style.module.scss");
/* harmony import */ var _components_SmartImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/SmartImage */ "./src/components/SmartImage/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils */ "./src/utils/index.ts");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../icons */ "./src/icons/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function SingleSolucaoDiferenciais({
  sectionTitle,
  sectionDescription,
  photo,
  cardTitle,
  items
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].diferenciais,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].diferenciais__inner,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].diferenciais__header,
        "data-animate": "fade-up",
        children: [sectionTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].diferenciais__title,
          children: sectionTitle
        }), sectionDescription && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].diferenciais__description,
          children: sectionDescription
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].diferenciais__grid,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].diferenciais__cardDark,
          "data-animate": "fade-right",
          children: photo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_SmartImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
            image: photo,
            className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].diferenciais__photo,
            alt: ""
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].diferenciais__cardLight,
          "data-animate": "fade-left",
          "data-animate-delay": "0.15",
          children: [cardTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].diferenciais__cardTitle,
            children: cardTitle
          }), (0,_utils__WEBPACK_IMPORTED_MODULE_2__.hasItems)(items) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
            className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].diferenciais__list,
            children: items.map((item, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
              className: _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].diferenciais__listItem,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_3__.IconCheck, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                children: item.text
              })]
            }, i))
          })]
        })]
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

/***/ "./src/icons/index.tsx"
/*!*****************************!*\
  !*** ./src/icons/index.tsx ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconAddressBook: () => (/* binding */ IconAddressBook),
/* harmony export */   IconBookmark: () => (/* binding */ IconBookmark),
/* harmony export */   IconCaretDoubleRight: () => (/* binding */ IconCaretDoubleRight),
/* harmony export */   IconCheck: () => (/* binding */ IconCheck),
/* harmony export */   IconChevronDown: () => (/* binding */ IconChevronDown),
/* harmony export */   IconChevronRight: () => (/* binding */ IconChevronRight),
/* harmony export */   IconClock: () => (/* binding */ IconClock),
/* harmony export */   IconEnvelope: () => (/* binding */ IconEnvelope),
/* harmony export */   IconFacebook: () => (/* binding */ IconFacebook),
/* harmony export */   IconInstagram: () => (/* binding */ IconInstagram),
/* harmony export */   IconMapPin: () => (/* binding */ IconMapPin),
/* harmony export */   IconPhone: () => (/* binding */ IconPhone),
/* harmony export */   IconWhatsapp: () => (/* binding */ IconWhatsapp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const IconFacebook = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M29.3334 16.405C29.3334 8.99625 23.3639 2.99023 16 2.99023C8.63622 2.99023 2.66669 8.99625 2.66669 16.405C2.66669 23.1006 7.54247 28.6505 13.9167 29.6569V20.2828H10.5313V16.405H13.9167V13.4496C13.9167 10.0875 15.9074 8.23039 18.9528 8.23039C20.4118 8.23039 21.9375 8.49241 21.9375 8.49241V11.7937H20.2563C18.6 11.7937 18.0834 12.8279 18.0834 13.8888V16.405H21.7812L21.1902 20.2828H18.0834V29.6569C24.4576 28.6505 29.3334 23.1009 29.3334 16.405Z",
    fill: "#F29506"
  })
});
const IconInstagram = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.3333 4.32373H10.6667C6.98477 4.32373 4 7.3085 4 10.9904V21.6571C4 25.3389 6.98477 28.3237 10.6667 28.3237H21.3333C25.0152 28.3237 28 25.3389 28 21.6571V10.9904C28 7.3085 25.0152 4.32373 21.3333 4.32373ZM25.6667 21.6571C25.6593 24.0472 23.7235 25.9831 21.3333 25.9904H10.6667C8.27647 25.9831 6.34065 24.0472 6.33333 21.6571V10.9904C6.34065 8.6002 8.27647 6.66438 10.6667 6.65706H21.3333C23.7235 6.66438 25.6593 8.6002 25.6667 10.9904V21.6571ZM22.3333 11.3237C23.0697 11.3237 23.6667 10.7268 23.6667 9.9904C23.6667 9.25402 23.0697 8.65706 22.3333 8.65706C21.5969 8.65706 21 9.25402 21 9.9904C21 10.7268 21.5969 11.3237 22.3333 11.3237ZM16 10.3237C12.6863 10.3237 10 13.01 10 16.3237C10 19.6375 12.6863 22.3237 16 22.3237C19.3137 22.3237 22 19.6375 22 16.3237C22.0036 14.7313 21.3725 13.2032 20.2465 12.0772C19.1205 10.9512 17.5924 10.3202 16 10.3237ZM12.3333 16.3237C12.3333 18.3488 13.9749 19.9904 16 19.9904C18.0251 19.9904 19.6667 18.3488 19.6667 16.3237C19.6667 14.2987 18.0251 12.6571 16 12.6571C13.9749 12.6571 12.3333 14.2987 12.3333 16.3237Z",
    fill: "#F29506"
  })
});
const IconPhone = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M10.468 9.60436C10.5545 9.54677 10.6541 9.51168 10.7576 9.50226C10.8612 9.49285 10.9654 9.50942 11.0609 9.55046L14.7453 11.2012C14.8695 11.2543 14.9731 11.3462 15.0407 11.4631C15.1083 11.5799 15.1362 11.7156 15.1203 11.8497C14.9989 12.7567 14.5523 13.5889 13.8633 14.1913C13.1744 14.7937 12.2902 15.1254 11.375 15.1247C8.55708 15.1247 5.85457 14.0053 3.86199 12.0127C1.86942 10.0201 0.750001 7.3176 0.750001 4.49968C0.749301 3.58452 1.081 2.70026 1.68341 2.01134C2.28582 1.32242 3.11793 0.875741 4.025 0.754365C4.15909 0.738435 4.29473 0.76636 4.41162 0.83396C4.52851 0.90156 4.62037 1.0052 4.67344 1.12936L6.32422 4.81686C6.36478 4.91157 6.3813 5.01484 6.3723 5.11748C6.3633 5.22012 6.32907 5.31894 6.27266 5.40515L4.60313 7.3903C4.5439 7.47966 4.50888 7.58286 4.50149 7.68981C4.49409 7.79676 4.51458 7.9038 4.56094 8.00046C5.20703 9.32311 6.57422 10.6739 7.90078 11.3137C7.99795 11.3599 8.10548 11.3799 8.21276 11.3718C8.32003 11.3638 8.42334 11.3278 8.5125 11.2676L10.468 9.60436Z",
    stroke: "#F29506",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })
});
const IconEnvelope = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  "aria-hidden": "true",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M2.5 4.375H17.5V15C17.5 15.1658 17.4342 15.3247 17.3169 15.4419C17.1997 15.5592 17.0408 15.625 16.875 15.625H3.125C2.95924 15.625 2.80027 15.5592 2.68306 15.4419C2.56585 15.3247 2.5 15.1658 2.5 15V4.375Z",
    stroke: "#F29506",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M17.5 4.375L10 11.25L2.5 4.375",
    stroke: "#F29506",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
});
const IconMapPin = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    "clip-path": "url(#clip0_4089_1187)",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z",
      stroke: "#F29506",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75Z",
      stroke: "#F29506",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
      id: "clip0_4089_1187",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        width: "24",
        height: "24",
        fill: "white"
      })
    })
  })]
});
const IconCaretDoubleRight = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    "clip-path": "url(#clip0_4010_345)",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M4.375 3.75L10.625 10L4.375 16.25",
      stroke: "#048837",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M10.625 3.75L16.875 10L10.625 16.25",
      stroke: "#F29506",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
      id: "clip0_4010_345",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        width: "20",
        height: "20",
        fill: "white"
      })
    })
  })]
});
const IconCheck = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M20.25 6.75L9.75 17.25L4.5 12",
    stroke: "#048837",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })
});
const IconChevronDown = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M6 9L12 15L18 9",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })
});
const IconChevronRight = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M9 18L15 12L9 6",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })
});
const IconAddressBook = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M15.75 6.75H18.75M15.75 9.75H18.75M15.75 12.75H18.75M4.5 19.5H19.5C20.3284 19.5 21 18.8284 21 18V6C21 5.17157 20.3284 4.5 19.5 4.5H4.5C3.67157 4.5 3 5.17157 3 6V18C3 18.8284 3.67157 19.5 4.5 19.5ZM9.75 12C10.9926 12 12 10.9926 12 9.75C12 8.50736 10.9926 7.5 9.75 7.5C8.50736 7.5 7.5 8.50736 7.5 9.75C7.5 10.9926 8.50736 12 9.75 12ZM6.75 16.5C6.75 14.8431 8.09315 13.5 9.75 13.5C11.4069 13.5 12.75 14.8431 12.75 16.5",
    stroke: "#4d4d4d",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })
});
const IconWhatsapp = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M17.0711 2.92893C15.1957 1.05357 12.6902 0 10.0711 0C4.60214 0 0.142856 4.45929 0.142856 9.92857C0.142856 11.6786 0.607143 13.3929 1.46429 14.9107L0.0714285 20L5.28571 18.6429C6.74998 19.4286 8.39286 19.8571 10.0711 19.8571C15.5401 19.8571 20 15.3978 20 9.92857C20 7.30893 18.9465 4.80357 17.0711 2.92893ZM10.0711 18.1786C8.57143 18.1786 7.10714 17.7857 5.82143 17.0357L5.5 16.8571L2.39286 17.6786L3.21429 14.6429L3.01786 14.3214C2.19643 12.9929 1.78571 11.4643 1.78571 9.92857C1.78571 5.375 5.51786 1.64286 10.0711 1.64286C12.2857 1.64286 14.3571 2.5 15.8929 4.05357C17.4286 5.60714 18.3571 7.67857 18.3571 9.92857C18.3571 14.4821 14.6071 18.1786 10.0711 18.1786ZM14.5893 11.9643C14.3393 11.8393 13.1071 11.2321 12.875 11.1429C12.6429 11.0536 12.4821 11.0 12.3214 11.25C12.1607 11.5 11.6786 12.0714 11.5357 12.2321C11.3929 12.3929 11.25 12.4107 11 12.2857C9.5 11.5357 8.5 10.9464 7.49107 9.25C7.22321 8.80357 7.74107 8.83036 8.22321 7.85714C8.3125 7.69643 8.26786 7.55357 8.20536 7.42857C8.14286 7.30357 7.63393 6.07143 7.42321 5.57143C7.21786 5.08929 7.00714 5.15179 6.85714 5.14286C6.71429 5.13393 6.55357 5.13393 6.39286 5.13393C6.23214 5.13393 5.96429 5.19643 5.73214 5.44643C5.5 5.69643 4.84821 6.30357 4.84821 7.53571C4.84821 8.76786 5.75 9.95536 5.86607 10.1161C5.98214 10.2768 7.625 12.8036 10.1429 13.8929C11.7679 14.5893 12.4107 14.6518 13.2321 14.5268C13.7321 14.45 14.7679 13.9196 15 13.3304C15.2321 12.7411 15.2321 12.2411 15.1696 12.125C15.1071 12.0089 14.8393 11.9464 14.5893 11.9643Z",
    fill: "currentColor"
  })
});
const IconBookmark = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    "clip-path": "url(#clip0_4089_1193)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M18 21L12 17.25L6 21V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5V21Z",
      stroke: "#F29506",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
      id: "clip0_4089_1193",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        width: "24",
        height: "24",
        fill: "white"
      })
    })
  })]
});
const IconClock = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  "aria-hidden": "true",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",
    stroke: "#F29506",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M10 5.625V10H14.375",
    stroke: "#F29506",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
});

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

/***/ "./src/blocks/pages/single-solucao/Diferenciais/style.module.scss"
/*!************************************************************************!*\
  !*** ./src/blocks/pages/single-solucao/Diferenciais/style.module.scss ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"diferenciais":"NnLKHzmbXQiFkw6CptWT","diferenciais__inner":"VXv9VvFuGLQMm0FHT2lb","diferenciais__header":"XbAmLahNMLHg4iv1kF9p","diferenciais__title":"G12Y8LoktfYnbgxZhEQS","diferenciais__description":"WxmBRmrVZJhoJW2M1RSC","diferenciais__grid":"fw61mr518WVGM9PM_6Cd","diferenciais__cardDark":"MIgrF0PMgcTbmQ5U1PSy","diferenciais__photo":"jynbJ6hU0luQ4nt02oPQ","diferenciais__cardLight":"xtAUPMqBJ4O5QdMxGOp4","diferenciais__cardTitle":"lzQ8VkxyRYNH6Nas6d1Q","diferenciais__list":"T7TxrQwdBo7xYJRDeY_D","diferenciais__listItem":"EdnuFaXK0SRGFUu5YlLJ"});

/***/ }

}]);
//# sourceMappingURL=Diferenciais.js.map?ver=aa983c0d110f01ce0748