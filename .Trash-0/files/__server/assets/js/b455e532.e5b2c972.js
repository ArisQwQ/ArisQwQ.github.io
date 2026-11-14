exports.ids = ["291"];
exports.modules = {
77268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _mdx_js_react__rspack_import_1 = __webpack_require__(89999);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = (/* unused pure expression or super */ null && ([{
  "value": "聯繫方式",
  "id": "聯繫方式",
  "level": 2
}]));
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_1/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_0.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_0.jsx)(_components.li, {
        children: "是一隻苦命 OIer，曾經在各路「名師」的帶領下學了 3 年 helloworld"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_0.jsx)(_components.h2, {
      id: "聯繫方式",
      children: "聯繫方式"
    }), "\n", (0,react_jsx_runtime__rspack_import_0.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_0.jsxs)(_components.li, {
        children: ["GitHub：", (0,react_jsx_runtime__rspack_import_0.jsx)(_components.a, {
          href: "https://github.com/ArisQwQ",
          children: "ArisQwQ"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_0.jsxs)(_components.li, {
        children: ["郵箱：", (0,react_jsx_runtime__rspack_import_0.jsx)(_components.a, {
          href: "mailto:Aris_QwQ@tendou-aris.com",
          children: "Aris_QwQ@tendou-aris.com"
        })]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__rspack_import_1/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__rspack_import_0.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__rspack_import_0.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
19144(module) {
// Exports
module.exports = {
	"admonition": `admonition_IR7P`,
	"admonitionHeading": `admonitionHeading_kAub`,
	"admonitionIcon": `admonitionIcon_OBob`,
	"admonitionContent": `admonitionContent_QYvi`
};


},
88964(module) {
// Exports
module.exports = {
	"backToTopButton": `backToTopButton_f2NH`,
	"backToTopButtonShow": `backToTopButtonShow_mwga`
};


},
31761(module) {
// Exports
module.exports = {
	"details": `details_e72V`
};


},
55386(module) {
// Exports
module.exports = {
	"img": `img_NZGw`
};


},
47298(module) {
// Exports
module.exports = {
	"containsTaskList": `containsTaskList_Bkah`
};


},
97777(module) {
// Exports
module.exports = {
	"details": `details_TdIR`,
	"isBrowser": `isBrowser_BuUd`,
	"collapsibleContent": `collapsibleContent_oFdx`
};


},
34348(module) {
// Exports
module.exports = {
	"page": `page_MlxY`,
	"title": `title_CMNi`,
	"container": `container_G1pp`,
	"header": `header_oIww`,
	"description": `description_xk5y`,
	"textLink": `textLink_rKoC`
};


},
55973(module) {
// Exports
module.exports = {
	"container": `container_EIll`,
	"header": `header_y7ce`,
	"eyebrow": `eyebrow_dKXv`,
	"avatar": `avatar_gbqI`,
	"inlineLink": `inlineLink_pVyB`,
	"content": `content_hm7J`,
	"layout": `layout_k8FM`,
	"comments": `comments_DYlX`,
	"sectionNote": `sectionNote_aX8f`,
	"skills": `skills_ErKq`,
	"contact": `contact_uQ56`,
	"commentInvitation": `commentInvitation_U1Le`,
	"identitySeparator": `identitySeparator_qTFD`
};


},
28571(module) {
// Exports
module.exports = {
	"codeBlockContainer": `codeBlockContainer_APcc`
};


},
16921(module) {
// Exports
module.exports = {
	"codeBlockContent": `codeBlockContent_m3Ux`,
	"codeBlockTitle": `codeBlockTitle_P25_`,
	"codeBlock": `codeBlock_qGQc`,
	"codeBlockStandalone": `codeBlockStandalone_zC50`,
	"codeBlockLines": `codeBlockLines_p187`,
	"codeBlockLinesWithNumbering": `codeBlockLinesWithNumbering_OFgW`,
	"buttonGroup": `buttonGroup_6DOT`
};


},
27101(module) {
// Exports
module.exports = {
	"copyButtonCopied": `copyButtonCopied__QnY`,
	"copyButtonIcons": `copyButtonIcons_FhaS`,
	"copyButtonIcon": `copyButtonIcon_phi_`,
	"copyButtonSuccessIcon": `copyButtonSuccessIcon_FfTR`
};


},
63056(module) {
// Exports
module.exports = {
	"codeLine": `codeLine_iPqp`,
	"codeLineNumber": `codeLineNumber_F4P7`,
	"codeLineContent": `codeLineContent_pOih`
};


},
67326(module) {
// Exports
module.exports = {
	"wordWrapButtonIcon": `wordWrapButtonIcon_iowe`,
	"wordWrapButtonEnabled": `wordWrapButtonEnabled_gY8A`
};


},
34809(module, exports) {
/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


},
89986(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* export default */ const __rspack_default_export = (()=>null);


},
21812(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconDanger)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconDanger(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 12 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
        })
    });
}


},
62751(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconInfo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconInfo(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 14 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
        })
    });
}


},
34463(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconNote)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconNote(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 14 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
        })
    });
}


},
23786(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconTip)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconTip(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 12 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
        })
    });
}


},
49103(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconCaution)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconCaution(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
        })
    });
}


},
3800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionLayout)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_3 = __webpack_require__(13526);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(94630);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(19144);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function AdmonitionContainer({ type, className, children, id }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: (0,clsx__rspack_import_3/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_4/* .ThemeClassNames.common.admonition */.G.common.admonition, _docusaurus_theme_common__rspack_import_4/* .ThemeClassNames.common.admonitionType */.G.common.admonitionType(type), (_styles_module_css__rspack_import_2_default().admonition), className),
        id: id,
        children: children
    });
}
function AdmonitionHeading({ icon, title }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (_styles_module_css__rspack_import_2_default().admonitionHeading),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                className: (_styles_module_css__rspack_import_2_default().admonitionIcon),
                children: icon
            }),
            title
        ]
    });
}
function AdmonitionContent({ children }) {
    return children ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: (_styles_module_css__rspack_import_2_default().admonitionContent),
        children: children
    }) : null;
}
function AdmonitionLayout(props) {
    const { type, icon, title, children, className, id } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(AdmonitionContainer, {
        type: type,
        className: className,
        id: id,
        children: [
            title || icon ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(AdmonitionHeading, {
                title: title,
                icon: icon
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(AdmonitionContent, {
                children: children
            })
        ]
    });
}


},
23779(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeCaution)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_5 = __webpack_require__(13526);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(3800);
/* import */ var _theme_Admonition_Icon_Warning__rspack_import_4 = __webpack_require__(49103);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--warning';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Warning__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.caution",
        description: "The default label used for the Caution admonition (:::caution)",
        children: "caution"
    })
};
// TODO remove before v4: Caution replaced by Warning
// see https://github.com/facebook/docusaurus/issues/7558
function AdmonitionTypeCaution(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
50887(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeDanger)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_5 = __webpack_require__(13526);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(3800);
/* import */ var _theme_Admonition_Icon_Danger__rspack_import_4 = __webpack_require__(21812);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--danger';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Danger__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.danger",
        description: "The default label used for the Danger admonition (:::danger)",
        children: "danger"
    })
};
function AdmonitionTypeDanger(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
3028(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeInfo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_5 = __webpack_require__(13526);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(3800);
/* import */ var _theme_Admonition_Icon_Info__rspack_import_4 = __webpack_require__(62751);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--info';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Info__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.info",
        description: "The default label used for the Info admonition (:::info)",
        children: "info"
    })
};
function AdmonitionTypeInfo(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
70384(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeNote)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_5 = __webpack_require__(13526);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(3800);
/* import */ var _theme_Admonition_Icon_Note__rspack_import_4 = __webpack_require__(34463);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--secondary';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Note__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.note",
        description: "The default label used for the Note admonition (:::note)",
        children: "note"
    })
};
function AdmonitionTypeNote(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
45339(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeTip)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_5 = __webpack_require__(13526);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(3800);
/* import */ var _theme_Admonition_Icon_Tip__rspack_import_4 = __webpack_require__(23786);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--success';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Tip__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.tip",
        description: "The default label used for the Tip admonition (:::tip)",
        children: "tip"
    })
};
function AdmonitionTypeTip(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
63094(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeWarning)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_5 = __webpack_require__(13526);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(3800);
/* import */ var _theme_Admonition_Icon_Warning__rspack_import_4 = __webpack_require__(49103);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--warning';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Warning__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.warning",
        description: "The default label used for the Warning admonition (:::warning)",
        children: "warning"
    })
};
function AdmonitionTypeWarning(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
59108(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _theme_Admonition_Type_Note__rspack_import_2 = __webpack_require__(70384);
/* import */ var _theme_Admonition_Type_Tip__rspack_import_3 = __webpack_require__(45339);
/* import */ var _theme_Admonition_Type_Info__rspack_import_4 = __webpack_require__(3028);
/* import */ var _theme_Admonition_Type_Warning__rspack_import_5 = __webpack_require__(63094);
/* import */ var _theme_Admonition_Type_Danger__rspack_import_6 = __webpack_require__(50887);
/* import */ var _theme_Admonition_Type_Caution__rspack_import_7 = __webpack_require__(23779);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






const admonitionTypes = {
    note: _theme_Admonition_Type_Note__rspack_import_2/* ["default"] */.A,
    tip: _theme_Admonition_Type_Tip__rspack_import_3/* ["default"] */.A,
    info: _theme_Admonition_Type_Info__rspack_import_4/* ["default"] */.A,
    warning: _theme_Admonition_Type_Warning__rspack_import_5/* ["default"] */.A,
    danger: _theme_Admonition_Type_Danger__rspack_import_6/* ["default"] */.A
};
// Undocumented legacy admonition type aliases
// Provide hardcoded/untranslated retrocompatible label
// See also https://github.com/facebook/docusaurus/issues/7767
const admonitionAliases = {
    secondary: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Type_Note__rspack_import_2/* ["default"] */.A, {
            title: "secondary",
            ...props
        }),
    important: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Type_Info__rspack_import_4/* ["default"] */.A, {
            title: "important",
            ...props
        }),
    success: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Type_Tip__rspack_import_3/* ["default"] */.A, {
            title: "success",
            ...props
        }),
    caution: _theme_Admonition_Type_Caution__rspack_import_7/* ["default"] */.A
};
/* export default */ const __rspack_default_export = ({
    ...admonitionTypes,
    ...admonitionAliases
});


},
97789(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (Admonition)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(5956);
/* import */ var _theme_Admonition_Types__rspack_import_2 = __webpack_require__(59108);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function getAdmonitionTypeComponent(type) {
    const component = _theme_Admonition_Types__rspack_import_2/* ["default"] */.A[type];
    if (component) {
        return component;
    }
    console.warn(`No admonition component found for admonition type "${type}". Using Info as fallback.`);
    return _theme_Admonition_Types__rspack_import_2/* ["default"].info */.A.info;
}
function Admonition(unprocessedProps) {
    const props = (0,_docusaurus_theme_common__rspack_import_3/* .processAdmonitionProps */.c)(unprocessedProps);
    const AdmonitionTypeComponent = getAdmonitionTypeComponent(props.type);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(AdmonitionTypeComponent, {
        ...props
    });
}


},
11604(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BackToTopButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_5 = __webpack_require__(13526);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _docusaurus_theme_common__rspack_import_6 = __webpack_require__(94630);
/* import */ var _docusaurus_theme_common_internal__rspack_import_4 = __webpack_require__(77492);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(88964);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function BackToTopButton() {
    const { shown, scrollToTop } = (0,_docusaurus_theme_common_internal__rspack_import_4/* .useBackToTopButton */.H)({
        threshold: 300
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.BackToTopButton.buttonAriaLabel',
            message: 'Scroll back to top',
            description: 'The ARIA label for the back to top button'
        }),
        className: (0,clsx__rspack_import_5/* ["default"] */.A)('clean-btn', _docusaurus_theme_common__rspack_import_6/* .ThemeClassNames.common.backToTopButton */.G.common.backToTopButton, (_styles_module_css__rspack_import_3_default().backToTopButton), shown && (_styles_module_css__rspack_import_3_default().backToTopButtonShow)),
        type: "button",
        onClick: scrollToTop
    });
}


},
7743(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeInline)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
// Simple component used to render inline code blocks
// its purpose is to be swizzled and customized
// MDX 1 used to have a inlineCode comp, see https://mdxjs.com/migrating/v2/
function CodeInline(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
        ...props
    });
}


},
93843(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (Details)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_4 = __webpack_require__(13526);
/* import */ var _docusaurus_theme_common_Details__rspack_import_2 = __webpack_require__(28743);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(31761);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses = 'alert alert--info';
function Details({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common_Details__rspack_import_2/* .Details */.B, {
        ...props,
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(InfimaClasses, (_styles_module_css__rspack_import_3_default().details), props.className)
    });
}


},
51854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IconCopy)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconCopy(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fill: "currentColor",
            d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
        })
    });
}


},
6186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IconSuccess)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconSuccess(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fill: "currentColor",
            d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
        })
    });
}


},
6299(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IconWordWrap)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconWordWrap(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fill: "currentColor",
            d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
        })
    });
}


},
43602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXA)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_4 = __webpack_require__(13526);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(59078);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(157);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function MDXA(props) {
    // MDX Footnotes have ids such as <a id="user-content-fn-1-953011" ...>
    const anchorTargetClassName = (0,_docusaurus_theme_common__rspack_import_3/* .useAnchorTargetClassName */.v)(props.id);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
        ...props,
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(anchorTargetClassName, props.className)
    });
}


},
22549(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXCode)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _theme_CodeBlock__rspack_import_2 = __webpack_require__(96125);
/* import */ var _theme_CodeInline__rspack_import_3 = __webpack_require__(7743);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function shouldBeInline(props) {
    return(// empty code blocks have no props.children,
    // see https://github.com/facebook/docusaurus/pull/9704
    typeof props.children !== 'undefined' && react__rspack_import_1.Children.toArray(props.children).every((el)=>typeof el === 'string' && !el.includes('\n')));
}
function MDXCode(props) {
    return shouldBeInline(props) ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeInline__rspack_import_3/* ["default"] */.A, {
        ...props
    }) : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock__rspack_import_2/* ["default"] */.A, {
        ...props
    });
}


},
38128(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXDetails)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _theme_Details__rspack_import_2 = __webpack_require__(93843);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function MDXDetails(props) {
    const items = react__rspack_import_1.Children.toArray(props.children);
    // Split summary item from the rest to pass it as a separate prop to the
    // Details theme component
    const summary = items.find((item)=>/*#__PURE__*/ react__rspack_import_1.isValidElement(item) && item.type === 'summary');
    const children = /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: items.filter((item)=>item !== summary)
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Details__rspack_import_2/* ["default"] */.A, {
        ...props,
        summary: summary,
        children: children
    });
}


},
93068(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXHeading)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _theme_Heading__rspack_import_2 = __webpack_require__(71807);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function MDXHeading(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_2/* ["default"] */.A, {
        ...props
    });
}


},
38526(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXImg)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_3 = __webpack_require__(13526);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(55386);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function transformImgClassName(className) {
    return (0,clsx__rspack_import_3/* ["default"] */.A)(className, (_styles_module_css__rspack_import_2_default().img));
}
function MDXImg(props) {
    return(// eslint-disable-next-line jsx-a11y/alt-text
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        decoding: "async",
        loading: "lazy",
        ...props,
        className: transformImgClassName(props.className)
    }));
}


},
10955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXLi)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_4 = __webpack_require__(13526);
/* import */ var _docusaurus_useBrokenLinks__rspack_import_2 = __webpack_require__(36617);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(157);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function MDXLi(props) {
    // MDX Footnotes have ids such as <li id="user-content-fn-1-953011">
    (0,_docusaurus_useBrokenLinks__rspack_import_2/* ["default"] */.A)().collectAnchor(props.id);
    const anchorTargetClassName = (0,_docusaurus_theme_common__rspack_import_3/* .useAnchorTargetClassName */.v)(props.id);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(anchorTargetClassName, props.className),
        ...props
    });
}


},
35155(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXPre)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function MDXPre(props) {
    // With MDX 2, this element is only used for fenced code blocks
    // It always receives a MDXComponents/Code as children
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: props.children
    });
}


},
8870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXUl)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_3 = __webpack_require__(13526);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(47298);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function transformUlClassName(className) {
    // Fix https://github.com/facebook/docusaurus/issues/9098
    if (typeof className === 'undefined') {
        return undefined;
    }
    return (0,clsx__rspack_import_3/* ["default"] */.A)(className, // This class is set globally by GitHub/MDX. We keep the global class, and
    // add another class to get a task list without the default ul styling
    // See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
    className?.includes('contains-task-list') && (_styles_module_css__rspack_import_2_default().containsTaskList));
}
function MDXUl(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
        ...props,
        className: transformUlClassName(props.className)
    });
}


},
16130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _docusaurus_Head__rspack_import_2 = __webpack_require__(34924);
/* import */ var _theme_MDXComponents_Code__rspack_import_3 = __webpack_require__(22549);
/* import */ var _theme_MDXComponents_A__rspack_import_4 = __webpack_require__(43602);
/* import */ var _theme_MDXComponents_Pre__rspack_import_5 = __webpack_require__(35155);
/* import */ var _theme_MDXComponents_Details__rspack_import_6 = __webpack_require__(38128);
/* import */ var _theme_MDXComponents_Heading__rspack_import_7 = __webpack_require__(93068);
/* import */ var _theme_MDXComponents_Ul__rspack_import_8 = __webpack_require__(8870);
/* import */ var _theme_MDXComponents_Li__rspack_import_9 = __webpack_require__(10955);
/* import */ var _theme_MDXComponents_Img__rspack_import_10 = __webpack_require__(38526);
/* import */ var _theme_Admonition__rspack_import_11 = __webpack_require__(97789);
/* import */ var _theme_Mermaid__rspack_import_12 = __webpack_require__(89986);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 











