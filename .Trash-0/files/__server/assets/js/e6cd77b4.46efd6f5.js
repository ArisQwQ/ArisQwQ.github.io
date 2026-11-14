exports.ids = ["484"];
exports.modules = {
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
26153(module) {
// Exports
module.exports = {
	"friendList": `friendList_BcXk`,
	"friendCard": `friendCard_Q61w`,
	"avatar": `avatar_ll78`,
	"friendInfo": `friendInfo_tC2z`,
	"friendTitle": `friendTitle_LLpu`,
	"friendDescription": `friendDescription_dQNb`,
	"arrow": `arrow_x9Px`,
	"exchange": `exchange_VW18`,
	"exchangeIntro": `exchangeIntro_mjTD`,
	"siteInfo": `siteInfo_eYy8`
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
82793(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  m: () => (Friends)
});
const Friends = [
    {
        title: '楓璃夢',
        description: '時間真的能帶走傷痛嗎',
        website: 'https://github.com/Harvey2433',
        avatar: '/img/friend/FengLiMeng.jpg'
    },
    {
        title: 'Erialys',
        description: '一隻可愛小貓娘喵',
        website: 'https://www.luogu.com.cn/user/1201743',
        avatar: '/img/friend/Eiralys.jpg'
    },
    {
        title: '愧怍',
        description: '小站模板的作者',
        website: 'https://kuizuo.me/',
        avatar: '/img/friend/kuizuo.png'
    }
];


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
63103(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (FriendLink)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Link__rspack_import_1 = __webpack_require__(59078);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _docusaurus_useBrokenLinks__rspack_import_3 = __webpack_require__(36617);
/* import */ var _site_data_friends__rspack_import_9 = __webpack_require__(82793);
/* import */ var _site_src_css_collection_module_css__rspack_import_4 = __webpack_require__(34348);
/* import */ var _site_src_css_collection_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_site_src_css_collection_module_css__rspack_import_4);
/* import */ var _theme_CodeBlock__rspack_import_5 = __webpack_require__(96125);
/* import */ var _theme_Layout__rspack_import_6 = __webpack_require__(1419);
/* import */ var react__rspack_import_7 = __webpack_require__(58101);
/* import */ var _styles_module_css__rspack_import_8 = __webpack_require__(26153);
/* import */ var _styles_module_css__rspack_import_8_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_8);










const TITLE = (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
    id: 'friends.title',
    message: '友鏈'
});
const DESCRIPTION = (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
    id: 'friends.description',
    message: '有很多良友，勝於有很多財富。'
});
const ADD_FRIEND_URL = 'https://github.com/ArisQwQ/blog/edit/main/data/friends.tsx';
const SITE_INFO = `title: 'Aris_QwQ'
bio: '事在人為'
website: 'https://blog.tendou-aris.com'
avatar: 'https://blog.tendou-aris.com/img/avatar.png'
`;
function stableFriendOrder(friend) {
    const text = `${friend.title}${friend.website}`;
    let hash = 0;
    for(let i = 0; i < text.length; i++){
        hash = (hash * 31 + text.charCodeAt(i)) % 1000000007;
    }
    return hash;
}
const friends = [
    ..._site_data_friends__rspack_import_9/* .Friends */.m
].sort((left, right)=>{
    const order = stableFriendOrder(left) - stableFriendOrder(right);
    return order || left.title.localeCompare(right.title, 'en-US');
});
const FriendCard = /*#__PURE__*/ (0,react__rspack_import_7.memo)(({ friend })=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
            to: friend.website,
            className: (_styles_module_css__rspack_import_8_default().friendCard),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
                    className: (_styles_module_css__rspack_import_8_default().avatar),
                    "aria-hidden": "true",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                            children: friend.title.slice(0, 1)
                        }),
                        friend.avatar && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                            src: friend.avatar,
                            alt: "",
                            width: 56,
                            height: 56,
                            loading: "lazy",
                            decoding: "async",
                            onError: (event)=>{
                                event.currentTarget.hidden = true;
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
                    className: (_styles_module_css__rspack_import_8_default().friendInfo),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                            className: (_styles_module_css__rspack_import_8_default().friendTitle),
                            children: friend.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                            className: (_styles_module_css__rspack_import_8_default().friendDescription),
                            children: friend.description
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                    className: (_styles_module_css__rspack_import_8_default().arrow),
                    "aria-hidden": "true",
                    children: "↗"
                })
            ]
        })
    }));
function FriendLink() {
    (0,_docusaurus_useBrokenLinks__rspack_import_3/* ["default"] */.A)().collectAnchor('exchange');
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Layout__rspack_import_6/* ["default"] */.A, {
        title: TITLE,
        description: DESCRIPTION,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("main", {
            className: (_site_src_css_collection_module_css__rspack_import_4_default().page),
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (_site_src_css_collection_module_css__rspack_import_4_default().container),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("header", {
                        className: (_site_src_css_collection_module_css__rspack_import_4_default().header),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                                        className: (_site_src_css_collection_module_css__rspack_import_4_default().title),
                                        children: TITLE
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        className: (_site_src_css_collection_module_css__rspack_import_4_default().description),
                                        children: DESCRIPTION
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                                href: "#exchange",
                                className: (_site_src_css_collection_module_css__rspack_import_4_default().textLink),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                        id: "friends.exchange",
                                        children: "交換友鏈"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                        "aria-hidden": "true",
                                        children: "↓"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
                        className: (_styles_module_css__rspack_import_8_default().friendList),
                        children: friends.map((friend)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(FriendCard, {
                                friend: friend
                            }, friend.website))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                        id: "exchange",
                        className: (_styles_module_css__rspack_import_8_default().exchange),
                        "aria-labelledby": "exchange-title",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: (_styles_module_css__rspack_import_8_default().exchangeIntro),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                        id: "exchange-title",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                            id: "friends.exchange",
                                            children: "交換友鏈"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                            id: "friends.exchange.description",
                                            children: "如果你也在記錄生活、分享技術，歡迎交換友鏈。"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                                        href: ADD_FRIEND_URL,
                                        className: (_site_src_css_collection_module_css__rspack_import_4_default().textLink),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                                id: "friends.add",
                                                children: "在 GitHub 上添加友鏈"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                "aria-hidden": "true",
                                                children: "↗"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: (_styles_module_css__rspack_import_8_default().siteInfo),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock__rspack_import_5/* ["default"] */.A, {
                                    language: "yaml",
                                    title: (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
                                        id: 'friends.siteInfo',
                                        message: '本站信息'
                                    }),
                                    children: SITE_INFO
                                })
                            })
                        ]
                    })
                ]
            })
        })
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