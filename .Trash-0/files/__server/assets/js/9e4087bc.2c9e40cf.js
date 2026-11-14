exports.ids = ["660"];
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
21782(module) {
// Exports
module.exports = {
	"archive": `archive_vh_8`,
	"yearNav": `yearNav_Cxyh`,
	"navLabel": `navLabel_znH1`,
	"yearLinks": `yearLinks_CEtj`,
	"years": `years_lLXY`,
	"yearSection": `yearSection_Stre`,
	"yearHeader": `yearHeader_jlRX`,
	"postList": `postList_OIHk`,
	"postLink": `postLink_iCkx`,
	"date": `date_kECM`,
	"postTitle": `postTitle_ffr4`,
	"arrow": `arrow_GZQm`
};


},
48032(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  W: () => (usePluralForm)
});
/* import */ var react__rspack_import_0 = __webpack_require__(58101);
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_1 = __webpack_require__(40266);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://x.com/sebastienlorber/status/1366820663261077510
const OrderedPluralForms = [
    'zero',
    'one',
    'two',
    'few',
    'many',
    'other'
];
function sortPluralForms(pluralForms) {
    return OrderedPluralForms.filter((pf)=>pluralForms.includes(pf));
}
// Hardcoded english/fallback implementation
const EnglishPluralForms = {
    locale: 'en',
    pluralForms: sortPluralForms([
        'one',
        'other'
    ]),
    select: (count)=>count === 1 ? 'one' : 'other'
};
function createLocalePluralForms(locale) {
    const pluralRules = new Intl.PluralRules(locale);
    return {
        locale,
        pluralForms: sortPluralForms(pluralRules.resolvedOptions().pluralCategories),
        select: (count)=>pluralRules.select(count)
    };
}
/**
 * Poor man's `PluralSelector` implementation, using an English fallback. We
 * want a lightweight, future-proof and good-enough solution. We don't want a
 * perfect and heavy solution.
 *
 * Docusaurus classic theme has only 2 deeply nested labels requiring complex
 * plural rules. We don't want to use `Intl` + `PluralRules` polyfills + full
 * ICU syntax (react-intl) just for that.
 *
 * Notes:
 * - 2021: 92+% Browsers support `Intl.PluralRules`, and support will increase
 * in the future
 * - NodeJS >= 13 has full ICU support by default
 * - In case of "mismatch" between SSR and Browser ICU support, React keeps
 * working!
 */ function useLocalePluralForms() {
    const { i18n: { currentLocale } } = (0,_docusaurus_useDocusaurusContext__rspack_import_1/* ["default"] */.A)();
    return (0,react__rspack_import_0.useMemo)(()=>{
        try {
            return createLocalePluralForms(currentLocale);
        } catch (err) {
            console.error(`Failed to use Intl.PluralRules for locale "${currentLocale}".
Docusaurus will fallback to the default (English) implementation.
Error: ${err.message}
`);
            return EnglishPluralForms;
        }
    }, [
        currentLocale
    ]);
}
function selectPluralMessage(pluralMessages, count, localePluralForms) {
    const separator = '|';
    const parts = pluralMessages.split(separator);
    if (parts.length === 1) {
        return parts[0];
    }
    if (parts.length > localePluralForms.pluralForms.length) {
        console.error(`For locale=${localePluralForms.locale}, a maximum of ${localePluralForms.pluralForms.length} plural forms are expected (${localePluralForms.pluralForms.join(',')}), but the message contains ${parts.length}: ${pluralMessages}`);
    }
    const pluralForm = localePluralForms.select(count);
    const pluralFormIndex = localePluralForms.pluralForms.indexOf(pluralForm);
    // In case of not enough plural form messages, we take the last one (other)
    // instead of returning undefined
    return parts[Math.min(pluralFormIndex, parts.length - 1)];
}
/**
 * Reads the current locale and returns an interface very similar to
 * `Intl.PluralRules`.
 */ function usePluralForm() {
    const localePluralForm = useLocalePluralForms();
    return {
        selectMessage: (count, pluralMessages)=>selectPluralMessage(pluralMessages, count, localePluralForm)
    };
} //# sourceMappingURL=usePluralForm.js.map


},
93912(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (BlogArchive)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Link__rspack_import_1 = __webpack_require__(59078);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _docusaurus_theme_common__rspack_import_7 = __webpack_require__(48032);
/* import */ var _docusaurus_theme_common__rspack_import_8 = __webpack_require__(8961);
/* import */ var _docusaurus_theme_common__rspack_import_9 = __webpack_require__(94630);
/* import */ var _docusaurus_useBrokenLinks__rspack_import_3 = __webpack_require__(36617);
/* import */ var _site_src_css_collection_module_css__rspack_import_4 = __webpack_require__(34348);
/* import */ var _site_src_css_collection_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_site_src_css_collection_module_css__rspack_import_4);
/* import */ var _theme_Layout__rspack_import_5 = __webpack_require__(1419);
/* import */ var _styles_module_css__rspack_import_6 = __webpack_require__(21782);
/* import */ var _styles_module_css__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_6);