const MDXComponents = {
    Head: _docusaurus_Head__rspack_import_2/* ["default"] */.A,
    details: _theme_MDXComponents_Details__rspack_import_6/* ["default"] */.A,
    Details: _theme_MDXComponents_Details__rspack_import_6/* ["default"] */.A,
    code: _theme_MDXComponents_Code__rspack_import_3/* ["default"] */.A,
    a: _theme_MDXComponents_A__rspack_import_4/* ["default"] */.A,
    pre: _theme_MDXComponents_Pre__rspack_import_5/* ["default"] */.A,
    ul: _theme_MDXComponents_Ul__rspack_import_8/* ["default"] */.A,
    li: _theme_MDXComponents_Li__rspack_import_9/* ["default"] */.A,
    img: _theme_MDXComponents_Img__rspack_import_10/* ["default"] */.A,
    h1: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h1",
            ...props
        }),
    h2: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h2",
            ...props
        }),
    h3: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h3",
            ...props
        }),
    h4: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h4",
            ...props
        }),
    h5: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h5",
            ...props
        }),
    h6: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h6",
            ...props
        }),
    admonition: _theme_Admonition__rspack_import_11/* ["default"] */.A,
    mermaid: _theme_Mermaid__rspack_import_12/* ["default"] */.A
};
/* export default */ const __rspack_default_export = (MDXComponents);


},
50879(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXContent)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(89999);
/* import */ var _theme_MDXComponents__rspack_import_2 = __webpack_require__(16130);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function MDXContent({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_mdx_js_react__rspack_import_3/* .MDXProvider */.x, {
        components: _theme_MDXComponents__rspack_import_2/* ["default"] */.A,
        children: children
    });
}


},
28743(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  B: () => (Details)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_6 = __webpack_require__(13526);
/* import */ var _docusaurus_useBrokenLinks__rspack_import_2 = __webpack_require__(36617);
/* import */ var _docusaurus_useIsBrowser__rspack_import_3 = __webpack_require__(78095);
/* import */ var _Collapsible__rspack_import_5 = __webpack_require__(12501);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(97777);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function isInSummary(node) {
    if (!node) {
        return false;
    }
    return node.tagName === 'SUMMARY' || isInSummary(node.parentElement);
}
function hasParent(node, parent) {
    if (!node) {
        return false;
    }
    return node === parent || hasParent(node.parentElement, parent);
}
/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */ function Details({ summary, children, ...props }) {
    (0,_docusaurus_useBrokenLinks__rspack_import_2/* ["default"] */.A)().collectAnchor(props.id);
    const isBrowser = (0,_docusaurus_useIsBrowser__rspack_import_3/* ["default"] */.A)();
    const detailsRef = (0,react__rspack_import_1.useRef)(null);
    const { collapsed, setCollapsed } = (0,_Collapsible__rspack_import_5/* .useCollapsible */.u)({
        initialState: !props.open
    });
    // Use a separate state for the actual details prop, because it must be set
    // only after animation completes, otherwise close animations won't work
    const [open, setOpen] = (0,react__rspack_import_1.useState)(props.open);
    const summaryElement = /*#__PURE__*/ react__rspack_import_1.isValidElement(summary) ? summary : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("summary", {
        children: summary ?? 'Details'
    });
    return(// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("details", {
        ...props,
        ref: detailsRef,
        open: open,
        "data-collapsed": collapsed,
        className: (0,clsx__rspack_import_6/* ["default"] */.A)((_styles_module_css__rspack_import_4_default().details), isBrowser && (_styles_module_css__rspack_import_4_default().isBrowser), props.className),
        onMouseDown: (e)=>{
            const target = e.target;
            // Prevent a double-click to highlight summary text
            if (isInSummary(target) && e.detail > 1) {
                e.preventDefault();
            }
        },
        onClick: (e)=>{
            e.stopPropagation(); // For isolation of multiple nested details/summary
            const target = e.target;
            const shouldToggle = isInSummary(target) && hasParent(target, detailsRef.current);
            if (!shouldToggle) {
                return;
            }
            e.preventDefault();
            if (collapsed) {
                setCollapsed(false);
                setOpen(true);
            } else {
                setCollapsed(true);
            // Don't do this, it breaks close animation!
            // setOpen(false);
            }
        },
        children: [
            summaryElement,
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_Collapsible__rspack_import_5/* .Collapsible */.N, {
                lazy: false,
                collapsed: collapsed,
                onCollapseTransitionEnd: (newCollapsed)=>{
                    setCollapsed(newCollapsed);
                    setOpen(!newCollapsed);
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: (_styles_module_css__rspack_import_4_default().collapsibleContent),
                    children: children
                })
            })
        ]
    }));
} //# sourceMappingURL=index.js.map


},
77492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  H: () => (useBackToTopButton)
});
/* import */ var react__rspack_import_0 = __webpack_require__(58101);
/* import */ var _utils_scrollUtils__rspack_import_1 = __webpack_require__(96821);
/* import */ var _utils_useLocationChange__rspack_import_2 = __webpack_require__(86099);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


/** Wires the logic for the back to top button. */ function useBackToTopButton({ threshold }) {
    const [shown, setShown] = (0,react__rspack_import_0.useState)(false);
    const isFocusedAnchor = (0,react__rspack_import_0.useRef)(false);
    const { startScroll, cancelScroll } = (0,_utils_scrollUtils__rspack_import_1/* .useSmoothScrollTo */.gk)();
    (0,_utils_scrollUtils__rspack_import_1/* .useScrollPosition */.Mq)(({ scrollY: scrollTop }, lastPosition)=>{
        const lastScrollTop = lastPosition?.scrollY;
        // Component is just being mounted. Not really a scroll event from the user.
        // Ignore it.
        if (!lastScrollTop) {
            return;
        }
        if (isFocusedAnchor.current) {
            // This scroll position change is triggered by navigating to an anchor.
            // Ignore it.
            isFocusedAnchor.current = false;
        } else if (scrollTop >= lastScrollTop) {
            // The user has scrolled down to "fight against" the animation. Cancel any
            // animation under progress.
            cancelScroll();
            setShown(false);
        } else if (scrollTop < threshold) {
            // Scrolled to the minimum position; hide the button.
            setShown(false);
        } else if (scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
            setShown(true);
        }
    });
    (0,_utils_useLocationChange__rspack_import_2/* .useLocationChange */.$)((locationChangeEvent)=>{
        if (locationChangeEvent.location.hash) {
            isFocusedAnchor.current = true;
            setShown(false);
        }
    });
    return {
        shown,
        scrollToTop: ()=>startScroll(0)
    };
} //# sourceMappingURL=useBackToTopButton.js.map


},
20100(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  f: () => (useCodeWordWrap)
});
/* import */ var react__rspack_import_0 = __webpack_require__(58101);
/* import */ var _useMutationObserver__rspack_import_1 = __webpack_require__(39908);