function YearSection({ year, posts }) {
    (0,_docusaurus_useBrokenLinks__rspack_import_3/* ["default"] */.A)().collectAnchor(year);
    const { selectMessage } = (0,_docusaurus_theme_common__rspack_import_7/* .usePluralForm */.W)();
    const count = selectMessage(posts.length, (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'theme.blog.archive.year.posts',
        message: '{count} 篇'
    }, {
        count: posts.length
    }));
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        id: year,
        className: (_styles_module_css__rspack_import_6_default().yearSection),
        "aria-labelledby": `year-heading-${year}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (_styles_module_css__rspack_import_6_default().yearHeader),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                        id: `year-heading-${year}`,
                        children: year
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        children: count
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
                className: (_styles_module_css__rspack_import_6_default().postList),
                children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                            to: post.metadata.permalink,
                            className: (_styles_module_css__rspack_import_6_default().postLink),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("time", {
                                    dateTime: post.metadata.date,
                                    className: (_styles_module_css__rspack_import_6_default().date),
                                    children: post.metadata.date.slice(5, 10)
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    className: (_styles_module_css__rspack_import_6_default().postTitle),
                                    children: post.metadata.title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                    className: (_styles_module_css__rspack_import_6_default().arrow),
                                    "aria-hidden": "true",
                                    children: "→"
                                })
                            ]
                        })
                    }, post.metadata.permalink))
            })
        ]
    });
}
function listPostsByYears(blogPosts) {
    const postsByYear = new Map();
    for (const post of blogPosts){
        const year = post.metadata.date.slice(0, 4);
        const posts = postsByYear.get(year) ?? [];
        posts.push(post);
        postsByYear.set(year, posts);
    }
    return Array.from(postsByYear, ([year, posts])=>({
            year,
            posts
        })).sort((left, right)=>Number(right.year) - Number(left.year));
}
function BlogArchive({ archive }) {
    const title = (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'theme.blog.archive.title',
        message: '歷史博文',
        description: 'The page & hero title of the blog archive page'
    });
    const description = (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'theme.blog.archive.pageDescription',
        message: '按年份整理的文章，記錄開發實踐與生活。',
        description: 'The page description of the blog archive page'
    });
    const years = listPostsByYears(archive.blogPosts);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_8/* .HtmlClassNameProvider */.e3, {
        className: `${_docusaurus_theme_common__rspack_import_9/* .ThemeClassNames.wrapper.blogPages */.G.wrapper.blogPages} blog-archive-page`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Layout__rspack_import_5/* ["default"] */.A, {
            title: title,
            description: description,
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
                                            children: title
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            className: (_site_src_css_collection_module_css__rspack_import_4_default().description),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                                id: "theme.blog.archive.posts.total",
                                                values: {
                                                    total: archive.blogPosts.length
                                                },
                                                children: '共 {total} 篇文章，記錄一路上的探索與生活。'
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                                    to: "/blog",
                                    className: (_site_src_css_collection_module_css__rspack_import_4_default().textLink),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                            id: "theme.blog.archive.allPosts",
                                            children: "瀏覽全部文章"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                            "aria-hidden": "true",
                                            children: "→"
                                        })
                                    ]
                                })
                            ]
                        }),
                        years.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: (_styles_module_css__rspack_import_6_default().archive),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("nav", {
                                    className: (_styles_module_css__rspack_import_6_default().yearNav),
                                    "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
                                        id: 'theme.blog.archive.years',
                                        message: '按年份瀏覽'
                                    }),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                            className: (_styles_module_css__rspack_import_6_default().navLabel),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                                id: "theme.blog.archive.years",
                                                children: "按年份瀏覽"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            className: (_styles_module_css__rspack_import_6_default().yearLinks),
                                            children: years.map(({ year, posts })=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                                                    to: `#${year}`,
                                                    "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
                                                        id: 'theme.blog.archive.year.link',
                                                        message: '{year} 年，共 {count} 篇文章'
                                                    }, {
                                                        year,
                                                        count: posts.length
                                                    }),
                                                    children: [
                                                        year,
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                            "aria-hidden": "true",
                                                            children: posts.length
                                                        })
                                                    ]
                                                }, year))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: (_styles_module_css__rspack_import_6_default().years),
                                    children: years.map((year)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(YearSection, {
                                            ...year
                                        }, year.year))
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}


},

};
;