// Callback fires when the "hidden" attribute of a tabpanel changes
// See https://github.com/facebook/docusaurus/pull/7485
function useTabBecameVisibleCallback(codeBlockRef, callback) {
    const [hiddenTabElement, setHiddenTabElement] = (0,react__rspack_import_0.useState)();
    const updateHiddenTabElement = (0,react__rspack_import_0.useCallback)(()=>{
        // No need to observe non-hidden tabs
        // + we want to force a re-render when a tab becomes visible
        setHiddenTabElement(codeBlockRef.current?.closest('[role=tabpanel][hidden]'));
    }, [
        codeBlockRef,
        setHiddenTabElement
    ]);
    (0,react__rspack_import_0.useEffect)(()=>{
        updateHiddenTabElement();
    }, [
        updateHiddenTabElement
    ]);
    (0,_useMutationObserver__rspack_import_1/* .useMutationObserver */.P)(hiddenTabElement, (mutations)=>{
        mutations.forEach((mutation)=>{
            if (mutation.type === 'attributes' && mutation.attributeName === 'hidden') {
                callback();
                updateHiddenTabElement();
            }
        });
    }, {
        attributes: true,
        characterData: false,
        childList: false,
        subtree: false
    });
}
function useCodeWordWrap() {
    const [isEnabled, setIsEnabled] = (0,react__rspack_import_0.useState)(false);
    const [isCodeScrollable, setIsCodeScrollable] = (0,react__rspack_import_0.useState)(false);
    const codeBlockRef = (0,react__rspack_import_0.useRef)(null);
    const toggle = (0,react__rspack_import_0.useCallback)(()=>{
        const codeElement = codeBlockRef.current.querySelector('code');
        if (isEnabled) {
            codeElement.removeAttribute('style');
        } else {
            codeElement.style.whiteSpace = 'pre-wrap';
            // When code wrap is enabled, we want to avoid a scrollbar in any case
            // Ensure that very very long words/strings/tokens still wrap
            codeElement.style.overflowWrap = 'anywhere';
        }
        setIsEnabled((value)=>!value);
    }, [
        codeBlockRef,
        isEnabled
    ]);
    const updateCodeIsScrollable = (0,react__rspack_import_0.useCallback)(()=>{
        const { scrollWidth, clientWidth } = codeBlockRef.current;
        const isScrollable = scrollWidth > clientWidth || codeBlockRef.current.querySelector('code').hasAttribute('style');
        setIsCodeScrollable(isScrollable);
    }, [
        codeBlockRef
    ]);
    useTabBecameVisibleCallback(codeBlockRef, updateCodeIsScrollable);
    (0,react__rspack_import_0.useEffect)(()=>{
        updateCodeIsScrollable();
    }, [
        isEnabled,
        updateCodeIsScrollable
    ]);
    (0,react__rspack_import_0.useEffect)(()=>{
        window.addEventListener('resize', updateCodeIsScrollable, {
            passive: true
        });
        return ()=>{
            window.removeEventListener('resize', updateCodeIsScrollable);
        };
    }, [
        updateCodeIsScrollable
    ]);
    return {
        codeBlockRef,
        isEnabled,
        isCodeScrollable,
        toggle
    };
} //# sourceMappingURL=useCodeWordWrap.js.map


},
39908(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  P: () => (useMutationObserver)
});
/* import */ var react__rspack_import_0 = __webpack_require__(58101);
/* import */ var _utils_reactUtils__rspack_import_1 = __webpack_require__(25919);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

const DefaultOptions = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
};
function useMutationObserver(target, callback, options = DefaultOptions) {
    const stableCallback = (0,_utils_reactUtils__rspack_import_1/* .useEvent */._q)(callback);
    // MutationObserver options are not nested much
    // so this should be to memo options in 99%
    // TODO handle options.attributeFilter array
    const stableOptions = (0,_utils_reactUtils__rspack_import_1/* .useShallowMemoObject */.Be)(options);
    (0,react__rspack_import_0.useEffect)(()=>{
        const observer = new MutationObserver(stableCallback);
        if (target) {
            observer.observe(target, stableOptions);
        }
        return ()=>observer.disconnect();
    }, [
        target,
        stableCallback,
        stableOptions
    ]);
} //# sourceMappingURL=useMutationObserver.js.map


},
1847(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (usePrismTheme)
});
/* import */ var _contexts_colorMode__rspack_import_1 = __webpack_require__(24478);
/* import */ var _utils_useThemeConfig__rspack_import_0 = __webpack_require__(95437);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

/**
 * Returns a color-mode-dependent Prism theme: whatever the user specified in
 * the config. Falls back to `palenight`.
 */ function usePrismTheme() {
    const { prism } = (0,_utils_useThemeConfig__rspack_import_0/* .useThemeConfig */.p)();
    const { colorMode } = (0,_contexts_colorMode__rspack_import_1/* .useColorMode */.G)();
    const lightModeTheme = prism.theme;
    const darkModeTheme = prism.darkTheme || lightModeTheme;
    const prismTheme = colorMode === 'dark' ? darkModeTheme : lightModeTheme;
    return prismTheme;
} //# sourceMappingURL=usePrismTheme.js.map


},
5956(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  c: () => (processAdmonitionProps)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children) {
    const items = react__rspack_import_1.Children.toArray(children);
    const mdxAdmonitionTitleWrapper = items.find((item)=>/*#__PURE__*/ react__rspack_import_1.isValidElement(item) && item.type === 'mdxAdmonitionTitle');
    const rest = items.filter((item)=>item !== mdxAdmonitionTitleWrapper);
    const mdxAdmonitionTitle = mdxAdmonitionTitleWrapper?.props.children;
    return {
        mdxAdmonitionTitle,
        rest: rest.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: rest
        }) : null
    };
}
function processAdmonitionProps(props) {
    const { mdxAdmonitionTitle, rest } = extractMDXAdmonitionTitle(props.children);
    const title = props.title ?? mdxAdmonitionTitle;
    return {
        ...props,
        // Do not return "title: undefined" prop
        // this might create unwanted props overrides when merging props
        // For example: {...default,...props}
        ...title && {
            title
        },
        children: rest
    };
} //# sourceMappingURL=admonitionUtils.js.map


},
10796(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  DX: () => (parseClassNameLanguage),
  Li: () => (parseLines),
  M$: () => (getPrismCssVariables),
  _u: () => (containsLineNumbers),
  wt: () => (parseCodeBlockTitle)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var parse_numeric_range__rspack_import_2 = __webpack_require__(34809);
/* import */ var parse_numeric_range__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



const codeBlockTitleRegex = /title=(?<quote>["'])(?<title>.*?)\1/;
const metastringLinesRangeRegex = /\{(?<range>[\d,-]+)\}/;
// Supported types of highlight comments
const popularCommentPatterns = {
    js: {
        start: '\\/\\/',
        end: ''
    },
    jsBlock: {
        start: '\\/\\*',
        end: '\\*\\/'
    },
    jsx: {
        start: '\\{\\s*\\/\\*',
        end: '\\*\\/\\s*\\}'
    },
    bash: {
        start: '#',
        end: ''
    },
    html: {
        start: '<!--',
        end: '-->'
    }
};
const commentPatterns = {
    ...popularCommentPatterns,
    // minor comment styles
    lua: {
        start: '--',
        end: ''
    },
    wasm: {
        start: '\\;\\;',
        end: ''
    },
    tex: {
        start: '%',
        end: ''
    },
    vb: {
        start: "['‘’]",
        end: ''
    },
    vbnet: {
        start: "(?:_\\s*)?['‘’]",
        end: ''
    },
    rem: {
        start: '[Rr][Ee][Mm]\\b',
        end: ''
    },
    f90: {
        start: '!',
        end: ''
    },
    ml: {
        start: '\\(\\*',
        end: '\\*\\)'
    },
    cobol: {
        start: '\\*>',
        end: ''
    }
};
const popularCommentTypes = Object.keys(popularCommentPatterns);
function getCommentPattern(languages, magicCommentDirectives) {
    // To be more reliable, the opening and closing comment must match
    const commentPattern = languages.map((lang)=>{
        const { start, end } = commentPatterns[lang];
        return `(?:${start}\\s*(${magicCommentDirectives.flatMap((d)=>[
                d.line,
                d.block?.start,
                d.block?.end
            ].filter(Boolean)).join('|')})\\s*${end})`;
    }).join('|');
    // White space is allowed, but otherwise it should be on it's own line
    return new RegExp(`^\\s*(?:${commentPattern})\\s*$`);
}
/**
 * Select comment styles based on language
 */ function getAllMagicCommentDirectiveStyles(lang, magicCommentDirectives) {
    switch(lang){
        case 'js':
        case 'javascript':
        case 'ts':
        case 'typescript':
            return getCommentPattern([
                'js',
                'jsBlock'
            ], magicCommentDirectives);
        case 'jsx':
        case 'tsx':
            return getCommentPattern([
                'js',
                'jsBlock',
                'jsx'
            ], magicCommentDirectives);
        case 'html':
            return getCommentPattern([
                'js',
                'jsBlock',
                'html'
            ], magicCommentDirectives);
        case 'python':
        case 'py':
        case 'bash':
            return getCommentPattern([
                'bash'
            ], magicCommentDirectives);
        case 'markdown':
        case 'md':
            // Text uses HTML, front matter uses bash
            return getCommentPattern([
                'html',
                'jsx',
                'bash'
            ], magicCommentDirectives);
        case 'tex':
        case 'latex':
        case 'matlab':
            return getCommentPattern([
                'tex'
            ], magicCommentDirectives);
        case 'lua':
        case 'haskell':
            return getCommentPattern([
                'lua'
            ], magicCommentDirectives);
        case 'sql':
            return getCommentPattern([
                'lua',
                'jsBlock'
            ], magicCommentDirectives);
        case 'wasm':
            return getCommentPattern([
                'wasm'
            ], magicCommentDirectives);
        case 'vb':
        case 'vba':
        case 'visual-basic':
            return getCommentPattern([
                'vb',
                'rem'
            ], magicCommentDirectives);
        case 'vbnet':
            return getCommentPattern([
                'vbnet',
                'rem'
            ], magicCommentDirectives);
        case 'batch':
            return getCommentPattern([
                'rem'
            ], magicCommentDirectives);
        case 'basic':
            return getCommentPattern([
                'rem',
                'f90'
            ], magicCommentDirectives);
        case 'fsharp':
            return getCommentPattern([
                'js',
                'ml'
            ], magicCommentDirectives);
        case 'ocaml':
        case 'sml':
            return getCommentPattern([
                'ml'
            ], magicCommentDirectives);
        case 'fortran':
            return getCommentPattern([
                'f90'
            ], magicCommentDirectives);
        case 'cobol':
            return getCommentPattern([
                'cobol'
            ], magicCommentDirectives);
        default:
            // All popular comment types
            return getCommentPattern(popularCommentTypes, magicCommentDirectives);
    }
}
function parseCodeBlockTitle(metastring) {
    return metastring?.match(codeBlockTitleRegex)?.groups.title ?? '';
}
function getMetaLineNumbersStart(metastring) {
    const showLineNumbersMeta = metastring?.split(' ').find((str)=>str.startsWith('showLineNumbers'));
    if (showLineNumbersMeta) {
        if (showLineNumbersMeta.startsWith('showLineNumbers=')) {
            const value = showLineNumbersMeta.replace('showLineNumbers=', '');
            return parseInt(value, 10);
        }
        return 1;
    }
    return undefined;
}
function getLineNumbersStart({ showLineNumbers, metastring }) {
    const defaultStart = 1;
    if (typeof showLineNumbers === 'boolean') {
        return showLineNumbers ? defaultStart : undefined;
    }
    if (typeof showLineNumbers === 'number') {
        return showLineNumbers;
    }
    return getMetaLineNumbersStart(metastring);
}
// TODO Docusaurus v4: remove, only kept for internal retro-compatibility
//  See https://github.com/facebook/docusaurus/pull/11153
function containsLineNumbers(metastring) {
    return Boolean(metastring?.includes('showLineNumbers'));
}
function parseCodeLinesFromMetastring(code, { metastring, magicComments }) {
    // Highlighted lines specified in props: don't parse the content
    if (metastring && metastringLinesRangeRegex.test(metastring)) {
        const linesRange = metastring.match(metastringLinesRangeRegex).groups.range;
        if (magicComments.length === 0) {
            throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${metastring}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);
        }
        const metastringRangeClassName = magicComments[0].className;
        const lines = parse_numeric_range__rspack_import_2_default()(linesRange).filter((n)=>n > 0).map((n)=>[
                n - 1,
                [
                    metastringRangeClassName
                ]
            ]);
        return {
            lineClassNames: Object.fromEntries(lines),
            code
        };
    }
    return null;
}
function parseCodeLinesFromContent(code, params) {
    const { language, magicComments } = params;
    if (language === undefined) {
        return {
            lineClassNames: {},
            code
        };
    }
    const directiveRegex = getAllMagicCommentDirectiveStyles(language, magicComments);
    // Go through line by line
    const lines = code.split(/\r?\n/);
    const blocks = Object.fromEntries(magicComments.map((d)=>[
            d.className,
            {
                start: 0,
                range: ''
            }
        ]));
    const lineToClassName = Object.fromEntries(magicComments.filter((d)=>d.line).map(({ className, line })=>[
            line,
            className
        ]));
    const blockStartToClassName = Object.fromEntries(magicComments.filter((d)=>d.block).map(({ className, block })=>[
            block.start,
            className
        ]));
    const blockEndToClassName = Object.fromEntries(magicComments.filter((d)=>d.block).map(({ className, block })=>[
            block.end,
            className
        ]));
    for(let lineNumber = 0; lineNumber < lines.length;){
        const line = lines[lineNumber];
        const match = line.match(directiveRegex);
        if (!match) {
            // Lines without directives are unchanged
            lineNumber += 1;
            continue;
        }
        const directive = match.slice(1).find((item)=>item !== undefined);
        if (lineToClassName[directive]) {
            blocks[lineToClassName[directive]].range += `${lineNumber},`;
        } else if (blockStartToClassName[directive]) {
            blocks[blockStartToClassName[directive]].start = lineNumber;
        } else if (blockEndToClassName[directive]) {
            blocks[blockEndToClassName[directive]].range += `${blocks[blockEndToClassName[directive]].start}-${lineNumber - 1},`;
        }
        lines.splice(lineNumber, 1);
    }
    const lineClassNames = {};
    Object.entries(blocks).forEach(([className, { range }])=>{
        parse_numeric_range__rspack_import_2_default()(range).forEach((l)=>{
            lineClassNames[l] ??= [];
            lineClassNames[l].push(className);
        });
    });
    return {
        code: lines.join('\n'),
        lineClassNames
    };
}
/**
 * Parses the code content, strips away any magic comments, and returns the
 * clean content and the highlighted lines marked by the comments or metastring.
 *
 * If the metastring contains a range, the `content` will be returned as-is
 * without any parsing. The returned `lineClassNames` will be a map from that
 * number range to the first magic comment config entry (which _should_ be for
 * line highlight directives.)
 */ function parseLines(code, params) {
    // Historical behavior: we remove last line break
    const newCode = code.replace(/\r?\n$/, '');
    // Historical behavior: we try one strategy after the other
    // we don't support mixing metastring ranges + magic comments
    return parseCodeLinesFromMetastring(newCode, {
        ...params
    }) ?? parseCodeLinesFromContent(newCode, {
        ...params
    });
}
/**
 * Gets the language name from the class name (set by MDX).
 * e.g. `"language-javascript"` => `"javascript"`.
 * Returns undefined if there is no language class name.
 */ function parseClassNameLanguage(className) {
    if (!className) {
        return undefined;
    }
    const languageClassName = className.split(' ').find((str)=>str.startsWith('language-'));
    return languageClassName?.replace(/language-/, '');
}
// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language) {
    return language?.toLowerCase();
}
function getLanguage(params) {
    return normalizeLanguage(params.language ?? parseClassNameLanguage(params.className) ?? params.defaultLanguage) ?? 'text'; // There's always a language, required by Prism;
}
/**
 * This ensures that we always have the code block language as className
 * For MDX code blocks this is provided automatically by MDX
 * For JSX code blocks, the language gets added by this function
 * This ensures both cases lead to a consistent HTML output
 */ function ensureLanguageClassName({ className, language }) {
    return clsx(className, language && !className?.includes(`language-${language}`) && `language-${language}`);
}
function createCodeBlockMetadata(params) {
    const language = getLanguage({
        language: params.language,
        defaultLanguage: params.defaultLanguage,
        className: params.className
    });
    const { lineClassNames, code } = parseLines(params.code, {
        metastring: params.metastring,
        magicComments: params.magicComments,
        language
    });
    const className = ensureLanguageClassName({
        className: params.className,
        language
    });
    const title = parseCodeBlockTitle(params.metastring) || params.title;
    const lineNumbersStart = getLineNumbersStart({
        showLineNumbers: params.showLineNumbers,
        metastring: params.metastring
    });
    return {
        codeInput: params.code,
        code,
        className,
        language,
        title,
        lineNumbersStart,
        lineClassNames
    };
}
function getPrismCssVariables(prismTheme) {
    const mapping = {
        color: '--prism-color',
        backgroundColor: '--prism-background-color'
    };
    const properties = {};
    Object.entries(prismTheme.plain).forEach(([key, value])=>{
        const varName = mapping[key];
        if (varName && typeof value === 'string') {
            properties[varName] = value;
        }
    });
    return properties;
}
const CodeBlockContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(null)));
function CodeBlockContextProvider({ metadata, wordWrap, children }) {
    // Should we optimize this in 2 contexts?
    // Unlike metadata, wordWrap is stateful and likely to trigger re-renders
    const value = useMemo(()=>{
        return {
            metadata,
            wordWrap
        };
    }, [
        metadata,
        wordWrap
    ]);
    return /*#__PURE__*/ _jsx(CodeBlockContext.Provider, {
        value: value,
        children: children
    });
}
function useCodeBlockContext() {
    const value = useContext(CodeBlockContext);
    if (value === null) {
        throw new ReactContextError('CodeBlockContextProvider');
    }
    return value;
} //# sourceMappingURL=codeBlockUtils.js.map


},
77675(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (About)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Translate__rspack_import_1 = __webpack_require__(46218);
/* import */ var _docusaurus_useBrokenLinks__rspack_import_2 = __webpack_require__(36617);
/* import */ var _site_src_css_collection_module_css__rspack_import_3 = __webpack_require__(34348);
/* import */ var _site_src_css_collection_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_site_src_css_collection_module_css__rspack_import_3);
/* import */ var _theme_BackToTopButton__rspack_import_4 = __webpack_require__(11604);
/* import */ var _theme_Layout__rspack_import_5 = __webpack_require__(1419);
/* import */ var _theme_MDXContent__rspack_import_6 = __webpack_require__(50879);
/* import */ var _content_mdx__rspack_import_7 = __webpack_require__(77268);
/* import */ var _styles_module_css__rspack_import_8 = __webpack_require__(55973);
/* import */ var _styles_module_css__rspack_import_8_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_8);









function About() {
    (0,_docusaurus_useBrokenLinks__rspack_import_2/* ["default"] */.A)().collectAnchor('about-comments');
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_5/* ["default"] */.A, {
        title: (0,_docusaurus_Translate__rspack_import_1/* .translate */.T)({
            id: 'about.title',
            message: '自我介紹'
        }),
        description: (0,_docusaurus_Translate__rspack_import_1/* .translate */.T)({
            id: 'about.description',
            message: 'Aris_QwQ的自我介紹'
        }),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("main", {
                className: (_site_src_css_collection_module_css__rspack_import_3_default().page),
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                    className: `${(_site_src_css_collection_module_css__rspack_import_3_default().container)} ${(_styles_module_css__rspack_import_8_default().container)}`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("header", {
                            className: `${(_site_src_css_collection_module_css__rspack_import_3_default().header)} ${(_styles_module_css__rspack_import_8_default().header)}`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            className: (_styles_module_css__rspack_import_8_default().eyebrow),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_1/* ["default"] */.A, {
                                                id: "about.label",
                                                children: "關於我"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                                            className: (_site_src_css_collection_module_css__rspack_import_3_default().title),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_1/* ["default"] */.A, {
                                                id: "about.greeting",
                                                children: "你好，我是Aris_QwQ。"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                    className: (_styles_module_css__rspack_import_8_default().avatar),
                                    src: "/img/avatar.png",
                                    alt: "",
                                    width: "96",
                                    height: "96"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: (_styles_module_css__rspack_import_8_default().layout),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("article", {
                                className: (_styles_module_css__rspack_import_8_default().content),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXContent__rspack_import_6/* ["default"] */.A, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_content_mdx__rspack_import_7/* ["default"] */.Ay, {})
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BackToTopButton__rspack_import_4/* ["default"] */.A, {})
        ]
    });
}


},
22373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(1847);
/* import */ var _docusaurus_theme_common__rspack_import_6 = __webpack_require__(94630);
/* import */ var _docusaurus_theme_common_internal__rspack_import_4 = __webpack_require__(10796);
/* import */ var _site_src_lib_utils__rspack_import_5 = __webpack_require__(76345);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(28571);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);






function CodeBlockContainer({ as: As, ...props }) {
    const prismTheme = (0,_docusaurus_theme_common__rspack_import_3/* .usePrismTheme */.A)();
    const prismCssVariables = (0,_docusaurus_theme_common_internal__rspack_import_4/* .getPrismCssVariables */.M$)(prismTheme);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(As, {
        ...props,
        style: prismCssVariables,
        className: (0,_site_src_lib_utils__rspack_import_5.cn)(props.className, (_styles_module_css__rspack_import_2_default().codeBlockContainer), _docusaurus_theme_common__rspack_import_6/* .ThemeClassNames.common.codeBlock */.G.common.codeBlock)
    });
}


},
14239(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockJSX)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _site_src_lib_utils__rspack_import_4 = __webpack_require__(76345);
/* import */ var _theme_CodeBlock_Container__rspack_import_1 = __webpack_require__(22373);
/* import */ var react__rspack_import_2 = __webpack_require__(58101);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(16921);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);





// <pre> tags in markdown map to CodeBlocks. They may contain JSX children. When
// the children is not a simple string, we just return a styled block without
// actually highlighting.
function CodeBlockJSX({ children, className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Container__rspack_import_1/* ["default"] */.A, {
        as: "pre",
        tabIndex: 0,
        className: (0,_site_src_lib_utils__rspack_import_4.cn)((_styles_module_css__rspack_import_3_default().codeBlockStandalone), 'thin-scrollbar', className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
            className: (_styles_module_css__rspack_import_3_default().codeBlockLines),
            children: children
        })
    });
}


},
85724(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockString)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_theme_common__rspack_import_9 = __webpack_require__(95437);
/* import */ var _docusaurus_theme_common__rspack_import_11 = __webpack_require__(1847);
/* import */ var _docusaurus_theme_common_internal__rspack_import_10 = __webpack_require__(10796);
/* import */ var _docusaurus_theme_common_internal__rspack_import_12 = __webpack_require__(20100);
/* import */ var _iconify_react__rspack_import_1 = __webpack_require__(77533);
/* import */ var _site_src_lib_utils__rspack_import_13 = __webpack_require__(76345);
/* import */ var _theme_CodeBlock_Container__rspack_import_2 = __webpack_require__(22373);
/* import */ var _theme_CodeBlock_CopyButton__rspack_import_3 = __webpack_require__(1143);
/* import */ var _theme_CodeBlock_Line__rspack_import_4 = __webpack_require__(8878);
/* import */ var _theme_CodeBlock_WordWrapButton__rspack_import_5 = __webpack_require__(5748);
/* import */ var prism_react_renderer__rspack_import_6 = __webpack_require__(72355);
/* import */ var react__rspack_import_7 = __webpack_require__(58101);
/* import */ var _styles_module_css__rspack_import_8 = __webpack_require__(16921);
/* import */ var _styles_module_css__rspack_import_8_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_8);












// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language) {
    return language?.toLowerCase();
}
function parseIcon(metastring) {
    const iconRegex = /icon=(?<quote>["'])(?<icon>.*?)\1/;
    const icon = metastring?.match(iconRegex)?.groups?.icon ?? '';
    if (!icon) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_iconify_react__rspack_import_1/* .Icon */.In, {
        icon: icon,
        width: "16"
    });
}
function CodeBlockString({ children, className: blockClassName = '', metastring, title: titleProp, showLineNumbers: showLineNumbersProp, language: languageProp }) {
    const { prism: { defaultLanguage, magicComments } } = (0,_docusaurus_theme_common__rspack_import_9/* .useThemeConfig */.p)();
    const language = normalizeLanguage(languageProp ?? (0,_docusaurus_theme_common_internal__rspack_import_10/* .parseClassNameLanguage */.DX)(blockClassName) ?? defaultLanguage);
    const prismTheme = (0,_docusaurus_theme_common__rspack_import_11/* .usePrismTheme */.A)();
    const wordWrap = (0,_docusaurus_theme_common_internal__rspack_import_12/* .useCodeWordWrap */.f)();
    // We still parse the metastring in case we want to support more syntax in the
    // future. Note that MDX doesn't strip quotes when parsing metastring:
    // "title=\"xyz\"" => title: "\"xyz\""
    const title = (0,_docusaurus_theme_common_internal__rspack_import_10/* .parseCodeBlockTitle */.wt)(metastring) || titleProp;
    const icon = parseIcon(metastring);
    const { lineClassNames, code } = (0,_docusaurus_theme_common_internal__rspack_import_10/* .parseLines */.Li)(children, {
        metastring,
        language,
        magicComments
    });
    const showLineNumbers = showLineNumbersProp ?? (0,_docusaurus_theme_common_internal__rspack_import_10/* .containsLineNumbers */._u)(metastring);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_CodeBlock_Container__rspack_import_2/* ["default"] */.A, {
        as: "div",
        className: (0,_site_src_lib_utils__rspack_import_13.cn)(blockClassName, language && !blockClassName.includes(`language-${language}`) && `language-${language}`),
        children: [
            title && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (_styles_module_css__rspack_import_8_default().codeBlockTitle),
                children: [
                    icon,
                    title,
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        style: {
                            flex: 1,
                            textAlign: 'right'
                        },
                        children: language
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (_styles_module_css__rspack_import_8_default().codeBlockContent),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(prism_react_renderer__rspack_import_6/* .Highlight */.f4, {
                        theme: prismTheme,
                        code: code,
                        language: language ?? 'text',
                        children: ({ className, style, tokens, getLineProps, getTokenProps })=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("pre", {
                                ref: wordWrap.codeBlockRef,
                                className: (0,_site_src_lib_utils__rspack_import_13.cn)(className, (_styles_module_css__rspack_import_8_default().codeBlock), 'thin-scrollbar'),
                                style: style,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                                    className: (0,_site_src_lib_utils__rspack_import_13.cn)((_styles_module_css__rspack_import_8_default().codeBlockLines), showLineNumbers && (_styles_module_css__rspack_import_8_default().codeBlockLinesWithNumbering)),
                                    children: tokens.map((line, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Line__rspack_import_4/* ["default"] */.A, {
                                            line: line,
                                            getLineProps: getLineProps,
                                            getTokenProps: getTokenProps,
                                            classNames: lineClassNames[i],
                                            showLineNumbers: showLineNumbers
                                        }, i))
                                })
                            })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: (_styles_module_css__rspack_import_8_default().buttonGroup),
                        children: [
                            (wordWrap.isEnabled || wordWrap.isCodeScrollable) && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_WordWrapButton__rspack_import_5/* ["default"] */.A, {
                                className: (_styles_module_css__rspack_import_8_default().codeButton),
                                onClick: ()=>wordWrap.toggle(),
                                isEnabled: wordWrap.isEnabled
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_CopyButton__rspack_import_3/* ["default"] */.A, {
                                className: (_styles_module_css__rspack_import_8_default().codeButton),
                                code: code
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


},
1143(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CopyButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Translate__rspack_import_1 = __webpack_require__(46218);
/* import */ var _site_src_lib_utils__rspack_import_7 = __webpack_require__(76345);
/* import */ var _theme_Icon_Copy__rspack_import_2 = __webpack_require__(51854);
/* import */ var _theme_Icon_Success__rspack_import_3 = __webpack_require__(6186);
/* import */ var copy_text_to_clipboard__rspack_import_6 = __webpack_require__(31859);
/* import */ var react__rspack_import_4 = __webpack_require__(58101);
/* import */ var _styles_module_css__rspack_import_5 = __webpack_require__(27101);
/* import */ var _styles_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_5);








function CopyButton({ code, className }) {
    const [isCopied, setIsCopied] = (0,react__rspack_import_4.useState)(false);
    const copyTimeout = (0,react__rspack_import_4.useRef)(undefined);
    const handleCopyCode = (0,react__rspack_import_4.useCallback)(()=>{
        (0,copy_text_to_clipboard__rspack_import_6/* ["default"] */.A)(code);
        setIsCopied(true);
        copyTimeout.current = window.setTimeout(()=>{
            setIsCopied(false);
        }, 1000);
    }, [
        code
    ]);
    (0,react__rspack_import_4.useEffect)(()=>()=>window.clearTimeout(copyTimeout.current), []);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
        type: "button",
        "aria-label": isCopied ? (0,_docusaurus_Translate__rspack_import_1/* .translate */.T)({
            id: 'theme.CodeBlock.copied',
            message: 'Copied',
            description: 'The copied button label on code blocks'
        }) : (0,_docusaurus_Translate__rspack_import_1/* .translate */.T)({
            id: 'theme.CodeBlock.copyButtonAriaLabel',
            message: 'Copy code to clipboard',
            description: 'The ARIA label for copy code blocks button'
        }),
        title: (0,_docusaurus_Translate__rspack_import_1/* .translate */.T)({
            id: 'theme.CodeBlock.copy',
            message: 'Copy',
            description: 'The copy button label on code blocks'
        }),
        className: (0,_site_src_lib_utils__rspack_import_7.cn)('clean-btn', className, (_styles_module_css__rspack_import_5_default().copyButton), isCopied && (_styles_module_css__rspack_import_5_default().copyButtonCopied)),
        onClick: handleCopyCode,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
            className: (_styles_module_css__rspack_import_5_default().copyButtonIcons),
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_Copy__rspack_import_2/* ["default"] */.A, {
                    className: (_styles_module_css__rspack_import_5_default().copyButtonIcon)
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_Success__rspack_import_3/* ["default"] */.A, {
                    className: (_styles_module_css__rspack_import_5_default().copyButtonSuccessIcon)
                })
            ]
        })
    });
}


},
8878(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockLine)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _site_src_lib_utils__rspack_import_2 = __webpack_require__(76345);
/* import */ var _styles_module_css__rspack_import_1 = __webpack_require__(63056);
/* import */ var _styles_module_css__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_1);



function CodeBlockLine({ line, classNames, showLineNumbers, getLineProps, getTokenProps }) {
    if (line.length === 1 && line[0]?.content === '\n') {
        line[0].content = '';
    }
    const lineProps = getLineProps({
        line,
        className: (0,_site_src_lib_utils__rspack_import_2.cn)(classNames, showLineNumbers && (_styles_module_css__rspack_import_1_default().codeLine))
    });
    const { key: _lineKey, ...linePropsWithoutKey } = lineProps;
    const lineTokens = line.map((token, key)=>{
        const { key: _tokenKey, ...tokenProps } = getTokenProps({
            token,
            key
        });
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
            ...tokenProps
        }, key);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
        ...linePropsWithoutKey,
        children: [
            showLineNumbers ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: (_styles_module_css__rspack_import_1_default().codeLineNumber)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: (_styles_module_css__rspack_import_1_default().codeLineContent),
                        children: lineTokens
                    })
                ]
            }) : lineTokens,
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {})
        ]
    });
}


},
5748(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (WordWrapButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Translate__rspack_import_1 = __webpack_require__(46218);
/* import */ var _site_src_lib_utils__rspack_import_5 = __webpack_require__(76345);
/* import */ var _theme_Icon_WordWrap__rspack_import_2 = __webpack_require__(6299);
/* import */ var react__rspack_import_3 = __webpack_require__(58101);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(67326);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);






function WordWrapButton({ className, onClick, isEnabled }) {
    const title = (0,_docusaurus_Translate__rspack_import_1/* .translate */.T)({
        id: 'theme.CodeBlock.wordWrapToggle',
        message: 'Toggle word wrap',
        description: 'The title attribute for toggle word wrapping button of code block lines'
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
        type: "button",
        onClick: onClick,
        className: (0,_site_src_lib_utils__rspack_import_5.cn)('clean-btn', className, isEnabled && (_styles_module_css__rspack_import_4_default().wordWrapButtonEnabled)),
        "aria-label": title,
        title: title,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_WordWrap__rspack_import_2/* ["default"] */.A, {
            className: (_styles_module_css__rspack_import_4_default().wordWrapButtonIcon),
            "aria-hidden": "true"
        })
    });
}


},
96125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlock)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_useIsBrowser__rspack_import_1 = __webpack_require__(78095);
/* import */ var _theme_CodeBlock_Content_Element__rspack_import_2 = __webpack_require__(14239);
/* import */ var _theme_CodeBlock_Content_String__rspack_import_3 = __webpack_require__(85724);
/* import */ var react__rspack_import_4 = __webpack_require__(58101);





/**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */ function maybeStringifyChildren(children) {
    if (react__rspack_import_4.Children.toArray(children).some((el)=>/*#__PURE__*/ (0,react__rspack_import_4.isValidElement)(el))) {
        return children;
    }
    // The children is now guaranteed to be one/more plain strings
    return Array.isArray(children) ? children.join('') : children;
}
function CodeBlock({ children: rawChildren, ...props }) {
    // The Prism theme on SSR is always the default theme but the site theme can
    // be in a different mode. React hydration doesn't update DOM styles that come
    // from SSR. Hence force a re-render after mounting to apply the current
    // relevant styles.
    const isBrowser = (0,_docusaurus_useIsBrowser__rspack_import_1/* ["default"] */.A)();
    const children = maybeStringifyChildren(rawChildren);
    const CodeBlockComp = typeof children === 'string' ? _theme_CodeBlock_Content_String__rspack_import_3/* ["default"] */.A : _theme_CodeBlock_Content_Element__rspack_import_2/* ["default"] */.A;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(CodeBlockComp, {
        ...props,
        children: children
    }, String(isBrowser));
}


},
89999(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(58101);
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} props
 *   Props.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(props) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (props.disableParentContext) {
    allComponents =
      typeof props.components === 'function'
        ? props.components(emptyComponents)
        : props.components || emptyComponents
  } else {
    allComponents = useMDXComponents(props.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    props.children
  )
}


},
31859(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (copyTextToClipboard)
});
function copyTextToClipboard(text, {target = document.body} = {}) {
	if (typeof text !== 'string') {
		throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof text}\`.`);
	}

	const element = document.createElement('textarea');
	const previouslyFocusedElement = document.activeElement;

	element.value = text;

	// Prevent keyboard from showing on mobile
	element.setAttribute('readonly', '');

	element.style.contain = 'strict';
	element.style.position = 'absolute';
	element.style.left = '-9999px';
	element.style.fontSize = '12pt'; // Prevent zooming on iOS

	const selection = document.getSelection();
	const originalRange = selection.rangeCount > 0 && selection.getRangeAt(0);

	target.append(element);
	element.select();

	// Explicit selection workaround for iOS
	element.selectionStart = 0;
	element.selectionEnd = text.length;

	let isSuccess = false;
	try {
		isSuccess = document.execCommand('copy');
	} catch {}

	element.remove();

	if (originalRange) {
		selection.removeAllRanges();
		selection.addRange(originalRange);
	}

	// Get the focus back on the previously focused element, if any
	if (previouslyFocusedElement) {
		previouslyFocusedElement.focus();
	}

	return isSuccess;
}


},

};
;